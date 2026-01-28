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
      ])}
    >
      <div
        className={twMerge(["relative", "flex", "flex-col", "items-center"])}
      >
        <div
          className={twMerge([
            "flex",
            "items-baseline",
            "animate-slideFromLeft",
          ])}
          style={{
            background: "linear-gradient(90deg, #240b36 0.3%, #c31432 102.17%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <h1
            className={twMerge([
              "text-[2.5em]",
              "md:text-[3.5em]",
              "font-bold",
            ])}
          >
            “ความพึงพอใจ
          </h1>
          <h1 className={twMerge(["text-[2em]", "md:text-[3em]", "font-bold"])}>
            ของท่าน
          </h1>
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
          <h1 className={twMerge(["text-[2em]", "md:text-[3em]", "font-bold"])}>
            คือความสำเร็จของเรา
          </h1>
          <h1
            className={twMerge([
              "text-[2em]",
              "md:text-[3em]",
              "font-bold",
              "md:mr-10",
            ])}
          >
            ”
          </h1>
        </div>

        <blockquote
          className={twMerge([
            "mt-4",
            "border-l-3",
            "pl-3",
            "italic",
            "border-l-red-600",
            "text-col",
            "text-red-700",
          ])}
        >
          Customer Experience <br />
          สร้างประสบการณ์ที่ดีให้กับลูกค้า
        </blockquote>

        <svg
          // width="255"
          // height="162"
          viewBox="0 0 255 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge([
            "w-25",
            "md:w-35",
            "absolute",
            "right-5",
            "bottom-0",
            "md:right-20",
            "lg:right-40",
          ])}
        >
          <g clipPath="url(#clip0_942_12613)">
            <path
              d="M254.12 11.3355L181.182 136.038L134.683 111.358L99.3018 92.5849L130.277 76.3355L132.855 74.9749L254.12 11.3355Z"
              fill="#D75D5D"
            />
            <path
              d="M254.12 11.3351L76.5822 78.7325L4.18787 58.7811L254.12 11.3351Z"
              fill="#D75D5D"
            />
            <path
              d="M134.682 111.358L96.46 154.548L99.3008 92.585L134.682 111.358Z"
              fill="#720000"
            />
            <path
              d="M254.121 11.3346L99.3025 92.584L96.4617 154.547L76.5832 78.7321L254.121 11.3346Z"
              fill="#AF3C3C"
            />
          </g>
          <defs>
            <clipPath id="clip0_942_12613">
              <rect
                width="247.497"
                height="150.282"
                fill="white"
                transform="translate(6.88281) rotate(2.625)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
