import { env } from "$lib/server/env";
import { router } from "$lib/server/routers";
import { OpenAPIGenerator } from "@orpc/openapi";
import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
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

const generator = new OpenAPIGenerator({
  schemaConverters: [new ZodToJsonSchemaConverter()],
});

const spec = await generator.generate(router, {
  info: {
    title: "Hydride API",
    version: "1.0.0",
  },
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
  if (env.OPENAPI_ENABLED && event.url.pathname === "/rpc") {
    return new Response(JSON.stringify(spec), {
      headers: { "Content-Type": "application/json" },
    });
  }
  return HTTPError.status(404);
});
