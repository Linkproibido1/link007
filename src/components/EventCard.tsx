import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';
import { SportEvent } from '../types';
import { Popup } from './Popup';
import { ads } from '../data/ads';

interface EventCardProps {
  event: SportEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const eventPopup = ads.eventPopups[`event-${event.id}`];

  const handleClick = () => {
    if (eventPopup?.enabled) {
      setShowPopup(true);
    } else {
      navigate(`/watch/${event.id}`);
    }
  };

  return (
    <>
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-xl card-hover glass-effect"
        onClick={handleClick}
      >
        <div className="aspect-video relative">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-effect text-xs font-semibold text-blue-400">
            {event.sport}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{event.title}</h3>
            <p className="text-sm text-gray-300">{event.description}</p>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-blue-400" />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-400" />
                <span className="text-sm">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-blue-400" />
                <span className="text-sm">12.5K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && eventPopup && (
        <Popup
          title={eventPopup.title}
          content={eventPopup.content}
          adCode={eventPopup.code}
          onClose={() => {
            setShowPopup(false);
            navigate(`/watch/${event.id}`);
          }}
        />
      )}
    </>
  );
};