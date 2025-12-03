-- ============================================
-- CRÉER UNIQUEMENT LES TABLES
-- ============================================
-- Exécutez ce script EN PREMIER dans Supabase SQL Editor
-- Cela créera la table blog_posts nécessaire

-- Créer la table blog_posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'Conseils',
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0,
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW(),
  meta_title TEXT,
  meta_description TEXT
);

-- Créer les index pour de meilleures performances
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_date ON blog_posts(created_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Activer Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Supprimer les anciennes politiques si elles existent
DROP POLICY IF EXISTS "Public can view published posts" ON blog_posts;
DROP POLICY IF EXISTS "Public can insert posts" ON blog_posts;
DROP POLICY IF EXISTS "Public can update posts" ON blog_posts;
DROP POLICY IF EXISTS "Public can delete posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow all operations" ON blog_posts;

-- Créer les politiques de sécurité
-- Politique 1 : Permettre la lecture des articles publiés
CREATE POLICY "Public can view published posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Politique 2 : Permettre l'insertion (pour l'admin)
CREATE POLICY "Public can insert posts"
  ON blog_posts
  FOR INSERT
  WITH CHECK (true);

-- Politique 3 : Permettre la mise à jour (pour l'admin)
CREATE POLICY "Public can update posts"
  ON blog_posts
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Politique 4 : Permettre la suppression (pour l'admin)
CREATE POLICY "Public can delete posts"
  ON blog_posts
  FOR DELETE
  USING (true);

