import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Zap, Clock, Phone, Wrench, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function DepannageRapide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dépannage Chaudière",
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
    "availableChannel": {
      "@type": "ServiceChannel",
      "availableLanguage": ["French", "Dutch"],
      "serviceUrl": "https://centrale-chauffagiste.be/depannage-rapide"
    },
    "hoursAvailable": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "description": "Service de dépannage d'urgence pour chaudières en panne à Bruxelles. Intervention rapide 7j/7.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "98"
    }
  };

  const problemes = [
    "Chaudière en panne ou qui ne démarre pas",
    "Problèmes de surchauffe",
    "Arrêt total du chauffage",
    "Fuite d'eau sur la chaudière",
    "Bruits anormaux",
    "Perte de pression",
    "Code erreur sur l'écran"
  ];

  const avantages = [
    { icon: <Clock className="w-6 h-6" />, titre: "Intervention rapide", description: "Disponible 7j/7 pour urgences" },
    { icon: <Wrench className="w-6 h-6" />, titre: "Experts qualifiés", description: "Techniciens certifiés toutes marques" },
    { icon: <Phone className="w-6 h-6" />, titre: "Diagnostic précis", description: "Identification rapide du problème" },
    { icon: <CheckCircle className="w-6 h-6" />, titre: "Réparation garantie", description: "Garantie sur pièces et main d'œuvre" }
  ];

  const temoignages = [
    {
      nom: "Pierre Dumont",
      commune: "Anderlecht",
      note: 5,
      texte: "Chaudière tombée en panne un dimanche soir. Intervention le lendemain matin, problème résolu en 2h. Service impeccable et prix correct."
    },
    {
      nom: "Isabelle Leroy",
      commune: "Woluwe-Saint-Pierre",
      note: 5,
      texte: "Très réactifs ! Ma chaudière affichait un code erreur, le technicien est arrivé rapidement et a tout remis en ordre. Je recommande."
    },
    {
      nom: "Ahmed Benzema",
      commune: "Molenbeek",
      note: 5,
      texte: "Excellent dépannage. Le chauffagiste a pris le temps de m'expliquer le problème et de me donner des conseils pour l'éviter à l'avenir."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="🚨 Dépannage Chaudière Bruxelles 24/7 | Urgence Panne Chauffage - Intervention Immédiate"
        description="✅ Dépannage chaudière urgent Bruxelles 24/7. Panne, fuite, erreur F22/F75. Chauffagiste expert toutes marques. Intervention rapide garantie. ☎️ 0487/40.74.07 - Prix transparent"
        canonical="https://centrale-chauffagiste.be/depannage-rapide"
        keywords="dépannage chaudière bruxelles, panne chaudière urgence, réparation chaudière, chauffage en panne, code erreur chaudière, dépannage vaillant, fuite chaudière, chauffagiste urgence bruxelles, dépannage 24/7"
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
            Dépannage <span className="font-bold">Rapide</span>
          </h1>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Service de dépannage d'urgence pour tous problèmes de chauffage. Intervention rapide 7j/7 à Bruxelles.
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
                Dépannage Chaudière Professionnel à Bruxelles 24/7
              </h2>
              <div className="prose prose-lg text-gray-700 font-light leading-relaxed space-y-4">
                <p>
                  Votre chaudière est en panne ? Pas de panique ! Notre équipe de <strong>chauffagistes qualifiés</strong> intervient rapidement pour diagnostiquer et réparer tous types de problèmes de chauffage.
                </p>
                <p>
                  Nous intervenons sur toutes les marques de chaudières (Vaillant, Bulex, Viessmann, Buderus, etc.) et disposons des pièces détachées les plus courantes pour une réparation immédiate.
                </p>
                <p>
                  Notre objectif : vous remettre au chaud dans les plus brefs délais avec un service de qualité à prix transparent.
                </p>
              </div>
            </section>

            {/* Problèmes traités */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Pannes de Chaudière Réparées en Urgence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {problemes.map((probleme, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white border-l-4 border-l-[#f5b82e] hover:shadow-md transition-shadow">
                    <Zap className="w-5 h-5 text-[#f5b82e] flex-shrink-0" />
                    <span className="text-gray-700">{probleme}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Avantages */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Pourquoi Choisir Notre Service de Dépannage Chaudière ?
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
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Avis de nos clients
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Card className="border-red-500 bg-gradient-to-br from-red-50 to-white mb-6">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-red-600 mb-2">URGENCE ?</h3>
                  <p className="text-gray-700 mb-4 font-light">
                    Appelez-nous immédiatement
                  </p>
                  <a 
                    href="tel:0487407407"
                    className="inline-block bg-red-600 text-white px-6 py-3 font-bold rounded hover:bg-red-700 transition-colors w-full"
                  >
                    0487/40.74.07
                  </a>
                </CardContent>
              </Card>

              <ContactForm serviceType="Dépannage Rapide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}