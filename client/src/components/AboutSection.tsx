import { ArrowRight } from 'lucide-react';
import Counter from './Counter';
import Windmill from './WindAnimation';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Coal Mines to Wind Turbines</h2>
            <p className="text-xl text-gray-300 mb-6">
              Ruhrpott.ai stands at the intersection of the Ruhr region's industrial heritage and its sustainable future.
              Where coal once powered our industries, wind now powers our AI solutions.
            </p>
            <p className="text-gray-300 mb-8">
              The Ruhr region, once Europe's industrial powerhouse fueled by coal mining, is now leading 
              the transition to green technology. Our mission is to honor this legacy while pioneering 
              sustainable AI development that powers innovative IT solutions across all industries in the region.
              Every algorithm we deploy runs on renewable wind energy, creating a zero-carbon digital future.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <Counter 
                endValue={2356}
                labelText="Tons of CO₂ saved"
              />
              <Counter 
                endValue={127}
                labelText="Regional businesses"
                suffix="+"
              />
              <Counter 
                endValue={45}
                labelText="Wind turbines powering AI"
              />
            </div>
            
            <a href="#contact" className="text-[#10b981] hover:text-[#059669] font-semibold inline-flex items-center group">
              Partner with us for sustainable IT solutions
              <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Windmill size={112} className="absolute top-10 right-10 w-28 h-28" />
              <Windmill size={80} className="absolute top-40 left-20 w-20 h-20" delay={1} />
              <Windmill size={64} className="absolute bottom-20 right-32 w-16 h-16" delay={2} />
              
              <img 
                src="/attached_assets/background-ai-wind.png" 
                alt="Green energy wind turbines powering AI in the Ruhr region" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
