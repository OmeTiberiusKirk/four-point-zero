"use client";

import { animate, createTimeline } from "animejs";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import glider from "../../images/glider.png";
import Image from "next/image";
import {
  create_exp_tl,
  create_glider_tl,
  create_sat_tl,
  create_success_tl,
} from "@/lib/timelines";

export default function Tagline() {
  useEffect(() => {
    const offset = 1500;

    const sat_tl = create_sat_tl();
    const success_tl = create_success_tl();
    const exp_tl = create_exp_tl();
    const glider_tl = create_glider_tl();
    const main_tl = createTimeline({
      onUpdate: (self) => {
        console.log(self.currentTime);
        if (self.currentTime >= 1000) self.pause();
      },
    })
      .sync(sat_tl)
      .sync(success_tl, 0)
      .sync(exp_tl, 0)
      .sync(glider_tl, 0);

    window.addEventListener("scroll", () => {
      main_tl.seek(offset + window.pageYOffset * 3);
    });

    if (window.pageYOffset > 0) {
      main_tl.seek(offset + window.pageYOffset * 3);
    }
  }, []);

  return (
    <div
      className={twMerge([
        "min-h-screen",
        "flex",
        "flex-col",
        "justify-center",
        "overflow-hidden",
      ])}
    >
      <div
        className={twMerge([
          "fixed",
          "flex",
          "flex-col",
          "items-center",
          "w-full",
          "max-w-7xl",
        ])}
      >
        <div
          id="sat"
          className={twMerge(["flex", "items-baseline", "opacity-0"])}
          style={{
            background: "linear-gradient(90deg, #240b36 0.3%, #c31432 102.17%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <h1
            className={twMerge([
              "text-[1.5em]",
              "md:text-[3.5em]",
              "font-bold",
            ])}
          >
            “ความพึงพอใจ
          </h1>
          <h1
            className={twMerge(["text-[1.7em]", "md:text-[3em]", "font-bold"])}
          >
            ของท่าน
          </h1>
        </div>

        <div
          id="success"
          style={{
            background: "linear-gradient(90deg, #B80120 0%, #D8092C 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: 0,
          }}
          className={twMerge(["flex", "items-baseline"])}
        >
          <h1
            className={twMerge(["text-[1.7em]", "md:text-[3em]", "font-bold"])}
          >
            คือความสำเร็จของเรา
          </h1>
          <h1
            className={twMerge([
              "text-[1.7em]",
              "md:text-[3em]",
              "font-bold",
              // "md:mr-10",
            ])}
          >
            ”
          </h1>
        </div>

        <blockquote
          id="exp"
          className={twMerge([
            "mt-4",
            "border-l-3",
            "pl-3",
            "italic",
            "border-l-red-600",
            "text-col",
            "text-red-700",
            "opacity-0",
            "text-[0.8em]",
            "md:text-[1em]",
          ])}
        >
          Customer Experience <br />
          สร้างประสบการณ์ที่ดีให้กับลูกค้า
        </blockquote>

        <Image
          id="glider"
          src={glider}
          alt=""
          className={twMerge([
            "w-20",
            "md:w-40",
            "absolute",
            "bottom-0",
            "right-5",
            "md:right-1/5",
            "opacity-0",
          ])}
        />
      </div>
    </div>
  );
}
