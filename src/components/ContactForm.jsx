import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle2 } from 'lucide-react';
import { rankwise } from '@/api/rankwiseClient';

export default function ContactForm({ serviceType }) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await rankwise.integrations.Core.SendEmail({
        to: 'contact@centrale-chauffagiste.be',
        subject: `Demande de devis - ${serviceType}`,
        body: `
          Nouvelle demande de devis pour: ${serviceType}
          
          Nom: ${formData.nom}
          Email: ${formData.email}
          Téléphone: ${formData.telephone}
          Adresse: ${formData.adresse}
          
          Message:
          ${formData.message}
        `
      });

      setIsSuccess(true);
      setFormData({ nom: '', email: '', telephone: '', adresse: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <Card className="border-green-500 bg-green-50">
        <CardContent className="p-12 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-green-800 mb-2 font-playfair">Demande envoyée !</h3>
          <p className="text-green-700 font-cormorant">Nous vous contacterons dans les plus brefs délais.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-[#f5b82e] shadow-xl">
      <CardHeader className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white">
        <CardTitle className="text-xl md:text-2xl font-light tracking-wide font-playfair">
          Demander un Devis Gratuit
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nom" className="text-sm md:text-base">Nom complet *</Label>
            <Input
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              placeholder="Votre nom"
              className="border-gray-300 focus:border-[#f5b82e] h-12 text-base"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
                className="border-gray-300 focus:border-[#f5b82e] h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-sm md:text-base">Téléphone *</Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                required
                placeholder="0485 XX XX XX"
                className="border-gray-300 focus:border-[#f5b82e] h-12 text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="adresse" className="text-sm md:text-base">Adresse *</Label>
            <Input
              id="adresse"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              required
              placeholder="Rue, numéro, code postal, ville"
              className="border-gray-300 focus:border-[#f5b82e] h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Décrivez votre besoin..."
              className="border-gray-300 focus:border-[#f5b82e] resize-none text-base min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#1e3c72] font-bold text-base md:text-lg py-5 md:py-6 tracking-wider transition-all duration-300 hover:shadow-lg"
          >
            {isSubmitting ? (
              'Envoi en cours...'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Envoyer ma demande
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}