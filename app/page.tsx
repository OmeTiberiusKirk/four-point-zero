"use client";

import Services from "./components/services";
import Tagline from "./components/tagline";
import { createTimeline, utils } from "animejs";
import { useEffect } from "react";
import { create_services_tl, create_tagline_tl } from "@/lib/timelines";
import { is_mobile_view } from "@/lib/utils";
import Vendors from "./components/vendors";
import Contact from "./components/contact";

export default function Home() {
  const getScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    return (scrollTop / docHeight) * 100;
  };
  useEffect(() => {
    const offset = 500;

    const tagline_tl = create_tagline_tl();
    const services_tl = create_services_tl();
    const main_tl = createTimeline({
      onUpdate: (self) => {
        console.log(self.currentTime);
        if (self.currentTime >= 500) self.pause();
      },
    })
      .sync(tagline_tl)
      .sync(services_tl, 1000);
    window.addEventListener("scroll", () => {
      main_tl.seek(offset + getScrollProgress() * 20);
    });

    if (window.pageYOffset > 0) {
      main_tl.seek(offset + getScrollProgress() * 20);
    }
  }, []);

  return (
    <>
      <Tagline />
      <Services />
      <Vendors />
      <Contact />
    </>
  );
}
