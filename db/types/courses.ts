import { courses } from "../schema";

export type Course = typeof courses.$inferSelect;
