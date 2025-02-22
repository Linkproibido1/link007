import React from 'react';
import { Calendar, Clock, Activity } from 'lucide-react';
import { dailyEvents } from '../data/dailyEvents';

export const DailySchedule: React.FC = () => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <Calendar size={24} className="text-blue-500" />
        <h2 className="text-xl font-semibold text-white">Today's Schedule</h2>
      </div>
      
      <div className="space-y-4">
        {dailyEvents.map((event) => (
          <div key={event.id} className="glass-effect rounded-lg p-4 transition-all duration-300 hover:border-blue-500/50">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-white">{event.title}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                event.status === 'live' 
                  ? 'bg-red-500/20 text-red-400' 
                  : event.status === 'upcoming'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {event.status.toUpperCase()}
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-blue-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-blue-400" />
                <span>{event.sport}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}