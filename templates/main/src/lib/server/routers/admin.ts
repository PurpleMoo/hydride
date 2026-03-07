import { os } from "@orpc/server";
import { crud } from "orpc-resource";

import { db } from "../db";
import { user } from "../schema";

const { resource } = crud(db);

export const admin = {
  users: resource(user, {
    searchFields: ["id", "name", "email"],
  }),
};
