# Backup Checklist Before Starting New Project

## ✅ Pre-Export Checklist

### 1. Database Backup
- [ ] Export Supabase database schema
- [ ] Export all blog posts data
- [ ] Save SQL scripts locally
- [ ] Note down Supabase project credentials

### 2. Code Backup
- [ ] Commit all changes to GitHub
- [ ] Push to remote repository
- [ ] Create a release/tag if needed
- [ ] Download repository as ZIP (backup)

### 3. Configuration Backup
- [ ] Save Netlify environment variables
- [ ] Export Netlify site settings
- [ ] Save domain configuration details
- [ ] Note down build settings

### 4. Assets Backup
- [ ] Download any custom images
- [ ] Save favicon files
- [ ] Export any custom configurations

## Quick Backup Commands

```bash
# Backup current git state
git tag backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)

# Export Supabase data (run in Supabase SQL Editor)
-- Export blog_posts
COPY (SELECT * FROM blog_posts) TO '/tmp/blog_posts_backup.csv' WITH CSV HEADER;
```

## Files to Keep Safe

- All `.sql` files (database scripts)
- `netlify.toml` (deployment config)
- `package.json` (dependencies list)
- Environment variables (save securely)
- Documentation files (`.md` files)

## Ready for New Project

Once backed up, you can:
1. Create new folder for new project
2. Initialize new git repository
3. Start fresh with new dependencies
4. Keep this project as reference

