"use client";

import Services from "./components/services";
import Tagline from "./components/tagline";
import { createTimeline, utils } from "animejs";
import { useEffect } from "react";
import {
  create_exp_tl,
  create_glider_tl,
  create_sat_tl,
  create_services_heading_tl,
  create_services_tl,
  create_success_tl,
  create_tagline_tl,
} from "@/lib/timelines";
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
    const offset = 1000;

    const tagline_tl = create_tagline_tl();
    const services_tl = create_services_tl();
    const main_tl = createTimeline({
      onUpdate: (self) => {
        console.log(self.currentTime);
        if (self.currentTime >= 1000) self.pause();
      },
    })
      .sync(tagline_tl)
      .sync(services_tl, 1000)
      .add(
        ".shapes",
        {
          opacity: 1,
          x: () => utils.random(-100, -800, 2),
          y: () => utils.random(10, 45, 2) + "rem",
          rotate: () => utils.random(0, 180),
          scale: () => utils.random(1, 1.5, 3),
          duration: 2000,
          ...(is_mobile_view() && {
            scale: () => utils.random(0.25, 1.3, 3),
            x: () => utils.random(-50, -500, 2),
          }),
        },
        1000,
      );

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
