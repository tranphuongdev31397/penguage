import { BOTTOM_BAR, SidebarItem } from "@/configs/menus";
import { cn } from "@/lib/utils";
import * as React from "react";
import BottomBarItem from "./bottombar-item";

export interface BottomBarProps {
  className?: string;
}

export default function BottomBar({ className }: BottomBarProps) {
  return (
    <aside
      className={cn(
        "w-full  h-[var(--web-ui-bottom-height)] shadow-2xl shadow-primary dark:shadow-white rounded-t-2xl bg-white",
        className
      )}
    >
      <div className="flex w-full h-full items-center px-8 py-2 flex-row justify-around gap-x-2 ">
        {BOTTOM_BAR.map((item) => (
          <BottomBarItem {...item} key={item.path} />
        ))}
      </div>
    </aside>
  );
}
