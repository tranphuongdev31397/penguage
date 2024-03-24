import { relations } from "drizzle-orm";
import { serial, text, pgTable } from "drizzle-orm/pg-core";
import { userProgress } from "./user.schema";
import { units } from "./units.schema";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
  units: many(units),
}));
