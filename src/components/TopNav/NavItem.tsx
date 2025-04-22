import { useFocusEffect } from "../../hooks/useFocusEffect";
import { useFocusStore } from "../../store/useFocusableStore";
import { MenuType } from "../../type/MenuType";

/**
 * Navigation item component.
 *
 * This component represents a single navigation item in the top navigation bar.
 * It uses the `useFocusEffect` hook to manage focus behavior and highlights the item
 * when it is focused.
 */
const NavItem = ({ item }: { item: MenuType }) => {
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const isFocused = focusedKey === item?.id;
  const ref = useFocusEffect<HTMLButtonElement>(isFocused);
  return (
    <li
      key={item.id}
      className="group transition-transform focus-within:scale-110 hover:scale-110"
    >
      <button
        tabIndex={0}
        id={item.id}
        ref={ref}
        className="flex flex-col items-center space-y-2 text-white/70 hover:text-white focus:text-white focus:shadow-xl focus:shadow-white-500/50 transition-colors focus:outline-none"
      >
        <div>{item.icon}</div>
        <span className="text-sm font-medium">{item.name}</span>
      </button>
    </li>
  );
};
export default NavItem;
