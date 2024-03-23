import { Button } from "@/components/ui/button";
import ROUTES from "@/routes";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="sticky shadow-sm top-[-24px] sm:top-0 bg-white pb-3 pt-3 sm:pt-[28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
      <Link href={ROUTES.COURSES}>
        <Button size={"icon"}>
          <ArrowLeftIcon size={20} />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
}
