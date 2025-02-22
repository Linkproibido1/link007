import React from 'react';
import { X } from 'lucide-react';

interface PopupProps {
  title: string;
  content: string;
  adCode?: string;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ title, content, adCode, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative w-full max-w-lg mx-4">
        <div className="glass-effect rounded-xl overflow-hidden">
          <div className="p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-6">{content}</p>
            {adCode && (
              <div 
                className="bg-black/20 rounded-lg p-4 mb-4"
                dangerouslySetInnerHTML={{ __html: adCode }}
              />
            )}
            <button
              onClick={onClose}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}