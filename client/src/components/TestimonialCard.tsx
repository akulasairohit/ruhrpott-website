import { FC } from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  initials: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ 
  quote, 
  author,
  role,
  rating = 5,
  initials
}) => {
  return (
    <div className="h-full">
      <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg h-full">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} 
            />
          ))}
        </div>
        <p className="text-gray-300 mb-6">
          "{quote}"
        </p>
        <div className="flex items-center mt-auto">
          <div className="w-12 h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center font-bold text-[#10b981]">
            {initials}
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
