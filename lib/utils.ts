import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const is_mobile_view = () => {
  const isMobileView = window.matchMedia(
    "only screen and (max-width: 760px)",
  ).matches;

  if (isMobileView) {
    console.log("Screen width is less than 760px (mobile layout breakpoint)");
  } else {
    console.log("Screen width is 760px or greater (desktop layout breakpoint)");
  }

  return isMobileView;
};

export { is_mobile_view };
