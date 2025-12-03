import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, CheckCircle, Home } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ChauffagisteJette() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Jette",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jette",
      "addressRegion": "Bruxelles-Capitale",
      "addressCountry": "BE"
    },
    "telephone": "+32487407407",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8795",
      "longitude": "4.3238"
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "76"
    }
  };

  const zones = ["Magritte", "Esseghem", "Boule", "Miroir", "Parc Roi Baudouin", "Simonis"];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Jette | Installation & Dépannage Chaudière Maisons"
        description="Chauffagiste expert à Jette. Spécialiste maisons unifamiliales et pavillons. Installation, dépannage rapide 7j/7. ☎ 0487/40.74.07"
        canonical={`https://centrale-chauffagiste.be/chauffagiste-jette`}
        keywords="chauffagiste jette, plombier jette, installation chaudière magritte, dépannage chauffage esseghem, chauffage maison jette"
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
            Chauffagiste à <span className="font-bold">Jette</span>
          </h1>
          <p className="text-xl text-white/90 font-light">
            Service expert pour maisons et pavillons
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Chauffagiste Spécialisé Maisons à Jette
              </h2>
              <div className="prose prose-lg max-w-none font-cormorant text-gray-700">
                <p>
                  Jette est une commune à <strong>caractère résidentiel</strong> avec une forte proportion de maisons 
                  unifamiliales et pavillons. Ces habitations nécessitent des installations de chauffage adaptées à 
                  leur configuration spécifique.
                </p>
                <p>
                  Notre équipe connaît parfaitement les <strong>quartiers résidentiels de Jette</strong> : Magritte avec 
                  ses pavillons d'après-guerre, Esseghem et ses maisons de maître, le calme quartier du Miroir. Nous 
                  proposons des solutions sur mesure pour chaque type d'habitation.
                </p>
                <p>
                  Les <strong>maisons individuelles</strong> permettent d'optimiser les installations : chaudières performantes, 
                  thermostat intelligent, radiateurs adaptés. Nous vous conseillons pour maximiser confort et économies d'énergie.
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
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-8 h-8 text-[#f5b82e]" />
                    <h3 className="text-2xl font-semibold text-[#0f1b2e] font-playfair">
                      Solutions pour Maisons Unifamiliales
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-700 font-cormorant">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Chaudières à condensation haute performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Installation chauffage par le sol</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Thermostats intelligents connectés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Optimisation isolation et économies d'énergie</span>
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
                    Appelez-nous
                  </h3>
                  <p className="text-gray-600 mb-4 font-cormorant">
                    Intervention à Jette
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

              <ContactForm serviceType="Chauffagiste Jette" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}