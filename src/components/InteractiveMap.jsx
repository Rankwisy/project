import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Wrench, Zap, CheckCircle, Wind, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function InteractiveMap({ height = '600px', showAllCommunes = true }) {
  const centerPosition = [50.8503, 4.3517];

  const communes = [
    { name: 'Bruxelles-Ville', position: [50.8503, 4.3517], page: 'ChauffagisteBruxellesVille', description: 'Centre historique et administratif' },
    { name: 'Ixelles', position: [50.8325, 4.3636], page: 'ChauffagisteIxelles', description: 'Quartier résidentiel prisé' },
    { name: 'Uccle', position: [50.7991, 4.3342], page: 'ChauffagisteUccle', description: 'Commune verdoyante et résidentielle' },
    { name: 'Schaerbeek', position: [50.8676, 4.3731], page: 'ChauffagisteSchaerbeek', description: 'Architecture Art Nouveau' },
    { name: 'Anderlecht', position: [50.8367, 4.3143], page: 'ChauffagisteAnderlecht', description: 'Commune dynamique' },
    { name: 'Etterbeek', position: [50.8325, 4.3892], page: 'ChauffagisteEtterbeek', description: 'Quartier européen' },
    { name: 'Woluwe-Saint-Lambert', position: [50.8436, 4.4198], page: 'ChauffagisteWoluwe', description: 'Quartiers résidentiels' },
    { name: 'Woluwe-Saint-Pierre', position: [50.8288, 4.4392], page: 'ChauffagisteWoluwe', description: 'Commune huppée' },
    { name: 'Molenbeek-Saint-Jean', position: [50.8592, 4.3142], page: 'ChauffagisteMolenbeek', description: 'Commune en transformation' },
    { name: 'Saint-Gilles', position: [50.8274, 4.3444], page: 'ChauffagisteSaintGilles', description: 'Quartier bohème' },
    { name: 'Jette', position: [50.8764, 4.3214], page: 'ChauffagisteJette', description: 'Commune résidentielle calme' },
    { name: 'Koekelberg', position: [50.8639, 4.3292], page: 'ChauffagisteKoekelberg', description: 'Plus petite commune' },
    { name: 'Forest', position: [50.8145, 4.3192], page: 'ChauffagisteBruxellesVille', description: 'Entre verdure et urbanité' },
    { name: 'Auderghem', position: [50.8167, 4.4292], page: 'ChauffagisteBruxellesVille', description: 'Commune verte et familiale' },
    { name: 'Evere', position: [50.8689, 4.4014], page: 'ChauffagisteBruxellesVille', description: 'Proche de l\'aéroport' },
    { name: 'Ganshoren', position: [50.8731, 4.3097], page: 'ChauffagisteBruxellesVille', description: 'Commune paisible' },
    { name: 'Watermael-Boitsfort', position: [50.7997, 4.4092], page: 'ChauffagisteBruxellesVille', description: 'Bordure de la forêt' },
    { name: 'Berchem-Sainte-Agathe', position: [50.8678, 4.2947], page: 'ChauffagisteBruxellesVille', description: 'Commune calme' },
    { name: 'Saint-Josse-ten-Noode', position: [50.8542, 4.3728], page: 'ChauffagisteBruxellesVille', description: 'Plus petite mais plus dense' }
  ];

  const services = [
    { icon: Wrench, title: 'Installation', color: '#f5b82e' },
    { icon: Zap, title: 'Dépannage 24/7', color: '#ef4444' },
    { icon: CheckCircle, title: 'Entretien', color: '#10b981' },
    { icon: Wind, title: 'Détection fuite', color: '#3b82f6' }
  ];

  return (
    <div style={{ height, width: '100%', position: 'relative' }}>
      <MapContainer
        center={centerPosition}
        zoom={showAllCommunes ? 11.5 : 12}
        style={{ height: '100%', width: '100%', borderRadius: '8px' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Coverage Circle */}
        <Circle
          center={centerPosition}
          radius={7000}
          pathOptions={{
            color: '#1e3c72',
            fillColor: '#1e3c72',
            fillOpacity: 0.1,
            weight: 2
          }}
        />
        
        {/* Commune Markers */}
        {communes.map((commune, index) => (
          <Marker key={index} position={commune.position}>
            <Popup maxWidth={300}>
              <div style={{ padding: '8px', minWidth: '250px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MapPin style={{ width: '20px', height: '20px', color: '#f5b82e', flexShrink: 0 }} />
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: '700', 
                    color: '#0f1b2e',
                    margin: 0,
                    fontFamily: 'Playfair Display, serif'
                  }}>
                    {commune.name}
                  </h3>
                </div>
                
                <p style={{ 
                  fontSize: '14px', 
                  color: '#6b7280', 
                  marginBottom: '12px',
                  fontFamily: 'Cormorant Garamond, serif'
                }}>
                  {commune.description}
                </p>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '6px',
                  marginBottom: '12px'
                }}>
                  {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <div 
                        key={idx}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          fontSize: '12px',
                          color: '#374151'
                        }}
                      >
                        <Icon style={{ width: '14px', height: '14px', color: service.color, flexShrink: 0 }} />
                        <span>{service.title}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <Link
                    to={createPageUrl(commune.page)}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '8px',
                      backgroundColor: '#f5b82e',
                      color: '#0f1b2e',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: '13px',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    Voir les services
                  </Link>
                  
                  <a
                    href="tel:0487407407"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px',
                      backgroundColor: '#0f1b2e',
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: '13px',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <Phone style={{ width: '14px', height: '14px' }} />
                    <span>0487/40.74.07</span>
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'white',
        padding: '12px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        zIndex: 1000
      }}>
        <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: '#0f1b2e' }}>
          Services disponibles :
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
                <Icon style={{ width: '12px', height: '12px', color: service.color }} />
                <span style={{ color: '#4b5563' }}>{service.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}