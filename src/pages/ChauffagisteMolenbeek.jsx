import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ChauffagisteMolenbeek() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Molenbeek-Saint-Jean",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Molenbeek-Saint-Jean",
      "addressRegion": "Bruxelles-Capitale",
      "addressCountry": "BE"
    },
    "telephone": "+32487407407",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8592",
      "longitude": "4.3145"
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    }
  };

  const zones = ["Maritime", "Karreveld", "Osseghem", "Mettewie", "Historique", "Parc Marie-José"];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Molenbeek-Saint-Jean | Installation & Dépannage Chaudière"
        description="Chauffagiste professionnel à Molenbeek-Saint-Jean. Installation, dépannage et entretien chaudière. Service rapide 7j/7. ☎ 0487/40.74.07"
        canonical={`https://centrale-chauffagiste.be/chauffagiste-molenbeek`}
        keywords="chauffagiste molenbeek, plombier molenbeek-saint-jean, installation chaudière maritime, dépannage chauffage osseghem"
        schema={schema}
      />

      <div className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#f5b82e] hover:text-[#ffcf4d] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </Link>
          <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide font-playfair">
            Chauffagiste à <span className="font-bold">Molenbeek-Saint-Jean</span>
          </h1>
          <p className="text-xl text-white/90 font-light">
            Installation et dépannage rapide dans toute la commune
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Votre Chauffagiste à Molenbeek
              </h2>
              <div className="prose prose-lg max-w-none font-cormorant text-gray-700">
                <p>
                  Molenbeek-Saint-Jean connaît une <strong>transformation urbaine importante</strong> ces dernières années. 
                  Nombreux sont les immeubles rénovés nécessitant des installations modernes et performantes.
                </p>
                <p>
                  Notre équipe intervient régulièrement dans les <strong>quartiers populaires</strong> de la commune, 
                  du quartier Maritime en pleine évolution aux zones résidentielles plus calmes comme Karreveld. 
                  Nous proposons des solutions adaptées à tous types de logements.
                </p>
                <p>
                  Les <strong>copropriétés nombreuses à Molenbeek</strong> nécessitent souvent des entretiens collectifs 
                  et des rénovations de systèmes de chauffage central. Nous avons l'habitude de travailler avec les 
                  syndics et les associations de copropriétaires.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Quartiers Desservis
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {zones.map((zone, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-l-[#f5b82e]"
                  >
                    <MapPin className="w-4 h-4 text-[#f5b82e]" />
                    <span className="font-medium text-[#0f1b2e]">{zone}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-[#0f1b2e] mb-4 font-playfair">
                    Services pour Copropriétés
                  </h3>
                  <ul className="space-y-3 text-gray-700 font-cormorant">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Remplacement chaudières collectives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Contrats d'entretien annuels pour syndics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Dépannages urgents 7j/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Devis gratuits et conseils personnalisés</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card className="border-[#f5b82e] shadow-xl">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-[#f5b82e] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#0f1b2e] mb-2">
                    Urgence Chauffage ?
                  </h3>
                  <p className="text-gray-600 mb-4 font-cormorant">
                    Intervention rapide à Molenbeek
                  </p>
                  <a 
                    href="tel:0487407407"
                    className="block w-full bg-[#f5b82e] text-[#0f1b2e] py-3 px-6 font-bold hover:bg-[#ffcf4d] transition-colors mb-3"
                  >
                    📞 0487/40.74.07
                  </a>
                  <a 
                    href="https://wa.me/32487407407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366] text-white py-3 px-6 font-bold hover:bg-[#20bd5a] transition-colors"
                  >
                    💬 WhatsApp
                  </a>
                </CardContent>
              </Card>

              <ContactForm serviceType="Chauffagiste Molenbeek" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}