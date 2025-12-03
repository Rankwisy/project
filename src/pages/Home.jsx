import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Wrench, Zap, CheckCircle, Wind, ArrowRight, HelpCircle, MapPin, Shield, Clock, Award, ThermometerSun, Droplets, Flame, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import MobileMenu from '../components/MobileMenu';
import MegaMenu from '../components/MegaMenu';
import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const ChatBot = lazy(() => import('../components/ChatBot'));
const InteractiveMap = lazy(() => import('../components/InteractiveMap'));

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.animate]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ILMACHAUF SPRL",
    "url": "https://chauffagemasure.be",
    "telephone": "+32487407407",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chaussée de Mons 121",
      "addressLocality": "Sint-Pieters-Leeuw",
      "postalCode": "1600",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8503",
      "longitude": "4.3517"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bruxelles"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00"
  };

  const faqs = [
    {
      question: "Combien coûte un entretien de chaudière à Bruxelles ?",
      answer: "Le prix d'un entretien chaudière standard commence à partir de 90€. Ce tarif comprend le nettoyage complet, la vérification de sécurité et l'attestation obligatoire. Contactez-nous pour un devis précis selon votre installation."
    },
    {
      question: "L'entretien annuel de la chaudière est-il obligatoire en Belgique ?",
      answer: "Oui, en Belgique l'entretien annuel de votre chaudière est une obligation légale. Il doit être effectué par un technicien agréé qui délivre une attestation conforme aux normes belges."
    },
    {
      question: "Intervenez-vous en urgence le weekend ?",
      answer: "Oui, nous proposons un service de dépannage urgent disponible 7j/7. Appelez-nous au 0487 407 407 pour une intervention rapide."
    },
    {
      question: "Quelles marques de chaudières installez-vous ?",
      answer: "Nous sommes spécialistes Vaillant mais installons également Bulex, Viessmann, Buderus, Junkers, ACV et Saunier Duval. Nous vous conseillerons la meilleure option selon vos besoins."
    },
    {
      question: "Dans quelles communes de Bruxelles intervenez-vous ?",
      answer: "Nous intervenons dans les 19 communes de Bruxelles et environs : Bruxelles-Ville, Anderlecht, Schaerbeek, Ixelles, Uccle, Etterbeek, Molenbeek, Saint-Gilles, Forest, et bien d'autres."
    },
    {
      question: "Comment reconnaître une fuite de gaz ?",
      answer: "Une odeur de soufre (œuf pourri), un sifflement près des conduites, ou une flamme jaune au lieu de bleue sont des signes de fuite. Coupez le gaz, aérez et appelez-nous immédiatement au 0487 407 407."
    }
  ];

  const services = [
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Installation Chaudière",
      description: "Installation complète de chaudières à condensation. Fourniture et pose incluses avec garantie constructeur.",
      features: ["Toutes marques", "Garantie incluse", "Devis gratuit"],
      page: "InstallationChaudiere"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Dépannage Urgent",
      description: "Intervention rapide 7j/7 pour tous problèmes de chauffage. Techniciens expérimentés et réactifs.",
      features: ["7j/7 disponible", "Intervention rapide", "Diagnostic précis"],
      page: "DepannageRapide"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Entretien Annuel",
      description: "Entretien obligatoire de votre chaudière avec attestation conforme. Prolongez la durée de vie de votre installation.",
      features: ["Attestation légale", "À partir de 90€", "Rendez-vous rapide"],
      page: "EntretienChaudiere"
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: "Détection Fuite Gaz",
      description: "Détection et réparation de fuites de gaz par nos experts agréés. Votre sécurité est notre priorité.",
      features: ["Urgence 24/7", "Techniciens certifiés", "Réparation immédiate"],
      page: "DetectionFuiteGaz"
    }
  ];

  const prices = [
    { service: "Entretien chaudière gaz", price: "À partir de 90€" },
    { service: "Entretien chaudière mazout", price: "À partir de 150€" },
    { service: "Dépannage (déplacement + 1ère heure)", price: "À partir de 95€" },
    { service: "Détartrage chauffe-eau", price: "À partir de 120€" },
    { service: "Remplacement thermocouple", price: "À partir de 85€" },
    { service: "Purge radiateurs (par unité)", price: "À partir de 25€" }
  ];

  const certifications = [
    { name: "Cerga", number: "N° 17-04463-N" },
    { name: "Bruxelles Environnement", number: "Technicien agréé" },
    { name: "Région Wallonne", number: "Technicien agréé" },
    { name: "Région Flamande", number: "Technicien agréé" }
  ];

  const brands = [
    "Vaillant", "Bulex", "Viessmann", "Buderus", 
    "Junkers", "ACV", "Chappée", "Saunier Duval"
  ];

  const communes = [
    "Bruxelles", "Anderlecht", "Schaerbeek", "Ixelles", "Etterbeek", "Molenbeek",
    "Saint-Gilles", "Uccle", "Jette", "Koekelberg", "Forest", "Auderghem",
    "Evere", "Ganshoren", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre",
    "Watermael-Boitsfort", "Berchem-Sainte-Agathe", "Saint-Josse-ten-Noode"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Chauffagiste Bruxelles | ILMACHAUF - Dépannage & Entretien Chaudière"
        description="Chauffagiste agréé à Bruxelles. Entretien chaudière obligatoire à partir de 90€, dépannage urgence 7j/7, installation Vaillant. ☎️ 0487 407 407"
        canonical="https://chauffagemasure.be"
        keywords="chauffagiste bruxelles, chauffagiste bruxelles pas cher, entretien chaudière bruxelles, chauffagiste vaillant bruxelles, plombier chauffagiste bruxelles"
        schema={schema}
      />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#f5b82e] p-2 rounded-xl">
                <Flame className="w-8 h-8 text-[#1e3c72]" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white font-poppins">
                  ILMACHAUF
                </h1>
                <p className="text-emerald-100 text-xs hidden sm:block">Chauffagiste Agréé Bruxelles</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <Link 
                  to={createPageUrl('Home')}
                  className="text-white hover:text-emerald-200 transition-colors font-medium"
                >
                  Accueil
                </Link>
                <MegaMenu />
                <Link 
                  to={createPageUrl('Blog')}
                  className="text-white hover:text-emerald-200 transition-colors font-medium"
                >
                  Blog
                </Link>
                <Link 
                  to={createPageUrl('Contact')}
                  className="text-white hover:text-emerald-200 transition-colors font-medium"
                >
                  Contact
                </Link>
              </nav>
              
              <div className="hidden lg:flex items-center gap-3">
                <a 
                  href="tel:0487407407"
                  className="flex items-center gap-2 bg-[#f5b82e] text-[#1e3c72] px-4 py-2 rounded-full font-bold hover:bg-[#ffcf4d] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>0487 407 407</span>
                </a>
                <a 
                  href="https://wa.me/32487407407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
              
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f1b2e] via-[#1e3c72] to-[#2a5298] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b82e] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2a5298] rounded-full filter blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#f5b82e]/20 text-[#f5b82e] px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Technicien Agréé Cerga N° 17-04463-N
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight">
                Votre <span className="text-[#f5b82e]">Chauffagiste</span> de Confiance à Bruxelles
              </h2>
              
              <p className="text-xl text-gray-300 font-inter">
                Entretien, dépannage et installation de chaudières. Service professionnel et prix compétitifs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0487407407"
                  className="inline-flex items-center justify-center gap-3 bg-[#f5b82e] text-[#1e3c72] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ffcf4d] transition-all shadow-lg shadow-[#f5b82e]/30"
                >
                  <Phone className="w-6 h-6" />
                  0487 407 407
                </a>
                <a 
                  href="https://wa.me/32487407407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-[#f5b82e]" />
                  <span>7j/7 Disponible</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="w-5 h-5 text-[#f5b82e]" />
                  <span>Certifié Cerga</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#f5b82e]" />
                  <span>Tout Bruxelles</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581405459834-75c5f33acee2?q=80&w=600&auto=format&fit=crop"
                  alt="Chauffagiste professionnel"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f5b82e]/20 p-3 rounded-full">
                    <ThermometerSun className="w-8 h-8 text-[#f5b82e]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1e3c72]">90€</p>
                    <p className="text-gray-600 text-sm">Entretien à partir de</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1e3c72]">15+</p>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1e3c72]">5000+</p>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1e3c72]">19</p>
              <p className="text-gray-600">Communes couvertes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1e3c72]">24/7</p>
              <p className="text-gray-600">Service urgence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#f5b82e] font-semibold text-sm uppercase tracking-wider">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 font-poppins">
              Solutions Complètes de Chauffage
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              De l'installation à l'entretien, nous prenons soin de votre système de chauffage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#f5b82e]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={createPageUrl(service.page)}
                    className="inline-flex items-center gap-2 text-[#1e3c72] font-semibold hover:text-[#2a5298] transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#f5b82e] font-semibold text-sm uppercase tracking-wider">Tarifs Transparents</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 font-poppins">
              Nos Prix
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Des tarifs compétitifs sans surprise
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] p-6">
                <h3 className="text-2xl font-bold text-white text-center">Grille Tarifaire</h3>
              </div>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    {prices.map((item, index) => (
                      <tr key={index} className={`border-b last:border-0 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#f5b82e]/10 transition-colors`}>
                        <td className="px-6 py-4 font-medium text-gray-900">{item.service}</td>
                        <td className="px-6 py-4 text-right font-bold text-[#1e3c72]">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                * Prix indicatifs. Devis gratuit et personnalisé sur demande.
              </p>
              <a 
                href="tel:0487407407"
                className="inline-flex items-center gap-2 bg-[#f5b82e] text-[#1e3c72] px-8 py-4 rounded-xl font-bold hover:bg-[#ffcf4d] transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Demander un Devis Gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            🔥 Spécialiste Vaillant Agréé
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Installation, entretien et dépannage de chaudières Vaillant par des techniciens certifiés
          </p>
          <Link 
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg"
          >
            Prendre Rendez-vous
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3c72] font-poppins">Nos Agréments</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <Award className="w-12 h-12 text-[#f5b82e] mx-auto mb-3" />
                <p className="font-bold text-gray-900">{cert.name}</p>
                <p className="text-sm text-[#1e3c72]">{cert.number}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3c72] font-poppins">Marques Partenaires</h2>
            <p className="text-gray-600 mt-2">Nous travaillons avec les meilleures marques</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-gray-100 px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-[#f5b82e]/20 hover:text-[#1e3c72] transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-gradient-to-br from-[#0f1b2e] via-[#1e3c72] to-[#2a5298]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-[#f5b82e] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white font-poppins">Zones d'Intervention</h2>
            <p className="text-gray-300 mt-2">Intervention dans toutes les communes de Bruxelles</p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Suspense fallback={<div className="h-[400px] bg-gray-200 flex items-center justify-center">Chargement...</div>}>
              <InteractiveMap height="400px" showAllCommunes={true} />
            </Suspense>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {communes.map((commune, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-center text-white text-sm hover:bg-white/20 transition-colors"
              >
                {commune}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#1e3c72] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 font-poppins">Questions Fréquentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] px-6 py-4">
                  <h3 className="font-bold text-white">{faq.question}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Suspense fallback={<div className="py-20 bg-white text-center">Chargement...</div>}>
        <TestimonialsSection />
      </Suspense>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1e3c72] to-[#2a5298]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            Besoin d'un Chauffagiste ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous maintenant pour un devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0487407407"
              className="inline-flex items-center justify-center gap-3 bg-[#f5b82e] text-[#1e3c72] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#ffcf4d] transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              0487 407 407
            </a>
            <a 
              href="https://wa.me/32487407407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1b2e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#f5b82e] p-2 rounded-xl">
                  <Flame className="w-6 h-6 text-[#1e3c72]" />
                </div>
                <span className="text-xl font-bold">ILMACHAUF</span>
              </div>
              <p className="text-gray-400 mb-4">
                Votre chauffagiste de confiance à Bruxelles depuis plus de 15 ans.
              </p>
              <p className="text-gray-400 text-sm">
                <strong>SPRL ILMACHAUF</strong><br />
                TVA : BE0845 678 167
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#f5b82e]">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#f5b82e]" />
                  <a href="tel:0487407407" className="hover:text-white transition-colors">0487 407 407</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#f5b82e] mt-1" />
                  <span>Chaussée de Mons 121<br />1600 Sint-Pieters-Leeuw</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#f5b82e]">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to={createPageUrl('InstallationChaudiere')} className="hover:text-white transition-colors">Installation Chaudière</Link></li>
                <li><Link to={createPageUrl('EntretienChaudiere')} className="hover:text-white transition-colors">Entretien Chaudière</Link></li>
                <li><Link to={createPageUrl('DepannageRapide')} className="hover:text-white transition-colors">Dépannage Urgent</Link></li>
                <li><Link to={createPageUrl('DetectionFuiteGaz')} className="hover:text-white transition-colors">Détection Fuite Gaz</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#f5b82e]">Agréments</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cerga : N° 17-04463-N</li>
                <li>Bruxelles Environnement</li>
                <li>Région Wallonne</li>
                <li>Région Flamande</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 ILMACHAUF SPRL - Tous droits réservés
            </p>
            <Link 
              to={createPageUrl('Sitemap')}
              className="text-[#f5b82e] hover:text-[#ffcf4d] transition-colors text-sm"
            >
              Plan du Site
            </Link>
          </div>
        </div>
      </footer>

      {/* ChatBot */}
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </div>
  );
}