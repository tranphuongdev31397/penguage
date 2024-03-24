import { ICONS } from "@/configs/assets";
import { text, pgTable, integer, boolean } from "drizzle-orm/pg-core";
import { courses } from "./courses.schema";
import { relations } from "drizzle-orm";

export const userProgress = pgTable("user_progress", {
  userId: text("user_id").primaryKey(),
  userName: text("user_name").notNull().default("User"),
  userImage: text("user_image").notNull().default(ICONS.DEFAULT_IMAGE),
  activeCourseId: integer("active_course_id").references(() => courses.id, {
    onDelete: "cascade",
  }),
  hearts: integer("hearts").notNull().default(5),
  points: integer("points").notNull().default(0),
});

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}));
