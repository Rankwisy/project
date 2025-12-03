-- ============================================
-- ÉTAPE 1 : CRÉER LES TABLES
-- ============================================
-- Exécutez D'ABORD cette partie pour créer les tables
-- Copiez et exécutez TOUT ce qui est ci-dessous

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

-- ============================================
-- ÉTAPE 2 : AJOUTER DES ARTICLES (optionnel)
-- ============================================
-- Exécutez cette partie APRÈS avoir créé les tables
-- Vous pouvez exécuter cette partie dans une nouvelle requête SQL

-- Article 1: Installation Chaudière
INSERT INTO blog_posts (title, slug, excerpt, content, category, published, views, meta_title, meta_description)
VALUES (
  'Installation de Chaudière à Bruxelles : Guide Complet 2025',
  'installation-chaudiere-bruxelles-guide-2025',
  'Découvrez tout ce qu''il faut savoir sur l''installation d''une chaudière à Bruxelles.',
  '# Installation de Chaudière à Bruxelles

L''installation d''une nouvelle chaudière est un investissement important. À Bruxelles, il est essentiel de faire appel à un professionnel agréé.

## Pourquoi Choisir une Chaudière à Condensation ?

Les chaudières à condensation modernes offrent de nombreux avantages :
- Économies d''énergie : Jusqu''à 30% d''économies
- Respect de l''environnement
- Confort optimal
- Garantie longue durée

Pour plus d''informations, visitez [Centrale Chauffagiste](https://centrale-chauffagiste.be/).',
  'Installation',
  true,
  0,
  'Installation Chaudière Bruxelles | Guide 2025',
  'Guide complet pour l''installation de chaudière à Bruxelles. Devis gratuit.'
);

-- Article 2: Entretien
INSERT INTO blog_posts (title, slug, excerpt, content, category, published, views, meta_title, meta_description)
VALUES (
  'Entretien Annuel de Chaudière : Obligation et Avantages',
  'entretien-annuel-chaudiere-obligation-avantages',
  'L''entretien annuel de votre chaudière est obligatoire en Belgique.',
  '# Entretien Annuel de Chaudière

En Belgique, l''entretien annuel est une obligation légale.

## Pourquoi l''Entretien est Obligatoire ?

- Sécurité : Détection des fuites de gaz
- Performance : Optimisation de la consommation
- Conformité : Attestation obligatoire

Contactez [Centrale Chauffagiste](https://centrale-chauffagiste.be/contact) pour réserver votre entretien.',
  'Entretien',
  true,
  0,
  'Entretien Annuel Chaudière | Obligation Bruxelles',
  'Entretien annuel de chaudière obligatoire en Belgique. Devis gratuit.'
);

-- Article 3: Dépannage
INSERT INTO blog_posts (title, slug, excerpt, content, category, published, views, meta_title, meta_description)
VALUES (
  'Dépannage Chaudière Urgent : Que Faire en Cas de Panne ?',
  'depannage-chaudiere-urgent-bruxelles',
  'Votre chaudière est en panne ? Découvrez les gestes à adopter.',
  '# Dépannage Chaudière Urgent

Une panne de chaudière peut survenir à tout moment.

## Les Pannes les Plus Courantes

1. Chaudière qui ne démarre pas
2. Pas d''eau chaude
3. Fuite d''eau
4. Code d''erreur affiché

Pour un dépannage urgent, [Centrale Chauffagiste](https://centrale-chauffagiste.be/) propose un service 7j/7 et 24h/24.',
  'Dépannage',
  true,
  0,
  'Dépannage Chaudière Urgent Bruxelles | 24/7',
  'Dépannage chaudière urgent à Bruxelles. Service 24/7.'
);

-- Article 4: Coûts (avec image)
INSERT INTO blog_posts (title, slug, excerpt, content, category, featured_image, published, views, meta_title, meta_description)
VALUES (
  'Coûts de Chauffage à Bruxelles : Guide Complet des Prix 2025',
  'couts-chauffage-bruxelles-guide-prix-2025',
  'Découvrez tous les coûts liés au chauffage à Bruxelles.',
  '# Coûts de Chauffage à Bruxelles

Le chauffage représente une part importante du budget des ménages belges.

## Les Différents Types de Coûts

### Installation
- Chaudière murale : 2 500€ à 3 500€
- Chaudière au sol : 3 500€ à 5 000€

### Entretien
- Chaudière gaz : À partir de 90€
- Chaudière mazout : À partir de 150€

### Dépannage
- Déplacement + 1ère heure : À partir de 95€

Pour un devis personnalisé, contactez [Centrale Chauffagiste](https://centrale-chauffagiste.be/) au 0487 407 407.',
  'Installation',
  'https://cdn.pixabay.com/photo/2019/04/28/22/00/heating-costs-4164538_1280.jpg',
  true,
  0,
  'Coûts de Chauffage Bruxelles 2025',
  'Guide complet des coûts de chauffage à Bruxelles. Devis gratuit.'
);

