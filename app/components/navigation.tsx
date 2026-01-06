"use client";

import { Button } from "@/components/ui/button";
import { Bars } from "./icons";

export function Navigation() {
  return (
    <div className={["sticky", "top-0", "flex", "justify-end"].join(" ")}>
      <Button className={["rounded-none", "text-lg", "font-bold"].join(" ")}>
        Contact Us
      </Button>
      <Button
        className={["rounded-none", "border-none", "shadow-none"].join(" ")}
        variant="outline"
      >
        <Bars />
      </Button>
    </div>
  );
}
