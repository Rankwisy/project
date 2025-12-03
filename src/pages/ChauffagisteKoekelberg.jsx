import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ChauffagisteKoekelberg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Koekelberg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Koekelberg",
      "addressRegion": "Bruxelles-Capitale",
      "addressCountry": "BE"
    },
    "telephone": "+32487407407",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8629",
      "longitude": "4.3269"
    },
    "openingHours": "Mo-Su 08:00-20:00"
  };

  const zones = ["Basilique", "Simonis", "Karreveld", "Centre"];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Koekelberg | Installation & Dépannage Chaudière"
        description="Chauffagiste professionnel à Koekelberg. Service rapide près de la Basilique et Simonis. Installation et dépannage 7j/7. ☎ 0487/40.74.07"
        canonical={`https://centrale-chauffagiste.be/chauffagiste-koekelberg`}
        keywords="chauffagiste koekelberg, plombier koekelberg, installation chaudière basilique, dépannage chauffage simonis"
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
            Chauffagiste à <span className="font-bold">Koekelberg</span>
          </h1>
          <p className="text-xl text-white/90 font-light">
            Installation et dépannage dans la plus petite commune
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Votre Chauffagiste à Koekelberg
              </h2>
              <div className="prose prose-lg max-w-none font-cormorant text-gray-700">
                <p>
                  Koekelberg, la <strong>plus petite commune de Bruxelles</strong>, offre une proximité unique avec ses habitants. 
                  Dominée par la majestueuse Basilique, elle présente un caractère résidentiel agréable.
                </p>
                <p>
                  Notre équipe intervient rapidement dans toute la commune grâce à sa <strong>taille compacte</strong>. 
                  Du quartier Simonis aux abords du Parc Elisabeth, nous connaissons chaque rue et chaque bâtiment.
                </p>
                <p>
                  Les <strong>immeubles d'appartements</strong> nombreux à Koekelberg nécessitent des entretiens réguliers 
                  et des installations adaptées. Nous travaillons en étroite collaboration avec les syndics locaux.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Zones Desservies
              </h2>
              <div className="grid grid-cols-2 gap-4">
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
                    Avantages de Notre Service
                  </h3>
                  <ul className="space-y-3 text-gray-700 font-cormorant">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Intervention ultra-rapide grâce à la proximité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Connaissance parfaite des bâtiments locaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Service personnalisé et de proximité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Disponible 7j/7 pour urgences</span>
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
                    Service de Proximité
                  </h3>
                  <p className="text-gray-600 mb-4 font-cormorant">
                    À votre service à Koekelberg
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

              <ContactForm serviceType="Chauffagiste Koekelberg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}