import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";
const sql = neon(process.env.DB_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

export default db;
