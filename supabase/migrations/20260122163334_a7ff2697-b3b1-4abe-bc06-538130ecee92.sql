-- Atualizar categorias problemáticas para nomes mais seguros
UPDATE public.groups SET category = 'Grupos do Whatsapp de Descontos' WHERE category = 'Grupos do Whatsapp de Promoções';
UPDATE public.groups SET category = 'Grupos do Whatsapp de Negócios' WHERE category = 'Grupos do Whatsapp de Vendas';
UPDATE public.groups SET category = 'Grupos do Whatsapp de Finanças' WHERE category = 'Grupos do Whatsapp de Investimentos';
UPDATE public.groups SET category = 'Grupos do Whatsapp de Empregos' WHERE category = 'Grupos do Whatsapp de Oportunidades';
UPDATE public.groups SET category = 'Grupos do Whatsapp de Relacionamentos' WHERE category = 'Grupos do Whatsapp de Liberais';
UPDATE public.groups SET category = 'Grupos do Whatsapp de Humor' WHERE category = 'Grupos do Whatsapp de Zoeiras';