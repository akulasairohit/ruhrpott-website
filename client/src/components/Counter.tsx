import { FC, useEffect, useState, useRef } from 'react';
import { animateCounter } from '@/lib/utils';

interface CounterProps {
  endValue: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  containerClassName?: string;
  valueClassName?: string;
  labelText?: string;
  labelClassName?: string;
  startOnView?: boolean;
}

const Counter: FC<CounterProps> = ({
  endValue,
  prefix = '',
  suffix = '',
  duration = 2000,
  containerClassName = 'text-center',
  valueClassName = 'text-3xl font-bold text-[#10b981] mb-2',
  labelText,
  labelClassName = 'text-sm text-gray-400',
  startOnView = true,
}) => {
  const [value, setValue] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (startOnView && !hasAnimated.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(0, endValue, duration, setValue);
              hasAnimated.current = true;
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    } else if (!startOnView && !hasAnimated.current) {
      animateCounter(0, endValue, duration, setValue);
      hasAnimated.current = true;
    }
  }, [endValue, duration, startOnView]);

  return (
    <div ref={counterRef} className={containerClassName}>
      <div className={valueClassName}>
        {prefix}{value.toLocaleString()}{suffix}
      </div>
      {labelText && <p className={labelClassName}>{labelText}</p>}
    </div>
  );
};

export default Counter;
