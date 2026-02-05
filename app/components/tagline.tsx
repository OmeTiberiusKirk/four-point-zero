import { twMerge } from "tailwind-merge";
import glider from "../../images/glider.png";
import Image from "next/image";

export default function Tagline() {
  return (
    <section
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
            className={twMerge(["text-[1.7em]", "md:text-[3em]", "font-bold"])}
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
    </section>
  );
}
