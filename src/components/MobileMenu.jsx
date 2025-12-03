import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, MessageCircle, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', path: 'Home' },
    { label: 'À Propos', path: 'APropos' },
    { label: 'Zones d\'Intervention', path: 'ZonesIntervention' },
    { label: 'Blog', path: 'Blog' },
    { label: 'Contact', path: 'Contact' },
    { label: 'Plan du Site', path: 'Sitemap' }
  ];

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white hover:text-[#f5b82e]"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 md:hidden shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#1e3c72] to-[#2a5298]">
                <div className="flex items-center gap-2">
                  <div className="bg-[#f5b82e] p-2 rounded-lg">
                    <Flame className="w-5 h-5 text-[#1e3c72]" />
                  </div>
                  <span className="text-lg font-bold text-white">ILMACHAUF</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto py-6">
                <ul className="space-y-1 px-4">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={createPageUrl(item.path)}
                        className="block px-4 py-3 text-gray-800 hover:bg-[#f5b82e]/10 hover:text-[#1e3c72] rounded-lg transition-all font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact CTA */}
              <div className="p-6 border-t border-gray-200 space-y-3 bg-gray-50">
                <a 
                  href="tel:0487407407"
                  className="flex items-center justify-center gap-2 bg-[#f5b82e] text-[#1e3c72] px-6 py-3 rounded-xl font-bold hover:bg-[#ffcf4d] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  0487 407 407
                </a>
                <a 
                  href="https://wa.me/32487407407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <p className="text-xs text-gray-500 text-center">
                  Disponible 7j/7 pour urgences
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}