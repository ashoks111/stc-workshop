import { useCallback } from "react";
import { useFocusEffect } from "../../hooks/useFocusEffect";
import { useFocusStore } from "../../store/useFocusableStore";
import { MenuType } from "../../type/MenuType";
import Typography from "../common/Typography";
/**
 * Side menu item component.
 *
 * This component represents a single item in the sidebar menu. It uses the `useFocusEffect` hook
 * to manage focus behavior and highlights the item when it is focused.
 */
const SideMenu = ({ item }: { item: MenuType }) => {
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const isFocused = focusedKey === item?.id;
  const ref = useFocusEffect<HTMLButtonElement>(isFocused);
  const { setFocusedKey } = useFocusStore((state) => state.actions);

  const handleMenuItemClick = useCallback(() => {
    setFocusedKey(item.id);
  }, [item.id, setFocusedKey]);

  return (
    <li key={item.id}>
      <button
        tabIndex={0}
        id={item.id}
        ref={ref}
        onClick={handleMenuItemClick}
        className="flex items-center space-x-4 w-full p-3 rounded-lg transition-colors hover:bg-white/10 focus:bg-white/20 focus:outline-none group"
      >
        <div className="transform group-hover:scale-110 transition-transform">
          {item.icon}
        </div>
        <Typography tag="span" className="text-lg text-white">
          {item.name}
        </Typography>
      </button>
    </li>
  );
};
export default SideMenu;
