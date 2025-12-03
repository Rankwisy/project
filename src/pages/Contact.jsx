import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Phone, MapPin, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Chauffagiste Express - Centrale Chauffagiste",
      "telephone": "+32487407407",
      "email": "Info.ilmachauf@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chaussée de Mons 121",
        "addressLocality": "Sint-Pieters-Leeuw",
        "postalCode": "1600",
        "addressCountry": "BE"
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: 'Info.ilmachauf@gmail.com',
        subject: `Demande de contact - ${formData.nom}`,
        body: `
          Nouvelle demande de contact
          
          Nom: ${formData.nom}
          Email: ${formData.email}
          Téléphone: ${formData.telephone}
          
          Message:
          ${formData.message}
        `
      });

      setIsSuccess(true);
      setFormData({ nom: '', email: '', telephone: '', message: '' });
      
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

  const temoignages = [
    {
      nom: "Sophie Martineau",
      commune: "Ixelles",
      note: 5,
      texte: "Service impeccable ! L'équipe est très professionnelle et réactive. Ma chaudière a été installée rapidement et fonctionne parfaitement."
    },
    {
      nom: "Thomas Dubois",
      commune: "Uccle",
      note: 5,
      texte: "Je recommande vivement ! Intervention rapide pour un dépannage d'urgence. Prix transparent et travail soigné."
    },
    {
      nom: "Marie Laurent",
      commune: "Schaerbeek",
      note: 5,
      texte: "Excellente expérience du début à la fin. Devis gratuit, conseils personnalisés et installation impeccable. Merci !"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact - Chauffagiste Bruxelles | Devis Gratuit - Chauffagiste Express"
        description="Contactez Chauffagiste Express pour un devis gratuit. Disponible 7j/7 à Bruxelles. ☎️ 0487/40.74.07 - Info.ilmachauf@gmail.com"
        canonical="https://centrale-chauffagiste.be/contact"
        keywords="contact chauffagiste bruxelles, devis chaudière gratuit, coordonnées chauffagiste, urgence chauffage bruxelles"
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
            Contactez-<span className="font-bold">nous</span>
          </h1>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Besoin d'un renseignement ? Un devis gratuit ?
          </p>
          <p className="text-lg text-white/80 font-light mt-2">
            Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-l-4 border-l-[#f5b82e]">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-[#0f1b2e] mb-6">
                  Coordonnées
                </h2>
                
                <div className="space-y-6">
                  <a href="tel:0487407407" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                    <Phone className="w-6 h-6 text-[#f5b82e] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#0f1b2e] mb-1">Téléphone</div>
                      <div className="text-2xl font-bold text-[#f5b82e] group-hover:text-[#ffcf4d] transition-colors">
                        0487 407 407
                      </div>
                      <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Disponible 7j/7
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#f5b82e] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#0f1b2e] mb-1">Adresse</div>
                      <div className="text-gray-700">
                        Chaussée de Mons 121<br />
                        1600 Sint-Pieters-Leeuw
                      </div>
                    </div>
                  </div>

                  <a href="mailto:Info.ilmachauf@gmail.com" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                    <Mail className="w-6 h-6 text-[#f5b82e] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#0f1b2e] mb-1">Email</div>
                      <div className="text-gray-700 break-all group-hover:text-[#f5b82e] transition-colors">
                        Info.ilmachauf@gmail.com
                      </div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#0f1b2e] to-[#1a2740] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Urgence ?</h3>
                <p className="text-white/90 mb-4 font-light">
                  Pour les urgences, appelez-nous directement
                </p>
                <a 
                  href="tel:0487407407"
                  className="inline-block w-full bg-[#f5b82e] text-[#0f1b2e] px-6 py-3 font-bold text-center rounded hover:bg-[#ffcf4d] transition-colors"
                >
                  0487 407 407
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <Card className="border-green-500 bg-green-50">
                <CardContent className="p-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">Message envoyé !</h3>
                  <p className="text-green-700">Nous vous contacterons dans les plus brefs délais.</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-[#f5b82e] shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-[#0f1b2e] mb-6">
                    Formulaire de Contact
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom complet *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="border-gray-300 focus:border-[#f5b82e]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="votre@email.com"
                          className="border-gray-300 focus:border-[#f5b82e]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                          placeholder="0487 XX XX XX"
                          className="border-gray-300 focus:border-[#f5b82e]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Décrivez votre besoin, demande de devis, question..."
                        className="border-gray-300 focus:border-[#f5b82e] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] font-bold text-lg py-6 tracking-wider transition-all duration-300 hover:shadow-lg"
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
            )}
          </div>
        </div>

        {/* Testimonials */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0f1b2e] mb-4">
              Ce que nos clients disent de nous
            </h2>
            <p className="text-lg text-gray-600 font-light">
              La satisfaction de nos clients est notre priorité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(temoignage.note)].map((_, i) => (
                      <span key={i} className="text-[#f5b82e] text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{temoignage.texte}"
                  </p>
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                    <span className="font-semibold text-[#0f1b2e]">{temoignage.nom}</span>
                    <span className="text-gray-500">{temoignage.commune}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}