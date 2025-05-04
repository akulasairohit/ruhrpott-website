import { ArrowRight } from 'lucide-react';
import Counter from './Counter';
import Windmill from './WindAnimation';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Green Energy AI</h2>
            <p className="text-xl text-gray-300 mb-6">
              At Ruhrpott.ai, we're committed to sustainable technology. Our services are powered 
              by 100% renewable energy from wind farms in the Ruhr region of Germany.
            </p>
            <p className="text-gray-300 mb-8">
              By choosing our services, you're not only investing in your career but also supporting
              the transition to clean energy. All our AI models are trained and run on data centers
              powered by wind and solar energy, reducing carbon emissions while providing cutting-edge
              career assistance.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <Counter 
                endValue={1358}
                labelText="Tons of CO₂ saved"
              />
              <Counter 
                endValue={5742}
                labelText="Happy job seekers"
              />
              <Counter 
                endValue={1239}
                labelText="Jobs secured"
              />
            </div>
            
            <a href="#" className="text-[#10b981] hover:text-[#059669] font-semibold inline-flex items-center group">
              Learn more about our sustainability efforts
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
                alt="Green energy wind turbines with AI" 
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
