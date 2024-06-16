import { View } from "./View";

export default function Page() {
  return (
    <main>
      <h3>Cloudflare Workers SSE & EventSource</h3>
      <View url="https://sse-sandbox.mugi-uno.workers.dev/" />
      <hr />
      <h3>Deno Deploy SSE & EventSource</h3>
      <View url="https://mugi-uno-sse-sandbox.deno.dev/api/sse" />
      <hr />
    </main>
  );
}
