import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, CheckCircle, Wrench, Clock, Star } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ChauffagisteUccle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffagiste Express Uccle",
    "image": "https://images.unsplash.com/photo-1581405459834-75c5f33acee2",
    "description": "Chauffagiste expert à Uccle. Installation, dépannage et entretien de chaudières. Service rapide dans tous les quartiers d'Uccle.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Uccle",
      "addressLocality": "Uccle",
      "postalCode": "1180",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.7993",
      "longitude": "4.3389"
    },
    "telephone": "+32487407407",
    "email": "contact@centrale-chauffagiste.be",
    "url": "https://centrale-chauffagiste.be/chauffagiste-uccle",
    "priceRange": "€€",
    "areaServed": {
      "@type": "City",
      "name": "Uccle"
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
      "reviewCount": "92"
    }
  };

  const quartiers = [
    "Observatoire", "Dieweg", "Saint-Job", "Calevoet", "Stalle", "Melkriek",
    "Fort-Jaco", "Avijl", "Verrewinkel", "Messidor"
  ];

  const services = [
    { icon: <Wrench className="w-6 h-6" />, titre: "Installation Chaudière", description: "Installation de chaudières dans les maisons de maître d'Uccle" },
    { icon: <Clock className="w-6 h-6" />, titre: "Dépannage 7j/7", description: "Intervention d'urgence rapide partout à Uccle" },
    { icon: <CheckCircle className="w-6 h-6" />, titre: "Entretien Chaudière", description: "Entretien annuel obligatoire avec attestation" }
  ];

  const temoignages = [
    {
      nom: "Philippe Van der Linden",
      quartier: "Observatoire",
      note: 5,
      texte: "Remplacement de ma vieille chaudière dans ma maison à l'Observatoire. L'équipe a été très professionnelle et respectueuse de mon intérieur. Installation parfaite !"
    },
    {
      nom: "Anne-Marie Lejeune",
      quartier: "Saint-Job",
      note: 5,
      texte: "Entretien annuel de ma chaudière à Saint-Job. Service impeccable, technicien très compétent. Je recommande cette entreprise à tous mes voisins !"
    },
    {
      nom: "François Dubois",
      quartier: "Dieweg",
      note: 5,
      texte: "Dépannage urgent le dimanche au Dieweg. Intervention très rapide malgré le weekend. Problème résolu efficacement. Excellent service !"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Uccle | Installation & Dépannage Chaudière - Service Expert 7j/7"
        description="Chauffagiste à Uccle (Observatoire, Saint-Job, Dieweg). Installation chaudière, dépannage urgent, entretien. Expert maisons de maître ☎️ 0487/40.74.07"
        canonical="https://centrale-chauffagiste.be/chauffagiste-uccle"
        keywords="chauffagiste uccle, chauffagiste observatoire, chauffagiste saint-job, installation chaudière uccle, dépannage chaudière uccle, chauffagiste dieweg, chauffagiste calevoet, chauffagiste fort jaco, plombier uccle, chauffagiste maison de maitre, chauffagiste villa uccle, chauffagiste stalle, chauffagiste avijl, chauffage grande maison uccle"
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
              Chauffagiste <span className="font-bold italic">Uccle</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl font-cormorant italic">
            Expert en installation, dépannage et entretien de chaudières à Uccle. Spécialiste des maisons de maître et villas.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                Chauffagiste Expert à Uccle
              </h2>
              <div className="prose prose-lg text-gray-700 font-light leading-relaxed space-y-4 font-cormorant">
                <p>
                  <strong>Chauffagiste Express</strong> est votre partenaire de confiance à <strong>Uccle</strong> pour tous vos besoins en chauffage. Nous intervenons dans tous les quartiers : près de l'<strong>Observatoire Royal</strong>, à <strong>Saint-Job</strong>, dans les avenues résidentielles du <strong>Dieweg</strong>, à <strong>Calevoet</strong>, <strong>Fort-Jaco</strong>, <strong>Stalle</strong>, et jusqu'au <strong>Plateau Avijl</strong>.
                </p>
                <p>
                  Uccle, commune la plus verte de Bruxelles, se caractérise par ses magnifiques <strong>maisons de maître 1900-1930</strong>, ses <strong>villas Art Déco</strong>, ses <strong>propriétés de standing avec jardins</strong> et ses <strong>bâtisses de caractère</strong>. Notre équipe a l'expertise nécessaire pour travailler sur ces bâtiments prestigieux : <strong>grandes surfaces (200-500m²)</strong>, <strong>plafonds hauts (3-4m)</strong>, <strong>multiples étages</strong>, <strong>annexes (véranda, pool house)</strong>, et systèmes de chauffage complexes avec <strong>zones multiples</strong>.
                </p>
                <p>
                  Nous connaissons parfaitement les spécificités d'Uccle : <strong>accès par allées privées</strong>, <strong>codes portails</strong>, <strong>contraintes patrimoniales</strong> (nombreux bâtiments classés), respect des <strong>arbres remarquables</strong> lors du passage de conduits, et besoins en chauffage adaptés aux <strong>volumes importants</strong> et <strong>belles hauteurs sous plafond</strong>.
                </p>
                <p>
                  Des quartiers comme <strong>Observatoire</strong> (près du Parc Wolvendael), <strong>Fond'Roy</strong>, <strong>Prince d'Orange</strong> et les avenues calmes du <strong>Vivier d'Oie</strong> nécessitent une approche spécialisée. Nous installons régulièrement des <strong>chaudières haute puissance (30-50 kW)</strong> adaptées à ces grandes demeures.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Zones d'Intervention à Uccle
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

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Nos Services à Uccle
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
                Expertise Spécifique pour Uccle
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Spécialiste Maisons Bourgeoises & Villas</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      <strong>Maisons de maître 1900-1930</strong>, <strong>villas modernistes</strong>, <strong>hôtels particuliers</strong> : expertise sur systèmes multi-zones, <strong>chauffage par le sol</strong>, <strong>radiateurs en fonte d'époque</strong>, et chaudières haute puissance (35-50 kW)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Points de Repère Uccle</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Que vous soyez près du <strong>Parc Wolvendael</strong>, de la <strong>Rue Vanderkindere</strong>, du <strong>Lycée Français</strong>, de la <strong>Gare de Calevoet</strong>, ou du <strong>Bois de la Cambre</strong>, nous connaissons Uccle comme notre poche
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Patrimoine Classé & Bâtiments Protégés</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      Installation <strong>respectueuse des contraintes urbanistiques</strong>, <strong>conduits invisibles</strong>, <strong>ventouses discrètes</strong>. Expérience avec les <strong>maisons Art Nouveau/Art Déco classées</strong> d'Uccle
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f1b2e] mb-1 font-playfair">Installations Complexes Multi-Étages</h3>
                    <p className="text-gray-700 font-light font-cormorant">
                      <strong>Maisons à 3-4 niveaux</strong> + sous-sol : calcul précis pression eau, <strong>vase d'expansion adapté</strong>, <strong>circulateurs renforcés</strong>. Solutions pour <strong>combles aménagés</strong> et <strong>extensions récentes</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Témoignages de Clients à Uccle
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
                          {temoignage.quartier}, Uccle
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
                  <h3 className="text-xl font-semibold mb-2">Service Uccle</h3>
                  <p className="text-white/90 mb-4 font-light text-sm">
                    Intervention rapide 7j/7
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

              <ContactForm serviceType="Chauffagiste Uccle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}