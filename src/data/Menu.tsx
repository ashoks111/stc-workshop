import { MenuType } from "../type/MenuType";
import {
  Heart,
  Clock,
  ThumbsUp,
  User,
  Star,
  Flame,
  LayoutGrid,
  Trophy,
  Settings,
} from "lucide-react";

/**
 * Left Sidebar menu items.
 *
 * Each item includes:
 * - `id`: A unique identifier for the menu item.
 * - `name`: The display name of the menu item.
 * - `icon`: An icon component representing the menu item.
 */
export const SideBarMenu: MenuType[] = [
  {
    id: "menu-favourites",
    name: "Favourites",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: "menu-watch-list",
    name: "Watch List",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    id: "menu-recommended",
    name: "Recommended",
    icon: <ThumbsUp className="w-6 h-6" />,
  },
  { id: "menu-account", name: "Account", icon: <User className="w-6 h-6" /> },
];

/**
 * Top Navigation menu items.
 *
 * Each item includes:
 * - `id`: A unique identifier for the navigation item.
 * - `name`: The display name of the navigation item.
 * - `icon`: An icon component representing the navigation item.
 */
export const NavMenu: MenuType[] = [
  { icon: <Star className="w-6 h-6" />, name: "New", id: "icon-new" },
  { icon: <Flame className="w-6 h-6" />, name: "Popular", id: "icon-popular" },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    name: "Categories",
    id: "icon-categories",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    name: "Top Rated",
    id: "icon-top-rated",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    name: "Customize",
    id: "icon-customize",
  },
];
