"use client";
import { Course } from "@/db/types/courses";
import { CardCourse } from "./CardCourse";
import { useRouter } from "next/navigation";
import ROUTES from "@/routes";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user/user-progress.action";
import { toast } from "sonner";

export interface ListCoursesProps {
  courses: Course[];
  activeCourseId?: number | null;
}

export function ListCourses({ courses, activeCourseId }: ListCoursesProps) {
  const router = useRouter();
  const [loading, startTransition] = useTransition();
  const onSelectCourse = (courseId: number) => {
    if (loading) return;
    if (activeCourseId === courseId) {
      router.push(ROUTES.LEARN);
    }

    startTransition(() => {
      upsertUserProgress(courseId).catch((err) => {
        toast.error(err?.message || "Something went wrong");
      });
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(autofill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <CardCourse
          active={activeCourseId === course.id}
          course={course}
          onClick={onSelectCourse}
          key={course.id}
          disabled={loading}
        />
      ))}
    </div>
  );
}
