import Image from "next/image";
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
        "flex",
        "justify-around",
        "items-center",
        "flex-wrap",
        "z-10",
        "mt-20",
      )}
    >
      {images.map((src, k) => (
        <Image
          key={k}
          src={src}
          alt="alt"
          className={cn("dark:brightness-50", "w-36")}
        />
      ))}
    </div>
  );
}
