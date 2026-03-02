import { auth } from "$lib/server/auth";
import { os } from "@orpc/server";
import type { useStorage } from "nitro/storage";

export const base = os
  .$context<{
    headers: Headers;
    kv: ReturnType<typeof useStorage>;
  }>()
  .errors({
    BAD_REQUEST: {},
    UNAUTHORIZED: {},
    FORBIDDEN: {},
    NOT_FOUND: {},
    TOO_MANY_REQUESTS: {},
    INTERNAL_SERVER_ERROR: {},
  });

export const authMiddleware = base.middleware(async ({ context, next, errors }) => {
  const sessionData = await auth.api.getSession({
    headers: context.headers,
  });
  if (!sessionData?.session || !sessionData?.user) {
    throw errors.UNAUTHORIZED();
  }
  return next({
    context: {
      session: sessionData.session,
      user: sessionData.user,
    },
  });
});

export const authorized = base.use(authMiddleware);
