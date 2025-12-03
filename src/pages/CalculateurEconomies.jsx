import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Info } from 'lucide-react';
import EconomiesCalculator from '../components/EconomiesCalculator';
import SEO from '../components/SEO';

export default function CalculateurEconomies() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculateur d'Économies d'Énergie - Chauffage",
    "description": "Calculez vos économies potentielles en changeant votre chaudière. Estimez vos gains financiers et environnementaux.",
    "url": "https://centrale-chauffagiste.be/calculateur-economies",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEO 
        title="Calculateur d'Économies d'Énergie | Estimez Vos Gains - Chauffagiste Express"
        description="Calculez gratuitement vos économies potentielles en installant une nouvelle chaudière à condensation. Estimez vos gains financiers et écologiques."
        canonical="https://centrale-chauffagiste.be/calculateur-economies"
        keywords="calculateur économies chauffage, estimation économies chaudière, calcul rendement chaudière condensation"
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
            Calculateur d'<span className="font-bold italic">Économies d'Énergie</span>
          </h1>
          <p className="text-xl text-white/90 font-light max-w-3xl font-cormorant italic">
            Découvrez combien vous pourriez économiser en remplaçant votre ancienne chaudière
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-blue-50 border-l-4 border-l-blue-500 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2 font-playfair">
                Comment fonctionne ce calculateur ?
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed font-cormorant">
                Notre outil calcule vos économies potentielles en comparant votre installation actuelle 
                avec une chaudière à condensation moderne. Les calculs sont basés sur des moyennes 
                réelles et prennent en compte le type de chaudière, son âge, et votre consommation actuelle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <EconomiesCalculator />
      </div>

      {/* Additional Info */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0f1b2e] mb-6 font-playfair">
            Pourquoi remplacer votre ancienne chaudière ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-[#0f1b2e] mb-3 font-playfair">
                Les chaudières anciennes (15+ ans)
              </h3>
              <ul className="space-y-2 text-sm font-cormorant">
                <li>• Rendement de 70-80% seulement</li>
                <li>• Consommation excessive de gaz</li>
                <li>• Risques de pannes fréquentes</li>
                <li>• Factures énergétiques élevées</li>
                <li>• Impact environnemental important</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#0f1b2e] mb-3">
                Les chaudières à condensation modernes
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Rendement jusqu'à 109%</li>
                <li>• Économies de 25 à 40% sur la facture</li>
                <li>• Fiabilité et longévité accrues</li>
                <li>• Confort de chauffage optimal</li>
                <li>• Réduction des émissions de CO₂</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}