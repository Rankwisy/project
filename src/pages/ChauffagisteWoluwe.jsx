import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, CheckCircle, Wrench, Clock, Star } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ChauffagisteWoluwe() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Woluwe",
    "image": "https://images.unsplash.com/photo-1581405459834-75c5f33acee2",
    "description": "Chauffagiste à Woluwe-Saint-Lambert et Woluwe-Saint-Pierre. Installation, dépannage et entretien de chaudières.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Woluwe",
      "addressLocality": "Woluwe-Saint-Lambert",
      "postalCode": "1200",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8450",
      "longitude": "4.4165"
    },
    "telephone": "+32487407407",
    "email": "contact@centrale-chauffagiste.be",
    "url": "https://centrale-chauffagiste.be/chauffagiste-woluwe",
    "priceRange": "€€",
    "areaServed": [
      {
        "@type": "City",
        "name": "Woluwe-Saint-Lambert"
      },
      {
        "@type": "City",
        "name": "Woluwe-Saint-Pierre"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "78"
    }
  };

  const zones = [
    "Tomberg", "Roodebeek", "Kraainem", "Stockel", "Gribaumont", "Joli-Bois",
    "Montgomery", "Kapelleveld", "Val des Seigneurs", "Parmentier"
  ];

  const services = [
    { icon: <Wrench className="w-6 h-6" />, titre: "Installation", description: "Installation chaudières à Woluwe-Saint-Lambert et Woluwe-Saint-Pierre" },
    { icon: <Clock className="w-6 h-6" />, titre: "Dépannage", description: "Intervention urgente dans toute la région de Woluwe" },
    { icon: <CheckCircle className="w-6 h-6" />, titre: "Entretien", description: "Entretien annuel avec attestation conforme" }
  ];

  const temoignages = [
    {
      nom: "Jean-François Mercier",
      quartier: "Tomberg",
      note: 5,
      texte: "Installation d'une chaudière à condensation à Tomberg. Service professionnel et rapide. Le technicien était très compétent et a bien expliqué le fonctionnement."
    },
    {
      nom: "Catherine Dubois",
      quartier: "Stockel",
      note: 5,
      texte: "Dépannage urgent à Stockel un samedi matin. Intervention très rapide malgré le weekend. Problème résolu efficacement. Je recommande vivement !"
    },
    {
      nom: "Michel Van Damme",
      quartier: "Montgomery",
      note: 5,
      texte: "Entretien annuel de ma chaudière près de Montgomery. Service impeccable, rapport détaillé et conseils pertinents. Très satisfait du service."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Woluwe | Installation & Dépannage Chaudière Saint-Lambert & Saint-Pierre"
        description="Chauffagiste à Woluwe-Saint-Lambert et Woluwe-Saint-Pierre. Installation, dépannage 7j/7, entretien chaudière. Service rapide ☎️ 0487/40.74.07"
        canonical="https://centrale-chauffagiste.be/chauffagiste-woluwe"
        keywords="chauffagiste woluwe, chauffagiste woluwe-saint-lambert, chauffagiste woluwe-saint-pierre, installation chaudière woluwe, dépannage chaudière stockel, chauffagiste tomberg, chauffagiste montgomery, chauffagiste roodebeek, plombier woluwe, chauffagiste kraainem, chauffagiste gribaumont, chauffage immeuble woluwe, chauffagiste val des seigneurs"
        schema={schema}
      />

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
            <MapPin className="w-12 h-12 text-[#f5b82e]" />
            <h1 className="text-5xl md:text-6xl font-light tracking-wide font-playfair">
              Chauffagiste <span className="font-bold italic">Woluwe</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl font-cormorant italic">
            Votre chauffagiste à Woluwe-Saint-Lambert et Woluwe-Saint-Pierre. Service professionnel pour tous vos besoins en chauffage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Chauffagiste Expert à Woluwe
              </h2>
              <div className="prose prose-lg text-gray-700 font-light leading-relaxed space-y-4 font-cormorant">
                <p>
                  <strong>Chauffagiste Express</strong> intervient dans toute la région de <strong>Woluwe</strong>, incluant <strong>Woluwe-Saint-Lambert</strong> et <strong>Woluwe-Saint-Pierre</strong>. Que vous habitiez près du <strong>Shopping Center Woluwe</strong>, du <strong>Parc de Woluwe</strong>, de la <strong>Place Dumon</strong>, dans les quartiers résidentiels de <strong>Stockel</strong>, ou aux abords du <strong>Square Montgomery</strong>, nous sommes à votre service.
                </p>
                <p>
                  Les deux communes de Woluwe se caractérisent par leurs <strong>quartiers résidentiels calmes</strong>, leurs <strong>nombreux espaces verts</strong> (Parc de Woluwe, Val Duchesse, Parc Malou), et un mélange unique de <strong>résidences modernes des années 60-80</strong>, d'<strong>immeubles récents à haute performance énergétique</strong>, et de <strong>maisons quatre façades familiales</strong>. Notre expertise couvre tous ces types de bâtiments.
                </p>
                <p>
                  Nos techniciens connaissent parfaitement Woluwe : du <strong>Boulevard de la Woluwe</strong> à l'<strong>Avenue de Tervueren</strong>, des <strong>résidences récentes de Tomberg</strong> aux <strong>maisons cossues de Stockel</strong>, des <strong>appartements de standing près de Montgomery</strong> aux <strong>immeubles familiaux du Kraainem</strong>.
                </p>
                <p>
                  Woluwe abrite de nombreux <strong>immeubles modernes bien isolés</strong> nécessitant des <strong>chaudières à condensation basse température</strong>, ainsi que des <strong>maisons avec pompes à chaleur hybrides</strong>. Nous maîtrisons ces technologies récentes et adaptons nos installations aux <strong>normes PEB strictes</strong> des constructions neuves de Woluwe.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Nos Zones d'Intervention à Woluwe
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {zones.map((zone, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#f5b82e]/10 to-white border-l-4 border-l-[#f5b82e] rounded"
                  >
                    <MapPin className="w-4 h-4 text-[#f5b82e] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{zone}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Services à Woluwe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-[#f5b82e] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-[#f5b82e] mb-4">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold text-[#0f1b2e] mb-2">
                        {service.titre}
                      </h3>
                      <p className="text-gray-600 text-sm font-light">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Avantages de Notre Service à Woluwe
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Expert Immeubles Modernes</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Spécialiste des <strong>résidences récentes (1990-2020)</strong> avec <strong>chauffage collectif</strong>, <strong>compteurs individuels</strong>, <strong>VMC double flux</strong>. Expérience <strong>immeubles Tomberg, Gribaumont, Val des Seigneurs</strong>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Points de Repère Woluwe</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Que vous soyez près du <strong>Woluwe Shopping Center</strong>, de la <strong>Place Saint-Lambert</strong>, du <strong>Palais Stoclet</strong>, de la <strong>Clinique Saint-Jean</strong>, ou du <strong>Parc Malou</strong>, nous arrivons rapidement
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Service Bilingue FR/NL</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Woluwe étant une commune à <strong>facilités linguistiques</strong>, nos techniciens parlent <strong>français et néerlandais</strong> couramment pour communiquer avec tous nos clients
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Maisons 4 Façades Stockel</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Expertise <strong>maisons unifamiliales spacieuses</strong> typiques de Stockel et Kraainem : <strong>150-250m²</strong>, <strong>jardins</strong>, <strong>garages chauffés</strong>, <strong>chaudières 25-35 kW</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Avis Clients à Woluwe
              </h2>
              <div className="space-y-6">
                {temoignages.map((temoignage, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#f5b82e] text-[#f5b82e]" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        "{temoignage.texte}"
                      </p>
                      <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                        <span className="font-semibold text-[#0f1b2e]">{temoignage.nom}</span>
                        <span className="text-gray-500 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {temoignage.quartier}, Woluwe
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card className="border-[#f5b82e] bg-gradient-to-br from-[#0f1b2e] to-[#1a2740] text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-[#f5b82e] mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Service Woluwe</h3>
                  <p className="text-white/90 mb-4 font-light text-sm">
                    Disponible 7j/7
                  </p>
                  <a 
                    href="tel:0487407407"
                    className="inline-block w-full bg-[#f5b82e] text-[#0f1b2e] px-6 py-3 font-bold rounded hover:bg-[#ffcf4d] transition-colors mb-3"
                  >
                    0487/40.74.07
                  </a>
                  <a 
                    href="https://wa.me/32487407407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-[#25D366] text-white px-6 py-3 font-bold rounded hover:bg-[#20bd5a] transition-colors"
                  >
                    WhatsApp
                  </a>
                </CardContent>
              </Card>

              <ContactForm serviceType="Chauffagiste Woluwe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}