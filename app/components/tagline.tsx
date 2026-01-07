"use client";

import { twMerge } from "tailwind-merge";

export default function Tagline() {
  return (
    <div
      className={twMerge([
        "min-h-screen",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
      ])}
    >
      <div
        className={twMerge(["flex", "items-baseline", "animate-slideFromLeft"])}
        style={{
          background: "linear-gradient(90deg, #240b36 0.3%, #c31432 102.17%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <h1 className={twMerge(["text-[3.5em]", "font-bold"])}>“ความพึงพอใจ</h1>
        <h1 className={twMerge(["text-[2.8em]", "font-bold"])}>ของท่าน</h1>
      </div>

      <div
        style={{
          background: "linear-gradient(90deg, #B80120 0%, #D8092C 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className={twMerge([
          "animate-slideFromRight",
          "flex",
          "items-baseline",
        ])}
      >
        <h1 className={twMerge(["text-[2.8em]", "font-bold"])}>
          คือความสำเร็จของเรา
        </h1>
        <h1 className={twMerge(["text-[3.5em]", "font-bold"])}>”</h1>
      </div>

      <blockquote
        className={twMerge([
          "mt-6",
          "border-l-3",
          "pl-3",
          "italic",
          "border-l-red-600",
        ])}
      >
        Customer Experience <br />
        สร้างประสบการณ์ที่ดีให้กับลูกค้า
      </blockquote>
    </div>
  );
}
