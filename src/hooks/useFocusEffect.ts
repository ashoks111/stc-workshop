/**
 * Custom hook to manage focus on an HTML element when it is in a "focused" state.
 *
 * @template T - The type of the HTML element (e.g., HTMLDivElement, HTMLButtonElement).
 * @param {boolean} isFocused - A boolean indicating whether the element should be focused.
 * @returns {React.RefObject<T>} A ref object to be attached to the target HTML element.
 *
 */
import { useEffect, useRef } from "react";

export const useFocusEffect =  <T extends HTMLElement>(isFocused: boolean) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus();
    }
  }, [isFocused]);

  return ref;
};