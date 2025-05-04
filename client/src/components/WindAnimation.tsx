import { FC } from 'react';

interface WindmillProps {
  size?: number;
  className?: string;
  delay?: number;
}

const Windmill: FC<WindmillProps> = ({ 
  size = 28, 
  className = "",
  delay = 0
}) => {
  const animationDelay = delay ? `${delay}s` : '0s';
  
  return (
    <div 
      className={`wind-animation ${className}`} 
      style={{ animationDelay }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className="w-full h-full text-[#d1fae5]"
        width={size}
        height={size}
      >
        <path fill="currentColor" d="M50 5L65 40L95 50L65 60L50 95L35 60L5 50L35 40L50 5Z" />
      </svg>
    </div>
  );
};

export default Windmill;
