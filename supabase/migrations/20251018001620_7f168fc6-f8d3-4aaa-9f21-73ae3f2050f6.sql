-- Adicionar política RLS para permitir usuários deletarem seus próprios grupos
CREATE POLICY "Users can delete their own groups"
ON public.groups
FOR DELETE
USING (auth.uid() = user_id);