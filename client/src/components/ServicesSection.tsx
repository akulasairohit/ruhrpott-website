import { Database, Factory, Shield, Globe, BarChart, Zap } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <Factory className="h-8 w-8 text-[#10b981]" />,
      title: "Manufacturing AI",
      description: "Transform your manufacturing processes with AI-powered predictive maintenance and optimization, backed by sustainable energy.",
      features: [
        { text: "Smart production planning" },
        { text: "Energy consumption reduction" },
        { text: "Quality control automation" }
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-[#10b981]" />,
      title: "Secure Cloud Services",
      description: "Enterprise-grade cloud solutions with robust security, deployed on our carbon-neutral infrastructure in the heart of the Ruhr region.",
      features: [
        { text: "Green data centers" },
        { text: "GDPR-compliant storage" },
        { text: "Advanced threat protection" }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-[#10b981]" />,
      title: "Data Analytics",
      description: "Turn your business data into actionable insights with our AI-driven analytics platform, powered by wind energy from the region.",
      features: [
        { text: "Real-time business intelligence" },
        { text: "Custom reporting dashboards" },
        { text: "Predictive trend analysis" }
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-[#10b981]" />,
      title: "Digital Transformation",
      description: "Guide your business through digital transformation with customized IT solutions that leverage the power of sustainable AI.",
      features: [
        { text: "Process digitalization" },
        { text: "Legacy system migration" },
        { text: "IoT implementation" }
      ]
    },
    {
      icon: <BarChart className="h-8 w-8 text-[#10b981]" />,
      title: "Business Intelligence",
      description: "Make data-driven decisions with our comprehensive business intelligence tools that analyze market trends and customer behavior.",
      features: [
        { text: "Market analysis" },
        { text: "Customer insight generation" },
        { text: "Competitive intelligence" }
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-[#10b981]" />,
      title: "Green IT Consulting",
      description: "Reduce your carbon footprint with IT infrastructure optimized for energy efficiency, backed by our expertise in sustainable computing.",
      features: [
        { text: "Carbon footprint assessment" },
        { text: "Sustainable IT roadmaps" },
        { text: "Energy-efficient infrastructure" }
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">IT Solutions for the Ruhr Region</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide innovative AI-enhanced IT services for every industry in the Ruhr region, powered by sustainable wind energy.
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
