import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, CheckCircle, Wrench, Zap, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function ChauffagisteAnderlecht() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Anderlecht",
    "url": "https://centrale-chauffagiste.be/chauffagiste-anderlecht",
    "telephone": "+32487407407",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Anderlecht",
      "addressLocality": "Anderlecht",
      "postalCode": "1070",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8367",
      "longitude": "4.3143"
    },
    "areaServed": {
      "@type": "City",
      "name": "Anderlecht"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 08:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "163"
    }
  };

  const zones = [
    "Westland Shopping", "Cureghem", "Clemenceau", "Bizet", "Scheut",
    "Veeweyde", "Moortebeek", "Erasme", "Neerpede", "Vogelenzang"
  ];

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installation Chaudière",
      description: "Solutions adaptées aux logements sociaux et maisons anderlechtoises"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Dépannage Urgent",
      description: "Intervention 24/7 dans toute la commune"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Entretien Régulier",
      description: "Maintenance avec certification obligatoire"
    }
  ];

  const testimonials = [
    {
      name: "Fatima K.",
      location: "Cureghem",
      rating: 5,
      text: "Service rapide et professionnel. Le chauffagiste est arrivé en moins d'une heure pour mon dépannage urgent."
    },
    {
      name: "Jean-Claude D.",
      location: "Bizet",
      rating: 5,
      text: "Excellente installation de ma nouvelle chaudière. Prix transparent et travail soigné dans ma maison à Anderlecht."
    },
    {
      name: "Maria S.",
      location: "Westland",
      rating: 5,
      text: "Très satisfaite de l'entretien annuel. L'équipe est ponctuelle et respectueuse. Je recommande !"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Anderlecht | Installation & Dépannage Chaudière - Devis Gratuit"
        description="Chauffagiste à Anderlecht (Westland, Cureghem, Bizet). Installation chaudière, dépannage 7j/7, entretien. Prix abordables ☎️ 0487/40.74.07"
        canonical="https://centrale-chauffagiste.be/chauffagiste-anderlecht"
        keywords="chauffagiste anderlecht, installation chaudière anderlecht, dépannage chaudière cureghem, entretien chaudière westland, chauffage anderlecht"
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
            Chauffagiste <span className="font-bold italic">Anderlecht</span>
          </h1>
          <p className="text-xl text-white/90 font-light font-cormorant">
            Service de chauffage complet pour tous les quartiers d'Anderlecht
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
                Service de Chauffage Professionnel à Anderlecht
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed font-cormorant text-lg">
                <p>
                  Anderlecht, deuxième commune la plus peuplée de Bruxelles avec plus de <strong>120 000 habitants</strong>, présente une grande diversité de logements. Notre équipe intervient dans tous les types de bâtiments, des appartements du <strong>Westland Shopping Center</strong> aux maisons de <strong>Cureghem</strong>, en passant par le nouveau quartier d'<strong>Erasme</strong>.
                </p>
                <p>
                  Nous connaissons parfaitement les spécificités d'Anderlecht : logements sociaux, immeubles anciens, nouveaux développements résidentiels. Cette expertise locale nous permet d'intervenir efficacement, que ce soit pour une installation, un dépannage urgent ou un entretien régulier.
                </p>
                <p>
                  Des quartiers de <strong>Bizet</strong> et <strong>Scheut</strong> jusqu'à <strong>Neerpede</strong> et <strong>Veeweyde</strong>, nous garantissons une intervention rapide dans toute la commune. Nos chauffagistes connaissent les rues et les spécificités architecturales locales.
                </p>
              </div>
            </section>

            {/* Zones d'intervention */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Quartiers Couverts à Anderlecht
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {zones.map((zone, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-white border-l-4 border-l-blue-500 px-4 py-3 rounded hover:shadow-md transition-shadow"
                  >
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{zone}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Nos Prestations de Chauffage
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

            {/* Spécificités Anderlecht */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6 font-playfair">
                Notre Expertise à Anderlecht
              </h2>
              <Card className="border-l-4 border-l-[#f5b82e] shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Logements Sociaux",
                        desc: "Expérience avec les normes spécifiques des logements sociaux d'Anderlecht"
                      },
                      {
                        title: "Immeubles à Appartements",
                        desc: "Installation et maintenance de systèmes collectifs et individuels"
                      },
                      {
                        title: "Maisons Unifamiliales",
                        desc: "Solutions adaptées aux maisons traditionnelles anderlechtoises"
                      },
                      {
                        title: "Nouveaux Projets",
                        desc: "Installation dans les nouvelles constructions près d'Erasme et Neerpede"
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
                Témoignages d'Anderlecht
              </h2>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
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
                  Contactez-nous
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
                    <p className="font-semibold">Service 7j/7</p>
                    <p>Intervention rapide à Anderlecht</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm serviceType="Chauffagiste Anderlecht" />
          </div>
        </div>
      </div>
    </div>
  );
}