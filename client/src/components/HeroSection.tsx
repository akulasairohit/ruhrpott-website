import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Particles from './Particles';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden" id="hero">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/attached_assets/background-ai-wind.png')" }}
      >
        <div className="absolute inset-0 bg-[#0f172a] bg-opacity-70"></div>
      </div>
      
      <Particles count={15} />
      
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">From Coal to</span> 
            <span className="text-[#10b981]">Green AI</span> 
            <span className="block">Transforming the Ruhr Region</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Leveraging our industrial heritage to power the future with sustainable AI solutions and innovative IT services for every industry in the Ruhr region.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-lg"
            >
              <a href="#services">Our Solutions</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#10b981] hover:bg-[#10b981]/10 text-[#10b981] font-semibold text-lg"
            >
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
