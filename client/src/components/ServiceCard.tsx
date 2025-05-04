import { FC, ReactNode } from 'react';
import { Check } from 'lucide-react';

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: ServiceFeature[];
}

const ServiceCard: FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features 
}) => {
  return (
    <div className="bg-[#0f172a] rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-2 border border-transparent hover:border-[#10b981]/30">
      <div className="w-14 h-14 rounded-full bg-[#10b981]/20 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-[#10b981] mt-0.5 mr-2" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
