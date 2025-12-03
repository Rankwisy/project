import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Calendar, Shield, TrendingDown, Wrench } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function EntretienChaudiere() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Entretien Chaudière",
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
    "areaServed": {
      "@type": "City",
      "name": "Bruxelles"
    },
    "description": "Entretien annuel obligatoire de chaudière à Bruxelles. Vérification complète, attestation conforme aux normes belges.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "150",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "215"
    }
  };

  const inclus = [
    "Nettoyage complet du corps de chauffe",
    "Vérification des organes de sécurité",
    "Contrôle de la combustion",
    "Réglage optimal de la chaudière",
    "Vérification de la pression",
    "Test de l'eau chaude sanitaire",
    "Analyse des fumées",
    "Attestation d'entretien obligatoire"
  ];

  const avantages = [
    { icon: <Shield className="w-6 h-6" />, titre: "Obligation légale", description: "Entretien annuel obligatoire en Belgique" },
    { icon: <TrendingDown className="w-6 h-6" />, titre: "Économies d'énergie", description: "Jusqu'à 12% d'économie sur votre facture" },
    { icon: <Wrench className="w-6 h-6" />, titre: "Durée de vie prolongée", description: "Préservez votre installation" },
    { icon: <CheckCircle className="w-6 h-6" />, titre: "Sécurité garantie", description: "Prévention des pannes et accidents" }
  ];

  const temoignages = [
    {
      nom: "Catherine Janssens",
      commune: "Etterbeek",
      note: 5,
      texte: "Service d'entretien impeccable. Le technicien était ponctuel, professionnel et a pris le temps de tout vérifier. Je prends désormais un contrat annuel."
    },
    {
      nom: "Michel Vermeulen",
      commune: "Forest",
      note: 5,
      texte: "Premier entretien depuis 3 ans... Le chauffagiste a été honnête et m'a expliqué l'importance de l'entretien régulier. Ma chaudière fonctionne comme neuve maintenant."
    },
    {
      nom: "Nathalie Dupont",
      commune: "Jette",
      note: 5,
      texte: "Très satisfaite du service. Rapport d'entretien détaillé et conseils utiles. Prix correct et pas de frais cachés."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Entretien Chaudière Bruxelles ⭐ Obligatoire Annuel | Attestation Légale dès 150€"
        description="✅ Entretien chaudière obligatoire Bruxelles. Service complet certifié avec attestation conforme. Économisez 12% d'énergie. Toutes marques. ☎️ 0487/40.74.07 - Réservation facile"
        canonical="https://centrale-chauffagiste.be/entretien-chaudiere"
        keywords="entretien chaudière bruxelles, entretien annuel chaudière, attestation entretien chaudière, révision chaudière, maintenance chaudière belgique, chauffagiste entretien, contrôle chaudière obligatoire, entretien vaillant bruxelles"
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
            Entretien de <span className="font-bold">Chaudière</span>
          </h1>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Entretien annuel obligatoire de votre chaudière par des professionnels certifiés. Sécurité et performance garanties.
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
                Entretien Annuel de Chaudière : Obligation Légale en Belgique
              </h2>
              <div className="prose prose-lg text-gray-700 font-light leading-relaxed space-y-4">
                <p>
                  En Belgique, l'<strong>entretien annuel de votre chaudière</strong> est une obligation légale. Au-delà de cette obligation, c'est un geste essentiel pour garantir la sécurité de votre foyer et optimiser les performances de votre installation.
                </p>
                <p>
                  Un entretien régulier permet de détecter les anomalies avant qu'elles ne deviennent des pannes coûteuses, d'améliorer le rendement énergétique de votre chaudière et de prolonger sa durée de vie.
                </p>
                <p>
                  Nos techniciens certifiés réalisent un entretien complet conforme aux normes belges et vous délivrent l'attestation d'entretien obligatoire.
                </p>
              </div>
            </section>

            {/* Ce qui est inclus */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Prestations Incluses dans l'Entretien de Chaudière
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inclus.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-white border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Avantages */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Avantages de l'Entretien Régulier de Votre Chaudière
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

            {/* Fréquence */}
            <section className="bg-gradient-to-br from-[#f5b82e]/10 to-[#ffcf4d]/10 p-8 rounded-lg border-l-4 border-l-[#f5b82e]">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-[#f5b82e] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold text-[#0f1b2e] mb-3">
                    Quand faire l'entretien ?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    L'entretien doit être réalisé <strong>une fois par an</strong>. La période idéale est avant l'hiver (septembre-octobre) pour s'assurer que votre chaudière fonctionne parfaitement pendant la saison froide. Cependant, nous intervenons toute l'année selon vos disponibilités.
                  </p>
                </div>
              </div>
            </section>

            {/* Témoignages */}
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Retours de nos clients
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
              <ContactForm serviceType="Entretien de Chaudière" />
              
              <Card className="mt-6 border-[#0f1b2e] bg-gradient-to-br from-[#0f1b2e] to-[#1a2740] text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-[#f5b82e] mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Planifiez maintenant</h3>
                  <p className="text-white/90 mb-4 font-light">
                    Réservez votre créneau d'entretien
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