"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <div
      className={[
        "fixed",
        "top-0",
        "w-full",
        "max-w-7xl",
        "z-20",
        "text-end",
      ].join(" ")}
    >
      <Button
        className={cn(
          "rounded-none",
          "md:text-2xl",
          "font-bold",
          "bg-[#781b15]",
          "dark:bg-gray-500",
        )}
        // size="default"
      >
        Contact Us
      </Button>
      {/* <Button
        className={["rounded-none", "border-none", "shadow-none"].join(" ")}
        variant="outline"
        size="lg"
      >
        <Bars />
      </Button> */}
    </div>
  );
}
