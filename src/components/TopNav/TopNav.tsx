import { NavMenu } from "../../data/Menu";
import NavItem from "./NavItem";
/**
 * Top navigation bar component.
 *
 * This component renders the top navigation bar, which displays a list of navigation items
 * Each navigation item is rendered using the `NavItem` component.
 */
const TopNav = () => {
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
