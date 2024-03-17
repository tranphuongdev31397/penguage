"use client";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { SidebarItem } from "@/configs/menus";

export interface SidebarItemProps extends SidebarItem {
  onlyIcon?: boolean;
}

export default function SidebarItem({
  label,
  path,
  srcIcon,
  onlyIcon,
}: SidebarItemProps) {
  const pathname = usePathname();
  const active = useMemo(() => {
    return pathname === path;
  }, [pathname, path]);
  return (
    <Button
      className="flex px-2 py-1 gap-x-2 justify-center  lg:justify-start"
      asChild
      size={"lg"}
      variant={active ? "sidebarOutline" : "sidebar"}
    >
      <Link href={path}>
        <Image width={28} height={28} src={srcIcon} alt={label} />
        {!onlyIcon && <p> {label}</p>}
      </Link>
    </Button>
  );
}
