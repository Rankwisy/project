import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { rankwise } from '@/api/rankwiseClient';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function BlogAdmin() {
  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['allBlogPosts'],
    queryFn: () => rankwise.entities.BlogPost.list('-created_date'),
    staleTime: 1 * 60 * 1000, // 1 minute
    cacheTime: 5 * 60 * 1000 // 5 minutes
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => rankwise.entities.BlogPost.delete(id),
    onSuccess: () => queryClient.invalidateQueries(['allBlogPosts'])
  });

  const togglePublishMutation = useMutation({
    mutationFn: ({ id, published }) => rankwise.entities.BlogPost.update(id, { published }),
    onSuccess: () => queryClient.invalidateQueries(['allBlogPosts'])
  });

  const handleDelete = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#f5b82e] hover:text-[#ffcf4d] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-2">
                Gestion du <span className="font-bold">Blog</span>
              </h1>
              <p className="text-white/90">
                Créer et gérer vos articles de blog
              </p>
            </div>
            <Link to={createPageUrl('BlogEditor')}>
              <Button className="bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] font-bold">
                <Plus className="w-5 h-5 mr-2" />
                Nouvel article
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {isLoading ? (
          <p className="text-center text-gray-600">Chargement...</p>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Aucun article pour le moment</p>
            <Link to={createPageUrl('BlogEditor')}>
              <Button className="bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e]">
                Créer votre premier article
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs px-2 py-1 rounded font-semibold ${
                          post.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {post.published ? 'Publié' : 'Brouillon'}
                        </span>
                        <span className="text-xs bg-[#f5b82e]/20 text-[#0f1b2e] px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0f1b2e] mb-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>
                          {format(new Date(post.created_date), 'dd MMM yyyy', { locale: fr })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views} vues
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => togglePublishMutation.mutate({ 
                          id: post.id, 
                          published: !post.published 
                        })}
                        title={post.published ? 'Dépublier' : 'Publier'}
                      >
                        {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Link to={createPageUrl('BlogEditor') + `?id=${post.id}`}>
                        <Button variant="outline" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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