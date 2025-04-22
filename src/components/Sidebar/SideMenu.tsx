import { useFocusEffect } from "../../hooks/useFocusEffect";
import { useFocusStore } from "../../store/useFocusableStore";
import { MenuType } from "../../type/MenuType";
import Typography from "../common/Typography";

const SideMenu = ({ item }: { item: MenuType }) => {
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const isFocused = focusedKey === item?.id;
  const ref = useFocusEffect<HTMLButtonElement>(isFocused);
  return (
    <li key={item.id}>
      <button
        tabIndex={0}
        id={item.id}
        ref={ref}
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
