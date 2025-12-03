import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, CheckCircle, Wrench, Zap, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function ChauffagisteEtterbeek() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Etterbeek",
    "url": "https://centrale-chauffagiste.be/chauffagiste-etterbeek",
    "telephone": "+32487407407",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Etterbeek",
      "addressLocality": "Etterbeek",
      "postalCode": "1040",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8325",
      "longitude": "4.3892"
    },
    "areaServed": {
      "@type": "City",
      "name": "Etterbeek"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 08:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  };

  const zones = [
    "Place Jourdan", "Cinquantenaire", "ULB - VUB", "Général Jacques",
    "Chasse Royale", "Gray", "Square de Meudon", "Saint-Michel"
  ];

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installation Chaudière",
      description: "Expertise dans les bâtiments résidentiels et appartements d'Etterbeek"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Dépannage Express",
      description: "Intervention sous 1h30 dans toute la commune"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Entretien Certifié",
      description: "Maintenance complète avec attestation légale"
    }
  ];

  const testimonials = [
    {
      name: "Thomas D.",
      location: "Place Jourdan",
      rating: 5,
      text: "Installation impeccable dans mon appartement près de la Place Jourdan. Équipe professionnelle et ponctuelle."
    },
    {
      name: "Isabelle M.",
      location: "ULB",
      rating: 5,
      text: "Dépannage un samedi, service rapide et efficace. Prix correct pour Etterbeek. Je recommande vivement !"
    },
    {
      name: "Philippe L.",
      location: "Cinquantenaire",
      rating: 5,
      text: "Excellent entretien annuel de ma chaudière. Le technicien a pris le temps de tout m'expliquer."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Etterbeek | Installation & Dépannage Chaudière - Devis Gratuit"
        description="Chauffagiste Etterbeek (Jourdan, Cinquantenaire, ULB). Installation chaudière, dépannage rapide, entretien. Service de qualité ☎️ 0487/40.74.07"
        canonical="https://centrale-chauffagiste.be/chauffagiste-etterbeek"
        keywords="chauffagiste etterbeek, installation chaudière etterbeek, dépannage chaudière jourdan, entretien chaudière ulb, chauffage etterbeek"
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
            Chauffagiste <span className="font-bold italic">Etterbeek</span>
          </h1>
          <p className="text-xl text-white/90 font-light font-cormorant">
            Service de chauffage professionnel au cœur d'Etterbeek
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
                Votre Chauffagiste de Confiance à Etterbeek
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed font-cormorant text-lg">
                <p>
                  Etterbeek, petite commune dynamique de Bruxelles avec ses <strong>47 000 habitants</strong>, est connue pour ses quartiers résidentiels de qualité et sa proximité avec les institutions européennes. Notre équipe de chauffagistes intervient quotidiennement dans cette commune, de la célèbre <strong>Place Jourdan</strong> aux quartiers universitaires près de l'<strong>ULB et VUB</strong>.
                </p>
                <p>
                  Nous connaissons parfaitement le tissu urbain d'Etterbeek : appartements du <strong>quartier Cinquantenaire</strong>, maisons familiales près de <strong>Général Jacques</strong>, immeubles modernes autour de la <strong>Chasse Royale</strong>. Cette connaissance locale nous permet d'adapter nos interventions aux spécificités de chaque type de bâtiment.
                </p>
                <p>
                  Que vous habitiez près du <strong>Parc du Cinquantenaire</strong>, dans le quartier estudiantin ou vers <strong>Gray</strong>, nous garantissons une intervention rapide et professionnelle. Notre proximité avec Etterbeek nous permet d'intervenir sous 1h30 en cas d'urgence.
                </p>
              </div>
            </section>

            {/* Zones d'intervention */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Zones d'Intervention à Etterbeek
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {zones.map((zone, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-white border-l-4 border-l-purple-500 px-4 py-3 rounded hover:shadow-md transition-shadow"
                  >
                    <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{zone}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Services de Chauffage à Etterbeek
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

            {/* Spécificités Etterbeek */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Expertise Locale pour Etterbeek
              </h2>
              <Card className="border-l-4 border-l-[#f5b82e] shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Appartements Résidentiels",
                        desc: "Installation adaptée aux nombreux immeubles d'appartements d'Etterbeek"
                      },
                      {
                        title: "Maisons de Maître",
                        desc: "Expertise dans les belles demeures près du Cinquantenaire et Gray"
                      },
                      {
                        title: "Logements Étudiants",
                        desc: "Solutions économiques pour les logements étudiants près des universités"
                      },
                      {
                        title: "Immeubles de Bureau",
                        desc: "Installation de systèmes performants dans les bâtiments professionnels"
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
                Témoignages de Clients à Etterbeek
              </h2>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
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
                  Service Rapide
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
                    <p className="font-semibold">Disponibilité 7j/7</p>
                    <p>Intervention sous 1h30 à Etterbeek</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm serviceType="Chauffagiste Etterbeek" />
          </div>
        </div>
      </div>
    </div>
  );
}