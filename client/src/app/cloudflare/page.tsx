"use client";

import { useRef, useState } from "react";
import style from "./page.module.css";

export default function CloudflarePage() {
  const [text, setText] = useState("");
  const eventSourceRef = useRef<EventSource | null>(null);

  const handleClick = () => {
    if (eventSourceRef.current) return;

    const eventSource = new EventSource(
      "https://sse-sandbox.mugi-uno.workers.dev/"
    );

    eventSourceRef.current = eventSource;

    eventSource.onmessage = (event) => {
      console.log("ON MESSAGE", event.data);
      setText((prevText) =>
        prevText ? prevText + " " + event.data : prevText + event.data
      );
    };

    eventSource.addEventListener("close", () => {
      console.log("CLOSE!!!!!!");
      eventSource.close();
      eventSourceRef.current = null;
    });
  };

  return (
    <main>
      <h3>Cloudflare & SSE</h3>
      <button onClick={handleClick}>Run</button>
      <pre className={style.text}>{text}</pre>
    </main>
  );
}
