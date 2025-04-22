import { Play } from "lucide-react";
import { useFocusEffect } from "../../hooks/useFocusEffect";
import { useFocusStore } from "../../store/useFocusableStore";
import { FocusKeyElemType } from "../../type/FocusType";

/**
 * PlayButton component.
 *
 * This component represents a circular play button, typically used to trigger playback actions.
 * It includes hover and focus effects for interactivity and accessibility.
 *
 * @returns {JSX.Element} - The rendered play button component.
 */
const PlayButton = () => {
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const isFocused = focusedKey === FocusKeyElemType.PLAY_BUTTON;
  const ref = useFocusEffect<HTMLButtonElement>(isFocused);

  return (
    <button
      tabIndex={0}
      id="play-button"
      ref={ref}
      aria-label="Play Button"
      className={`w-12 h-12 mb-4 mt-2 rounded-full bg-white hover:bg-yellow-100/90 focus:bg-yellow-100/90 focus:shadow-xl focus:shadow-yellow-500/50  focus:outline-none transition-colors flex items-center justify-center group`}
    >
      <Play
        className="w-6 h-6 text-black transform group-hover:scale-110 transition-transform"
        fill="currentColor"
      />
    </button>
  );
};
export default PlayButton;
