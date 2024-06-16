import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const resp = await ctx.next();
  const headers = resp.headers;

  headers.set("Access-Control-Allow-Origin", "*");
  // headers.set("Access-Control-Allow-Credentials", "false");
  // headers.set(
  //   "Access-Control-Allow-Headers",
  //   "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  // );
  // headers.set(
  //   "Access-Control-Allow-Methods",
  //   "POST, OPTIONS, GET, PUT, DELETE",
  // );

  return resp;
}
