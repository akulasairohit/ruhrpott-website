import React from 'react';

interface WindTurbineProps {
  size?: number;
  className?: string;
  delay?: number;
}

const WindTurbine: React.FC<WindTurbineProps> = ({ 
  size = 100, 
  className = '', 
  delay = 0 
}) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size * 2 }}
    >
      {/* Tower */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-gray-400 to-gray-300 rounded-lg"
        style={{ 
          width: size / 12, 
          height: size * 1.5,
        }}
      />
      
      {/* Rotor Housing */}
      <div 
        className="absolute rounded-full bg-gray-300"
        style={{ 
          width: size / 6, 
          height: size / 6, 
          bottom: size * 1.5, 
          left: `calc(50% - ${size / 12}px)`,
        }}
      />
      
      {/* Blades Container - with Animation */}
      <div 
        className="absolute"
        style={{ 
          width: size, 
          height: size, 
          bottom: size * 1.5 - size / 2 + size / 12, 
          left: `calc(50% - ${size / 2}px)`,
          animation: `spin ${8 + delay}s linear infinite`,
        }}
      >
        {/* Blade 1 */}
        <div 
          className="absolute bg-green-100 rounded-full"
          style={{ 
            width: size / 6, 
            height: size / 2, 
            left: `calc(50% - ${size / 12}px)`,
            top: 0, 
            transformOrigin: 'center bottom',
          }}
        />
        
        {/* Blade 2 */}
        <div 
          className="absolute bg-green-100 rounded-full"
          style={{ 
            width: size / 6, 
            height: size / 2, 
            left: `calc(50% - ${size / 12}px)`,
            top: size / 2, 
            transformOrigin: 'center top',
            transform: 'rotate(180deg)',
          }}
        />
        
        {/* Blade 3 */}
        <div 
          className="absolute bg-green-100 rounded-full"
          style={{ 
            width: size / 2, 
            height: size / 6, 
            left: 0, 
            top: `calc(50% - ${size / 12}px)`, 
            transformOrigin: 'right center',
            transform: 'rotate(270deg)',
          }}
        />
        
        {/* Blade 4 */}
        <div 
          className="absolute bg-green-100 rounded-full"
          style={{ 
            width: size / 2, 
            height: size / 6, 
            left: size / 2, 
            top: `calc(50% - ${size / 12}px)`, 
            transformOrigin: 'left center',
            transform: 'rotate(90deg)',
          }}
        />
      </div>
    </div>
  );
};

export default WindTurbine;