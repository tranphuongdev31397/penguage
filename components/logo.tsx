import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

export interface LogoProps {
  onlyIcon?: boolean;
  className?: string;
}

export default function Logo({ onlyIcon = false, className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      <Image width={40} height={40} src="/penguin.svg" alt="logo" priority />
      {!onlyIcon && <p className="text-primary text-xl font-bold">Penguage</p>}
    </div>
  );
}
