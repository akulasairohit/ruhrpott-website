import { FC, useEffect, useRef } from 'react';

interface ParticlesProps {
  count?: number;
}

const Particles: FC<ParticlesProps> = ({ count = 15 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Clear any existing particles
    container.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 3 and 10px
      const size = Math.random() * 7 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Random animation
      const animationDuration = Math.random() * 20 + 10;
      particle.style.animation = `float ${animationDuration}s infinite ease-in-out ${Math.random() * 5}s`;
      
      container.appendChild(particle);
    }
  }, [count]);

  return <div ref={containerRef} className="absolute inset-0 z-10"></div>;
};

export default Particles;
