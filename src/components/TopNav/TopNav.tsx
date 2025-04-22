import React from "react";
import { NavMenu } from "../../data/Menu";
import NavItem from "./NavItem";

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
