import { createTimeline } from "animejs";

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
    });

export { create_sat_tl, create_success_tl, create_exp_tl, create_glider_tl };
