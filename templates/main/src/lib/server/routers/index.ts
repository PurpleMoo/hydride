import "$lib/server/server-only";
import { admin } from "./admin";
import { users } from "./users";

export const router = {
  users,
  admin,
};
