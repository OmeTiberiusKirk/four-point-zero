import Image, { StaticImageData } from "next/image";
import hewlett from "../../images/hewlett.png";
import veritas from "../../images/veritas.png";
import ms from "../../images/ms.png";
import oracle from "../../images/oracle.png";
import vm from "../../images/vmware.png";
import { cn } from "@/lib/utils";

const images = [hewlett, veritas, ms, oracle, vm];

export default function Vendors() {
  return (
    <div
      className={cn(
        "relative",
        "bg-white",
        "dark:bg-gray-800",
        // "md:px-10",
        "flex",
        "justify-center",
        "items-center",
        "flex-wrap",
        "z-10",
        "mt-20",
      )}
    >
      {images.map((img, k) => (
        <Vendor key={k} src={img} />
      ))}
    </div>
  );
}

const Vendor = ({ src }: { src: StaticImageData }) => {
  return (
    <div className={cn("basis-1/2", "sm:basis-1/3", "md:basis-1/5")}>
      <Image src={src} alt="alt" className={cn("dark:brightness-50")} />
    </div>
  );
};
