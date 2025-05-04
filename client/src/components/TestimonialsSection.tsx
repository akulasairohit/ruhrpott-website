import { useState, useRef, useEffect } from 'react';
import { useMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "After using Ruhrpott.ai's resume optimization tool, I received 5 interview requests within a week. The interview coach prepared me perfectly for the questions they asked. I got my dream job in tech!",
    author: "Maria S.",
    role: "Web Developer from Dortmund",
    rating: 5,
    initials: "MS"
  },
  {
    quote: "I needed to change careers after 10 years in the same industry. The professional tier was perfect - the career coaching was a game-changer, helping me position my existing skills for a new field.",
    author: "Thomas K.",
    role: "Project Manager from Essen",
    rating: 5,
    initials: "TK"
  },
  {
    quote: "As a recent graduate, I was struggling to land interviews. The salary negotiation tool helped me secure a starting salary that was 15% higher than the initial offer. Worth every penny!",
    author: "Lena W.",
    role: "Data Analyst from Bochum",
    rating: 5,
    initials: "LW"
  },
  {
    quote: "The AI interview simulator was incredibly realistic. It helped me overcome my interview anxiety by exposing me to challenging questions in a safe environment. Highly recommended!",
    author: "Markus B.",
    role: "Software Engineer from Duisburg",
    rating: 5,
    initials: "MB"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  
  const slidesPerView = isMobile ? 1 : window.innerWidth >= 1024 ? 3 : 2;
  const maxIndex = testimonials.length - slidesPerView;
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const slideWidth = 100 / slidesPerView;
      container.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
  }, [currentIndex, slidesPerView]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how job seekers like you have transformed their careers with our AI-powered services.
          </p>
        </div>
        
        <div className="relative testimonial-container">
          {/* Testimonial Slides */}
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex transition-transform duration-300"
              style={{ width: `${100 * (testimonials.length / slidesPerView)}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    rating={testimonial.rating}
                    initials={testimonial.initials}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-[#1e293b] p-3 rounded-full z-10 hover:bg-[#10b981]/20 transition-colors -ml-3 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-[#1e293b] p-3 rounded-full z-10 hover:bg-[#10b981]/20 transition-colors -mr-3 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
