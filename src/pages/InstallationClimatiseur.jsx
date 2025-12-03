import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Snowflake, Phone, Shield, Zap, Wind } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function InstallationClimatiseur() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Installation de Climatiseur",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chauffagiste Express Bruxelles",
      "telephone": "+32485719251"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bruxelles"
    },
    "description": "Installation professionnelle de climatiseurs muraux LG et Panasonic à Bruxelles. Installation et mise en place comprises."
  };

  const modelsLG = [
    { puissance: "2.6 KW", surface: "15m²", prix: "1600€" },
    { puissance: "3.6 KW", surface: "20m²", prix: "1750€" },
    { puissance: "5 KW", surface: "30m²", prix: "2100€" }
  ];

  const modelsPanasonic = [
    { puissance: "2.6 KW", surface: "15m²", prix: "1600€" },
    { puissance: "3.6 KW", surface: "20m²", prix: "1750€" },
    { puissance: "5 KW", surface: "30m²", prix: "2100€" }
  ];

  const avantagesLG = [
    "Climatiseurs les plus silencieux sur le marché (19 dB)",
    "Compresseur Inverter pour un confort optimal",
    "Commande infrarouge incluse",
    "Filtres 3M micro et antibactérien",
    "Swing 2-voies",
    "Ioniseur Plasmaster",
    "Fonction nocturne",
    "Label énergétique A++/A"
  ];

  const avantagesPanasonic = [
    "Garantie 5 ans compresseur + 3 ans pièces",
    "Fluide R32 : 68% moins d'impact environnemental",
    "Chauffage jusqu'à -15°C",
    "Technologie Inverter pour économies d'énergie",
    "Seulement 20 dB(A) à petite vitesse",
    "Filtre PM pour particules jusqu'à 2.5 microns",
    "Mode Powerful pour refroidissement rapide",
    "Contrôle Internet via Smartphone (option)",
    "Classe énergétique A+/A+"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Installation Climatiseur Bruxelles ⭐ LG & Panasonic dès 1600€ | Pose Comprise"
        description="✅ Installation climatiseur Bruxelles. LG 19dB ultra-silencieux, Panasonic 5 ans garantie. Inverter A++. Installation & mise en service comprises. ☎️ 0487/40.74.07 - Devis gratuit"
        keywords="installation climatiseur bruxelles, climatisation bruxelles, climatiseur lg bruxelles, climatiseur panasonic bruxelles, airco bruxelles, clim réversible, pompe à chaleur, installation climatisation, climatiseur mural bruxelles, climatiseur inverter"
        canonical="https://centrale-chauffagiste.be/installation-climatiseur"
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
            <Snowflake className="w-12 h-12 text-[#f5b82e]" />
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              Installation de <span className="font-bold">Climatiseurs</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            La température est montée de quelques degrés, vous n'en pouvez plus de suffoquer de chaleur dans votre appartement ? Il est temps de vous équiper d'une climatisation pour passer un été agréable !
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <Card className="border-[#f5b82e] bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Alors, certes, à cœur vaillant, rien d'impossible… Mais un <strong>professionnel</strong> vous aidera à garder la tête froide et certainement votre porte-monnaie au chaud en vous évitant les problèmes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Climatiseur LG */}
        <section className="mb-20">
          <Card className="border-l-4 border-l-[#f5b82e] shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0f1b2e] to-[#1a2740] text-white px-8 py-6">
              <div className="flex items-center gap-3 mb-2">
                <Wind className="w-8 h-8 text-[#f5b82e]" />
                <h2 className="text-3xl font-bold">Climatiseur Mural LG</h2>
              </div>
              <p className="text-white/90">Contrôle à distance • Les plus silencieux du marché</p>
            </div>

            <CardContent className="p-8">
              {/* Prix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {modelsLG.map((model, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#f5b82e] p-6 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-2">{model.puissance}</div>
                    <div className="text-lg text-[#0f1b2e] font-semibold mb-2">≃ {model.surface}</div>
                    <div className="text-3xl font-bold text-[#f5b82e]">{model.prix}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:0487407407" className="flex-1">
                  <Button className="w-full bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] font-bold">
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler
                  </Button>
                </a>
                <a href="https://wa.me/32487407407" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                    WhatsApp
                  </Button>
                </a>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Les climatiseurs muraux LG sont les <strong>plus silencieux sur le marché</strong> avec un bruit de fonctionnement intérieur de <strong>19 dB</strong>. Les climatiseurs muraux LG sont munis d'un <strong>compresseur Inverter</strong> qui saura répondre à tous vos besoins en matière de confort.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0f1b2e] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Installation et mise en place comprises dans l'offre
                </h3>
              </div>

              {/* Caractéristiques LG */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#0f1b2e] mb-3 text-lg">Unité Intérieure</h4>
                  <ul className="space-y-2">
                    {avantagesLG.map((avantage, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#f5b82e] flex-shrink-0 mt-1" />
                        <span className="text-sm">{avantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0f1b2e] mb-3 text-lg">Spécifications Techniques</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Modèle :</strong> LG 7030926 / 7031226</p>
                    <p><strong>Capacité frigorifique :</strong> 0.89 - 3.7 KW</p>
                    <p><strong>Capacité calorifique :</strong> 0.89 - 4.10 KW</p>
                    <p><strong>EER / COP :</strong> 3.73 / 3.81</p>
                    <p><strong>SEER / SCOP :</strong> 6.2 / 3.8</p>
                    <p><strong>Débit d'air :</strong> 1620 m³/h</p>
                    <p><strong>Dimensions intérieure :</strong> 285×885×210 mm</p>
                    <p><strong>Dimensions extérieure :</strong> 483×717×230 mm</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Climatiseur Panasonic */}
        <section className="mb-20">
          <Card className="border-l-4 border-l-[#f5b82e] shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0f1b2e] to-[#1a2740] text-white px-8 py-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-[#f5b82e]" />
                <h2 className="text-3xl font-bold">Climatiseur Mural PANASONIC</h2>
              </div>
              <p className="text-white/90">5 ans Garantie compresseur + 3 ans Garantie Pièces</p>
            </div>

            <CardContent className="p-8">
              {/* Prix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {modelsPanasonic.map((model, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#f5b82e] p-6 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-2">{model.puissance}</div>
                    <div className="text-lg text-[#0f1b2e] font-semibold mb-2">≃ {model.surface}</div>
                    <div className="text-3xl font-bold text-[#f5b82e]">{model.prix}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:0487407407" className="flex-1">
                  <Button className="w-full bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] font-bold">
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler
                  </Button>
                </a>
                <a href="https://wa.me/32487407407" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                    WhatsApp
                  </Button>
                </a>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Panasonic et ses solutions de chauffage et climatisation offrent des <strong>performances remarquables</strong>, et vous font faire d'importantes <strong>économies d'énergie</strong>.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0f1b2e] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Installation et mise en place comprises dans l'offre
                </h3>
              </div>

              {/* Caractéristiques Panasonic */}
              <div>
                <h4 className="font-semibold text-[#0f1b2e] mb-4 text-lg">
                  Pompes à chaleur air/air monosplit Mural UZ AU
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-[#0f1b2e] mb-3">Performances et économies</h5>
                    <ul className="space-y-2">
                      {avantagesPanasonic.slice(0, 4).map((avantage, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <Zap className="w-4 h-4 text-[#f5b82e] flex-shrink-0 mt-1" />
                          <span className="text-sm">{avantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-[#0f1b2e] mb-3">Confort</h5>
                    <ul className="space-y-2">
                      {avantagesPanasonic.slice(4).map((avantage, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#f5b82e] flex-shrink-0 mt-1" />
                          <span className="text-sm">{avantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Conforme à la RT 2012</strong> - Idéal pour les constructions neuves. Modèle blocable en mode chaud seul avec accessoire PAW-AC-HEAT-T.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-4">
                Demandez votre devis gratuit
              </h2>
              <p className="text-gray-600">
                Nos experts vous conseilleront sur le modèle le mieux adapté à vos besoins
              </p>
            </div>
            <ContactForm serviceType="Installation de Climatiseur" />
          </div>
        </section>
      </div>
    </div>
  );
}