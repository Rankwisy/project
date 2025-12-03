import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingDown, Euro, Leaf, CheckCircle } from 'lucide-react';

export default function EconomiesCalculator() {
  const [formData, setFormData] = useState({
    surface: '',
    typeChaudiere: '',
    ageChaudiere: '',
    consommationAnnuelle: ''
  });
  const [results, setResults] = useState(null);

  const calculerEconomies = () => {
    const surface = parseFloat(formData.surface);
    const consommation = parseFloat(formData.consommationAnnuelle);
    
    if (!surface || !formData.typeChaudiere || !consommation) {
      return;
    }

    // Calculs basés sur des moyennes réelles
    let tauxEconomie = 0;
    let coutGazM3 = 0.08; // Prix moyen du gaz en €/kWh
    
    // Déterminer le taux d'économie selon le type de chaudière
    if (formData.typeChaudiere === 'ancienne') {
      tauxEconomie = 0.35; // 35% d'économie avec condensation
    } else if (formData.typeChaudiere === 'standard') {
      tauxEconomie = 0.25; // 25% d'économie
    } else if (formData.typeChaudiere === 'basse-temperature') {
      tauxEconomie = 0.15; // 15% d'économie
    }

    // Ajuster selon l'âge
    if (formData.ageChaudiere === '10-15') {
      tauxEconomie += 0.05;
    } else if (formData.ageChaudiere === '15+') {
      tauxEconomie += 0.10;
    }

    const economieAnnuelleKWh = consommation * tauxEconomie;
    const economieAnnuelleEuro = economieAnnuelleKWh * coutGazM3;
    const economie10Ans = economieAnnuelleEuro * 10;
    const reductionCO2 = economieAnnuelleKWh * 0.2; // kg de CO2

    setResults({
      economieAnnuelleEuro: Math.round(economieAnnuelleEuro),
      economie10Ans: Math.round(economie10Ans),
      economieAnnuelleKWh: Math.round(economieAnnuelleKWh),
      tauxEconomie: Math.round(tauxEconomie * 100),
      reductionCO2: Math.round(reductionCO2),
      consommationActuelle: Math.round(consommation),
      nouvelleConsommation: Math.round(consommation - economieAnnuelleKWh)
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-[#f5b82e] shadow-xl">
        <CardHeader className="bg-gradient-to-r from-[#0f1b2e] to-[#1a2740] text-white">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8 text-[#f5b82e]" />
            <CardTitle className="text-2xl font-light tracking-wide font-playfair">
              Calculateur d'Économies d'Énergie
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <Label htmlFor="surface">Surface du logement (m²) *</Label>
              <Input
                id="surface"
                type="number"
                placeholder="Ex: 120"
                value={formData.surface}
                onChange={(e) => setFormData({...formData, surface: e.target.value})}
                className="border-gray-300 focus:border-[#f5b82e] h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="typeChaudiere">Type de chaudière actuelle *</Label>
              <Select
                value={formData.typeChaudiere}
                onValueChange={(value) => setFormData({...formData, typeChaudiere: value})}
              >
                <SelectTrigger className="h-12 border-gray-300 focus:border-[#f5b82e]">
                  <SelectValue placeholder="Sélectionnez le type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ancienne">Chaudière ancienne (standard)</SelectItem>
                  <SelectItem value="standard">Chaudière standard récente</SelectItem>
                  <SelectItem value="basse-temperature">Chaudière basse température</SelectItem>
                  <SelectItem value="condensation">Chaudière à condensation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ageChaudiere">Âge de la chaudière *</Label>
              <Select
                value={formData.ageChaudiere}
                onValueChange={(value) => setFormData({...formData, ageChaudiere: value})}
              >
                <SelectTrigger className="h-12 border-gray-300 focus:border-[#f5b82e]">
                  <SelectValue placeholder="Sélectionnez l'âge" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5">Moins de 5 ans</SelectItem>
                  <SelectItem value="5-10">5 à 10 ans</SelectItem>
                  <SelectItem value="10-15">10 à 15 ans</SelectItem>
                  <SelectItem value="15+">Plus de 15 ans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="consommation">Consommation annuelle estimée (kWh) *</Label>
              <Input
                id="consommation"
                type="number"
                placeholder="Ex: 15000"
                value={formData.consommationAnnuelle}
                onChange={(e) => setFormData({...formData, consommationAnnuelle: e.target.value})}
                className="border-gray-300 focus:border-[#f5b82e] h-12"
              />
              <p className="text-xs text-gray-500">
                Moyenne : 10 000-20 000 kWh/an pour une maison
              </p>
            </div>
          </div>

          <Button
            onClick={calculerEconomies}
            className="w-full bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] font-bold text-lg py-6"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculer mes économies
          </Button>

          {results && (
            <div className="mt-8 space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2 font-playfair">
                  <TrendingDown className="w-6 h-6" />
                  Vos Économies Potentielles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Euro className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-600">Économie annuelle</span>
                    </div>
                    <div className="text-3xl font-bold text-green-700">
                      {results.economieAnnuelleEuro}€
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      soit {results.tauxEconomie}% d'économie
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Euro className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-600">Économie sur 10 ans</span>
                    </div>
                    <div className="text-3xl font-bold text-green-700">
                      {results.economie10Ans}€
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">Réduction consommation</span>
                    </div>
                    <div className="text-xl font-bold text-blue-700">
                      {results.economieAnnuelleKWh} kWh/an
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      De {results.consommationActuelle} à {results.nouvelleConsommation} kWh/an
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-600">Réduction CO₂</span>
                    </div>
                    <div className="text-xl font-bold text-green-700">
                      {results.reductionCO2} kg/an
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Équivalent à {Math.round(results.reductionCO2 / 120)} arbres plantés
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#f5b82e]/10 to-orange-50 rounded-lg p-6 border border-[#f5b82e]/30">
                <h4 className="text-xl font-bold text-[#0f1b2e] mb-4 font-playfair">
                  Avantages d'une Chaudière à Condensation
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-cormorant">
                      <strong>Rendement optimal :</strong> Jusqu'à 109% de rendement énergétique
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Économies durables :</strong> Amortissement en 5-7 ans selon votre installation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Écologique :</strong> Réduction significative de votre empreinte carbone
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Confort :</strong> Chauffage plus stable et homogène
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-gray-600 mb-4 font-cormorant italic">
                  Prêt à réaliser ces économies ?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="tel:0485719251"
                    className="inline-flex items-center justify-center gap-2 bg-[#f5b82e] text-[#0f1b2e] px-8 py-3 font-bold rounded hover:bg-[#ffcf4d] transition-colors"
                  >
                    Demander un devis gratuit
                  </a>
                  <a 
                    href="https://wa.me/32487407407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 font-bold rounded hover:bg-[#20bd5a] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}