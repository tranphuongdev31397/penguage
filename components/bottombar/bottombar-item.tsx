"use client";
import { SidebarItem } from "@/configs/menus";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface BottomBarItemProps extends SidebarItem {}

export default function BottomBarItem({
  label,
  path,
  srcIcon,
}: BottomBarItemProps) {
  const pathname = usePathname();
  const active = React.useMemo(() => {
    return pathname === path;
  }, [pathname, path]);
  return (
    <Link
      className={cn(
        "flex flex-col gap-y-3 items-center",

        active
          ? "-translate-y-[calc(var(--web-ui-bottom-height)/2-8px-16px)] transition-transform"
          : "" // Height bottom bar / 2 (-50%Y) - [padding top]
      )}
      href={path}
    >
      <Button
        size={"rounded"}
        variant={active ? "sidebarOutline" : "sidebar"}
        className={cn(
          "size-16  relative flex flex-col",
          active ? "bg-white hover:bg-white shadow-md shadow-sky-500" : ""
        )}
      >
        <Image className="p-4 rounded-full" fill src={srcIcon} alt="label" />
      </Button>
      <p
        className={cn(
          "text-xs font-bold text-center uppercase opacity-0 transition-opacity line-clamp-1",
          active ? "text-sky-500 block opacity-100" : "hidden"
        )}
      >
        {label}
      </p>
    </Link>
  );
}
