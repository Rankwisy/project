import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { rankwise } from '@/api/rankwiseClient';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Calendar, Eye, MessageCircle, Send } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const queryClient = useQueryClient();

  const [commentForm, setCommentForm] = useState({
    author_name: '',
    author_email: '',
    content: ''
  });

  const { data: post, isLoading } = useQuery({
    queryKey: ['blogPost', postId],
    queryFn: async () => {
      const posts = await rankwise.entities.BlogPost.filter({ id: postId });
      if (posts.length > 0) {
        // Increment views
        await rankwise.entities.BlogPost.update(postId, { views: (posts[0].views || 0) + 1 });
        return posts[0];
      }
      return null;
    },
    enabled: !!postId,
    staleTime: 10 * 60 * 1000, // 10 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false
  });

  const { data: comments = [] } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => rankwise.entities.Comment.filter({ blog_post_id: postId, approved: true }, '-created_date'),
    enabled: !!postId,
    staleTime: 2 * 60 * 1000, // 2 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false
  });

  const createCommentMutation = useMutation({
    mutationFn: (data) => rankwise.entities.Comment.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
      setCommentForm({ author_name: '', author_email: '', content: '' });
    }
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    createCommentMutation.mutate({
      ...commentForm,
      blog_post_id: postId,
      approved: false
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Chargement de l'article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Article non trouvé</p>
          <Link to={createPageUrl('Blog')} className="text-[#f5b82e] hover:text-[#ffcf4d]">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.created_date,
    "author": {
      "@type": "Organization",
      "name": "Chauffagiste Express"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${post.title} - Blog Chauffagiste Express`}
        description={post.excerpt || post.title}
        schema={schema}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1b2e] via-[#1a2740] to-[#2d4263] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to={createPageUrl('Blog')}
            className="inline-flex items-center gap-2 text-[#f5b82e] hover:text-[#ffcf4d] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au blog
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm bg-[#f5b82e] text-[#0f1b2e] px-3 py-1 rounded font-semibold">
              {post.category}
            </span>
            <span className="text-sm text-white/80 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.created_date), 'dd MMMM yyyy', { locale: fr })}
            </span>
            <span className="text-sm text-white/80 flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views} vues
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-white/90 font-light">
              {post.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Featured Image */}
      {post.featured_image && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img 
            src={post.featured_image} 
            alt={`Image de l'article: ${post.title} - Blog Chauffagiste Express Bruxelles`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none mb-16">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#0f1b2e] mb-8 flex items-center gap-2">
            <MessageCircle className="w-8 h-8 text-[#f5b82e]" />
            Commentaires ({comments.length})
          </h2>

          {/* Comment Form */}
          <Card className="mb-8 border-[#f5b82e]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#0f1b2e] mb-4">
                Laisser un commentaire
              </h3>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author_name" className="text-sm md:text-base">Nom *</Label>
                    <Input
                      id="author_name"
                      value={commentForm.author_name}
                      onChange={(e) => setCommentForm({...commentForm, author_name: e.target.value})}
                      required
                      className="border-gray-300 focus:border-[#f5b82e] h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="author_email" className="text-sm md:text-base">Email *</Label>
                    <Input
                      id="author_email"
                      type="email"
                      value={commentForm.author_email}
                      onChange={(e) => setCommentForm({...commentForm, author_email: e.target.value})}
                      required
                      className="border-gray-300 focus:border-[#f5b82e] h-12 text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-sm md:text-base">Commentaire *</Label>
                  <Textarea
                    id="content"
                    value={commentForm.content}
                    onChange={(e) => setCommentForm({...commentForm, content: e.target.value})}
                    required
                    rows={4}
                    className="border-gray-300 focus:border-[#f5b82e] text-base min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={createCommentMutation.isPending}
                  className="bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] font-bold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {createCommentMutation.isPending ? 'Envoi...' : 'Publier le commentaire'}
                </Button>
                {createCommentMutation.isSuccess && (
                  <p className="text-green-600 text-sm">
                    Votre commentaire a été envoyé et est en attente de modération.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map(comment => (
              <Card key={comment.id} className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-[#0f1b2e]">{comment.author_name}</span>
                    <span className="text-sm text-gray-500">
                      {format(new Date(comment.created_date), 'dd MMM yyyy à HH:mm', { locale: fr })}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}