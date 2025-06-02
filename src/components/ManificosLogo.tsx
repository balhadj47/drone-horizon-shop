
import React from 'react';

interface ManificosLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ManificosLogo = ({ className = "", size = 'md' }: ManificosLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer ring representing flight path */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        
        {/* Central drone body */}
        <rect
          x="16"
          y="18"
          width="8"
          height="4"
          rx="2"
          fill="url(#gradient)"
        />
        
        {/* Drone propellers */}
        <circle cx="12" cy="12" r="3" fill="url(#gradient)" opacity="0.8" />
        <circle cx="28" cy="12" r="3" fill="url(#gradient)" opacity="0.8" />
        <circle cx="12" cy="28" r="3" fill="url(#gradient)" opacity="0.8" />
        <circle cx="28" cy="28" r="3" fill="url(#gradient)" opacity="0.8" />
        
        {/* Propeller arms */}
        <line x1="14" y1="14" x2="18" y2="18" stroke="url(#gradient)" strokeWidth="1.5" />
        <line x1="26" y1="14" x2="22" y2="18" stroke="url(#gradient)" strokeWidth="1.5" />
        <line x1="14" y1="26" x2="18" y2="22" stroke="url(#gradient)" strokeWidth="1.5" />
        <line x1="26" y1="26" x2="22" y2="22" stroke="url(#gradient)" strokeWidth="1.5" />
        
        {/* Central M letter */}
        <text
          x="20"
          y="23"
          textAnchor="middle"
          className="text-xs font-bold fill-white"
          style={{ fontSize: '8px' }}
        >
          M
        </text>
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ManificosLogo;
