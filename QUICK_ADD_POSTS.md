# Comment Ajouter des Articles au Blog

Vous avez deux options pour ajouter des articles :

## Option 1 : Via SQL (RAPIDE - Recommandé) ⚡

### Étape 1 : Ouvrir Supabase SQL Editor
1. Allez sur https://app.supabase.com
2. Sélectionnez votre projet
3. Cliquez sur **SQL Editor** dans le menu de gauche
4. Cliquez sur **New Query**

### Étape 2 : Copier et Exécuter le SQL
1. Ouvrez le fichier `add-blog-posts-all.sql` dans votre projet
2. **Copiez TOUT le contenu** du fichier
3. **Collez** dans l'éditeur SQL de Supabase
4. Cliquez sur **Run** (ou appuyez sur F5)
5. Vous devriez voir "Success. No rows returned" ou un message de succès

### Étape 3 : Vérifier
1. Allez sur https://chauffagemasure.be/blog
2. Vous devriez voir 4 articles apparaître !

## Option 2 : Via l'Interface Admin (Manuel)

### Étape 1 : Accéder à l'Admin
1. Allez sur https://chauffagemasure.be/blogadmin
2. Cliquez sur **Nouvel article**

### Étape 2 : Remplir le Formulaire
- **Titre** : Le titre de votre article
- **Slug** : Version URL-friendly (ex: `mon-article`)
- **Extrait** : Description courte (2-3 phrases)
- **Contenu** : Article complet en Markdown
- **Catégorie** : Installation, Entretien, Dépannage, etc.
- **Image** : URL de l'image (optionnel)
- **Publié** : ✅ Cocher pour rendre visible

### Étape 3 : Publier
1. Cliquez sur **Publier**
2. L'article apparaîtra sur `/blog`

## Vérification Rapide

### Vérifier dans Supabase
1. Allez dans **Table Editor** → `blog_posts`
2. Vous devriez voir vos articles
3. Vérifiez que `published` = `true` (case cochée)

### Vérifier sur le Site
1. Allez sur https://chauffagemasure.be/blog
2. Les articles doivent apparaître

## Problèmes Courants

### "Aucun article trouvé" après avoir ajouté des posts
**Solution** :
1. Vérifiez dans Supabase Table Editor que `published = true`
2. Vérifiez que la colonne `published` est bien cochée
3. Redéployez le site sur Netlify si nécessaire

### Erreur SQL "duplicate key"
**Solution** :
- C'est normal si l'article existe déjà
- Le `ON CONFLICT DO NOTHING` empêche les doublons
- Vous pouvez ignorer cette erreur

### Articles ne s'affichent pas
**Vérifications** :
1. ✅ Supabase configuré (variables d'environnement)
2. ✅ Tables créées (`blog_posts` existe)
3. ✅ Articles dans la table avec `published = true`
4. ✅ Site redéployé après configuration

## Ajouter Plus d'Articles

Pour ajouter d'autres articles, vous pouvez :
1. Utiliser le fichier `blog-post-chauffage-costs.sql` (article sur les coûts)
2. Créer vos propres articles via l'interface admin
3. Copier le format SQL et modifier le contenu

## Format SQL pour Nouvel Article

```sql
INSERT INTO blog_posts (title, slug, excerpt, content, category, published, views, meta_title, meta_description) VALUES
(
  'Titre de l''article',
  'slug-url-friendly',
  'Description courte',
  '# Contenu en Markdown\n\nTexte de l''article...\n\n[Lien](https://centrale-chauffagiste.be/)',
  'Installation',
  true,
  0,
  'Meta Title SEO',
  'Meta Description SEO'
)
ON CONFLICT (slug) DO NOTHING;
```

