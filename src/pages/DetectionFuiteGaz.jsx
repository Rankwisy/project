import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '../components/SEO';
import { ArrowLeft, Wind, AlertTriangle, Shield, Clock, Phone, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function DetectionFuiteGaz() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "serviceType": "Détection Fuite de Gaz",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chauffagiste Express Bruxelles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bruxelles",
        "addressCountry": "BE"
      },
      "telephone": "+32485719251",
      "email": "contact@centrale-chauffagiste.be",
      "url": "https://centrale-chauffagiste.be"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bruxelles"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Emergency",
      "availableLanguage": ["French", "Dutch"]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "description": "Détection et réparation de fuites de gaz à Bruxelles. Intervention d'urgence 24/7 par experts agréés.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "89"
    }
  };

  const signes = [
    "Odeur d'œuf pourri ou de soufre",
    "Sifflement près d'une conduite de gaz",
    "Plantes mortes près des conduites",
    "Flammes jaunâtres au lieu de bleues",
    "Condensation excessive sur les fenêtres",
    "Maux de tête ou nausées inexpliqués"
  ];

  const avantages = [
    { icon: <Clock className="w-6 h-6" />, titre: "Intervention urgente", description: "Disponible 24/7 pour urgences gaz" },
    { icon: <Shield className="w-6 h-6" />, titre: "Techniciens certifiés", description: "Agréés pour travaux sur installations gaz" },
    { icon: <Wind className="w-6 h-6" />, titre: "Détection précise", description: "Équipement professionnel de détection" },
    { icon: <CheckCircle className="w-6 h-6" />, titre: "Réparation sûre", description: "Remise en conformité garantie" }
  ];

  const conseils = [
    { titre: "N'allumez rien", description: "Pas de lumière, téléphone, ou appareil électrique" },
    { titre: "Aérez", description: "Ouvrez portes et fenêtres immédiatement" },
    { titre: "Fermez le gaz", description: "Coupez l'arrivée de gaz si accessible" },
    { titre: "Évacuez", description: "Sortez et éloignez-vous du bâtiment" },
    { titre: "Appelez-nous", description: "Contactez-nous depuis l'extérieur" }
  ];

  const temoignages = [
    {
      nom: "François Moreau",
      commune: "Saint-Gilles",
      note: 5,
      texte: "Odeur suspecte détectée dans ma cuisine. L'équipe est intervenue en urgence un samedi, a trouvé et réparé la fuite rapidement. Service impeccable et rassurant."
    },
    {
      nom: "Sarah Peeters",
      commune: "Auderghem",
      note: 5,
      texte: "Contrôle préventif de mon installation gaz. Très professionnel, équipement de pointe. Rassurée de savoir que tout est en ordre."
    },
    {
      nom: "Vincent Lambert",
      commune: "Koekelberg",
      note: 5,
      texte: "Intervention rapide suite à une alarme détecteur de gaz. Fausse alerte mais content d'avoir eu une vérification complète. Technicien compétent."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="🚨 Détection Fuite Gaz Bruxelles 24/7 | Expert Agréé CERGA - Intervention Urgente"
        description="✅ Détection et réparation fuite gaz Bruxelles. Urgence 24/7 par technicien agréé CERGA. Équipement professionnel. Sécurité garantie. ☎️ 0487/40.74.07 - Intervention immédiate"
        canonical="https://centrale-chauffagiste.be/detection-fuite-gaz"
        keywords="détection fuite gaz bruxelles, fuite gaz urgence, réparation fuite gaz, technicien gaz agréé, contrôle installation gaz, odeur gaz bruxelles, expert gaz cerga, urgence gaz 24/7, chauffagiste gaz bruxelles"
        schema={schema}
      />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-16 h-16 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              Détection Fuite de <span className="font-bold">Gaz</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Service d'urgence 24/7 pour la détection et réparation de fuites de gaz. Votre sécurité est notre priorité absolue.
          </p>
        </div>
      </div>

      {/* Alerte urgence */}
      <div className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xl font-semibold mb-2">⚠️ URGENCE GAZ ?</p>
          <p className="mb-3">Si vous suspectez une fuite de gaz, agissez immédiatement :</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:0487407407"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 font-bold rounded hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appelez-nous : 0487/40.74.07
            </a>
            <span className="flex items-center px-6 py-3 bg-red-700 rounded">
              ou composez le 0800 65 0 65 (Sibelga)
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Détection et Réparation Professionnelle de Fuite de Gaz
              </h2>
              <div className="prose prose-lg text-gray-700 font-light leading-relaxed space-y-4">
                <p>
                  Une <strong>fuite de gaz</strong> est une situation d'urgence qui nécessite une intervention immédiate. Notre équipe de techniciens certifiés et agréés intervient rapidement pour détecter, localiser et réparer toute fuite de gaz.
                </p>
                <p>
                  Nous utilisons des équipements de détection professionnels de haute précision pour identifier les fuites, même les plus minimes, et nous procédons aux réparations conformément aux normes de sécurité les plus strictes.
                </p>
                <p>
                  Au-delà des urgences, nous proposons également des contrôles préventifs de vos installations gaz pour garantir votre sécurité au quotidien.
                </p>
              </div>
            </section>

            {/* Signes d'alerte */}
            <section>
              <h2 className="text-3xl font-bold text-[#0f1b2e] mb-6">
                Comment Reconnaître une Fuite de Gaz ? Signes d'Alerte
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {signes.map((signe, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-white border-l-4 border-l-red-500 hover:shadow-md transition-shadow">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{signe}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Que faire en cas de fuite */}
            <section className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border-l-4 border-l-red-500">
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                Procédure d'Urgence : Que Faire en Cas de Fuite de Gaz ?
              </h2>
              <div className="space-y-4">
                {conseils.map((conseil, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded">
                    <div className="bg-red-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f1b2e] mb-1">{conseil.titre}</h3>
                      <p className="text-gray-600 text-sm">{conseil.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Avantages */}
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Notre expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {avantages.map((avantage, index) => (
                  <Card key={index} className="border-l-4 border-l-[#f5b82e] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-[#f5b82e] mt-1">
                          {avantage.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#0f1b2e] mb-1">
                            {avantage.titre}
                          </h3>
                          <p className="text-gray-600 text-sm font-light">
                            {avantage.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Témoignages */}
            <section>
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
                Témoignages clients
              </h2>
              <div className="space-y-6">
                {temoignages.map((temoignage, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <span key={i} className="text-[#f5b82e] text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        "{temoignage.texte}"
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-[#0f1b2e]">{temoignage.nom}</span>
                        <span className="text-gray-500">{temoignage.commune}</span>
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
              <Card className="border-red-500 bg-gradient-to-br from-red-50 to-white">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-red-600 mb-2">URGENCE GAZ</h3>
                  <p className="text-gray-700 mb-4 font-light text-sm">
                    Intervention 24/7 pour fuites de gaz
                  </p>
                  <a 
                    href="tel:0487407407"
                    className="inline-block bg-red-600 text-white px-6 py-3 font-bold rounded hover:bg-red-700 transition-colors w-full mb-3"
                  >
                    0487/40.74.07
                  </a>
                  <p className="text-xs text-gray-600">
                    Ou Sibelga : 0800 65 0 65
                  </p>
                </CardContent>
              </Card>

              <ContactForm serviceType="Détection Fuite de Gaz" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}