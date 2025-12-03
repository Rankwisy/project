import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { rankwise } from '@/api/rankwiseClient';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => rankwise.entities.Testimonial.filter({ published: true }, '-created_date', 6)
  });

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-pulse text-gray-500">Chargement des témoignages...</div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Quote className="w-12 h-12 text-[#f5b82e] mx-auto mb-4" />
        <h2 className="text-4xl md:text-5xl font-light text-[#0f1b2e] mb-4 tracking-[0.15em] uppercase font-playfair">
          Témoignages <span className="font-bold italic">Clients</span>
        </h2>
        <p className="text-lg text-gray-600 font-light font-cormorant italic">
          Ce que nos clients disent de nos services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={testimonial.id}
            data-animate={`testimonial-${index}`}
            className="group border-t-4 border-t-[#f5b82e] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white/90 backdrop-blur-sm animate-fadeInUp"
            style={{ 
              animationDelay: `${index * 100}ms`
            }}
          >
            <CardContent className="p-6">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'fill-[#f5b82e] text-[#f5b82e]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#f5b82e]/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 font-light leading-relaxed font-cormorant text-base pl-4">
                  {testimonial.comment}
                </p>
              </div>

              {/* Customer Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#0f1b2e] group-hover:text-[#f5b82e] transition-colors">
                      {testimonial.customer_name}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {testimonial.service_type}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 font-cormorant italic">
          Rejoignez nos clients satisfaits à Bruxelles
        </p>
      </div>
    </section>
  );
}