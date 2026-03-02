import { client } from "$lib/rpc";
import { navigate } from "$router";
import type { Hooks } from "sv-router";

export default {
  async beforeLoad() {
    const me = await client.users.me();
    if (!me) throw navigate("/sign-in");
  },
} satisfies Hooks;
