import React from 'react';

interface BannerProps {
  code: string;
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({ code, className = '' }) => {
  return (
    <div 
      className={`glass-effect rounded-xl overflow-hidden ${className}`}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}