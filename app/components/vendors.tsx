import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import hewlett from "../images/hewlett.png"
import veritas from "../images/veritas.png"
import ms from "../images/ms.png"
import oracle from "../images/oracle.png"
import vm from "../images/vmware.png"

const images = [hewlett, veritas, ms, oracle, vm]

export default function Vendors() {
  return <div className={twMerge(["bg-white", "md:px-10", "flex", "items-center", "flex-wrap"])}>
    {images.map((img, k) => <Vendor key={k} src={img} />)}
  </div>
}

const Vendor = ({src}: {src: StaticImageData}) => {
  return <div className={twMerge(["basis-1/2", "sm:basis-1/3", "md:basis-1/5"])}><Image src={src} alt="alt" /></div>
}