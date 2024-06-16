"use client";

import { useRef, useState } from "react";

type Props = {
  url: string;
};

export const View = ({ url }: Props) => {
  const [text, setText] = useState("");
  const eventSourceRef = useRef<EventSource | null>(null);

  const handleClick = () => {
    if (eventSourceRef.current) return;

    const eventSource = new EventSource(url);

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
    <>
      <button onClick={handleClick}>Run</button>
      <pre>{text}</pre>
    </>
  );
};
