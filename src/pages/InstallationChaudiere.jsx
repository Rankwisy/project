import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Wrench, Clock, Euro, Shield } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function InstallationChaudiere() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Installation de Chaudière",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chauffagiste Express Bruxelles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bruxelles",
        "addressCountry": "BE"
      },
      "telephone": "+32485719251",
      "email": "contact@centrale-chauffagiste.be",
      "url": "https://centrale-chauffagiste.be"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bruxelles"
      },
      {
        "@type": "City", 
        "name": "Anderlecht"
      },
      {
        "@type": "City",
        "name": "Schaerbeek"
      },
      {
        "@type": "City",
        "name": "Ixelles"
      }
    ],
    "description": "Installation professionnelle de chaudières à condensation à Bruxelles. Fourniture et pose incluses, service sans acompte.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "127"
    }
  };

  const avantages = [
    { icon: <Wrench className="w-6 h-6" />, titre: "Installation complète", description: "Fourniture et pose de chaudière à condensation" },
    { icon: <CheckCircle className="w-6 h-6" />, titre: "Raccordements inclus", description: "Hydraulique, électrique et gaz" },
    { icon: <Clock className="w-6 h-6" />, titre: "Service rapide", description: "Installation en 1 journée" },
    { icon: <Euro className="w-6 h-6" />, titre: "Sans acompte", description: "Paiement après installation" },
    { icon: <Shield className="w-6 h-6" />, titre: "Garantie totale", description: "Garantie fabricant et main d'œuvre" }
  ];

  const temoignages = [
    {
      nom: "Marie Dubois",
      commune: "Ixelles",
      note: 5,
      texte: "Installation rapide et professionnelle. L'équipe a été très soigneuse et a tout nettoyé après. Ma nouvelle chaudière Vaillant fonctionne parfaitement !"
    },
    {
      nom: "Jean-Pierre Martin",
      commune: "Schaerbeek",
      note: 5,
      texte: "Excellent service du début à la fin. Prix transparent, pas de surprises. Je recommande vivement pour le changement de chaudière."
    },
    {
      nom: "Sophie Laurent",
      commune: "Uccle",
      note: 5,
      texte: "Très satisfaite de mon installation. Conseils avisés sur le choix de la chaudière et travail impeccable. Merci à toute l'équipe !"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Installation Chaudière Bruxelles ⭐ Condensation & Gaz | Devis Gratuit Sans Acompte"
        description="✅ Installation chaudière Bruxelles par experts certifiés. Vaillant, Bulex, Viessmann. Tout compris sans acompte. Garantie & attestation. ☎️ 0487/40.74.07 - Devis gratuit 24h"
        canonical="https://centrale-chauffagiste.be/installation-chaudiere"
        keywords="installation chaudière bruxelles, chaudière condensation, remplacement chaudière, installation chauffage, chauffagiste bruxelles, vaillant bruxelles, bulex installation, chaudière gaz bruxelles, installation chaudière prix"
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
          <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
            Installation de <span className="font-bold">Chaudière</span>
          </h1>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Installation professionnelle de chaudières à condensation par nos experts certifiés. Service tout compris sans surprise.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Pourquoi Choisir Notre Service d'Installation de Chaudière ?
              </h2>
              <div className="prose prose-lg text-gray-700 font-light leading-relaxed space-y-4">
                <p>
                  Nous sommes spécialisés dans l'<strong>installation de chaudières à condensation</strong> de toutes marques (Vaillant, Bulex, Viessmann, etc.). Notre équipe de chauffagistes certifiés vous accompagne de A à Z dans votre projet.
                </p>
                <p>
                  Que vous souhaitiez remplacer une vieille chaudière ou installer un nouveau système de chauffage, nous vous proposons un service complet : conseil personnalisé, fourniture de matériel de qualité, installation professionnelle et mise en service.
                </p>
                <p>
                  Notre engagement : une installation réalisée dans les règles de l'art, conforme aux normes belges en vigueur, avec un service transparent et sans acompte.
                </p>
              </div>
            </section>

            {/* Avantages */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Avantages de Notre Installation de Chaudière à Bruxelles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {avantages.map((avantage, index) => (
                  <Card key={index} className="border-l-4 border-l-[#f5b82e] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-[#f5b82e] mt-1">
                          {avantage.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#0f1b2e] mb-1">
                            {avantage.titre}
                          </h3>
                          <p className="text-gray-600 text-sm font-light">
                            {avantage.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Témoignages */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Avis Clients : Installation de Chaudière à Bruxelles
              </h2>
              <div className="space-y-6">
                {temoignages.map((temoignage, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <span key={i} className="text-[#f5b82e] text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        "{temoignage.texte}"
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-[#0f1b2e]">{temoignage.nom}</span>
                        <span className="text-gray-500">{temoignage.commune}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar with Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <ContactForm serviceType="Installation de Chaudière" />
              
              <Card className="mt-6 border-[#0f1b2e] bg-gradient-to-br from-[#0f1b2e] to-[#1a2740] text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Besoin d'aide ?</h3>
                  <p className="text-white/90 mb-4 font-light">
                    Appelez-nous directement pour un conseil personnalisé
                  </p>
                  <a 
                    href="tel:0487407407"
                    className="inline-block bg-[#f5b82e] text-[#0f1b2e] px-6 py-3 font-bold rounded hover:bg-[#ffcf4d] transition-colors"
                  >
                    0487/40.74.07
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}