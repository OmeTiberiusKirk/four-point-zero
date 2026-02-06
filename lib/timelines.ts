import { createTimeline, stagger } from "animejs";

// tagline
const create_tagline_tl = () =>
  createTimeline({ defaults: { ease: "out" } })
    .add("#sat", {
      opacity: 1,
      x: [{ from: "-100%" }, { to: 0 }],
    })
    .add(
      "#success",
      {
        opacity: [{ to: 1 }],
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
        opacity: [{ to: 1 }],
        y: [{ from: window.innerHeight }, { to: 0 }],
        x: [{ from: "-50%" }, { to: 0 }],
      },
      0,
    )

    .add("#sat", {
      delay: 30,
      opacity: [{ to: 0 }],
      scale: [{ to: 3 }],
      y: [{ to: -40 }],
    })
    .add(
      "#success",
      {
        delay: 30,
        opacity: [{ to: 0 }],
        scale: [{ to: 3 }],
      },
      "-=1030",
    )
    .add(
      "#exp",
      {
        delay: 30,
        opacity: [{ to: 0 }],
        scale: 3,
        y: 80,
      },
      "-=1030",
    )
    .add(
      "#glider",
      {
        delay: 30,
        opacity: [{ to: 0 }],
        scale: 3,
        y: -window.innerHeight,
        x: window.innerWidth,
        duration: 2000,
      },
      "-=1030",
    );

//services
const create_services_tl = () => {
  return createTimeline()
    .add("#services-heading :last-child", {
      x: [{ to: -210 }],
      y: 50,
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
        delay: stagger(100),
        opacity: 1,
      },
      "-=1000",
    );
};

export { create_tagline_tl, create_services_tl };
