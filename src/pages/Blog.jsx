import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { rankwise } from '@/api/rankwiseClient';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, Calendar, Eye, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import SEO from '../components/SEO';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => rankwise.entities.BlogPost.filter({ published: true }, '-created_date'),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false
  });

  const categories = ['all', 'Installation', 'Entretien', 'Dépannage', 'Conseils', 'Actualités'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Chauffagiste Express",
    "description": "Conseils, astuces et actualités sur le chauffage à Bruxelles"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Blog Chauffage Bruxelles | Conseils & Astuces - Chauffagiste Express"
        description="Découvrez nos articles sur l'installation, l'entretien et le dépannage de chaudières à Bruxelles. Conseils d'experts et actualités du chauffage."
        canonical="https://centrale-chauffagiste.be/blog"
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
            Notre <span className="font-bold">Blog</span>
          </h1>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Conseils, astuces et actualités sur le chauffage à Bruxelles
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-300 focus:border-[#f5b82e] h-12 text-base"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "bg-[#f5b82e] text-[#0f1b2e] hover:bg-[#ffcf4d]" : ""}
              >
                {cat === 'all' ? 'Toutes les catégories' : cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Chargement des articles...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Aucun article trouvé.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow overflow-hidden group">
                {post.featured_image && (
                  <div className="h-48 md:h-56 overflow-hidden">
                    <img 
                      src={post.featured_image} 
                      alt={`${post.title} - Article blog chauffage Bruxelles - Catégorie ${post.category}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-[#f5b82e] text-[#0f1b2e] px-2 py-1 rounded font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {format(new Date(post.created_date), 'dd MMM yyyy', { locale: fr })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0f1b2e] mb-3 line-clamp-2 group-hover:text-[#f5b82e] transition-colors">
                    {post.title}
                  </h3>
                  
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views} vues
                    </span>
                    <Link 
                      to={createPageUrl('BlogPost') + `?id=${post.id}`}
                      className="text-[#f5b82e] font-semibold text-sm flex items-center gap-1 hover:text-[#ffcf4d] transition-colors"
                    >
                      Lire la suite
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}