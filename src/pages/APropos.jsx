import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Award, Users, MapPin, Clock, CheckCircle, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

export default function APropos() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express - Centrale Chauffagiste",
    "image": "https://images.unsplash.com/photo-1581405459834-75c5f33acee2",
    "description": "Expert en installation, dépannage et entretien de chaudières à Bruxelles. Service professionnel disponible 7j/7.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bruxelles",
      "addressRegion": "Région de Bruxelles-Capitale",
      "addressCountry": "BE"
    },
    "telephone": "+32487407407",
    "priceRange": "$$",
    "areaServed": [
      "Bruxelles", "Anderlecht", "Schaerbeek", "Ixelles", "Etterbeek", "Molenbeek",
      "Saint-Gilles", "Uccle", "Jette", "Koekelberg", "Forest", "Auderghem",
      "Evere", "Ganshoren", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre",
      "Watermael-Boitsfort", "Berchem-Sainte-Agathe", "Saint-Josse-ten-Noode"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  const valeurs = [
    { icon: <Award className="w-8 h-8" />, titre: "Excellence", description: "Plus de 15 ans d'expertise en installation et dépannage de chaudières" },
    { icon: <Users className="w-8 h-8" />, titre: "Proximité", description: "Une équipe locale qui connaît parfaitement Bruxelles et ses 19 communes" },
    { icon: <Clock className="w-8 h-8" />, titre: "Réactivité", description: "Interventions rapides 7j/7, y compris en cas d'urgence" },
    { icon: <CheckCircle className="w-8 h-8" />, titre: "Transparence", description: "Devis clairs, pas de frais cachés, paiement après travaux" }
  ];

  const certifications = [
    "Techniciens certifiés gaz et mazout",
    "Agréés par les principales marques",
    "Formation continue obligatoire",
    "Assurance responsabilité civile",
    "Conformité aux normes belges"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="À Propos - Chauffagiste Express Bruxelles | Expert en Chauffage depuis 2008"
        description="Découvrez Chauffagiste Express, votre expert en installation, dépannage et entretien de chaudières à Bruxelles. Plus de 15 ans d'expérience, service 7j/7."
        canonical="https://centrale-chauffagiste.be/a-propos"
        keywords="chauffagiste bruxelles expérience, entreprise chauffage certifiée, expert chaudière bruxelles, histoire chauffagiste express"
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
          <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
            À Propos de <span className="font-bold">Chauffagiste Express</span>
          </h1>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Votre partenaire de confiance pour tous vos besoins en chauffage à Bruxelles
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Notre Histoire */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#0f1b2e] mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Depuis plus de <strong>15 ans</strong>, Chauffagiste Express accompagne les particuliers et professionnels de Bruxelles dans l'installation, l'entretien et le dépannage de leurs systèmes de chauffage.
                </p>
                <p>
                  Née de la passion pour le métier de chauffagiste et d'un engagement envers la qualité de service, notre entreprise s'est rapidement imposée comme une référence dans toute la région bruxelloise.
                </p>
                <p>
                  Aujourd'hui, nous faisons partie du réseau <strong>Centrale Chauffagiste</strong>, ce qui nous permet de combiner notre expertise locale avec des ressources plus étendues pour mieux vous servir.
                </p>
                <p>
                  Notre connaissance approfondie de Bruxelles et de ses 19 communes nous permet d'intervenir rapidement partout où vous en avez besoin, avec une compréhension unique des spécificités de chaque quartier.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070"
                alt="Équipe Chauffagiste Express Bruxelles"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#f5b82e] text-[#0f1b2e] p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm font-semibold">Années d'expérience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0f1b2e] mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Ce qui guide notre travail au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <Card key={index} className="border-t-4 border-t-[#f5b82e] hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-[#f5b82e] flex justify-center mb-4">
                    {valeur.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f1b2e] mb-3">
                    {valeur.titre}
                  </h3>
                  <p className="text-gray-600 font-light">
                    {valeur.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Notre Expertise Locale */}
        <section className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-lg">
          <div className="flex items-start gap-6">
            <MapPin className="w-12 h-12 text-[#f5b82e] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-4">
                Une Expertise Locale Incomparable
              </h2>
              <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                <p>
                  Basés à Bruxelles, nous connaissons parfaitement les spécificités de chaque commune : des immeubles Art Nouveau d'Ixelles aux maisons de maître d'Uccle, en passant par les appartements modernes de Woluwe.
                </p>
                <p>
                  Cette connaissance approfondie nous permet d'adapter nos interventions aux contraintes architecturales et techniques propres à chaque type de bâtiment bruxellois.
                </p>
                <p>
                  Nous intervenons quotidiennement dans les <strong>19 communes de Bruxelles</strong> et connaissons les meilleurs itinéraires pour arriver chez vous rapidement, même aux heures de pointe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-8 text-center">
            Nos Certifications et Agréments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-6 bg-gradient-to-r from-green-50 to-white border-l-4 border-l-green-500 rounded hover:shadow-lg transition-shadow"
              >
                <Wrench className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Marques */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-8">
            Marques Partenaires
          </h2>
          <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Nous sommes agréés et formés par les plus grandes marques de chaudières pour vous garantir un service d'excellence
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Vaillant", "Bulex", "Viessmann", "Buderus", "Junkers", "ACV", "Chappée", "Saunier Duval"].map((brand, index) => (
              <div 
                key={index}
                className="bg-white px-8 py-4 border-2 border-gray-200 font-bold text-[#0f1b2e] hover:border-[#f5b82e] hover:shadow-lg transition-all"
              >
                {brand}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-light mb-4">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-xl text-white/90 font-light mb-8">
            Contactez-nous pour tous vos besoins en chauffage à Bruxelles
          </p>
          <a 
            href="tel:0487407407"
            className="inline-flex items-center gap-3 bg-[#f5b82e] text-[#0f1b2e] px-10 py-4 font-bold text-lg hover:bg-[#ffcf4d] hover:shadow-2xl transition-all"
          >
            Appelez-nous : 0487/40.74.07
          </a>
        </div>
      </section>
    </div>
  );
}