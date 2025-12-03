import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, CheckCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import InteractiveMap from '../components/InteractiveMap';

export default function ZonesIntervention() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Chauffagiste",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chauffagiste Express Bruxelles"
    },
    "areaServed": [
      { "@type": "City", "name": "Bruxelles" },
      { "@type": "City", "name": "Anderlecht" },
      { "@type": "City", "name": "Schaerbeek" },
      { "@type": "City", "name": "Ixelles" },
      { "@type": "City", "name": "Uccle" },
      { "@type": "City", "name": "Etterbeek" },
      { "@type": "City", "name": "Molenbeek-Saint-Jean" },
      { "@type": "City", "name": "Saint-Gilles" },
      { "@type": "City", "name": "Jette" },
      { "@type": "City", "name": "Koekelberg" },
      { "@type": "City", "name": "Forest" },
      { "@type": "City", "name": "Auderghem" },
      { "@type": "City", "name": "Evere" },
      { "@type": "City", "name": "Ganshoren" },
      { "@type": "City", "name": "Woluwe-Saint-Lambert" },
      { "@type": "City", "name": "Woluwe-Saint-Pierre" },
      { "@type": "City", "name": "Watermael-Boitsfort" },
      { "@type": "City", "name": "Berchem-Sainte-Agathe" },
      { "@type": "City", "name": "Saint-Josse-ten-Noode" }
    ]
  };

  const communes = [
    {
      nom: "Bruxelles-Ville",
      description: "Centre historique et administratif",
      quartiers: ["Pentagone", "Quartier Européen", "Quartier Royal", "Laeken", "Neder-Over-Heembeek", "Haren"]
    },
    {
      nom: "Anderlecht",
      description: "Commune dynamique et multiculturelle",
      quartiers: ["Cureghem", "Midi", "Scheut", "Vogelenzang"]
    },
    {
      nom: "Schaerbeek",
      description: "Architecture Art Nouveau remarquable",
      quartiers: ["Helmet", "Dailly", "Meiser", "Place Colignon", "Pavillon"]
    },
    {
      nom: "Ixelles",
      description: "Quartier résidentiel prisé",
      quartiers: ["Matonge", "Flagey", "Châtelain", "Université", "Cimetière d'Ixelles"]
    },
    {
      nom: "Uccle",
      description: "Commune verdoyante et résidentielle",
      quartiers: ["Observatoire", "Saint-Job", "Dieweg", "Calevoet", "Stalle"]
    },
    {
      nom: "Etterbeek",
      description: "Entre institutions européennes et quartiers résidentiels",
      quartiers: ["Cinquantenaire", "Germoir", "Chasse", "Maelbeek"]
    },
    {
      nom: "Molenbeek-Saint-Jean",
      description: "Commune en pleine transformation",
      quartiers: ["Maritime", "Karreveld", "Osseghem", "Mettewie"]
    },
    {
      nom: "Saint-Gilles",
      description: "Quartier bohème et multiculturel",
      quartiers: ["Parvis", "Barrière", "Ma Campagne", "Prison"]
    },
    {
      nom: "Jette",
      description: "Commune résidentielle calme",
      quartiers: ["Magritte", "Esseghem", "Boule", "Miroir"]
    },
    {
      nom: "Koekelberg",
      description: "Plus petite commune de Bruxelles",
      quartiers: ["Basilique", "Simonis", "Karreveld"]
    },
    {
      nom: "Forest",
      description: "Entre verdure et urbanité",
      quartiers: ["Altitude 100", "Abbaye", "Bempt", "Saint-Antoine"]
    },
    {
      nom: "Auderghem",
      description: "Commune verte et familiale",
      quartiers: ["Rouge-Cloître", "Blankedelle", "Transvaal", "Bourgeois"]
    },
    {
      nom: "Evere",
      description: "Proche de l'aéroport",
      quartiers: ["Centre", "Conscience", "Saint-Vincent", "Paduwa"]
    },
    {
      nom: "Ganshoren",
      description: "Commune paisible et résidentielle",
      quartiers: ["Sippelberg", "Keizer Karel", "Parc Reine Astrid"]
    },
    {
      nom: "Woluwe-Saint-Lambert",
      description: "Quartiers résidentiels et commerces",
      quartiers: ["Tomberg", "Roodebeek", "Joli-Bois", "Hof-ten-Berg"]
    },
    {
      nom: "Woluwe-Saint-Pierre",
      description: "Commune huppée et verdoyante",
      quartiers: ["Stockel", "Kapelleveld", "Parc de Woluwe", "Chien Vert"]
    },
    {
      nom: "Watermael-Boitsfort",
      description: "En bordure de la Forêt de Soignes",
      quartiers: ["Dries", "Keym", "Tenreuken", "Chat"]
    },
    {
      nom: "Berchem-Sainte-Agathe",
      description: "Commune calme et familiale",
      quartiers: ["Cité Moderne", "Sippelberg", "Keyenbempt"]
    },
    {
      nom: "Saint-Josse-ten-Noode",
      description: "Plus petite mais plus dense",
      quartiers: ["Madou", "Botanique", "Congrès", "Saint-Josse"]
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Zones d'Intervention - Chauffagiste dans les 19 Communes de Bruxelles"
        description="Chauffagiste Express intervient dans toutes les communes de Bruxelles : Ixelles, Uccle, Schaerbeek, Anderlecht et 15 autres. Service rapide 7j/7."
        canonical="https://centrale-chauffagiste.be/zones-intervention"
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
            Zones d'<span className="font-bold">Intervention</span>
          </h1>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Nous intervenons dans toute la Région de Bruxelles-Capitale et ses 19 communes
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Map Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-[#f5b82e] mx-auto mb-4" />
            <h2 className="text-4xl font-semibold text-[#0f1b2e] mb-4">
              Notre Zone de Couverture
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Intervention rapide dans toute la région bruxelloise. Nous connaissons parfaitement chaque commune et ses spécificités.
            </p>
          </div>

          <Card className="border-[#f5b82e] shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <InteractiveMap height="600px" showAllCommunes={true} />
              <div className="p-4 bg-gradient-to-r from-[#0f1b2e] to-[#1a2740] text-white text-center">
                <p className="text-base font-light">
                  📍 Cliquez sur un marqueur pour voir les services disponibles dans chaque commune
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-light">
              <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
              Rayon d'intervention : Toute la Région de Bruxelles-Capitale
            </p>
          </div>
        </section>

        {/* Communes List */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0f1b2e] mb-4">
              Les 19 Communes de Bruxelles
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Service professionnel dans chaque commune et leurs quartiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communes.map((commune, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-l-[#f5b82e] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#f5b82e] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#0f1b2e] mb-1">
                        {commune.nom}
                      </h3>
                      <p className="text-sm text-gray-600 font-light">
                        {commune.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      Quartiers desservis :
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {commune.quartiers.map((quartier, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {quartier}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Coverage */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6">
              Une Connaissance Locale Approfondie
            </h2>
            <div className="space-y-4 text-gray-700 font-light leading-relaxed">
              <p>
                Fort de plus de 15 ans d'expérience à Bruxelles, notre équipe connaît parfaitement les spécificités de chaque commune et quartier. Des immeubles Art Nouveau de Schaerbeek aux maisons de maître d'Uccle, en passant par les appartements modernes de Woluwe.
              </p>
              <p>
                Cette expertise locale nous permet d'intervenir rapidement et efficacement, en comprenant les contraintes architecturales et techniques propres à chaque type de bâtiment bruxellois.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-[#f5b82e] mb-2">19</div>
                  <div className="text-sm text-gray-600">Communes desservies</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-[#f5b82e] mb-2">100+</div>
                  <div className="text-sm text-gray-600">Quartiers couverts</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-[#f5b82e] mb-2">7j/7</div>
                  <div className="text-sm text-gray-600">Disponibilité</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-light mb-4">
            Besoin d'un chauffagiste près de chez vous ?
          </h2>
          <p className="text-xl text-white/90 font-light mb-8">
            Où que vous soyez à Bruxelles, nous intervenons rapidement
          </p>
          <a 
            href="tel:0487407407"
            className="inline-flex items-center gap-3 bg-[#f5b82e] text-[#0f1b2e] px-10 py-4 font-bold text-lg hover:bg-[#ffcf4d] hover:shadow-2xl transition-all"
          >
            <Phone className="w-6 h-6" />
            Appelez-nous : 0487 407 407
          </a>
        </div>
      </section>
    </div>
  );
}