import { cache } from "react";
import db from "../drizzle";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { userProgress } from "../schema";

export const getUserProgress = cache(async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  return data;
});
