import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Trophy, Signal } from 'lucide-react';
import { events } from '../data/events';
import { providers } from '../data/providers';

export const Watch: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);
  
  // Filtra os provedores com base nos providerIds do evento
  const eventProviders = providers.filter(provider => 
    event?.providerIds.includes(provider.id)
  );
  
  const [selectedProvider, setSelectedProvider] = useState(eventProviders[0]);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center">
        <p>Event not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 mb-8 hover:text-blue-500 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Events</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video glass-effect rounded-xl overflow-hidden relative group">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-effect text-sm font-semibold text-blue-400 flex items-center gap-2">
                <Signal size={16} className="animate-pulse" />
                Live
              </div>
              <iframe
                src={selectedProvider.embedUrl} // Usa apenas a URL do provedor
                className="w-full h-full"
                allowFullScreen
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <h1 className="text-2xl font-bold text-white mb-3">{event.title}</h1>
              <p className="text-gray-400 mb-6">{event.description}</p>
              
              <div className="flex items-center gap-8 text-gray-300">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-blue-400" />
                  <span>12.5K watching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy size={20} className="text-blue-400" />
                  <span>{event.sport}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Available Providers</h2>
            <div className="space-y-3">
              {eventProviders.map(provider => (
                <button
                  key={provider.id}
                  onClick={() => setSelectedProvider(provider)}
                  className={`w-full px-6 py-4 rounded-lg transition-all duration-300 ${
                    selectedProvider.id === provider.id
                      ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                      : 'glass-effect text-gray-300 hover:border-blue-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{provider.name}</span>
                    <Signal size={16} className={selectedProvider.id === provider.id ? 'animate-pulse' : ''} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
