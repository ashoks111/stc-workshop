import Typography from "../common/Typography";
import Avatar from "../common/Avatar";
import { SideBarMenu } from "../../data/Menu";
import SideMenu from "./SideMenu";
import { USER_AVATAR } from "../../config/constants";

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
