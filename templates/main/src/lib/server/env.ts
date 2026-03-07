import "$lib/server/server-only";
import "dotenv/config";
import { z } from "zod";

export const env = z
  .object({
    DATABASE_URL: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    OPENAPI_ENABLED: z.coerce.boolean(),
  })
  .parse(process.env);
