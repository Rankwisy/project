// Rankwise Mock API Client
// Local mock implementation for API calls

// Mock entity handlers
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

// Mock rankwise client
export const rankwise = {
  entities: {
    BlogPost: createMockEntity('BlogPost'),
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

