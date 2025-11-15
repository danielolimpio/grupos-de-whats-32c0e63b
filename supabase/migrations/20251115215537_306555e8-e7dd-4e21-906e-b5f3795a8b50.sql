-- Update the prohibited content function with more relaxed criteria
CREATE OR REPLACE FUNCTION public.contains_prohibited_content(text_content text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  prohibited_words TEXT[] := ARRAY[
    'pornografia', 'pornografico', 'porno', 'xxx',
    'drogas pesadas', 'cocaina', 'crack', 'heroina',
    'armas de fogo', 'venda de armas',
    'golpe financeiro', 'pirâmide financeira', 'fraude bancaria',
    'conteúdo adulto explícito', 'onlyfans pago'
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
$function$;