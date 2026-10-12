import { useEffect, useState, type RefObject } from 'react';

/**
 * Custom hook that takes a ref and returns a scroll progress value (0 to 1)
 * representing the element's progression through the viewport.
 * Uses both IntersectionObserver for viewport tracking and scroll events
 * for smooth frame-accurate calculation.
 *
 * @param ref Reference to the target HTML element
 * @returns Number between 0 (entering viewport) and 1 (leaving/scrolled past)
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === 'undefined') return;

    let isVisible = false;

    const calculateProgress = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Distance from when the top of element touches bottom of viewport (rect.top = windowHeight)
      // to when the bottom of element touches top of viewport (rect.bottom = 0)
      const totalDistance = windowHeight + elementHeight;
      const currentPosition = windowHeight - rect.top;

      if (totalDistance <= 0) {
        setProgress(0);
        return;
      }

      const rawProgress = currentPosition / totalDistance;
      const clamped = Math.min(1, Math.max(0, rawProgress));
      setProgress(clamped);
    };

    const handleScroll = () => {
      if (isVisible) {
        calculateProgress();
      }
    };

    // Use IntersectionObserver to observe when element is in or near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          isVisible = entry.isIntersecting;
          if (entry.isIntersecting) {
            calculateProgress();
          }
        }
      },
      {
        root: null,
        rootMargin: '100px 0px 100px 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    observer.observe(element);
    calculateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return progress;
}

export default useScrollProgress;
