import { asc, eq } from "drizzle-orm";
import db from "../drizzle";
import { courses } from "../schema";
import { cache } from "react";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany({
    orderBy: [asc(courses.title)],
  });
  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // TODO: Populate with the units and lessons when they are added
  });

  return data;
});
