import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronDown, Wrench, Zap, CheckCircle, Wind, MapPin, Snowflake } from 'lucide-react';

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const services = [
    { 
      title: 'Installation de Chaudière', 
      icon: Wrench, 
      page: 'InstallationChaudiere', 
      desc: 'Installation complète tout compris' 
    },
    { 
      title: 'Dépannage Rapide', 
      icon: Zap, 
      page: 'DepannageRapide', 
      desc: 'Intervention 24/7' 
    },
    { 
      title: 'Entretien Chaudière', 
      icon: CheckCircle, 
      page: 'EntretienChaudiere', 
      desc: 'Entretien annuel obligatoire' 
    },
    { 
      title: 'Détection Fuite de Gaz', 
      icon: Wind, 
      page: 'DetectionFuiteGaz', 
      desc: "Service d'urgence" 
    },
    { 
      title: 'Installation Climatiseur', 
      icon: Snowflake, 
      page: 'InstallationClimatiseur', 
      desc: 'LG & Panasonic' 
    }
  ];

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setIsOpen(true);
  };
  
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 400);
    setCloseTimeout(timeout);
  };

  return (
    <div 
      className="mega-menu-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      {/* Trigger Button */}
      <button 
        className="text-white hover:text-[#f5b82e] transition-colors font-medium py-4"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }}
      >
        Services
        <ChevronDown 
          className="w-4 h-4 transition-all duration-200"
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div 
          className="mega-menu-panel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            marginTop: '0px',
            width: '380px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '1px solid #e5e7eb',
            zIndex: 50,
            pointerEvents: 'auto',
            overflow: 'hidden'
          }}
        >
          <div>
            {/* Services Column */}
            <div style={{ padding: '16px' }}>
              <h3 style={{ 
                fontSize: '12px', 
                fontWeight: '600', 
                color: '#1e3c72',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Nos Services
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {services.map((service, index) => {
                  const Icon = service.icon;
                  
                  return (
                    <Link
                      key={index}
                      to={createPageUrl(service.page)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f5b82e20';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      <div style={{
                        padding: '8px',
                        borderRadius: '8px',
                        backgroundColor: '#f5b82e20'
                      }}>
                        <Icon 
                          style={{ 
                            width: '18px', 
                            height: '18px', 
                            color: '#f5b82e'
                          }} 
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ 
                          fontWeight: '600', 
                          color: '#1f2937',
                          fontSize: '14px'
                        }}>
                          {service.title}
                        </div>
                        <div style={{ 
                          fontSize: '12px', 
                          color: '#6b7280'
                        }}>
                          {service.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Zones Link */}
            <div style={{ padding: '12px 16px', borderTop: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
              <Link
                to={createPageUrl('ZonesIntervention')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                onClick={() => setIsOpen(false)}
              >
                <MapPin style={{ width: '16px', height: '16px' }} />
                <span>Voir nos zones d'intervention</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}