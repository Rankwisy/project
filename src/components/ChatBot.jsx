import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, Loader2, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !conversation) {
      initializeChat();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!conversation) return;

    const unsubscribe = base44.agents.subscribeToConversation(conversation.id, (data) => {
      setMessages(data.messages || []);
      const lastMessage = data.messages?.[data.messages.length - 1];
      if (lastMessage?.role === 'assistant' && lastMessage?.content) {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [conversation]);

  const initializeChat = async () => {
    try {
      const conv = await base44.agents.createConversation({
        agent_name: 'assistant_chauffagiste',
        metadata: {
          name: 'Chat Assistant',
          source: 'website'
        }
      });
      setConversation(conv);
      
      // Message de bienvenue
      await base44.agents.addMessage(conv, {
        role: 'assistant',
        content: "👋 Bonjour ! Je suis l'assistant de Chauffagiste Express.\n\nComment puis-je vous aider aujourd'hui ?\n\n🔧 Installation de chaudière\n⚡ Dépannage urgent\n✅ Entretien annuel\n🔍 Zones d'intervention\n💬 Autre question"
      });
    } catch (error) {
      console.error('Erreur initialisation chat:', error);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || !conversation || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      await base44.agents.addMessage(conversation, {
        role: 'user',
        content: userMessage
      });
    } catch (error) {
      console.error('Erreur envoi message:', error);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e] shadow-2xl z-50 p-0"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-[380px] h-[600px] shadow-2xl z-50 flex flex-col bg-white border-2 border-[#f5b82e]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0f1b2e] to-[#1a2740] text-white p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#f5b82e] flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-[#0f1b2e]" />
          </div>
          <div>
            <h3 className="font-semibold">Assistant Chauffagiste</h3>
            <p className="text-xs text-white/80">En ligne</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => {
          if (message.role === 'system') return null;
          
          const isUser = message.role === 'user';
          return (
            <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                isUser 
                  ? 'bg-[#0f1b2e] text-white' 
                  : 'bg-white border border-gray-200 text-gray-800'
              }`}>
                {isUser ? (
                  <p className="text-sm">{message.content}</p>
                ) : (
                  <ReactMarkdown 
                    className="text-sm prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      a: ({ children, ...props }) => (
                        <a {...props} className="text-[#f5b82e] hover:text-[#d49a1e] underline" target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                      ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                      li: ({ children }) => <li className="mb-1">{children}</li>,
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          );
        })}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
              <Loader2 className="h-5 w-5 text-[#f5b82e] animate-spin" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 bg-white border-t border-gray-200">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <a 
            href="tel:0487407407"
            className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap hover:bg-green-200 transition-colors"
          >
            <Phone className="h-3 w-3" />
            Appeler
          </a>
          <a 
            href="https://wa.me/32487407407"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap hover:bg-[#20bd5a] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Posez votre question..."
            className="flex-1 border-gray-300 focus:border-[#f5b82e]"
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-[#f5b82e] hover:bg-[#ffcf4d] text-[#0f1b2e]"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}