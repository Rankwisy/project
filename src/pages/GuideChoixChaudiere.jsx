import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Compass } from 'lucide-react';
import GuideChoixChaudiere from '../components/GuideChoixChaudiere';
import SEO from '../components/SEO';

export default function GuideChoixChaudierePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Guide de Choix de Chaudière - Chauffagiste Express",
    "description": "Trouvez la chaudière idéale selon vos besoins, votre budget et votre logement",
    "url": "https://centrale-chauffagiste.be/guide-choix-chaudiere",
    "applicationCategory": "UtilitiesApplication"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEO 
        title="Guide de Choix de Chaudière | Trouvez le Modèle Idéal - Chauffagiste Express"
        description="Outil interactif gratuit pour choisir la chaudière parfaite. Recommandations personnalisées selon votre logement, budget et besoins."
        canonical="https://centrale-chauffagiste.be/guide-choix-chaudiere"
        keywords="choisir chaudière, comparatif chaudière, quelle chaudière choisir, guide achat chaudière"
        schema={schema}
      />

      <div className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#f5b82e] hover:text-[#ffcf4d] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Compass className="w-12 h-12 text-[#f5b82e]" />
            <h1 className="text-4xl md:text-5xl font-light tracking-wide font-playfair">
              Guide de Choix de <span className="font-bold italic">Chaudière</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl font-cormorant italic">
            Trouvez la chaudière parfaite pour votre logement avec nos recommandations d'experts
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <GuideChoixChaudiere />

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0f1b2e] mb-6 font-playfair">
            Pourquoi utiliser notre guide de choix ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#0f1b2e] mb-3 font-playfair">Recommandations personnalisées</h3>
              <p className="text-gray-700 font-cormorant">
                Notre algorithme analyse vos besoins spécifiques pour vous proposer les modèles 
                les plus adaptés à votre situation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0f1b2e] mb-3 font-playfair">Expertise professionnelle</h3>
              <p className="text-gray-700 font-cormorant">
                Basé sur plus de 15 ans d'expérience dans l'installation de chaudières 
                à Bruxelles et en Belgique.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0f1b2e] mb-3 font-playfair">Comparaison objective</h3>
              <p className="text-gray-700 font-cormorant">
                Nous comparons toutes les grandes marques pour vous offrir un choix 
                impartial et transparent.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0f1b2e] mb-3 font-playfair">Gain de temps</h3>
              <p className="text-gray-700 font-cormorant">
                En quelques minutes, obtenez une sélection ciblée plutôt que de parcourir 
                des dizaines de modèles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}