import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, CheckCircle, Wrench, Zap, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function ChauffagisteSchaerbeek() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Schaerbeek",
    "url": "https://centrale-chauffagiste.be/chauffagiste-schaerbeek",
    "telephone": "+32487407407",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Schaerbeek",
      "addressLocality": "Schaerbeek",
      "postalCode": "1030",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8676",
      "longitude": "4.3731"
    },
    "areaServed": {
      "@type": "City",
      "name": "Schaerbeek"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 08:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "147"
    }
  };

  const zones = [
    "Place Meiser", "Helmet", "Dailly", "Huart-Hamoir", "Josaphat",
    "Place Pogge", "Pavillon", "Cage aux Ours", "Terdelt", "Azalées"
  ];

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installation Chaudière",
      description: "Installation complète adaptée aux immeubles schaerbeekois"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Dépannage 24/7",
      description: "Intervention d'urgence dans toute la commune"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Entretien Annuel",
      description: "Maintenance préventive avec attestation légale"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed B.",
      location: "Place Meiser",
      rating: 5,
      text: "Intervention rapide pour remplacer ma vieille chaudière. Service impeccable et prix correct pour Schaerbeek."
    },
    {
      name: "Sophie L.",
      location: "Helmet",
      rating: 5,
      text: "Excellent travail d'installation dans mon appartement. L'équipe connaît bien les spécificités des bâtiments de Schaerbeek."
    },
    {
      name: "Marc V.",
      location: "Dailly",
      rating: 5,
      text: "Dépannage un dimanche matin, technicien à l'heure et très professionnel. Je recommande vivement !"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Schaerbeek | Installation & Dépannage Chaudière - Devis Gratuit"
        description="Chauffagiste expert à Schaerbeek (Meiser, Helmet, Dailly). Installation chaudière, dépannage urgent 7j/7, entretien. Devis gratuit ☎️ 0487/40.74.07"
        canonical="https://centrale-chauffagiste.be/chauffagiste-schaerbeek"
        keywords="chauffagiste schaerbeek, installation chaudière schaerbeek, dépannage chaudière meiser, entretien chaudière helmet, chauffage schaerbeek"
        schema={schema}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#f5b82e] hover:text-[#ffcf4d] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide font-playfair">
            Chauffagiste <span className="font-bold italic">Schaerbeek</span>
          </h1>
          <p className="text-xl text-white/90 font-light font-cormorant">
            Installation, dépannage et entretien de chaudières à Schaerbeek
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Votre Chauffagiste Expert à Schaerbeek
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed font-cormorant text-lg">
                <p>
                  Schaerbeek, avec ses <strong>132 000 habitants</strong>, est la commune la plus peuplée de Bruxelles. Notre équipe de chauffagistes connaît parfaitement les spécificités des bâtiments schaerbeekois, des maisons de maître Art Nouveau du quartier Dailly aux immeubles modernes de Meiser.
                </p>
                <p>
                  Nous intervenons quotidiennement dans tous les quartiers de Schaerbeek : <strong>Place Meiser, Helmet, Dailly, Huart-Hamoir, Josaphat, Cage aux Ours</strong> et bien d'autres. Notre connaissance approfondie du patrimoine architectural local nous permet d'adapter nos installations aux contraintes spécifiques de chaque type de bâtiment.
                </p>
                <p>
                  Que vous habitiez près du <strong>Parc Josaphat</strong>, aux alentours de la <strong>Place Meiser</strong> ou dans le quartier historique de <strong>Helmet</strong>, nous garantissons une intervention rapide, généralement sous 2 heures pour les urgences.
                </p>
              </div>
            </section>

            {/* Zones d'intervention */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Nos Zones d'Intervention à Schaerbeek
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {zones.map((zone, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-white border-l-4 border-l-green-500 px-4 py-3 rounded hover:shadow-md transition-shadow"
                  >
                    <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{zone}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Nos Services de Chauffage à Schaerbeek
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-[#f5b82e] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-[#f5b82e] mb-4">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-[#0f1b2e] mb-2 font-playfair">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-cormorant">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Spécificités Schaerbeek */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Expertise Spécifique pour Schaerbeek
              </h2>
              <Card className="border-l-4 border-l-[#f5b82e] shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Maisons Art Nouveau",
                        desc: "Installation adaptée aux contraintes architecturales du patrimoine Art Nouveau de Schaerbeek"
                      },
                      {
                        title: "Immeubles à Appartements",
                        desc: "Expertise dans les installations collectives et individuelles des nombreux immeubles schaerbeekois"
                      },
                      {
                        title: "Bâtiments Anciens",
                        desc: "Remplacement de chaudières dans les maisons centenaires avec respect des structures existantes"
                      },
                      {
                        title: "Constructions Modernes",
                        desc: "Installation de systèmes haute performance dans les nouveaux projets immobiliers près de Meiser"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-[#0f1b2e] mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm font-cormorant">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Avis de Nos Clients à Schaerbeek
              </h2>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">- {testimonial.name}, {testimonial.location}</span>
                      </div>
                      <p className="text-gray-700 italic font-cormorant">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Contact Urgent */}
            <Card className="border-2 border-[#f5b82e] shadow-2xl sticky top-6">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#0f1b2e] mb-4 text-center font-playfair">
                  Intervention Rapide
                </h3>
                <div className="space-y-4">
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
                    className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] text-white px-6 py-3 font-bold rounded hover:bg-[#20bd5a] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <div className="text-center text-sm text-gray-600 pt-2">
                    <p className="font-semibold">Disponible 7j/7</p>
                    <p>Intervention sous 2h à Schaerbeek</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm serviceType="Chauffagiste Schaerbeek" />
          </div>
        </div>
      </div>
    </div>
  );
}