import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Trash2, Edit, Plus, MapPin, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function TestimonialsAdmin() {
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    customer_name: '',
    location: '',
    rating: 5,
    comment: '',
    service_type: 'Installation',
    published: true
  });

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ['all-testimonials'],
    queryFn: () => base44.entities.Testimonial.list('-created_date')
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Testimonial.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      resetForm();
      toast.success('Témoignage ajouté avec succès');
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Testimonial.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      resetForm();
      toast.success('Témoignage mis à jour');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Testimonial.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      toast.success('Témoignage supprimé');
    }
  });

  const resetForm = () => {
    setFormData({
      customer_name: '',
      location: '',
      rating: 5,
      comment: '',
      service_type: 'Installation',
      published: true
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

  const handleEdit = (testimonial) => {
    setFormData({
      customer_name: testimonial.customer_name,
      location: testimonial.location,
      rating: testimonial.rating,
      comment: testimonial.comment,
      service_type: testimonial.service_type,
      published: testimonial.published
    });
    setEditingId(testimonial.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const communes = [
    "Bruxelles-Ville", "Anderlecht", "Schaerbeek", "Ixelles", "Etterbeek", "Molenbeek-Saint-Jean",
    "Saint-Gilles", "Uccle", "Jette", "Koekelberg", "Forest", "Auderghem",
    "Evere", "Ganshoren", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre",
    "Watermael-Boitsfort", "Berchem-Sainte-Agathe", "Saint-Josse-ten-Noode"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0f1b2e] mb-2 font-playfair">
            Gestion des Témoignages
          </h1>
          <p className="text-gray-600 font-cormorant">
            Ajoutez et gérez les témoignages clients
          </p>
        </div>

        {/* Form */}
        <Card className="border-[#f5b82e] mb-8">
          <CardHeader className="bg-gradient-to-r from-[#0f1b2e] to-[#1a2740] text-white">
            <CardTitle className="flex items-center gap-2">
              {editingId ? <Edit className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {editingId ? 'Modifier le témoignage' : 'Ajouter un nouveau témoignage'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="customer_name">Nom du client *</Label>
                  <Input
                    id="customer_name"
                    value={formData.customer_name}
                    onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                    required
                    placeholder="Jean Dupont"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localisation *</Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une commune" />
                    </SelectTrigger>
                    <SelectContent>
                      {communes.map((commune) => (
                        <SelectItem key={commune} value={commune}>
                          {commune}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating">Note (sur 5) *</Label>
                  <Select
                    value={formData.rating.toString()}
                    onValueChange={(value) => setFormData({ ...formData, rating: parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[5, 4, 3, 2, 1].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} étoile{num > 1 ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service_type">Type de service *</Label>
                  <Select
                    value={formData.service_type}
                    onValueChange={(value) => setFormData({ ...formData, service_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Installation">Installation</SelectItem>
                      <SelectItem value="Dépannage">Dépannage</SelectItem>
                      <SelectItem value="Entretien">Entretien</SelectItem>
                      <SelectItem value="Détection Fuite">Détection Fuite</SelectItem>
                      <SelectItem value="Climatisation">Climatisation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Témoignage *</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  required
                  rows={4}
                  placeholder="Excellent service, très professionnel..."
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4"
                />
                <Label htmlFor="published" className="cursor-pointer">
                  Publier ce témoignage
                </Label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] font-bold"
                  disabled={createMutation.isPending || updateMutation.isPending}
                >
                  {editingId ? 'Mettre à jour' : 'Ajouter'}
                </Button>
                {editingId && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                  >
                    Annuler
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0f1b2e] font-playfair">
            Témoignages existants ({testimonials.length})
          </h2>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-pulse text-gray-500">Chargement...</div>
            </div>
          ) : testimonials.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center text-gray-500">
                Aucun témoignage pour le moment
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id}
                  className={`border-l-4 ${testimonial.published ? 'border-l-green-500' : 'border-l-gray-400'}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? 'fill-[#f5b82e] text-[#f5b82e]'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {testimonial.published && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>

                    <p className="text-gray-700 text-sm mb-4 font-cormorant">
                      "{testimonial.comment}"
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="font-semibold text-[#0f1b2e]">
                        {testimonial.customer_name}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block">
                        {testimonial.service_type}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-gray-200">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(testimonial)}
                        className="flex-1"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Modifier
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          if (window.confirm('Supprimer ce témoignage ?')) {
                            deleteMutation.mutate(testimonial.id);
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