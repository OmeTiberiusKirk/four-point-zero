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
} from "@/lib/timelines";
import { is_mobile_view } from "@/lib/utils";

export default function Home() {
  useEffect(() => {
    const offset = 1500;

    const sat_tl = create_sat_tl();
    const success_tl = create_success_tl();
    const exp_tl = create_exp_tl();
    const glider_tl = create_glider_tl();
    const sv_h_tl = create_services_heading_tl();
    const sv_tl = create_services_tl();

    const main_tl = createTimeline({
      onUpdate: (self) => {
        console.log(self.currentTime);
        if (self.currentTime >= 1000) self.pause();
      },
    })
      .sync(sat_tl)
      .sync(success_tl, 0)
      .sync(exp_tl, 0)
      .sync(glider_tl, 0)
      .sync(sv_h_tl, 2500)
      .sync(sv_tl, 3000)
      .add(
        ".shapes",
        {
          opacity: 1,
          x: () => utils.random(-100, -800, 2),
          y: () => utils.random(10, 45, 2) + "rem",
          rotate: () => utils.random(0, 180),
          scale: () => utils.random(1, 1.5, 3),
          duration: 2500,
          ...(is_mobile_view() && {
            scale: () => utils.random(0.25, 1.3, 3),
            x: () => utils.random(-50, -500, 2),
          }),
        },
        2500,
      );

    window.addEventListener("scroll", () => {
      // console.log("scroll", window.pageYOffset * 2 + 1500);
      main_tl.seek(offset + window.pageYOffset * 2);
    });

    if (window.pageYOffset > 0) {
      main_tl.seek(offset + window.pageYOffset * 2);
    }

    const svc = document.querySelector("#services-container");
    const svw = document.querySelector("#services-wrapper");
    // if (svc) (svw as HTMLElement).style.minHeight = `${svc.clientHeight}px`;
    if (svc) (svw as HTMLElement).style.minHeight = "300vh";
  }, []);

  return (
    <>
      <Tagline />
      <Services />
    </>
  );
}
