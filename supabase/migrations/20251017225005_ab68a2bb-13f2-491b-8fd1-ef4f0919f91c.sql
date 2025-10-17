-- Add slug column to groups table for SEO-friendly URLs
ALTER TABLE groups ADD COLUMN IF NOT EXISTS slug text;

-- Create function to generate slug from group name
CREATE OR REPLACE FUNCTION generate_slug(name text) 
RETURNS text AS $$
DECLARE
  slug text;
BEGIN
  -- Convert to lowercase, replace spaces and special chars with hyphens
  slug := lower(trim(name));
  slug := regexp_replace(slug, '[^a-z0-9\s-]', '', 'g');
  slug := regexp_replace(slug, '\s+', '-', 'g');
  slug := regexp_replace(slug, '-+', '-', 'g');
  RETURN slug;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Update existing groups to have slugs
UPDATE groups SET slug = generate_slug(name) WHERE slug IS NULL;

-- Create trigger to auto-generate slug on insert/update
CREATE OR REPLACE FUNCTION auto_generate_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := generate_slug(NEW.name);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS groups_slug_trigger ON groups;
CREATE TRIGGER groups_slug_trigger
  BEFORE INSERT OR UPDATE ON groups
  FOR EACH ROW
  EXECUTE FUNCTION auto_generate_slug();