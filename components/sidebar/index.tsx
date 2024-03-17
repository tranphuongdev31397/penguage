"use client";
import Logo from "@/components/logo";
import SidebarItem from "./sidebar-item";
import { cn } from "@/lib/utils";
import * as React from "react";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { SIDEBAR_MENU } from "@/configs/menus";
import Link from "next/link";
import ROUTES from "@/routes";

export interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const isLg = useMediaQuery("(min-width: 1024px)");

  const isClient = useIsClient();
  if (!isClient) return null;
  return (
    <aside
      className={cn(
        "px-4 w-sidebar-table lg:w-sidebar-desktop z-50 fixed left-0 border-r-2 border-muted top-0 min-h-screen h-full",
        className
      )}
    >
      <div className="py-8 lg:pl-3.5">
        <Link href={ROUTES.LEARN}>
          <Logo className="max-lg:justify-center" onlyIcon={!isLg} />
        </Link>
      </div>

      <div className="h-full flex flex-col gap-y-2">
        {SIDEBAR_MENU.map((item) => {
          return <SidebarItem {...item} onlyIcon={!isLg} key={item.path} />;
        })}
      </div>
    </aside>
  );
}
