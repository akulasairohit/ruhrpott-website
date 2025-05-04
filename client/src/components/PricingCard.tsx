import { FC } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
  isFeatured?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  description,
  price,
  period,
  features,
  isPopular = false,
  isFeatured = false,
}) => {
  return (
    <div 
      className={cn(
        "bg-[#1e293b] rounded-xl p-6 relative",
        isFeatured ? "border-2 border-[#10b981] transform md:-translate-y-4" : "border border-gray-700 hover:border-[#10b981]/30 transition-all"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#10b981] text-white text-sm font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-start ${!feature.included ? 'text-gray-400' : ''}`}>
            {feature.included ? (
              <Check className="h-5 w-5 text-[#10b981] mt-0.5 mr-2" />
            ) : (
              <X className="h-5 w-5 text-gray-500 mt-0.5 mr-2" />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <a 
        href="#contact" 
        className={cn(
          "block w-full py-3 px-4 text-center rounded-md font-semibold",
          isFeatured 
            ? "bg-[#10b981] hover:bg-[#059669] text-white transition-colors" 
            : "border border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white transition-colors"
        )}
      >
        Get Started
      </a>
    </div>
  );
};

export default PricingCard;
