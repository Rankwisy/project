import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, CheckCircle, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ChauffagisteBruxellesVille() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Bruxelles-Ville",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bruxelles-Ville",
      "addressRegion": "Bruxelles-Capitale",
      "addressCountry": "BE"
    },
    "telephone": "+32487407407",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8503",
      "longitude": "4.3517"
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const zones = [
    "Pentagone", "Quartier Européen", "Quartier Royal", "Laeken", 
    "Neder-Over-Heembeek", "Haren", "Sablon", "Marolles"
  ];

  const services = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Installation Chaudière Centre-Ville",
      description: "Spécialistes des immeubles historiques du centre. Installation adaptée aux contraintes architecturales du patrimoine bruxellois."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Dépannage Express Pentagone",
      description: "Intervention rapide dans tout le centre-ville, y compris zones piétonnes. Service 7j/7 pour les commerces et restaurants."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Entretien Quartier Européen",
      description: "Maintenance pour bureaux et institutions. Planning flexible adapté aux horaires professionnels."
    }
  ];

  const testimonials = [
    {
      name: "François Leroy",
      location: "Sablon",
      rating: 5,
      comment: "Installation impeccable dans notre immeuble de maître du 19ème siècle. L'équipe a su respecter les contraintes du bâtiment classé."
    },
    {
      name: "Catherine Dubois",
      location: "Quartier Royal",
      rating: 5,
      comment: "Dépannage rapide en plein hiver. Service professionnel et discret, parfait pour notre copropriété."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Bruxelles-Ville | Installation & Dépannage Chaudière Centre"
        description="Chauffagiste expert à Bruxelles-Ville : Pentagone, Sablon, Quartier Européen. Installation et dépannage rapide. Spécialiste immeubles historiques. ☎ 0487/40.74.07"
        canonical={`https://centrale-chauffagiste.be/chauffagiste-bruxelles-ville`}
        keywords="chauffagiste bruxelles-ville, chauffagiste centre bruxelles, installation chaudière pentagone, plombier sablon, chauffage quartier européen"
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
            Chauffagiste à <span className="font-bold">Bruxelles-Ville</span>
          </h1>
          <p className="text-xl text-white/90 font-light">
            Service expert dans le cœur historique de Bruxelles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Votre Chauffagiste au Cœur de Bruxelles
              </h2>
              <div className="prose prose-lg max-w-none font-cormorant text-gray-700">
                <p>
                  Bruxelles-Ville présente des <strong>défis uniques en matière de chauffage</strong>. De ses immeubles 
                  historiques classés du Sablon aux tours modernes du Quartier Européen, chaque bâtiment nécessite une 
                  expertise adaptée.
                </p>
                <p>
                  Notre équipe connaît parfaitement les <strong>contraintes architecturales du centre-ville</strong> : 
                  immeubles de maître du 19ème siècle, copropriétés anciennes, bâtiments classés. Nous intervenons 
                  régulièrement dans le Pentagone où l'accès peut être limité et les installations anciennes.
                </p>
                <p>
                  Les <strong>immeubles du centre historique</strong> nécessitent souvent des installations sur mesure 
                  pour s'adapter aux espaces réduits et aux contraintes patrimoniales. Nous proposons des solutions 
                  discrètes et performantes respectant le cachet des bâtiments.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Zones d'Intervention à Bruxelles-Ville
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {zones.map((zone, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-l-[#f5b82e] hover:shadow-lg transition-shadow"
                  >
                    <MapPin className="w-4 h-4 text-[#f5b82e] flex-shrink-0" />
                    <span className="font-medium text-[#0f1b2e]">{zone}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Nos Services à Bruxelles-Ville
              </h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-[#f5b82e]">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-[#f5b82e] mt-1">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#0f1b2e] mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 font-cormorant">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Expertise Locale : Immeubles Historiques
              </h2>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
                <CardContent className="p-8">
                  <p className="text-gray-700 font-cormorant leading-relaxed mb-4">
                    Le centre de Bruxelles abrite certains des <strong>plus beaux immeubles du pays</strong>. Du Sablon 
                    aux Marolles, en passant par le Quartier Royal, ces bâtiments nécessitent une attention particulière.
                  </p>
                  <ul className="space-y-2 text-gray-700 font-cormorant">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Respect des contraintes patrimoniales et normes urbanistiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Installations discrètes adaptées aux espaces historiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Expertise des systèmes de chauffage central anciens</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Témoignages Clients
              </h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-t-4 border-t-[#f5b82e]">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-[#f5b82e]">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 font-cormorant">
                        "{testimonial.comment}"
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-[#0f1b2e]">{testimonial.name}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">{testimonial.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card className="border-[#f5b82e] shadow-xl">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-[#f5b82e] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#0f1b2e] mb-2">
                    Besoin d'un Chauffagiste ?
                  </h3>
                  <p className="text-gray-600 mb-4 font-cormorant">
                    Intervention rapide à Bruxelles-Ville
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

              <ContactForm serviceType="Chauffagiste Bruxelles-Ville" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}