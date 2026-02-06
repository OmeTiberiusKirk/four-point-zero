import { createTimeline, stagger, utils } from "animejs";
import { is_mobile_view } from "./utils";

// tagline
const create_tagline_tl = () =>
  createTimeline({ duration: 500 })
    .add("#sat", {
      opacity: 1,
      x: [{ from: "-100%" }, { to: 0 }],
    })
    .add(
      "#success",
      {
        opacity: 1,
        x: [{ from: "100%" }, { to: 0 }],
      },
      0,
    )
    .add(
      "#exp",
      {
        opacity: 1,
        y: [{ from: window.innerHeight }, { to: 0 }],
      },
      0,
    )
    .add(
      "#glider",
      {
        opacity: 1,
        y: [{ from: window.innerHeight }, { to: 0 }],
        x: [{ from: "-50%" }, { to: 0 }],
      },
      0,
    )

    .add(
      "#sat",
      {
        delay: 30,
        opacity: 0,
        scale: 2,
        y: -40,
      },
      "-=500",
    )
    .add(
      "#success",
      {
        delay: 30,
        opacity: 0,
        scale: 2,
      },
      "-=1030",
    )
    .add(
      "#exp",
      {
        delay: 30,
        opacity: 0,
        scale: 2,
        y: 80,
      },
      "-=1030",
    )
    .add(
      "#glider",
      {
        delay: 30,
        opacity: 0,
        scale: 3,
        y: -window.innerHeight,
        x: window.innerWidth,
        duration: 1500,
      },
      "-=1030",
    );

//services
const create_services_tl = () => {
  return createTimeline({ duration: 500 })
    .add("#services-heading", {
      opacity: 1,
    })
    .add(
      "#descr",
      {
        opacity: 1,
      },
      "-=1000",
    )
    .add(
      "#services-list > div",
      {
        delay: stagger(200),
        opacity: 1,
      },
      "-=1000",
    )
    .add(
      ".shapes",
      {
        opacity: 1,
        x: () => utils.random(-5, -80) + "rem",
        y: () => utils.random(20, 50) + "rem",
        rotate: () => utils.random(0, 180),
        scale: () => utils.random(0.25, 1.5, 3),
        duration: 1500,
        ...(is_mobile_view() && {
          scale: () => utils.random(0.25, 1, 3),
          x: () => utils.random(-5, -20) + "rem",
        }),
      },
      is_mobile_view() ? "-=1600" : "-=1000",
    );
};

export { create_tagline_tl, create_services_tl };
