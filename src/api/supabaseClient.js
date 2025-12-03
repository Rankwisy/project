import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// These should be set as environment variables in Netlify
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database table names
export const TABLES = {
  BLOG_POSTS: 'blog_posts',
  COMMENTS: 'comments',
  TESTIMONIALS: 'testimonials',
  SERVICE_PAGES: 'service_pages',
};

