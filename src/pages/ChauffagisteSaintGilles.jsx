import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ChauffagisteSaintGilles() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Saint-Gilles",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Saint-Gilles",
      "addressRegion": "Bruxelles-Capitale",
      "addressCountry": "BE"
    },
    "telephone": "+32487407407",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8271",
      "longitude": "4.3445"
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "94"
    }
  };

  const zones = ["Parvis de Saint-Gilles", "Barrière", "Ma Campagne", "Prison", "Horta", "Châtelain"];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Saint-Gilles | Installation Chaudière Parvis & Barrière"
        description="Chauffagiste expert à Saint-Gilles : Parvis, Barrière, Ma Campagne. Spécialiste Art Nouveau. Installation et dépannage 7j/7. ☎ 0487/40.74.07"
        canonical={`https://centrale-chauffagiste.be/chauffagiste-saint-gilles`}
        keywords="chauffagiste saint-gilles, plombier parvis saint-gilles, installation chaudière barrière, dépannage chauffage ma campagne"
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
            Chauffagiste à <span className="font-bold">Saint-Gilles</span>
          </h1>
          <p className="text-xl text-white/90 font-light">
            Expert en chauffage dans le quartier bohème de Bruxelles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Chauffagiste Spécialisé à Saint-Gilles
              </h2>
              <div className="prose prose-lg max-w-none font-cormorant text-gray-700">
                <p>
                  Saint-Gilles est réputée pour son <strong>patrimoine Art Nouveau exceptionnel</strong>. Les immeubles 
                  de maîtres du Parvis et de la Barrière présentent des défis uniques en matière d'installation de chauffage.
                </p>
                <p>
                  Notre équipe est habituée à travailler dans ces <strong>bâtiments historiques</strong> où chaque 
                  intervention doit respecter l'architecture originale. Du quartier bohème de Ma Campagne aux élégantes 
                  maisons bourgeoises, nous adaptons nos solutions à chaque type d'habitation.
                </p>
                <p>
                  Le quartier connaît également une <strong>forte densité de jeunes actifs</strong> recherchant efficacité 
                  et rapidité d'intervention. Nous offrons un service flexible adapté aux horaires professionnels.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Zones d'Intervention
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
                    Expertise Art Nouveau
                  </h3>
                  <p className="text-gray-700 font-cormorant mb-4">
                    Saint-Gilles abrite certains des plus beaux exemples d'<strong>architecture Art Nouveau</strong> de Bruxelles. 
                    Ces bâtiments nécessitent une approche spécialisée.
                  </p>
                  <ul className="space-y-3 text-gray-700 font-cormorant">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Respect du patrimoine architectural</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Solutions discrètes pour immeubles de maître</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Adaptation aux contraintes des bâtiments classés</span>
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
                    Contactez-nous
                  </h3>
                  <p className="text-gray-600 mb-4 font-cormorant">
                    Service rapide à Saint-Gilles
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

              <ContactForm serviceType="Chauffagiste Saint-Gilles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}