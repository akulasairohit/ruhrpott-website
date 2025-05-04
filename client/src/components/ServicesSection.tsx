import { FileText, Search, MessageSquare } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-[#10b981]" />,
      title: "Resume Optimization",
      description: "Our AI analyzes your resume against job descriptions to create tailored versions that pass through ATS systems with ease.",
      features: [
        { text: "Keyword optimization" },
        { text: "Format enhancement" },
        { text: "Industry-specific templates" }
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-[#10b981]" />,
      title: "Job Matching AI",
      description: "Our algorithm finds job openings that match your skills and preferences with remarkable accuracy.",
      features: [
        { text: "Smart skill matching" },
        { text: "Personalized recommendations" },
        { text: "Hidden opportunity detection" }
      ]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#10b981]" />,
      title: "Interview Coach",
      description: "Practice with our AI interview simulator that provides real-time feedback to improve your performance.",
      features: [
        { text: "Industry-specific questions" },
        { text: "Speech analysis" },
        { text: "Improvement recommendations" }
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Job Seeker Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive suite of AI-powered tools to help you find your dream job, all powered by renewable energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
