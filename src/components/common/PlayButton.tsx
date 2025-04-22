import { Play } from "lucide-react";
import { useFocusEffect } from "../../hooks/useFocusEffect";
import { useFocusStore } from "../../store/useFocusableStore";
import { FocusKeyElemType } from "../../type/FocusType";

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
      className={`w-12 h-12 mb-4 mt-2 rounded-full bg-white hover:bg-yellow-100/90 focus:bg-yellow-100/90 focus:outline-none transition-colors flex items-center justify-center group`}
    >
      <Play
        className="w-6 h-6 text-black transform group-hover:scale-110 transition-transform"
        fill="currentColor"
      />
    </button>
  );
};
export default PlayButton;
