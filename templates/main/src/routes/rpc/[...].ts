import { router } from "$lib/server/routers";
import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { defineHandler, HTTPError } from "nitro/h3";
import { useStorage } from "nitro/storage";

const kv = useStorage();

const handler = new RPCHandler(router, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export default defineHandler(async (event) => {
  const { response } = await handler.handle(event.req, {
    prefix: "/rpc",
    context: {
      headers: event.req.headers,
      kv,
    },
  });
  if (response) {
    return response;
  }
  return HTTPError.status(404);
});
