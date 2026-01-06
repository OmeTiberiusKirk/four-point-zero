"use client";

import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <div className={["sticky", "top-0", "flex", "justify-end"].join(" ")}>
      <Button className={["rounded-none"].join(" ")}>Contact Us</Button>
      <Button
        className={["rounded-none", "border-none", "shadow-none"].join(" ")}
        variant="outline"
      >
        <svg
          width="39"
          height="31"
          viewBox="0 0 39 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2.16667C0 0.97006 0.97006 0 2.16667 0H36.8333C38.03 0 39 0.97006 39 2.16667C39 3.36327 38.03 4.33333 36.8333 4.33333H2.16667C0.97006 4.33333 0 3.36327 0 2.16667ZM0 15.1667C0 13.97 0.97006 13 2.16667 13H23.8333C25.03 13 26 13.97 26 15.1667C26 16.3633 25.03 17.3333 23.8333 17.3333H2.16667C0.97006 17.3333 0 16.3633 0 15.1667ZM0 28.1667C0 26.97 0.97006 26 2.16667 26H13C14.1966 26 15.1667 26.97 15.1667 28.1667C15.1667 29.3633 14.1966 30.3333 13 30.3333H2.16667C0.97006 30.3333 0 29.3633 0 28.1667Z"
            fill="#9F2922"
          />
        </svg>
      </Button>
    </div>
  );
}
