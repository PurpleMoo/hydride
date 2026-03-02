import { auth } from "$lib/server/auth";
import { defineHandler } from "nitro/h3";

export default defineHandler((event) => {
  return auth.handler(event.req);
});
