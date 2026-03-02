import "$lib/server/server-only";
import { env } from "$lib/server/env";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

export { schema };
export const db = drizzle({ connection: { url: env.DATABASE_URL }, schema });

export type Database = typeof db;
export type Schema = typeof schema;
