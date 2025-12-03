# Supabase Configuration Check

## ✅ Code Configuration Status

### 1. Supabase Client (`src/api/supabaseClient.js`)
- ✅ Correctly imports `@supabase/supabase-js`
- ✅ Reads environment variables: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- ✅ Has fallback for missing configuration
- ✅ Exports `isConfigured` flag for checking status

### 2. Rankwise Client (`src/api/rankwiseClient.js`)
- ✅ Properly uses Supabase for BlogPost entity
- ✅ Checks configuration before making API calls
- ✅ Has error handling for all CRUD operations
- ✅ Returns empty arrays when not configured (prevents crashes)

### 3. Blog Component (`src/pages/Blog.jsx`)
- ✅ Shows helpful message when Supabase is not configured
- ✅ Handles loading and empty states correctly
- ✅ Uses proper error boundaries

## ⚠️ Potential Issues Found

### Issue 1: RLS Policies Conflict
The original schema had overlapping policies that might cause issues. Use `supabase-schema-fixed.sql` instead.

### Issue 2: Environment Variables
Make sure these are set in Netlify:
- `VITE_SUPABASE_URL` - Must start with `https://`
- `VITE_SUPABASE_ANON_KEY` - Should be a long string

## 🔍 How to Verify Configuration

### Step 1: Check Netlify Environment Variables
1. Go to Netlify Dashboard → Your Site → Site settings → Environment variables
2. Verify both variables exist:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Make sure values are correct (no extra spaces)

### Step 2: Check Supabase Project
1. Go to Supabase Dashboard → Your Project
2. Settings → API
3. Verify:
   - Project URL matches `VITE_SUPABASE_URL`
   - anon/public key matches `VITE_SUPABASE_ANON_KEY`

### Step 3: Check Database Tables
1. Go to Supabase Dashboard → Table Editor
2. Verify `blog_posts` table exists
3. Check columns match the schema

### Step 4: Test in Browser Console
1. Open `https://chauffagemasure.be/blog`
2. Open browser console (F12)
3. Check for:
   - ✅ No errors
   - ✅ Warning message if not configured: "Supabase not configured..."
   - ✅ Network requests to Supabase if configured

## 🛠️ Quick Fix Checklist

- [ ] Supabase project created
- [ ] Database schema executed (`supabase-schema-fixed.sql`)
- [ ] Environment variables set in Netlify
- [ ] Site redeployed after setting variables
- [ ] Test blog page loads without errors
- [ ] Can access `/blogadmin` page
- [ ] Can create a test blog post

## 📝 Testing Commands

If you want to test locally, create a `.env.local` file:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Then run:
```bash
npm run dev
```

Visit `http://localhost:5173/blog` to test.

