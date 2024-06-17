"use client";

import { useState } from "react";

type Props = {
  url: string;
};

export const View = ({ url }: Props) => {
  const [text, setText] = useState("");

  const handleClick = async () => {
    const res = await fetch(url);
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
    <>
      <button onClick={handleClick}>Run</button>
      <pre>{text}</pre>
    </>
  );
};
