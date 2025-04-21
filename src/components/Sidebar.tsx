import Typography from "./Typography";
import Avatar from "./Avatar";
import { SideBarMenu } from "../data/Menu";
import { useEffect, useRef } from "react";
import { MenuType } from "../type/MenuType";
import { useFocusStore } from "../store/useFocusableStore";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-primary text-white p-8 flex flex-col border-r border-white/10">
      <div className="flex gap-4 flex-col items-center mb-12">
        <Avatar src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Typography tag="h3" className="text-3xl font-bold mb-2">
          My Library
        </Typography>
      </div>

      <nav className="flex-1">
        <ul className="space-y-6">
          {SideBarMenu.map((item) => (
            <SideMenu item={item} key={item.id} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

const SideMenu = ({ item }: { item: MenuType }) => {
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const isFocused = focusedKey === item?.id;
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus();
    }
  }, [isFocused]);
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
