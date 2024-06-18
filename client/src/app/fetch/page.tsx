import { View } from "./View";

export default function Page() {
  return (
    <main>
      <h3>Cloudflare Workers SSE & fetch()</h3>
      <View url="https://sse-sandbox.mugi-uno.workers.dev/" />

      <hr />

      <h3>Cloudflare Workers SSE (Hono) & fetch()</h3>
      <View url="https://sse-sandbox-hono.mugi-uno.workers.dev/sse" />

      <hr />

      <h3>Cloudflare Workers SSE (Hono) & fetch() & POST</h3>
      <View url="https://sse-sandbox-hono.mugi-uno.workers.dev/sse-post" />

      <hr />

      <h3>Deno Deploy SSE & fetch()</h3>
      <View url="https://mugi-uno-sse-sandbox.deno.dev/api/sse" />
      <hr />
    </main>
  );
}
