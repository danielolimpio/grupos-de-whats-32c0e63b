-- Fix RLS policies for admin access to all groups
-- Drop existing restrictive policies and create comprehensive ones

-- First, drop the existing "Admins can view all groups" policy if it exists
DROP POLICY IF EXISTS "Admins can view all groups" ON public.groups;

-- Create a new comprehensive policy for admins to view all groups regardless of status
CREATE POLICY "Admins can view all groups including pending"
ON public.groups
FOR SELECT
USING (
  EXISTS (
    SELECT 1
    FROM user_roles
    WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'moderator')
  )
);

-- Update existing groups to use consistent category names (full name instead of displayName)
UPDATE public.groups
SET category = 'Grupos do Whatsapp de Divulgação'
WHERE category = 'Grupos Whatsapp Divulgação';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Vendas'
WHERE category = 'Grupos Whatsapp Vendas';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Promoções'
WHERE category = 'Grupos Whatsapp Promoções';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Oportunidades'
WHERE category = 'Grupos Whatsapp Oportunidades';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Investimentos'
WHERE category = 'Grupos Whatsapp Investimentos';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Redes Sociais'
WHERE category = 'Grupos Whatsapp Redes Sociais';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Livros'
WHERE category = 'Grupos Whatsapp Livros';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Estudos'
WHERE category = 'Grupos Whatsapp Estudos';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Cursos'
WHERE category = 'Grupos Whatsapp Cursos';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Vídeos'
WHERE category = 'Grupos Whatsapp Vídeos';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Músicas'
WHERE category = 'Grupos Whatsapp Músicas';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Amizades'
WHERE category = 'Grupos Whatsapp Amizades';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Namoros'
WHERE category = 'Grupos Whatsapp Namoros';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Encontros'
WHERE category = 'Grupos Whatsapp Encontros';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Liberais'
WHERE category = 'Grupos Whatsapp Liberais';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Notícias'
WHERE category = 'Grupos Whatsapp Notícias';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Esportes'
WHERE category = 'Grupos Whatsapp Esportes';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Figurinhas'
WHERE category = 'Grupos Whatsapp Figurinhas';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Receitas'
WHERE category = 'Grupos Whatsapp Receitas';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Viagens'
WHERE category = 'Grupos Whatsapp Viagens';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Tecnologia'
WHERE category = 'Grupos Whatsapp Tecnologia';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Games'
WHERE category = 'Grupos Whatsapp Games';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Cinema'
WHERE category = 'Grupos Whatsapp Cinema';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Pets'
WHERE category = 'Grupos Whatsapp Pets';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Estilo'
WHERE category = 'Grupos Whatsapp Estilo';

UPDATE public.groups
SET category = 'Grupos do Whatsapp de Zoeiras'
WHERE category = 'Grupos Whatsapp Zoeiras';