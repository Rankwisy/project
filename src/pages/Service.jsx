import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Phone, CheckCircle, HelpCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Service() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  const { data: service, isLoading, error } = useQuery({
    queryKey: ['service', slug],
    queryFn: async () => {
      const services = await base44.entities.ServicePage.filter({ slug, published: true });
      return services[0];
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Chargement...</div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0f1b2e] mb-4">Service introuvable</h1>
          <Link to={createPageUrl('Home')} className="text-[#f5b82e] hover:text-[#ffcf4d]">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.meta_description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chauffagiste Express Bruxelles",
      "telephone": "+32487407407"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bruxelles"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={service.meta_title}
        description={service.meta_description}
        keywords={service.meta_keywords}
        canonical={`https://centrale-chauffagiste.be/service/${service.slug}`}
        schema={schema}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white py-24 overflow-hidden">
        {service.hero_image && (
          <>
            <div className="absolute inset-0">
              <img 
                src={service.hero_image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
                width="1200"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b2e]/85 via-[#1a2740]/80 to-[#2d4263]/85" />
            </div>
          </>
        )}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#f5b82e] hover:text-[#ffcf4d] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide font-playfair">
            {service.hero_title}
          </h1>
          {service.hero_subtitle && (
            <p className="text-xl text-white/90 font-light font-cormorant">
              {service.hero_subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            {service.intro_content && (
              <section>
                <div 
                  className="prose prose-lg max-w-none font-cormorant text-gray-700"
                  dangerouslySetInnerHTML={{ __html: service.intro_content }}
                />
              </section>
            )}

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <section>
                <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-6 font-playfair">
                  Nos Prestations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <Card key={index} className="border-l-4 border-l-[#f5b82e]">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-[#f5b82e] flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold text-[#0f1b2e] mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-gray-700 font-cormorant">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Pricing */}
            {service.pricing_info && (
              <section>
                <Card className="border-[#f5b82e] bg-gradient-to-br from-gray-50 to-gray-100">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-semibold text-[#0f1b2e] mb-4 font-playfair">
                      Tarifs
                    </h2>
                    <div 
                      className="text-gray-700 font-cormorant leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: service.pricing_info }}
                    />
                  </CardContent>
                </Card>
              </section>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-8 h-8 text-[#f5b82e]" />
                  <h2 className="text-3xl font-semibold text-[#0f1b2e] font-playfair">
                    Questions Fréquentes
                  </h2>
                </div>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <Card key={index} className="border-l-4 border-l-[#f5b82e]">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-[#0f1b2e] mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 font-cormorant leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            {service.cta_title && (
              <section className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white p-12 rounded-lg">
                <div className="text-center">
                  <h2 className="text-3xl font-light mb-4 font-playfair">
                    {service.cta_title}
                  </h2>
                  {service.cta_text && (
                    <p className="text-xl text-white/90 font-light mb-8 font-cormorant">
                      {service.cta_text}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:0487407407"
                      className="inline-flex items-center justify-center gap-2 bg-[#f5b82e] text-[#0f1b2e] px-8 py-4 font-bold hover:bg-[#ffcf4d] transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      0487/40.74.07
                    </a>
                    <a 
                      href="https://wa.me/32487407407"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 font-bold hover:bg-[#20bd5a] transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card className="border-[#f5b82e] shadow-xl">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-[#f5b82e] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#0f1b2e] mb-2">
                    Besoin d'aide ?
                  </h3>
                  <p className="text-gray-600 mb-4 font-cormorant">
                    Contactez-nous pour plus d'informations
                  </p>
                  <a 
                    href="tel:0487407407"
                    className="block w-full bg-[#f5b82e] text-[#0f1b2e] py-3 px-6 font-bold hover:bg-[#ffcf4d] transition-colors mb-3"
                  >
                    📞 0487/40.74.07
                  </a>
                  <a 
                    href="https://wa.me/32487407407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366] text-white py-3 px-6 font-bold hover:bg-[#20bd5a] transition-colors"
                  >
                    💬 WhatsApp
                  </a>
                </CardContent>
              </Card>

              <ContactForm serviceType={service.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}