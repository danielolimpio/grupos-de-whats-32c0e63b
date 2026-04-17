-- Inflate access_count for all approved groups with random values between 1000 and 8000
-- Always ensures the new value is greater than the current value
UPDATE public.groups
SET access_count = GREATEST(access_count, 1000) + floor(random() * 7000)::int
WHERE status = 'approved';