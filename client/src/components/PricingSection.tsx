import { useState } from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'annual'>('monthly');

  const handleTabChange = (tab: 'monthly' | 'annual') => {
    setActiveTab(tab);
  };

  const monthlyPlans = [
    {
      title: "Starter",
      description: "For beginners starting their job search",
      price: "€19",
      period: "/month",
      features: [
        { text: "Resume optimization (2 versions)", included: true },
        { text: "Basic job matching", included: true },
        { text: "3 interview practice sessions", included: true },
        { text: "Career coaching", included: false },
        { text: "Salary negotiation tool", included: false }
      ],
      isPopular: false,
      isFeatured: false
    },
    {
      title: "Professional",
      description: "For serious job seekers",
      price: "€39",
      period: "/month",
      features: [
        { text: "Resume optimization (unlimited)", included: true },
        { text: "Advanced job matching", included: true },
        { text: "10 interview practice sessions", included: true },
        { text: "2 career coaching sessions", included: true },
        { text: "Salary negotiation tool", included: false }
      ],
      isPopular: true,
      isFeatured: true
    },
    {
      title: "Enterprise",
      description: "For the committed career professional",
      price: "€79",
      period: "/month",
      features: [
        { text: "All Professional features", included: true },
        { text: "Priority job listings", included: true },
        { text: "Unlimited interview practice", included: true },
        { text: "5 career coaching sessions", included: true },
        { text: "Advanced salary negotiation tool", included: true }
      ],
      isPopular: false,
      isFeatured: false
    }
  ];

  const annualPlans = [
    {
      title: "Starter",
      description: "For beginners starting their job search",
      price: "€15",
      period: "/month billed annually",
      features: [
        { text: "Resume optimization (2 versions)", included: true },
        { text: "Basic job matching", included: true },
        { text: "3 interview practice sessions", included: true },
        { text: "Career coaching", included: false },
        { text: "Salary negotiation tool", included: false }
      ],
      isPopular: false,
      isFeatured: false
    },
    {
      title: "Professional",
      description: "For serious job seekers",
      price: "€31",
      period: "/month billed annually",
      features: [
        { text: "Resume optimization (unlimited)", included: true },
        { text: "Advanced job matching", included: true },
        { text: "10 interview practice sessions", included: true },
        { text: "2 career coaching sessions", included: true },
        { text: "Salary negotiation tool", included: false }
      ],
      isPopular: true,
      isFeatured: true
    },
    {
      title: "Enterprise",
      description: "For the committed career professional",
      price: "€63",
      period: "/month billed annually",
      features: [
        { text: "All Professional features", included: true },
        { text: "Priority job listings", included: true },
        { text: "Unlimited interview practice", included: true },
        { text: "5 career coaching sessions", included: true },
        { text: "Advanced salary negotiation tool", included: true }
      ],
      isPopular: false,
      isFeatured: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#0f172a] relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#1e293b] to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Our Plans</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the right service package for your job search needs with our transparent pricing.
          </p>
        </div>
        
        {/* Pricing Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex p-1 rounded-lg bg-[#1e293b]">
            <button 
              className={`pricing-tab px-6 py-2 rounded-md font-medium ${activeTab === 'monthly' ? 'active' : ''}`} 
              onClick={() => handleTabChange('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`pricing-tab px-6 py-2 rounded-md font-medium ${activeTab === 'annual' ? 'active' : ''}`} 
              onClick={() => handleTabChange('annual')}
            >
              Annual <span className="text-xs bg-[#10b981] text-white py-0.5 px-1 rounded ml-1">Save 20%</span>
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
          {activeTab === 'monthly' 
            ? monthlyPlans.map((plan, index) => (
                <PricingCard 
                  key={index}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  isFeatured={plan.isFeatured}
                />
              ))
            : annualPlans.map((plan, index) => (
                <PricingCard 
                  key={index}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  isFeatured={plan.isFeatured}
                />
              ))
          }
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300">All plans include a 14-day money-back guarantee. No questions asked.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
