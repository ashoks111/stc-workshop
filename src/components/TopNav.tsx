import React, { useEffect, useRef } from "react";
import { NavMenu } from "../data/Menu";
import { MenuType } from "../type/MenuType";
import { useFocusStore } from "../store/useFocusableStore";

const TopNav: React.FC = () => {
  return (
    <nav className="py-5 px-12 flex-1">
      <ul className="flex justify-center space-x-16">
        {NavMenu.map((item) => (
          <NavItem item={item} key={item.id} />
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;

const NavItem = ({ item }: { item: MenuType }) => {
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const isFocused = focusedKey === item?.id;
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus();
    }
  }, [isFocused]);
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
