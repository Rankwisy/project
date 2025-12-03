import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Stethoscope } from 'lucide-react';
import DiagnosticChaudiere from '../components/DiagnosticChaudiere';
import SEO from '../components/SEO';

export default function DiagnosticChaudierePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Diagnostic de Chaudière - Chauffagiste Express",
    "description": "Outil interactif pour diagnostiquer les problèmes de votre chaudière et identifier les solutions",
    "url": "https://centrale-chauffagiste.be/diagnostic-chaudiere",
    "applicationCategory": "UtilitiesApplication"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEO 
        title="Diagnostic de Chaudière en Ligne | Identifiez Vos Problèmes - Chauffagiste Express"
        description="Outil gratuit de diagnostic pour identifier les pannes de votre chaudière. Obtenez des recommandations instantanées et contactez un expert."
        canonical="https://centrale-chauffagiste.be/diagnostic-chaudiere"
        keywords="diagnostic chaudière, problème chaudière, panne chaudière, diagnostic en ligne"
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
            <Stethoscope className="w-12 h-12 text-[#f5b82e]" />
            <h1 className="text-4xl md:text-5xl font-light tracking-wide font-playfair">
              Diagnostic de <span className="font-bold italic">Chaudière</span>
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl font-cormorant italic">
            Identifiez le problème de votre chaudière en quelques clics et obtenez des recommandations personnalisées
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <DiagnosticChaudiere />

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0f1b2e] mb-6 font-playfair">
            Comment fonctionne notre diagnostic ?
          </h2>
          <div className="space-y-4 text-gray-700 font-cormorant text-lg">
            <p>
              Notre outil de diagnostic intelligent analyse vos réponses pour identifier les causes probables 
              de votre problème de chaudière et vous orienter vers la solution la plus adaptée.
            </p>
            <p>
              Que ce soit un problème de chauffage, des bruits anormaux, une fuite ou un code erreur, 
              notre système vous fournit une première analyse et des recommandations d'experts.
            </p>
            <p>
              <strong>Important :</strong> Ce diagnostic est indicatif. Pour une intervention précise, 
              contactez toujours un professionnel qualifié.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}