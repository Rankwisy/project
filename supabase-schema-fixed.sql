-- Supabase Database Schema for Blog (FIXED VERSION)
-- Run this SQL in your Supabase SQL Editor

-- Drop existing policies if they exist (for re-running)
DROP POLICY IF EXISTS "Public can view published posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow all operations" ON blog_posts;
DROP POLICY IF EXISTS "Public can view approved comments" ON comments;
DROP POLICY IF EXISTS "Allow all operations" ON comments;

-- Create blog_posts table
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

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_date ON blog_posts(created_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public to read published posts
CREATE POLICY "Public can view published posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Policy 2: Allow public to insert (for admin interface - you may want to restrict this later)
CREATE POLICY "Public can insert posts"
  ON blog_posts
  FOR INSERT
  WITH CHECK (true);

-- Policy 3: Allow public to update (for admin interface - you may want to restrict this later)
CREATE POLICY "Public can update posts"
  ON blog_posts
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Policy 4: Allow public to delete (for admin interface - you may want to restrict this later)
CREATE POLICY "Public can delete posts"
  ON blog_posts
  FOR DELETE
  USING (true);

-- Create comments table (optional, for future use)
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  approved BOOLEAN DEFAULT false,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for comments
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Policy for comments: Public can view approved comments
CREATE POLICY "Public can view approved comments"
  ON comments
  FOR SELECT
  USING (approved = true);

-- Policy for comments: Public can insert (for submitting comments)
CREATE POLICY "Public can insert comments"
  ON comments
  FOR INSERT
  WITH CHECK (true);

-- Policy for comments: Public can update (for admin to approve)
CREATE POLICY "Public can update comments"
  ON comments
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Policy for comments: Public can delete (for admin)
CREATE POLICY "Public can delete comments"
  ON comments
  FOR DELETE
  USING (true);

