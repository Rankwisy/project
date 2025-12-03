import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Phone, Wrench, Clock } from 'lucide-react';

export default function DiagnosticChaudiere() {
  const [etape, setEtape] = useState(0);
  const [reponses, setReponses] = useState({});
  const [resultat, setResultat] = useState(null);

  const questions = [
    {
      id: 'symptome',
      question: "Quel est le problème principal que vous rencontrez ?",
      options: [
        { value: 'pas_chaleur', label: 'Pas de chaleur / chauffage ne fonctionne pas', icon: '❄️' },
        { value: 'bruit', label: 'Bruits anormaux (claquements, sifflements)', icon: '🔊' },
        { value: 'fuite', label: 'Fuite d\'eau', icon: '💧' },
        { value: 'pression', label: 'Problème de pression', icon: '📊' },
        { value: 'erreur', label: 'Code erreur affiché', icon: '⚠️' },
        { value: 'consommation', label: 'Consommation excessive', icon: '📈' }
      ]
    },
    {
      id: 'frequence',
      question: "Depuis quand ce problème se produit-il ?",
      options: [
        { value: 'recent', label: 'Depuis quelques heures/jours' },
        { value: 'intermittent', label: 'Par intermittence depuis plusieurs semaines' },
        { value: 'permanent', label: 'Depuis plusieurs semaines/mois' }
      ]
    },
    {
      id: 'entretien',
      question: "Votre chaudière a-t-elle été entretenue récemment ?",
      options: [
        { value: 'oui', label: 'Oui, il y a moins d\'un an' },
        { value: 'non', label: 'Non, il y a plus d\'un an' },
        { value: 'jamais', label: 'Jamais ou je ne sais pas' }
      ]
    },
    {
      id: 'age',
      question: "Quel est l'âge approximatif de votre chaudière ?",
      options: [
        { value: 'recent', label: 'Moins de 5 ans' },
        { value: 'moyen', label: '5 à 10 ans' },
        { value: 'ancien', label: '10 à 15 ans' },
        { value: 'vieux', label: 'Plus de 15 ans' }
      ]
    }
  ];

  const diagnostics = {
    pas_chaleur: {
      urgent: true,
      titre: "Absence de Chauffage",
      causes: [
        "Problème de thermostat ou de programmation",
        "Panne de circulateur",
        "Problème d'alimentation en gaz ou électrique",
        "Vanne 3 voies défectueuse",
        "Problème de pression d'eau"
      ],
      solution: "Dépannage urgent nécessaire",
      action: "Contactez-nous immédiatement pour un dépannage d'urgence",
      delai: "Intervention dans l'heure"
    },
    bruit: {
      urgent: false,
      titre: "Bruits Anormaux",
      causes: [
        "Air dans le circuit de chauffage",
        "Entartrage de l'échangeur",
        "Pompe de circulation défectueuse",
        "Pression d'eau inadéquate",
        "Combustion incorrecte"
      ],
      solution: "Entretien ou réparation recommandée",
      action: "Planifiez une intervention pour éviter l'aggravation",
      delai: "Intervention sous 48h"
    },
    fuite: {
      urgent: true,
      titre: "Fuite d'Eau",
      causes: [
        "Joint défectueux",
        "Vase d'expansion défaillant",
        "Soupape de sécurité activée",
        "Corrosion du corps de chauffe",
        "Problème de pression"
      ],
      solution: "Intervention urgente requise",
      action: "Coupez l'alimentation en eau et contactez-nous",
      delai: "Intervention immédiate"
    },
    pression: {
      urgent: false,
      titre: "Problème de Pression",
      causes: [
        "Fuite dans le circuit",
        "Vase d'expansion défectueux",
        "Soupape de sécurité qui fuit",
        "Purgeurs automatiques bloqués"
      ],
      solution: "Vérification et réparation nécessaires",
      action: "Faites vérifier votre installation",
      delai: "Intervention sous 24-48h"
    },
    erreur: {
      urgent: true,
      titre: "Code Erreur Affiché",
      causes: [
        "Erreur de communication",
        "Problème de sonde",
        "Défaut d'allumage",
        "Problème d'évacuation des fumées",
        "Dysfonctionnement électronique"
      ],
      solution: "Diagnostic technique nécessaire",
      action: "Notez le code erreur et contactez-nous",
      delai: "Intervention sous 24h"
    },
    consommation: {
      urgent: false,
      titre: "Consommation Excessive",
      causes: [
        "Mauvais réglage de la chaudière",
        "Isolation insuffisante",
        "Radiateurs mal purgés",
        "Chaudière vieillissante peu efficace",
        "Thermostat mal calibré"
      ],
      solution: "Entretien et optimisation recommandés",
      action: "Envisagez un entretien complet ou un remplacement",
      delai: "Planification selon disponibilités"
    }
  };

  const handleReponse = (questionId, value) => {
    const nouvellesReponses = { ...reponses, [questionId]: value };
    setReponses(nouvellesReponses);
    
    if (etape < questions.length - 1) {
      setEtape(etape + 1);
    } else {
      genererResultat(nouvellesReponses);
    }
  };

  const genererResultat = (reps) => {
    const diagnostic = diagnostics[reps.symptome];
    
    let recommandations = [];
    
    if (reps.entretien === 'jamais' || reps.entretien === 'non') {
      recommandations.push("⚠️ Votre chaudière nécessite un entretien annuel obligatoire");
    }
    
    if (reps.age === 'vieux') {
      recommandations.push("💡 Votre chaudière est ancienne. Un remplacement pourrait vous faire économiser jusqu'à 40% sur vos factures");
    }
    
    if (reps.frequence === 'permanent') {
      recommandations.push("🔧 Le problème est récurrent, une intervention approfondie est nécessaire");
    }
    
    setResultat({ ...diagnostic, recommandations });
  };

  const recommencer = () => {
    setEtape(0);
    setReponses({});
    setResultat(null);
  };

  if (resultat) {
    return (
      <div className="space-y-6">
        <Card className={`border-l-4 ${resultat.urgent ? 'border-l-red-500 bg-red-50' : 'border-l-yellow-500 bg-yellow-50'}`}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              {resultat.urgent ? (
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              ) : (
                <Wrench className="w-8 h-8 text-yellow-600 flex-shrink-0" />
              )}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">
                  Diagnostic : {resultat.titre}
                </h3>
                <p className={`font-semibold ${resultat.urgent ? 'text-red-700' : 'text-yellow-700'} font-cormorant text-lg`}>
                  {resultat.solution}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 font-playfair">Causes possibles :</h4>
                <ul className="space-y-2">
                  {resultat.causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700 font-cormorant">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {resultat.recommandations.length > 0 && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 font-playfair">Recommandations :</h4>
                  <ul className="space-y-2">
                    {resultat.recommandations.map((rec, index) => (
                      <li key={index} className="text-gray-700 font-cormorant">{rec}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white rounded-lg p-4 border-l-4 border-l-[#f5b82e]">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#f5b82e]" />
                  <span className="font-semibold text-gray-900 font-playfair">Action recommandée :</span>
                </div>
                <p className="text-gray-700 mb-2 font-cormorant">{resultat.action}</p>
                <p className="text-sm text-gray-600 font-cormorant italic">Délai : {resultat.delai}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#0f1b2e] to-[#1a2740] text-white">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-4 font-playfair">Contactez-nous maintenant</h4>
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
                Nouveau diagnostic
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
        <CardTitle className="text-2xl font-light tracking-wide font-playfair">
          Diagnostic de Chaudière
        </CardTitle>
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
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-[#f5b82e] hover:bg-[#f5b82e]/5 transition-all text-left"
            >
              {option.icon && <span className="text-2xl">{option.icon}</span>}
              <span className="font-medium text-gray-700 font-cormorant">{option.label}</span>
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