"use server";

import { PLACEHOLDERS } from "@/configs/placholders";
import db from "@/db/drizzle";
import { getCourseById } from "@/db/queries";
import { userProgress } from "@/db/schema";
import ROUTES from "@/routes";
import { auth, currentUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
  // 1. Check user is login or not: use clerk function => If not throw error [x]
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Unauthorized!");
  }

  //  2. Check course is existed in the db [x]
  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  //  TODO : Uncomment this conditional check once units and lessons are added to the database
  // if (course.units.length === 0 || course.units[0]?.lessons.length === 0) {

  //     throw new Error("Course has no units or lessons");
  //  }

  /* 3. Check user is has activeProgress
     a. If not, create new userProgress [x] 
     b. If has activeProgress, update userProgress  [x]
  */
  const existingUserProgress = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  if (existingUserProgress) {
    // It means that user is not active any course yet => create new userProgress
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || PLACEHOLDERS.USERNAME,
      userImage: user.imageUrl || PLACEHOLDERS.USER_IMG,
    });
    revalidatePath(ROUTES.COURSES);
    revalidatePath(ROUTES.LEARN);
    return redirect(ROUTES.LEARN);
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || PLACEHOLDERS.USERNAME,
    userImage: user.imageUrl || PLACEHOLDERS.USER_IMG,
  });
  revalidatePath(ROUTES.COURSES);
  revalidatePath(ROUTES.LEARN);
  return redirect(ROUTES.LEARN);
};
