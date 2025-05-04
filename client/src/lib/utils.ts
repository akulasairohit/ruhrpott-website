import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function animateCounter(
  startValue: number,
  endValue: number,
  duration: number,
  onUpdate: (value: number) => void,
  onComplete?: () => void
) {
  const startTime = Date.now();
  
  function updateCounter() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    
    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
      onUpdate(currentValue);
      requestAnimationFrame(updateCounter);
    } else {
      onUpdate(endValue);
      if (onComplete) onComplete();
    }
  }
  
  updateCounter();
}
