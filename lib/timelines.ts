import { createTimeline, stagger, utils } from "animejs";
import { is_mobile_view } from "./utils";

// tagline
const create_sat_tl = () =>
  createTimeline({ defaults: { ease: "out" } })
    .add("#sat", {
      opacity: 1,
      x: [{ from: "-100%" }, { to: 0 }],
    })
    .add("#sat", {
      delay: 500,
      opacity: [{ to: 0 }],
      scale: [{ to: 3 }],
      y: [{ to: -40 }],
    });

const create_success_tl = () =>
  createTimeline({ defaults: { ease: "out" } })
    .add("#success", {
      opacity: [{ to: 1 }],
      x: [{ from: "100%" }, { to: 0 }],
    })
    .add("#success", {
      delay: 500,
      opacity: [{ to: 0 }],
      scale: [{ to: 3 }],
    });

const create_exp_tl = () =>
  createTimeline({ defaults: { ease: "out" } })
    .add("#exp", {
      opacity: 1,
      y: [{ from: window.innerHeight }, { to: 0 }],
    })
    .add("#exp", {
      delay: 500,
      opacity: [{ to: 0 }],
      scale: 3,
      y: 80,
    });

const create_glider_tl = () =>
  createTimeline({ defaults: { ease: "out" } })
    .add("#glider", {
      opacity: [{ to: 1 }],
      y: [{ from: window.innerHeight }, { to: 0 }],
      x: [{ from: "-50%" }, { to: 0 }],
    })
    .add("#glider", {
      delay: 500,
      opacity: [{ to: 0 }],
      scale: 3,
      y: -window.innerHeight,
      x: window.innerWidth,
      duration: 2000,
    });

//services
const create_services_heading_tl = () => {
  const [$con] = utils.$("#services-heading-container");
  const [$svh] = utils.$("#services-heading");

  return createTimeline({
    defaults: { ease: "out" },
  })
    .add("#services-heading", {
      opacity: 1,
      x: -($con.clientWidth / 2 - ($svh.clientWidth / 2 + 10)),
      y: -($con.clientHeight / 2 - $svh.clientHeight * 1.7),
    })
    .add(
      "#services-heading :first-child",
      {
        y: "-70%",
      },
      "-=1000",
    )
    .add(
      "#services-heading :last-child",
      {
        x: "-100%",
      },
      "-=500",
    );
};

const create_services_tl = () => {
  const is_mobile = is_mobile_view();

  return createTimeline({
    defaults: { ease: "out" },
  })
    .add("#descr", {
      opacity: 1,
    })
    .add(
      "#services-list > div",
      {
        delay: stagger(200),
        opacity: 1,
      },
      "-=500",
    )
    .add(
      "#services-container",
      {
        y: is_mobile ? "-90%" : "-100%",
        ...(is_mobile && { duration: 3000 }),
      },
      "-=500",
    );
};

// const create_shapes_tl = () => {
//   return createTimeline();
// };

export {
  create_sat_tl,
  create_success_tl,
  create_exp_tl,
  create_glider_tl,
  create_services_heading_tl,
  create_services_tl,
};
