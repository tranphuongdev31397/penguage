import { getCourses, getUserProgress } from "@/db/queries";
import { ListCourses } from "./_components/ListCourses";
import LoadingPage from "./loading";

export interface CoursesPageProps {}

export default async function CoursesPage(props: CoursesPageProps) {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-neutral-700 text-2xl font-bold">Language Courses</h1>
      <ListCourses
        activeCourseId={userProgress?.activeCourseId}
        courses={courses}
      />
    </div>
  );
}
