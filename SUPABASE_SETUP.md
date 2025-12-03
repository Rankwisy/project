# Supabase Setup Guide

This guide will help you set up Supabase for the blog functionality.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in your project details:
   - Name: `chauffagemasure-blog` (or any name you prefer)
   - Database Password: (save this securely)
   - Region: Choose closest to your users
5. Wait for the project to be created (takes a few minutes)

## Step 2: Create the Database Tables

1. In your Supabase project, go to the **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `supabase-schema.sql`
4. Click "Run" to execute the SQL
5. Verify the tables were created by going to **Table Editor**

## Step 3: Get Your API Keys

1. In your Supabase project, go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

## Step 4: Add Environment Variables to Netlify

1. Go to your Netlify dashboard
2. Select your site: `chauffagemasure.be`
3. Go to **Site settings** → **Environment variables**
4. Add the following variables:
   - `VITE_SUPABASE_URL` = Your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY` = Your Supabase anon/public key
5. Click "Save"

## Step 5: Redeploy Your Site

1. In Netlify, go to **Deploys**
2. Click "Trigger deploy" → "Clear cache and deploy site"
3. Wait for the deployment to complete

## Step 6: Test the Blog

1. Visit `https://chauffagemasure.be/blog`
2. You should see the blog page (it will be empty initially)
3. Go to `https://chauffagemasure.be/blogadmin` to add blog posts

## Adding Blog Posts

1. Navigate to `/blogadmin` on your site
2. Click "Nouvel article" (New article)
3. Fill in the form:
   - Title
   - Slug (URL-friendly version, e.g., "installation-chaudiere-bruxelles")
   - Excerpt (short description)
   - Content (full article in Markdown)
   - Category
   - Featured Image URL (optional)
   - Check "Published" to make it visible
4. Click "Publier" (Publish)

## SEO Backlinks to centrale-chauffagiste.be

When creating blog posts, include natural backlinks to `https://centrale-chauffagiste.be/` in your content. For example:

```markdown
Pour plus d'informations sur nos services, visitez [Centrale Chauffagiste](https://centrale-chauffagiste.be/).
```

This will help with SEO and drive traffic between your sites.

## Troubleshooting

- **Blog shows "No articles found"**: Check that you've created blog posts and marked them as "Published"
- **Can't add blog posts**: Verify your Supabase environment variables are set correctly in Netlify
- **Database errors**: Check the Supabase logs in your project dashboard

