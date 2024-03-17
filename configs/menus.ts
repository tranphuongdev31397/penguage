import { ICONS } from "@/configs/assets";
import ROUTES from "@/routes";

export interface SidebarItem {
  path: string;
  label: string;
  srcIcon: string;
}

export const SIDEBAR_MENU: SidebarItem[] = [
  {
    path: ROUTES.LEARN,
    label: "Learn",
    srcIcon: ICONS.LEARN,
  },
  {
    path: ROUTES.LEADERBOARD,
    label: "Leader board",
    srcIcon: ICONS.LEADERBOARD,
  },
  {
    path: ROUTES.QUEST,
    label: "Quest",
    srcIcon: ICONS.QUEST,
  },
  {
    path: ROUTES.SHOP,
    label: "Shop",
    srcIcon: ICONS.SHOP,
  },
];

export const BOTTOM_BAR: SidebarItem[] = [
  {
    path: ROUTES.LEADERBOARD,
    label: "Leader board",
    srcIcon: ICONS.LEADERBOARD,
  },
  {
    path: ROUTES.QUEST,
    label: "Quest",
    srcIcon: ICONS.QUEST,
  },
  {
    path: ROUTES.LEARN,
    label: "Learn",
    srcIcon: ICONS.LEARN,
  },

  {
    path: ROUTES.SHOP,
    label: "Shop",
    srcIcon: ICONS.SHOP,
  },
];
