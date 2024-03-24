import { Course } from "@/db/types/courses";
import ROUTES from "@/routes";
import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ICONS } from "@/configs/assets";
import { InfinityIcon } from "lucide-react";

export interface UserProgressProps {
  activeCourse: Course;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

export function UserProgress({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: UserProgressProps) {
  return (
    <div className="flex justify-between gap-x-2 w-full items-center">
      <Link href={ROUTES.COURSES}>
        <Button variant={"ghost"}>
          <Image
            width={28}
            height={28}
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
          />
        </Button>
      </Link>

      <Link href={ROUTES.SHOP}>
        <Button variant={"ghost"}>
          <Image width={28} height={28} src={ICONS.HEART} alt={"diamond"} />
          {hasActiveSubscription ? (
            <InfinityIcon className="ml-2 text-rose-500" />
          ) : (
            <span className="ml-2 text-rose-500">{hearts}</span>
          )}
        </Button>
      </Link>
      <Link href={ROUTES.LEADERBOARD}>
        <Button variant={"ghost"}>
          <Image width={28} height={28} src={ICONS.THUNDER} alt={"diamond"} />
          <span className="ml-2 text-amber-500">{points}</span>
        </Button>
      </Link>
    </div>
  );
}
