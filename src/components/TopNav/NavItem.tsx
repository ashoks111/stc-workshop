import { useFocusEffect } from "../../hooks/useFocusEffect";
import { useFocusStore } from "../../store/useFocusableStore";
import { MenuType } from "../../type/MenuType";

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
        className="flex flex-col items-center space-y-2 text-white/70 hover:text-white focus:text-white transition-colors focus:outline-none"
      >
        <div>{item.icon}</div>
        <span className="text-sm font-medium">{item.name}</span>
      </button>
    </li>
  );
};
export default NavItem;
