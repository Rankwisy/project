-- Add All Blog Posts to Supabase
-- Run this in Supabase SQL Editor to add all sample posts

-- Post 1: Installation Chaudière
INSERT INTO blog_posts (title, slug, excerpt, content, category, published, views, meta_title, meta_description) VALUES
(
  'Installation de Chaudière à Bruxelles : Guide Complet 2025',
  'installation-chaudiere-bruxelles-guide-2025',
  'Découvrez tout ce qu''il faut savoir sur l''installation d''une chaudière à Bruxelles. Guide complet avec conseils d''experts et tarifs.',
  '# Installation de Chaudière à Bruxelles : Guide Complet 2025

L''installation d''une nouvelle chaudière est un investissement important pour votre confort et votre budget énergétique. À Bruxelles, il est essentiel de faire appel à un professionnel agréé pour garantir une installation conforme aux normes belges.

## Pourquoi Choisir une Chaudière à Condensation ?

Les chaudières à condensation modernes offrent de nombreux avantages :
- **Économies d''énergie** : Jusqu''à 30% d''économies sur votre facture
- **Respect de l''environnement** : Réduction des émissions de CO2
- **Confort optimal** : Production d''eau chaude instantanée
- **Garantie longue durée** : Jusqu''à 10 ans de garantie

Pour plus d''informations sur nos services d''installation, visitez [Centrale Chauffagiste](https://centrale-chauffagiste.be/), votre spécialiste en chauffage à Bruxelles.',
  'Installation',
  true,
  0,
  'Installation Chaudière Bruxelles | Guide Complet 2025',
  'Guide complet pour l''installation de chaudière à Bruxelles. Conseils d''experts, tarifs et démarches. Devis gratuit.'
)
ON CONFLICT (slug) DO NOTHING;

-- Post 2: Entretien Chaudière
INSERT INTO blog_posts (title, slug, excerpt, content, category, published, views, meta_title, meta_description) VALUES
(
  'Entretien Annuel de Chaudière : Obligation et Avantages',
  'entretien-annuel-chaudiere-obligation-avantages',
  'L''entretien annuel de votre chaudière est obligatoire en Belgique. Découvrez pourquoi et comment bien entretenir votre installation.',
  '# Entretien Annuel de Chaudière : Obligation et Avantages

En Belgique, l''entretien annuel de votre chaudière est une **obligation légale**. Cette maintenance régulière est essentielle pour votre sécurité et la performance de votre installation.

## Pourquoi l''Entretien est Obligatoire ?

### Sécurité
- Détection des fuites de gaz
- Vérification des émissions de CO
- Contrôle de la combustion

### Performance
- Optimisation de la consommation
- Prolongation de la durée de vie
- Réduction des pannes

Pour réserver votre entretien annuel, contactez [Centrale Chauffagiste](https://centrale-chauffagiste.be/contact), votre chauffagiste agréé à Bruxelles.',
  'Entretien',
  true,
  0,
  'Entretien Annuel Chaudière | Obligation et Tarifs Bruxelles',
  'Entretien annuel de chaudière obligatoire en Belgique. Tarifs, avantages et démarches. Devis gratuit à Bruxelles.'
)
ON CONFLICT (slug) DO NOTHING;

-- Post 3: Dépannage Urgent
INSERT INTO blog_posts (title, slug, excerpt, content, category, published, views, meta_title, meta_description) VALUES
(
  'Dépannage Chaudière Urgent : Que Faire en Cas de Panne ?',
  'depannage-chaudiere-urgent-bruxelles',
  'Votre chaudière est en panne ? Découvrez les gestes à adopter et comment contacter un dépannage urgent à Bruxelles.',
  '# Dépannage Chaudière Urgent : Que Faire en Cas de Panne ?

Une panne de chaudière peut survenir à tout moment, surtout en hiver. Voici comment réagir rapidement et efficacement.

## Les Pannes les Plus Courantes

### 1. Chaudière qui ne démarre pas
- Vérifiez l''alimentation électrique
- Contrôlez la pression (entre 1 et 2 bars)
- Vérifiez l''alimentation en gaz

### 2. Pas d''eau chaude
- Vérifiez le thermostat
- Contrôlez la pression
- Vérifiez les robinets

Pour un dépannage urgent à Bruxelles, [Centrale Chauffagiste](https://centrale-chauffagiste.be/) propose un service disponible **7j/7 et 24h/24**.',
  'Dépannage',
  true,
  0,
  'Dépannage Chaudière Urgent Bruxelles | 24/7',
  'Dépannage chaudière urgent à Bruxelles. Service 24/7, intervention rapide. Techniciens agréés. Appelez le 0487 407 407.'
)
ON CONFLICT (slug) DO NOTHING;

-- Post 4: Coûts de Chauffage (avec image)
INSERT INTO blog_posts (title, slug, excerpt, content, category, featured_image, published, views, meta_title, meta_description) VALUES
(
  'Coûts de Chauffage à Bruxelles : Guide Complet des Prix 2025',
  'couts-chauffage-bruxelles-guide-prix-2025',
  'Découvrez tous les coûts liés au chauffage à Bruxelles : installation, entretien, réparation. Guide complet des tarifs 2025 avec conseils pour économiser.',
  '# Coûts de Chauffage à Bruxelles : Guide Complet des Prix 2025

![Coûts de chauffage](https://cdn.pixabay.com/photo/2019/04/28/22/00/heating-costs-4164538_1280.jpg)

Le chauffage représente une part importante du budget des ménages belges. Comprendre les différents coûts associés à votre installation de chauffage vous permet de mieux planifier vos dépenses et d''optimiser votre consommation énergétique.

## Les Différents Types de Coûts de Chauffage

### 1. Coût d''Installation d''une Chaudière

L''installation d''une nouvelle chaudière représente l''investissement initial le plus important. Les prix varient selon plusieurs facteurs :

#### Chaudière Murale à Condensation
- **Prix moyen** : 2 500€ à 3 500€
- **Inclut** : Fourniture, installation, raccordements
- **Garantie** : 5 à 10 ans selon le modèle

Pour obtenir un devis personnalisé pour l''installation de votre chaudière, contactez [Centrale Chauffagiste](https://centrale-chauffagiste.be/), votre spécialiste en chauffage à Bruxelles.

### 2. Coûts d''Entretien Annuel

L''entretien annuel est **obligatoire** en Belgique et représente un coût récurrent à prévoir :

- **Entretien chaudière gaz** : À partir de 90€
- **Entretien chaudière mazout** : À partir de 150€
- **Inclut** : Nettoyage, vérification sécurité, attestation

**Conseil** : Un entretien régulier permet d''économiser jusqu''à 15% sur votre consommation énergétique et évite les pannes coûteuses.

### 3. Coûts de Dépannage et Réparation

Les interventions de dépannage varient selon la complexité :

- **Déplacement + 1ère heure** : À partir de 95€
- **Remplacement pièces** : 50€ à 300€ selon la pièce
- **Intervention urgente** : Sur devis

## Comment Réduire vos Coûts de Chauffage ?

### 1. Choisir une Chaudière Performante

Une chaudière à condensation moderne peut réduire votre consommation de **30%** par rapport à une ancienne installation. L''investissement est rapidement rentabilisé.

### 2. Optimiser l''Isolation

- Isolation des murs : Économies jusqu''à 25%
- Double vitrage : Économies jusqu''à 15%
- Isolation toiture : Économies jusqu''à 30%

### 3. Programmer votre Chauffage

Un thermostat programmable permet d''économiser **10 à 15%** sur votre facture en adaptant la température selon vos besoins.

### 4. Entretenir Régulièrement

Un entretien annuel optimise les performances et évite les surconsommations. Pour réserver votre entretien, [Centrale Chauffagiste](https://centrale-chauffagiste.be/contact) propose des tarifs compétitifs à Bruxelles.

## Tableau Récapitulatif des Coûts

| Type de Dépense | Prix Minimum | Prix Maximum |
|-----------------|--------------|--------------|
| Installation chaudière murale | 2 500€ | 3 500€ |
| Installation chaudière au sol | 3 500€ | 5 000€ |
| Entretien annuel gaz | 90€ | 150€ |
| Entretien annuel mazout | 150€ | 250€ |
| Dépannage (déplacement + 1h) | 95€ | 150€ |
| Remplacement pièce | 50€ | 300€ |

*Prix indicatifs 2025. Devis gratuit sur demande.*

## Conclusion

Les coûts de chauffage représentent un investissement important, mais des choix judicieux et un entretien régulier permettent de les optimiser significativement. 

Pour tous vos besoins en chauffage à Bruxelles, [Centrale Chauffagiste](https://centrale-chauffagiste.be/) vous accompagne avec des tarifs transparents et un service professionnel. Contactez-nous au **0487 407 407** pour un devis gratuit et sans engagement.

N''hésitez pas à consulter notre [site web](https://centrale-chauffagiste.be/) pour découvrir tous nos services et obtenir plus d''informations sur les coûts de chauffage à Bruxelles.',
  'Installation',
  'https://cdn.pixabay.com/photo/2019/04/28/22/00/heating-costs-4164538_1280.jpg',
  true,
  0,
  'Coûts de Chauffage Bruxelles 2025 | Guide Complet des Prix',
  'Guide complet des coûts de chauffage à Bruxelles : installation, entretien, réparation. Tarifs 2025 et conseils pour économiser. Devis gratuit.'
)
ON CONFLICT (slug) DO NOTHING;
