import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { rankwise } from '@/api/rankwiseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Edit, Trash2, Eye, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ServicesAdmin() {
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    hero_title: '',
    hero_subtitle: '',
    hero_image: '',
    intro_content: '',
    features: [],
    pricing_info: '',
    faqs: [],
    cta_title: '',
    cta_text: '',
    published: true,
    order: 0
  });

  const { data: services = [], isLoading } = useQuery({
    queryKey: ['services-admin'],
    queryFn: () => rankwise.entities.ServicePage.list('order')
  });

  const createMutation = useMutation({
    mutationFn: (data) => rankwise.entities.ServicePage.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services-admin'] });
      resetForm();
      toast.success('Service créé avec succès');
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => rankwise.entities.ServicePage.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services-admin'] });
      resetForm();
      toast.success('Service mis à jour');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => rankwise.entities.ServicePage.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services-admin'] });
      toast.success('Service supprimé');
    }
  });

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      hero_title: '',
      hero_subtitle: '',
      hero_image: '',
      intro_content: '',
      features: [],
      pricing_info: '',
      faqs: [],
      cta_title: '',
      cta_text: '',
      published: true,
      order: 0
    });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateMutation.mutate({ id: editingId, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (service) => {
    setFormData({
      title: service.title,
      slug: service.slug,
      meta_title: service.meta_title,
      meta_description: service.meta_description,
      meta_keywords: service.meta_keywords || '',
      hero_title: service.hero_title,
      hero_subtitle: service.hero_subtitle || '',
      hero_image: service.hero_image || '',
      intro_content: service.intro_content || '',
      features: service.features || [],
      pricing_info: service.pricing_info || '',
      faqs: service.faqs || [],
      cta_title: service.cta_title || '',
      cta_text: service.cta_text || '',
      published: service.published,
      order: service.order || 0
    });
    setEditingId(service.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0f1b2e] mb-2 font-playfair">
            Gestion des Pages Services
          </h1>
          <p className="text-gray-600 font-cormorant">
            Créez et gérez les pages de services dynamiques
          </p>
        </div>

        {/* Form */}
        <Card className="border-[#f5b82e] mb-8">
          <CardHeader className="bg-gradient-to-r from-[#0f1b2e] to-[#1a2740] text-white">
            <CardTitle className="flex items-center gap-2">
              {editingId ? <Edit className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {editingId ? 'Modifier le service' : 'Créer un nouveau service'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre du service *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="Installation de Chaudière"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL) *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                    placeholder="installation-chaudiere"
                  />
                </div>
              </div>

              {/* SEO */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-[#0f1b2e]">SEO & Métadonnées</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="meta_title">Titre SEO *</Label>
                  <Input
                    id="meta_title"
                    value={formData.meta_title}
                    onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                    required
                    placeholder="Installation Chaudière Bruxelles | Expert Chauffagiste"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta_description">Description SEO *</Label>
                  <Textarea
                    id="meta_description"
                    value={formData.meta_description}
                    onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                    required
                    rows={3}
                    placeholder="Installation professionnelle de chaudières à Bruxelles..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta_keywords">Mots-clés SEO</Label>
                  <Input
                    id="meta_keywords"
                    value={formData.meta_keywords}
                    onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                    placeholder="installation chaudière, chauffagiste bruxelles"
                  />
                </div>
              </div>

              {/* Hero Section */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-[#0f1b2e]">Section Hero</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="hero_title">Titre Hero *</Label>
                  <Input
                    id="hero_title"
                    value={formData.hero_title}
                    onChange={(e) => setFormData({ ...formData, hero_title: e.target.value })}
                    required
                    placeholder="Installation de Chaudière"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero_subtitle">Sous-titre Hero</Label>
                  <Input
                    id="hero_subtitle"
                    value={formData.hero_subtitle}
                    onChange={(e) => setFormData({ ...formData, hero_subtitle: e.target.value })}
                    placeholder="Service professionnel à Bruxelles"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero_image">URL Image Hero</Label>
                  <Input
                    id="hero_image"
                    value={formData.hero_image}
                    onChange={(e) => setFormData({ ...formData, hero_image: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2 border-t pt-6">
                <Label htmlFor="intro_content">Contenu d'introduction (HTML)</Label>
                <Textarea
                  id="intro_content"
                  value={formData.intro_content}
                  onChange={(e) => setFormData({ ...formData, intro_content: e.target.value })}
                  rows={8}
                  placeholder="<p>Votre contenu HTML...</p>"
                />
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <Label htmlFor="pricing_info">Informations tarifaires (HTML)</Label>
                <Textarea
                  id="pricing_info"
                  value={formData.pricing_info}
                  onChange={(e) => setFormData({ ...formData, pricing_info: e.target.value })}
                  rows={4}
                  placeholder="<p>À partir de 3500€...</p>"
                />
              </div>

              {/* CTA */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-[#0f1b2e]">Call-to-Action</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="cta_title">Titre CTA</Label>
                  <Input
                    id="cta_title"
                    value={formData.cta_title}
                    onChange={(e) => setFormData({ ...formData, cta_title: e.target.value })}
                    placeholder="Besoin d'un devis ?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cta_text">Texte CTA</Label>
                  <Input
                    id="cta_text"
                    value={formData.cta_text}
                    onChange={(e) => setFormData({ ...formData, cta_text: e.target.value })}
                    placeholder="Contactez-nous pour un devis gratuit"
                  />
                </div>
              </div>

              {/* Settings */}
              <div className="flex items-center gap-6 border-t pt-6">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="published" className="cursor-pointer">
                    Publier cette page
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Label htmlFor="order">Ordre:</Label>
                  <Input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    className="w-20"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] font-bold"
                  disabled={createMutation.isPending || updateMutation.isPending}
                >
                  {editingId ? 'Mettre à jour' : 'Créer le service'}
                </Button>
                {editingId && (
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Annuler
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Services List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0f1b2e] font-playfair">
            Services existants ({services.length})
          </h2>

          {isLoading ? (
            <div className="text-center py-12">Chargement...</div>
          ) : services.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center text-gray-500">
                Aucun service créé
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card 
                  key={service.id}
                  className={`border-l-4 ${service.published ? 'border-l-green-500' : 'border-l-gray-400'}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-[#0f1b2e] text-lg mb-1">
                          {service.title}
                        </h3>
                        <div className="text-sm text-gray-500">
                          /{service.slug}
                        </div>
                      </div>
                      {service.published && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {service.meta_description}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(service)}
                        className="flex-1"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Modifier
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(`/service?slug=${service.slug}`, '_blank')}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          if (window.confirm('Supprimer ce service ?')) {
                            deleteMutation.mutate(service.id);
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}