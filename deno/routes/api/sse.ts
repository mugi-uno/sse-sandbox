import { FreshContext } from "$fresh/server.ts";
import {
  ServerSentEventStreamTarget,
} from "https://deno.land/std@0.190.0/http/server_sent_event.ts";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const handler = (
  _req: Request,
  _ctx: FreshContext,
): Response => {
  const sse = new ServerSentEventStreamTarget({});

  const chunks = TEXT.split(" ");

  const intervalId = setInterval(() => {
    const chunk = chunks.shift()!;

    sse.dispatchMessage(chunk);

    if (chunks.length === 0) {
      clearInterval(intervalId);
      sse.close();
    }
  }, 100);

  return sse.asResponse();
};
