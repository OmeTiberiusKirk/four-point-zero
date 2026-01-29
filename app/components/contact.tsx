import { twMerge } from "tailwind-merge";

export default function Contact() {
  return (
    <div
      className={twMerge([
        "min-h-70",
        "bg-[#161616D9]",
        "sm:flex",
        "items-center",
        "p-5",
        "sm:p-0",
      ])}
    >
      <div
        className={twMerge([
          "flex-1",
          "text-center",
          "text-white",
          "font-bold",
          "text-5xl",
          "mb-5",
          "sm:mb-0",
        ])}
      >
        <h1 className="mb-2">Let’s</h1>
        <h1 className="mb-2">get in</h1>
        <h1>touch.</h1>
      </div>

      <div
        className={twMerge([
          "flex-1",
          "sm:pr-20",
          "grid",
          "grid-cols-2",
          "gap-4",
          "text-gray-400",
        ])}
      >
        <input
          type="text"
          className={twMerge([
            "focus-visible:outline-0",
            "border-b",
            "border-white",
          ])}
          placeholder="ชื่อ"
        />

        <input
          type="text"
          className={twMerge([
            "focus-visible:outline-0",
            "border-b",
            "border-white",
          ])}
          placeholder="อีเมล"
        />

        <input
          type="text"
          className={twMerge([
            "focus-visible:outline-0",
            "border-b",
            "border-white",
          ])}
          placeholder="มือถือ"
        />

        <select
          className={twMerge([
            "focus-visible:outline-0",
            "border-b",
            "border-white",
          ])}
        >
          <option>บริการที่น่าสนใจ</option>
          <option>Ome</option>
          <option>Tiberius</option>
          <option>Kirk</option>
        </select>

        <textarea
          placeholder="รายละเอียด"
          className={twMerge([
            "focus-visible:outline-0",
            "border-b",
            "border-white",
            "col-span-2",
          ])}
        />

        <div>
          <input type="checkbox" className="mr-3" />
          <label htmlFor="scales">I’m not robot</label>
        </div>

        <div className="text-right">
          <button
            className={twMerge([
              "bg-[#FFFFFF1A]",
              "px-4",
              "py-1",
              "text-sm",
              "rounded",
            ])}
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
}
