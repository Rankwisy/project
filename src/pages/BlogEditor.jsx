import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery, useMutation } from '@tanstack/react-query';
import { rankwise } from '@/api/rankwiseClient';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, Eye } from 'lucide-react';

export default function BlogEditor() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    category: 'Conseils',
    tags: [],
    published: false
  });

  const { data: existingPost } = useQuery({
    queryKey: ['blogPost', postId],
    queryFn: async () => {
      const posts = await rankwise.entities.BlogPost.filter({ id: postId });
      return posts[0] || null;
    },
    enabled: !!postId,
    staleTime: 0, // Always fresh for editing
    cacheTime: 5 * 60 * 1000
  });

  useEffect(() => {
    if (existingPost) {
      setFormData(existingPost);
    }
  }, [existingPost]);

  const saveMutation = useMutation({
    mutationFn: (data) => {
      if (postId) {
        return rankwise.entities.BlogPost.update(postId, data);
      }
      return rankwise.entities.BlogPost.create(data);
    },
    onSuccess: () => {
      navigate(createPageUrl('BlogAdmin'));
    }
  });

  const handleSubmit = (e, publish = false) => {
    e.preventDefault();
    const slug = formData.slug || formData.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    saveMutation.mutate({
      ...formData,
      slug,
      published: publish
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <Link 
            to={createPageUrl('BlogAdmin')}
            className="inline-flex items-center gap-2 text-[#f5b82e] hover:text-[#ffcf4d] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à la gestion
          </Link>
          <h1 className="text-4xl md:text-5xl font-light">
            {postId ? 'Modifier' : 'Créer'} un <span className="font-bold">Article</span>
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <Card className="border-[#f5b82e]">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Titre *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                  className="text-xl font-semibold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  placeholder="laissez vide pour génération automatique"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Résumé</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Catégorie *</Label>
                <Select value={formData.category} onValueChange={(val) => setFormData({...formData, category: val})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Installation">Installation</SelectItem>
                    <SelectItem value="Entretien">Entretien</SelectItem>
                    <SelectItem value="Dépannage">Dépannage</SelectItem>
                    <SelectItem value="Conseils">Conseils</SelectItem>
                    <SelectItem value="Actualités">Actualités</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featured_image">Image principale (URL)</Label>
                <Input
                  id="featured_image"
                  value={formData.featured_image}
                  onChange={(e) => setFormData({...formData, featured_image: e.target.value})}
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Contenu * (Markdown supporté)</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  required
                  rows={20}
                  className="font-mono text-sm"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  type="button"
                  onClick={(e) => handleSubmit(e, false)}
                  disabled={saveMutation.isPending}
                  variant="outline"
                  className="flex-1"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Enregistrer comme brouillon
                </Button>
                <Button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  disabled={saveMutation.isPending}
                  className="flex-1 bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e]"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Publier
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}