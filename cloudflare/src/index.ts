const TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default {
  async fetch(_request, _env, _ctx): Promise<Response> {
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();
    let chunks = TEXT.split(' ');

    const intervalId = setInterval(() => {
      const chunk = chunks.shift();
      writer.write(encoder.encode(`data: ${chunk}\n\n`));
      if (chunks.length === 0) {
        clearInterval(intervalId);
      }
    }, 100);

    return new Response(readable, { headers: { 'Content-Type': 'text/event-stream', 'Access-Control-Allow-Origin': '*' } });
  },
} satisfies ExportedHandler<Env>;
