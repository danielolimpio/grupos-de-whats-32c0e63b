-- Fix security warning: Function Search Path Mutable
-- Update all functions to have proper search_path

DROP FUNCTION IF EXISTS public.contains_prohibited_content(TEXT);

CREATE OR REPLACE FUNCTION public.contains_prohibited_content(text_content TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  prohibited_words TEXT[] := ARRAY[
    'adulto', 'adult', 'sex', 'sexo', 'porn', 'porno', 'xxx', 
    'drogas', 'drugs', 'maconha', 'cocaina', 'ecstasy',
    'armas', 'weapons', 'guns', 'pistola', 'rifle',
    'golpe', 'scam', 'fraude', 'fraud', 'hack', 'pirataria',
    'onlyfans', 'nudes', 'intimate', 'intimo'
  ];
  word TEXT;
BEGIN
  FOREACH word IN ARRAY prohibited_words
  LOOP
    IF LOWER(text_content) LIKE '%' || word || '%' THEN
      RETURN TRUE;
    END IF;
  END LOOP;
  RETURN FALSE;
END;
$$;