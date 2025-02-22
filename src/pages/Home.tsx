import React, { useEffect, useState } from 'react';
import { Tv, Zap } from 'lucide-react';
import { EventCarousel } from '../components/EventCarousel';
import { DailySchedule } from '../components/DailySchedule';
import { Banner } from '../components/Banner';
import { Popup } from '../components/Popup';
import { ads } from '../data/ads';

export const Home: React.FC = () => {
  const [showGlobalPopup, setShowGlobalPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenGlobalPopup');
    if (ads.globalPopup.enabled && (!ads.globalPopup.showOnce || !hasSeenPopup)) {
      setShowGlobalPopup(true);
      localStorage.setItem('hasSeenGlobalPopup', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <header className="glass-effect py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Tv size={32} className="text-blue-500" />
                <Zap size={14} className="absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white neon-glow">FUTE<span className="text-blue-500">FREE</span></h1>
                <p className="text-xs text-gray-400">Premium Sports Experience</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Live Now</a>
              <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Schedule</a>
              <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Sports</a>
            </nav>
          </div>
        </div>
      </header>

      {ads.banners.header.enabled && (
        <div className="container mx-auto px-4 py-4">
          <Banner code={ads.banners.header.code} />
        </div>
      )}
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-2 neon-glow">Live & Upcoming Events</h2>
          <p className="text-gray-400">Have fun and enjoy ⚡</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <EventCarousel />
            
            <div className="mt-12">
              <DailySchedule />
            </div>
          </div>

          {ads.banners.sidebar.enabled && (
            <div className="hidden lg:block">
              <Banner 
                code={ads.banners.sidebar.code}
                className="sticky top-24"
              />
            </div>
          )}
        </div>
      </main>

      {ads.banners.footer.enabled && (
        <footer className="container mx-auto px-4 py-8">
          <Banner code={ads.banners.footer.code} />
                  <div className="text-center text-gray-500 text-sm font-medium">
                    
          NÃO HOSPEDAMOS NEM UM CONTEÚDO EM NOSSOS SERVIDORES!
        </div>
        </footer>
      )}

      {showGlobalPopup && (
        <Popup
          title={ads.globalPopup.title}
          content={ads.globalPopup.content}
          adCode={ads.globalPopup.code}
          onClose={() => setShowGlobalPopup(false)}
        />
      )}
    </div>
  );
}