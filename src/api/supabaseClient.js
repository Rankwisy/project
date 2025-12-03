import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// These should be set as environment variables in Netlify
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if Supabase is configured
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey;

// Create Supabase client (use dummy values if not configured to prevent errors)
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key');

// Export configuration status
export const isConfigured = isSupabaseConfigured;

// Database table names
export const TABLES = {
  BLOG_POSTS: 'blog_posts',
  COMMENTS: 'comments',
  TESTIMONIALS: 'testimonials',
  SERVICE_PAGES: 'service_pages',
};

