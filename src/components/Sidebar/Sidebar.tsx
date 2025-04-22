import Typography from "../common/Typography";
import Avatar from "../common/Avatar";
import { SideBarMenu } from "../../data/Menu";
import SideMenu from "./SideMenu";
import { USER_AVATAR } from "../../config/constants";

/**
 * Sidebar component.
 *
 * This component represents the left sidebar of the application. It includes:
 * - A user avatar and title.
 * - A navigation menu rendered using the `SideMenu` component for each menu item.
 *
 * The sidebar is styled with a fixed width and a vertical layout, and it serves as the primary
 * navigation area for the application.
 */
const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-primary text-white p-8 flex flex-col border-r border-white/10">
      <div className="flex gap-4 flex-col items-center mb-12">
        <Avatar src={USER_AVATAR} />
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
