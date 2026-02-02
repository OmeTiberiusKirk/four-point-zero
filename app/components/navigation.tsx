"use client";

import { Button } from "@/components/ui/button";
import { Bars } from "./icons";

export function Navigation() {
  return (
    <div
      className={[
        "fixed",
        "top-0",
        "flex",
        "justify-end",
        "w-full",
        "max-w-7xl",
        "z-10",
      ].join(" ")}
    >
      <Button
        className={["rounded-none", "text-2xl", "font-bold"].join(" ")}
        size="lg"
      >
        Contact Us
      </Button>
      <Button
        className={["rounded-none", "border-none", "shadow-none"].join(" ")}
        variant="outline"
        size="lg"
      >
        <Bars />
      </Button>
    </div>
  );
}
