import { base } from "$lib/server/rpc";

import { auth } from "../auth";

export const users = {
  me: base.handler(async ({ context }) => {
    const authSession = await auth.api.getSession({ headers: context.headers });
    return authSession?.user;
  }),
};
