// Rankwise API Client
// Uses Supabase for blog posts, mocks for other entities

import { supabase, TABLES } from './supabaseClient';

// Mock entity handlers for non-blog entities
const createMockEntity = (name) => ({
  list: async (order = '') => {
    console.log(`[Rankwise Mock] ${name}.list(${order})`);
    return [];
  },
  filter: async (filters = {}, order = '', limit = null) => {
    console.log(`[Rankwise Mock] ${name}.filter(${JSON.stringify(filters)}, ${order}, ${limit})`);
    return [];
  },
  create: async (data) => {
    console.log(`[Rankwise Mock] ${name}.create(${JSON.stringify(data)})`);
    return { id: Date.now(), ...data };
  },
  update: async (id, data) => {
    console.log(`[Rankwise Mock] ${name}.update(${id}, ${JSON.stringify(data)})`);
    return { id, ...data };
  },
  delete: async (id) => {
    console.log(`[Rankwise Mock] ${name}.delete(${id})`);
    return { success: true };
  },
});

// Supabase BlogPost entity
const BlogPostEntity = {
  list: async (order = '-created_date') => {
    try {
      let query = supabase.from(TABLES.BLOG_POSTS).select('*');
      
      // Handle ordering
      if (order.startsWith('-')) {
        const column = order.substring(1);
        query = query.order(column, { ascending: false });
      } else if (order) {
        query = query.order(order, { ascending: true });
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  },
  
  filter: async (filters = {}, order = '-created_date', limit = null) => {
    try {
      let query = supabase.from(TABLES.BLOG_POSTS).select('*');
      
      // Apply filters
      if (filters.published !== undefined) {
        query = query.eq('published', filters.published);
      }
      if (filters.id) {
        query = query.eq('id', filters.id);
      }
      if (filters.slug) {
        query = query.eq('slug', filters.slug);
      }
      if (filters.category) {
        query = query.eq('category', filters.category);
      }
      
      // Handle ordering
      if (order.startsWith('-')) {
        const column = order.substring(1);
        query = query.order(column, { ascending: false });
      } else if (order) {
        query = query.order(order, { ascending: true });
      }
      
      // Apply limit
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error filtering blog posts:', error);
      return [];
    }
  },
  
  create: async (data) => {
    try {
      const { data: result, error } = await supabase
        .from(TABLES.BLOG_POSTS)
        .insert([{
          ...data,
          created_date: new Date().toISOString(),
          updated_date: new Date().toISOString(),
        }])
        .select()
        .single();
      
      if (error) throw error;
      return result;
    } catch (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }
  },
  
  update: async (id, data) => {
    try {
      const { data: result, error } = await supabase
        .from(TABLES.BLOG_POSTS)
        .update({
          ...data,
          updated_date: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return result;
    } catch (error) {
      console.error('Error updating blog post:', error);
      throw error;
    }
  },
  
  delete: async (id) => {
    try {
      const { error } = await supabase
        .from(TABLES.BLOG_POSTS)
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error deleting blog post:', error);
      throw error;
    }
  },
};

// Rankwise client
export const rankwise = {
  entities: {
    BlogPost: BlogPostEntity,
    Comment: createMockEntity('Comment'),
    Testimonial: createMockEntity('Testimonial'),
    ServicePage: createMockEntity('ServicePage'),
  },
  auth: {
    login: async () => ({ success: false, message: 'Auth disabled' }),
    logout: async () => ({ success: true }),
    getCurrentUser: async () => null,
  },
  integrations: {
    Core: {
      SendEmail: async (data) => {
        console.log('[Rankwise Mock] SendEmail', data);
        return { success: true, message: 'Email sent (mock)' };
      },
      InvokeLLM: async (data) => {
        console.log('[Rankwise Mock] InvokeLLM', data);
        return { response: 'Mock response' };
      },
      UploadFile: async (data) => {
        console.log('[Rankwise Mock] UploadFile', data);
        return { url: 'mock-url' };
      },
      GenerateImage: async (data) => {
        console.log('[Rankwise Mock] GenerateImage', data);
        return { url: 'mock-image-url' };
      },
      ExtractDataFromUploadedFile: async (data) => {
        console.log('[Rankwise Mock] ExtractDataFromUploadedFile', data);
        return { data: {} };
      },
      CreateFileSignedUrl: async (data) => {
        console.log('[Rankwise Mock] CreateFileSignedUrl', data);
        return { url: 'mock-signed-url' };
      },
      UploadPrivateFile: async (data) => {
        console.log('[Rankwise Mock] UploadPrivateFile', data);
        return { url: 'mock-private-url' };
      },
    },
  },
  agents: {
    createConversation: async () => {
      console.log('[Rankwise Mock] createConversation');
      return { id: 'mock-conv-id', messages: [] };
    },
    subscribeToConversation: (id, callback) => {
      console.log('[Rankwise Mock] subscribeToConversation', id);
      return () => {}; // unsubscribe function
    },
    addMessage: async (conversation, message) => {
      console.log('[Rankwise Mock] addMessage', conversation, message);
      return { success: true };
    },
  },
};
