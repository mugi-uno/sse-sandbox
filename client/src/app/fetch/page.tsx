"use client";

import { useRef, useState } from "react";

export default function CloudflarePage() {
  const [text, setText] = useState("");

  const handleClick = async () => {
    const res = await fetch("https://sse-sandbox.mugi-uno.workers.dev/");
    const reader = res.body?.getReader()!;
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;

      const lines = decoder.decode(value);
      const [type, raw] = lines.trim().split(": ");

      if (type === "data" && raw) {
        setText((prevText) =>
          prevText ? prevText + " " + raw : prevText + raw
        );
      }
    }
  };

  return (
    <main>
      <h3>Cloudflare SSE & fetch</h3>
      <button onClick={handleClick}>Run</button>
      <pre>{text}</pre>
    </main>
  );
}
