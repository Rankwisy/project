import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, Home as HomeIcon, Wrench, Zap, CheckCircle, Wind, MapPin, Phone, BookOpen, Snowflake } from 'lucide-react';
import SEO from '../components/SEO';

export default function Sitemap() {
  const pages = [
    {
      title: "Accueil",
      url: createPageUrl('Home'),
      description: "Page d'accueil - Services de chauffagiste à Bruxelles",
      icon: <HomeIcon className="w-6 h-6" />,
      category: "Principal"
    },
    {
      title: "Installation de Chaudière",
      url: createPageUrl('InstallationChaudiere'),
      description: "Installation complète de chaudières à condensation",
      icon: <Wrench className="w-6 h-6" />,
      category: "Services"
    },
    {
      title: "Dépannage Rapide",
      url: createPageUrl('DepannageRapide'),
      description: "Service de dépannage d'urgence 7j/7",
      icon: <Zap className="w-6 h-6" />,
      category: "Services"
    },
    {
      title: "Entretien Chaudière",
      url: createPageUrl('EntretienChaudiere'),
      description: "Entretien annuel obligatoire de votre chaudière",
      icon: <CheckCircle className="w-6 h-6" />,
      category: "Services"
    },
    {
      title: "Détection Fuite de Gaz",
      url: createPageUrl('DetectionFuiteGaz'),
      description: "Détection et réparation de fuites de gaz",
      icon: <Wind className="w-6 h-6" />,
      category: "Services"
    },
    {
      title: "Installation Climatiseur",
      url: createPageUrl('InstallationClimatiseur'),
      description: "Installation de climatiseurs LG et Panasonic",
      icon: <Snowflake className="w-6 h-6" />,
      category: "Services"
    },
    {
      title: "À Propos",
      url: createPageUrl('APropos'),
      description: "Notre histoire, valeurs et certifications",
      icon: <FileText className="w-6 h-6" />,
      category: "Informations"
    },
    {
      title: "Zones d'Intervention",
      url: createPageUrl('ZonesIntervention'),
      description: "Les 19 communes de Bruxelles desservies",
      icon: <MapPin className="w-6 h-6" />,
      category: "Informations"
    },
    {
      title: "Blog",
      url: createPageUrl('Blog'),
      description: "Conseils et actualités sur le chauffage",
      icon: <BookOpen className="w-6 h-6" />,
      category: "Informations"
    },
    {
      title: "Contact",
      url: createPageUrl('Contact'),
      description: "Nous contacter pour un devis gratuit",
      icon: <Phone className="w-6 h-6" />,
      category: "Contact"
    },
    {
      title: "Chauffagiste Ixelles",
      url: createPageUrl('ChauffagisteIxelles'),
      description: "Service de chauffage à Ixelles (Flagey, Châtelain, Matonge)",
      icon: <MapPin className="w-6 h-6" />,
      category: "Zones"
    },
    {
      title: "Chauffagiste Uccle",
      url: createPageUrl('ChauffagisteUccle'),
      description: "Chauffagiste expert à Uccle (Observatoire, Saint-Job, Dieweg)",
      icon: <MapPin className="w-6 h-6" />,
      category: "Zones"
    },
    {
      title: "Chauffagiste Woluwe",
      url: createPageUrl('ChauffagisteWoluwe'),
      description: "Service chauffage à Woluwe-Saint-Lambert et Woluwe-Saint-Pierre",
      icon: <MapPin className="w-6 h-6" />,
      category: "Zones"
    },
    {
      title: "Chauffagiste Schaerbeek",
      url: createPageUrl('ChauffagisteSchaerbeek'),
      description: "Installation et dépannage de chaudières à Schaerbeek",
      icon: <MapPin className="w-6 h-6" />,
      category: "Zones"
    },
    {
      title: "Chauffagiste Anderlecht",
      url: createPageUrl('ChauffagisteAnderlecht'),
      description: "Service de chauffage professionnel à Anderlecht",
      icon: <MapPin className="w-6 h-6" />,
      category: "Zones"
    },
    {
      title: "Chauffagiste Etterbeek",
      url: createPageUrl('ChauffagisteEtterbeek'),
      description: "Chauffagiste expert à Etterbeek pour tous vos besoins",
      icon: <MapPin className="w-6 h-6" />,
      category: "Zones"
    }
  ];

  const groupedPages = pages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {});

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Plan du Site - Chauffagiste Express Bruxelles",
    "description": "Plan du site avec tous les services et pages de Chauffagiste Express à Bruxelles"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Plan du Site | Chauffagiste Express Bruxelles - Navigation Complète"
        description="Découvrez toutes les pages et services de Chauffagiste Express : installation, dépannage, entretien de chaudières à Bruxelles."
        canonical="https://centrale-chauffagiste.be/sitemap"
        schema={schema}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#f5b82e] hover:text-[#ffcf4d] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-12 h-12 text-[#f5b82e]" />
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              Plan du <span className="font-bold">Site</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Navigation complète de tous nos services et pages
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {Object.entries(groupedPages).map(([category, categoryPages]) => (
          <section key={category} className="mb-12">
            <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-[#f5b82e]"></div>
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryPages.map((page, index) => (
                <Card key={index} className="border-l-4 border-l-[#f5b82e] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Link to={page.url} className="block group">
                      <div className="flex items-start gap-4">
                        <div className="text-[#f5b82e] mt-1 group-hover:scale-110 transition-transform">
                          {page.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#0f1b2e] mb-2 group-hover:text-[#f5b82e] transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {page.description}
                          </p>
                          <p className="text-xs text-gray-400 mt-2 font-mono">
                            {page.url}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* SEO Text */}
        <section className="mt-16 max-w-4xl">
          <Card className="bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-[#0f1b2e] mb-4">
                À propos de Chauffagiste Express Bruxelles
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Chauffagiste Express est votre expert en <strong>chauffage à Bruxelles</strong>. Nous offrons une gamme complète de services pour tous vos besoins en chauffage : installation de chaudières, dépannage d'urgence, entretien annuel, détection de fuites de gaz et installation de climatiseurs.
                </p>
                <p>
                  Notre équipe de chauffagistes certifiés intervient dans les <strong>19 communes de Bruxelles</strong> : Bruxelles-Ville, Anderlecht, Schaerbeek, Ixelles, Uccle, Etterbeek, et toutes les autres.
                </p>
                <p>
                  Nous travaillons avec les meilleures marques : Vaillant, Bulex, Viessmann, Buderus, Junkers, ACV, Chappée, Saunier Duval, LG et Panasonic.
                </p>
                <p className="font-semibold text-[#0f1b2e]">
                  Contactez-nous au <a href="tel:0487407407" className="text-[#f5b82e] hover:underline">0487/40.74.07</a> pour un devis gratuit et sans engagement.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}