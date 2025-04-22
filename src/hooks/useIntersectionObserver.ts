import { useEffect, useState } from "react";

type UseIntersectionObserverProps = {
    rootMargin?: string;
    threshold?: number;
    skip?: boolean;
    ref?: React.RefObject<Element>;
}
/**
 * Custom hook to observe the intersection of an element with the viewport.
 *
 * This hook uses the `IntersectionObserver` API to determine whether a target element
 * is visible within the viewport or a specified root element.
 *
 * @param {UseIntersectionObserverProps} props - Configuration options for the hook.
 * @param {React.RefObject<Element>} props.ref - A React ref object pointing to the target element to observe.
 * @param {string} [props.rootMargin='0px'] - Margin around the root element. Can have values similar to CSS margin (e.g., "10px 20px").
 * @param {number} [props.threshold=1] - A number between 0 and 1 indicating the percentage of the target's visibility required to trigger the observer.
 * @param {boolean} [props.skip=false] - If `true`, the observer will not be initialized.
 *
 * @returns {Object} - An object containing:
 *   - `intersectionRef`: The React ref object passed to the hook.
 *   - `isIntersecting`: A boolean indicating whether the target element is intersecting the viewport or root element.
 */

  
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