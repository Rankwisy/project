import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Flame, Euro, Zap, Phone, CheckCircle, Star } from 'lucide-react';

export default function GuideChoixChaudiere() {
  const [etape, setEtape] = useState(0);
  const [reponses, setReponses] = useState({});
  const [resultat, setResultat] = useState(null);

  const questions = [
    {
      id: 'surface',
      question: "Quelle est la surface de votre logement ?",
      icon: <Home className="w-8 h-8" />,
      options: [
        { value: 'petit', label: 'Moins de 80 m²', range: '< 80 m²' },
        { value: 'moyen', label: '80 à 150 m²', range: '80-150 m²' },
        { value: 'grand', label: '150 à 250 m²', range: '150-250 m²' },
        { value: 'tres_grand', label: 'Plus de 250 m²', range: '> 250 m²' }
      ]
    },
    {
      id: 'type_logement',
      question: "Type de logement ?",
      icon: <Home className="w-8 h-8" />,
      options: [
        { value: 'appartement', label: 'Appartement' },
        { value: 'maison', label: 'Maison' },
        { value: 'villa', label: 'Villa / Grande propriété' }
      ]
    },
    {
      id: 'combustible',
      question: "Quel type d'énergie préférez-vous ?",
      icon: <Flame className="w-8 h-8" />,
      options: [
        { value: 'gaz', label: 'Gaz naturel (raccordement existant)' },
        { value: 'mazout', label: 'Mazout' },
        { value: 'flexible', label: 'Je suis flexible' }
      ]
    },
    {
      id: 'budget',
      question: "Quel est votre budget approximatif ?",
      icon: <Euro className="w-8 h-8" />,
      options: [
        { value: 'economique', label: '3 000 - 4 500 €', desc: 'Solution économique' },
        { value: 'standard', label: '4 500 - 6 500 €', desc: 'Standard confort' },
        { value: 'premium', label: '6 500 - 9 000 €', desc: 'Haut de gamme' },
        { value: 'sans_limite', label: 'Plus de 9 000 €', desc: 'Premium sans limite' }
      ]
    },
    {
      id: 'priorite',
      question: "Quelle est votre priorité principale ?",
      icon: <Zap className="w-8 h-8" />,
      options: [
        { value: 'economie', label: 'Économies d\'énergie maximales' },
        { value: 'fiabilite', label: 'Fiabilité et durabilité' },
        { value: 'ecologie', label: 'Impact environnemental minimal' },
        { value: 'confort', label: 'Confort et performance' }
      ]
    }
  ];

  const chaudieres = {
    vaillant_eco: {
      marque: "Vaillant",
      modele: "ecoTEC plus",
      puissances: ["20 kW", "25 kW", "30 kW"],
      prix: "4 500 - 6 000 €",
      rendement: "jusqu'à 98%",
      caracteristiques: [
        "Chaudière à condensation haute performance",
        "Technologie Green iQ",
        "Régulation intelligente",
        "Garantie 5 ans",
        "Modulante jusqu'à 20%"
      ],
      adapte: ["petit", "moyen"],
      score: 9.5
    },
    bulex_thema: {
      marque: "Bulex",
      modele: "Thema Condens",
      puissances: ["25 kW", "30 kW"],
      prix: "3 500 - 4 800 €",
      rendement: "jusqu'à 95%",
      caracteristiques: [
        "Excellent rapport qualité-prix",
        "Condensation haute efficacité",
        "Compact et silencieux",
        "Garantie 2 ans",
        "Installation facilitée"
      ],
      adapte: ["petit", "moyen"],
      score: 8.5
    },
    viessmann_vitodens: {
      marque: "Viessmann",
      modele: "Vitodens 200-W",
      puissances: ["26 kW", "35 kW"],
      prix: "6 000 - 8 000 €",
      rendement: "jusqu'à 98%",
      caracteristiques: [
        "Technologie MatriX-Plus",
        "Inox-Radial pour longévité",
        "Régulation climatique Vitotronic",
        "Garantie 5 ans",
        "Très faibles émissions"
      ],
      adapte: ["moyen", "grand"],
      score: 9.8
    },
    buderus_logamax: {
      marque: "Buderus",
      modele: "Logamax plus GB172",
      puissances: ["20 kW", "28 kW", "35 kW"],
      prix: "5 000 - 7 000 €",
      rendement: "jusqu'à 97%",
      caracteristiques: [
        "Design compact primé",
        "Technologie de condensation avancée",
        "Brûleur modulant ALU plus",
        "Garantie 5 ans",
        "Interface intuitive"
      ],
      adapte: ["moyen", "grand"],
      score: 9.2
    },
    vaillant_premium: {
      marque: "Vaillant",
      modele: "ecoTEC exclusive",
      puissances: ["25 kW", "35 kW"],
      prix: "7 000 - 9 500 €",
      rendement: "jusqu'à 98%",
      caracteristiques: [
        "Top du haut de gamme",
        "Green iQ label",
        "Écran tactile couleur",
        "Garantie 7 ans",
        "Connectivité WiFi",
        "Silencieuse < 35 dB"
      ],
      adapte: ["grand", "tres_grand"],
      score: 10
    }
  };

  const trouverMeilleureChaudiere = (reps) => {
    const recommandations = [];
    
    Object.entries(chaudieres).forEach(([key, chaudiere]) => {
      let score = 0;
      
      // Correspondance surface
      if (chaudiere.adapte.includes(reps.surface)) {
        score += 3;
      }
      
      // Budget
      const budgetMatch = {
        economique: ['bulex_thema'],
        standard: ['vaillant_eco', 'buderus_logamax'],
        premium: ['viessmann_vitodens', 'vaillant_premium'],
        sans_limite: ['vaillant_premium', 'viessmann_vitodens']
      };
      
      if (budgetMatch[reps.budget]?.includes(key)) {
        score += 3;
      }
      
      // Priorité
      const prioriteMatch = {
        economie: ['vaillant_eco', 'viessmann_vitodens'],
        fiabilite: ['buderus_logamax', 'viessmann_vitodens'],
        ecologie: ['vaillant_premium', 'viessmann_vitodens'],
        confort: ['vaillant_premium', 'buderus_logamax']
      };
      
      if (prioriteMatch[reps.priorite]?.includes(key)) {
        score += 2;
      }
      
      // Type logement
      if (reps.type_logement === 'villa' && chaudiere.adapte.includes('grand')) {
        score += 2;
      }
      
      if (score > 0) {
        recommandations.push({
          ...chaudiere,
          key,
          scoreTotal: score + chaudiere.score
        });
      }
    });
    
    return recommandations.sort((a, b) => b.scoreTotal - a.scoreTotal).slice(0, 3);
  };

  const handleReponse = (questionId, value) => {
    const nouvellesReponses = { ...reponses, [questionId]: value };
    setReponses(nouvellesReponses);
    
    if (etape < questions.length - 1) {
      setEtape(etape + 1);
    } else {
      const recommandations = trouverMeilleureChaudiere(nouvellesReponses);
      setResultat(recommandations);
    }
  };

  const recommencer = () => {
    setEtape(0);
    setReponses({});
    setResultat(null);
  };

  if (resultat) {
    return (
      <div className="space-y-6">
        <Card className="border-[#f5b82e] bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-[#0f1b2e] mb-4 font-playfair">
              🎯 Nos Recommandations Personnalisées
            </h3>
            <p className="text-gray-700 mb-4 font-cormorant">
              Basées sur vos critères, voici les {resultat.length} meilleures options pour votre logement :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700 font-cormorant">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Surface : <strong>{questions[0].options.find(o => o.value === reponses.surface)?.range}</strong>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-cormorant">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Budget : <strong>{questions[3].options.find(o => o.value === reponses.budget)?.label}</strong>
              </div>
            </div>
          </CardContent>
        </Card>

        {resultat.map((chaudiere, index) => (
          <Card key={chaudiere.key} className={`border-l-4 ${index === 0 ? 'border-l-[#f5b82e] shadow-lg' : 'border-l-gray-300'}`}>
            <CardContent className="p-6">
              {index === 0 && (
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 fill-[#f5b82e] text-[#f5b82e]" />
                  <span className="text-[#f5b82e] font-bold font-playfair">MEILLEUR CHOIX POUR VOUS</span>
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-[#0f1b2e] font-playfair">
                    {chaudiere.marque} {chaudiere.modele}
                  </h4>
                  <p className="text-gray-600 font-cormorant">
                    Puissances disponibles : {chaudiere.puissances.join(', ')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#f5b82e] font-playfair">{chaudiere.prix}</div>
                  <div className="text-sm text-gray-600 font-cormorant">installation comprise</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 mb-4">
                <div className="text-sm text-blue-900 font-cormorant">
                  <strong>Rendement énergétique :</strong> {chaudiere.rendement}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <h5 className="font-semibold text-gray-900 font-playfair">Caractéristiques :</h5>
                {chaudiere.caracteristiques.map((carac, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-cormorant">{carac}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-gradient-to-br from-[#0f1b2e] to-[#1a2740] text-white">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-2 font-playfair">Besoin d'un devis personnalisé ?</h4>
            <p className="text-white/90 mb-4 font-cormorant italic">
              Nos experts vous conseilleront sur le meilleur choix pour votre situation
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:0487407407"
                className="flex items-center justify-center gap-2 bg-[#f5b82e] text-[#0f1b2e] px-6 py-3 font-bold rounded hover:bg-[#ffcf4d] transition-colors"
              >
                <Phone className="w-5 h-5" />
                0487/40.74.07
              </a>
              <a 
                href="https://wa.me/32487407407"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 font-bold rounded hover:bg-[#20bd5a] transition-colors"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
              <Button
                onClick={recommencer}
                variant="outline"
                className="bg-white text-[#0f1b2e] hover:bg-gray-100"
              >
                Nouvelle recherche
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const questionActuelle = questions[etape];

  return (
    <Card className="border-[#f5b82e] shadow-xl">
      <CardHeader className="bg-gradient-to-r from-[#0f1b2e] to-[#1a2740] text-white">
        <div className="flex items-center gap-3 mb-2">
          {questionActuelle.icon}
          <CardTitle className="text-2xl font-light tracking-wide font-playfair">
            Guide de Choix de Chaudière
          </CardTitle>
        </div>
        <div className="flex gap-2 mt-4">
          {questions.map((_, index) => (
            <div 
              key={index}
              className={`h-2 flex-1 rounded ${index <= etape ? 'bg-[#f5b82e]' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
          {questionActuelle.question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questionActuelle.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleReponse(questionActuelle.id, option.value)}
              className="flex flex-col gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-[#f5b82e] hover:bg-[#f5b82e]/5 transition-all text-left"
            >
              <span className="font-semibold text-gray-900 font-playfair">{option.label}</span>
              {option.desc && (
                <span className="text-sm text-gray-600 font-cormorant italic">{option.desc}</span>
              )}
              {option.range && (
                <span className="text-sm text-gray-600 font-cormorant">{option.range}</span>
              )}
            </button>
          ))}
        </div>
        {etape > 0 && (
          <Button
            onClick={() => setEtape(etape - 1)}
            variant="outline"
            className="mt-6"
          >
            ← Retour
          </Button>
        )}
      </CardContent>
    </Card>
  );
}