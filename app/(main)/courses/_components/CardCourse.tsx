import { Button } from "@/components/ui/button";
import { Course } from "@/db/types/courses";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

export interface CardCourseProps {
  active: boolean;
  course: Course;
  onClick: (id: number) => void;
  disabled?: boolean;
}

export function CardCourse({
  disabled,
  active,
  course,
  onClick,
}: CardCourseProps) {
  return (
    <Button
      className="min-h-[217px] min-w-[200px] h-full"
      onClick={() => onClick(course.id)}
      disabled={disabled}
    >
      <div className="flex w-full h-full justify-between items-center flex-col">
        <div className="flex flex-row items-center w-full justify-end min-h-[24px]">
          {active && (
            <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
              <CheckIcon className="stroke-[4] text-white size-4" />
            </div>
          )}
        </div>
        <Image
          width={70}
          height={200}
          src={course.imageSrc}
          alt={course.title}
        />

        <h1 className="text-neutral-700 mb-3 font-bold">{course.title}</h1>
      </div>
    </Button>
  );
}
