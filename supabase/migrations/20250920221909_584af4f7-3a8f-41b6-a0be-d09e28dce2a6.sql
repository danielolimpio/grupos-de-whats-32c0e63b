-- Add premium functionality to groups table
ALTER TABLE public.groups 
ADD COLUMN is_premium_active BOOLEAN DEFAULT FALSE,
ADD COLUMN premium_activated_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN premium_expires_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN premium_payment_id TEXT,
ADD COLUMN premium_activated_by UUID;

-- Create function to check and update expired premium groups
CREATE OR REPLACE FUNCTION public.update_expired_premium_groups()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  UPDATE public.groups 
  SET 
    is_premium_active = FALSE,
    premium_expires_at = NULL
  WHERE 
    is_premium_active = TRUE 
    AND premium_expires_at < NOW();
END;
$$;

-- Create premium payments tracking table
CREATE TABLE public.premium_payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID NOT NULL REFERENCES public.groups(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  amount DECIMAL(10,2) NOT NULL DEFAULT 9.90,
  payment_method TEXT NOT NULL DEFAULT 'pix',
  payment_status TEXT NOT NULL DEFAULT 'pending',
  pix_code TEXT,
  payment_confirmed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on premium_payments
ALTER TABLE public.premium_payments ENABLE ROW LEVEL SECURITY;

-- Create policies for premium_payments
CREATE POLICY "Users can view their own premium payments" 
ON public.premium_payments 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own premium payments" 
ON public.premium_payments 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all premium payments" 
ON public.premium_payments 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.role IN ('admin', 'moderator')
));

CREATE POLICY "Admins can update all premium payments" 
ON public.premium_payments 
FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.role IN ('admin', 'moderator')
));

-- Create trigger for premium_payments updated_at
CREATE TRIGGER update_premium_payments_updated_at
BEFORE UPDATE ON public.premium_payments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Function to activate premium for a group
CREATE OR REPLACE FUNCTION public.activate_group_premium(
  group_id_param UUID,
  payment_id_param TEXT DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  UPDATE public.groups 
  SET 
    is_premium_active = TRUE,
    premium_activated_at = NOW(),
    premium_expires_at = NOW() + INTERVAL '24 hours',
    premium_payment_id = payment_id_param,
    premium_activated_by = auth.uid()
  WHERE id = group_id_param;
END;
$$;