-- Vérifier les articles existants dans la base de données
-- Exécutez ce script pour voir quels articles sont déjà présents

SELECT 
  id,
  title,
  slug,
  category,
  published,
  created_date
FROM blog_posts
ORDER BY created_date DESC;

-- Pour voir tous les articles (publiés et non publiés)
-- SELECT * FROM blog_posts ORDER BY created_date DESC;

