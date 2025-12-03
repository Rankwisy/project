import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, CheckCircle, Wrench, Clock, Star } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ChauffagisteIxelles() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Ixelles",
    "image": "https://images.unsplash.com/photo-1581405459834-75c5f33acee2",
    "description": "Chauffagiste expert à Ixelles. Installation, dépannage et entretien de chaudières. Intervention rapide dans tous les quartiers d'Ixelles.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ixelles",
      "addressLocality": "Ixelles",
      "postalCode": "1050",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8225",
      "longitude": "4.3694"
    },
    "telephone": "+32487407407",
    "email": "contact@centrale-chauffagiste.be",
    "url": "https://centrale-chauffagiste.be/chauffagiste-ixelles",
    "priceRange": "€€",
    "areaServed": {
      "@type": "City",
      "name": "Ixelles"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87"
    }
  };

  const quartiers = [
    "Matonge", "Flagey", "Châtelain", "Étangs d'Ixelles", "Abbaye", "Malibran",
    "Louise", "Bailli", "Tenbosch", "Université"
  ];

  const services = [
    { icon: <Wrench className="w-6 h-6" />, titre: "Installation Chaudière", description: "Installation complète de chaudières à condensation à Ixelles" },
    { icon: <Clock className="w-6 h-6" />, titre: "Dépannage Urgent", description: "Intervention rapide 7j/7 pour tous problèmes de chauffage" },
    { icon: <CheckCircle className="w-6 h-6" />, titre: "Entretien Annuel", description: "Entretien obligatoire avec attestation conforme" }
  ];

  const temoignages = [
    {
      nom: "Sophie Delacroix",
      quartier: "Flagey",
      note: 5,
      texte: "Installation de ma nouvelle chaudière Vaillant à Flagey. Service impeccable, équipe très professionnelle. La pose a été réalisée en une journée comme promis."
    },
    {
      nom: "Marc Dubois",
      quartier: "Châtelain",
      note: 5,
      texte: "Dépannage urgent un dimanche au Châtelain. Le chauffagiste est arrivé en moins d'une heure. Problème résolu rapidement. Je recommande vivement !"
    },
    {
      nom: "Claire Fontaine",
      quartier: "Matonge",
      note: 5,
      texte: "Entretien annuel de ma chaudière à Matonge. Technicien ponctuel et compétent. Rapport détaillé et conseils précieux. Service au top !"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="🔥 Chauffagiste Ixelles (Flagey, Châtelain, Matonge) | Dépannage 24/7 - Expert Local"
        description="✅ Chauffagiste expert Ixelles : Flagey, Châtelain, Matonge, Louise, Tenbosch. Installation chaudière, dépannage urgent 7j/7. Spécialiste Art Nouveau. ☎️ 0487/40.74.07 - Devis gratuit"
        canonical="https://centrale-chauffagiste.be/chauffagiste-ixelles"
        keywords="chauffagiste ixelles, chauffagiste flagey, chauffagiste châtelain, installation chaudière ixelles, dépannage chaudière ixelles, chauffagiste matonge, chauffagiste avenue louise, plombier ixelles, chauffagiste étangs ixelles, chauffagiste tenbosch, chauffagiste abbaye ixelles, chauffagiste bailli, chaudière art nouveau ixelles, chauffagiste ulb"
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
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="w-12 h-12 text-[#f5b82e]" />
            <h1 className="text-5xl md:text-6xl font-light tracking-wide font-playfair">
              Chauffagiste <span className="font-bold italic">Ixelles</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl font-cormorant italic">
            Votre expert en installation, dépannage et entretien de chaudières à Ixelles. Service rapide dans tous les quartiers.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Votre Chauffagiste de Confiance à Ixelles
              </h2>
              <div className="prose prose-lg text-gray-700 font-light leading-relaxed space-y-4 font-cormorant">
                <p>
                  <strong>Chauffagiste Express</strong> intervient dans toute la commune d'<strong>Ixelles</strong> pour tous vos besoins en chauffage. Que vous habitiez près de la <strong>Place Flagey</strong>, dans les rues commerçantes du <strong>Châtelain</strong>, dans le quartier animé de <strong>Matonge</strong>, aux abords des <strong>Étangs d'Ixelles</strong>, ou près de l'<strong>Avenue Louise</strong>, nous sommes à votre service.
                </p>
                <p>
                  Notre parfaite connaissance d'Ixelles et de ses spécificités architecturales nous permet d'adapter nos interventions à chaque type de bâtiment : <strong>immeubles Art Nouveau</strong> des boulevards, <strong>maisons de maître</strong> du quartier Tenbosch, <strong>appartements modernes</strong> près de Flagey, <strong>copropriétés récentes</strong> de l'Abbaye, ou encore <strong>bâtiments historiques</strong> du centre d'Ixelles.
                </p>
                <p>
                  Nous intervenons rapidement à Ixelles, généralement dans l'heure qui suit votre appel pour les urgences. Notre équipe connaît parfaitement les accès et le stationnement dans chaque quartier : des ruelles étroites de Matonge aux grandes avenues comme l'<strong>Avenue de la Couronne</strong> et l'<strong>Avenue Louise</strong>.
                </p>
                <p>
                  Ixelles étant une commune très cosmopolite avec des bâtiments aux systèmes de chauffage variés (collectif, individuel, gaz, mazout), nous avons l'expertise pour tous les types d'installations. Du studio étudiant à la grande <strong>maison familiale à étages</strong>, nous dimensionnons et installons des solutions adaptées.
                </p>
              </div>
            </section>

            {/* Quartiers */}
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Nous Intervenons dans Tous les Quartiers d'Ixelles
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {quartiers.map((quartier, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#f5b82e]/10 to-white border-l-4 border-l-[#f5b82e] rounded"
                  >
                    <MapPin className="w-4 h-4 text-[#f5b82e] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{quartier}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Nos Services à Ixelles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-[#f5b82e] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-[#f5b82e] mb-4">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold text-[#0f1b2e] mb-2 font-playfair">
                        {service.titre}
                      </h3>
                      <p className="text-gray-600 text-sm font-light font-cormorant">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Spécificités Ixelles */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Pourquoi Choisir un Chauffagiste Local à Ixelles ?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Expertise Architectures Ixelloises</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Du <strong>patrimoine Art Nouveau</strong> (façades Victor Horta) aux <strong>immeubles années 30</strong> de Flagey, nous maîtrisons toutes les contraintes : plafonds hauts, moulures à préserver, caves voûtées pour chaudières
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Points de Repère Locaux</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Que vous soyez près du <strong>Parvis de la Trinité</strong>, de la <strong>Maison Communale</strong>, du <strong>Cimetière d'Ixelles</strong> ou de l'<strong>ULB</strong>, nous vous trouvons facilement et rapidement
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Gestion Copropriétés</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Expérience avec les <strong>grandes copropriétés</strong> typiques d'Ixelles : gestion syndic, accès codes, parking résidents. Nous connaissons les règlements et procédures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Quartiers Étudiants</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Solutions adaptées aux <strong>petites surfaces</strong> (studios, kots) près de l'ULB, avec installations compactes et économiques pour locataires
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Témoignages */}
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Avis de Nos Clients à Ixelles
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
                      <p className="text-gray-700 italic mb-4 leading-relaxed font-cormorant">
                        "{temoignage.texte}"
                      </p>
                      <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                        <span className="font-semibold text-[#0f1b2e]">{temoignage.nom}</span>
                        <span className="text-gray-500 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {temoignage.quartier}, Ixelles
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card className="border-[#f5b82e] bg-gradient-to-br from-[#0f1b2e] to-[#1a2740] text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-[#f5b82e] mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Intervention Rapide</h3>
                  <p className="text-white/90 mb-4 font-light text-sm">
                    Disponible 7j/7 à Ixelles
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

              <ContactForm serviceType="Chauffagiste Ixelles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}