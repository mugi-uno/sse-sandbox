import { Hono } from "hono";
import { cors } from "hono/cors";
import { streamSSE } from "hono/streaming";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const app = new Hono();

app.use("/*", cors());

app.get("/sse", (c) => {
  return streamSSE(c, async (stream) => {
    let chunks = TEXT.split(" ");

    while (chunks.length > 0) {
      const chunk = chunks.shift()!;
      await stream.sleep(100);
      await stream.writeSSE({ data: chunk });
    }
  });
});

app.post("/sse-post", (c) => {
  return streamSSE(c, async (stream) => {
    let chunks = TEXT.split(" ");

    while (chunks.length > 0) {
      const chunk = chunks.shift()!;
      await stream.sleep(100);
      await stream.writeSSE({ data: chunk });
    }
  });
});

export default app;
