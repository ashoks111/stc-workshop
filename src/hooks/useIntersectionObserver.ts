import { useEffect, useState } from "react";

type UseIntersectionObserverProps = {
    rootMargin?: string;
    threshold?: number;
    skip?: boolean;
    ref?: React.RefObject<Element>;
  }
  
  export function useIntersectionObserver({
    ref,
    rootMargin = '0px',
    threshold = 1,
    skip = false,
  }: UseIntersectionObserverProps = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(() => {
      if (skip || !ref?.current) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin, threshold }
      );
  
      observer.observe(ref.current);
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [rootMargin, threshold, skip, ref]);
  
    return { intersectionRef: ref, isIntersecting };
  }