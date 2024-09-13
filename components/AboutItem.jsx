import Link from "next/link";

import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

export default function AboutItem({ icon, title, href = "#", details }) {
    return (
      <div className="flex flex-col items-center gap-2 max-w-[230px] text-center">
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-additional mb-4">
          {icon}
        </div>
        <h3 className="text-xl uppercase font-semibold text-foreground mb-1">
          {title}
        </h3>
        <Link className="flex justify-center items-end gap-1 text-base text-text hover:text-additional transition-colors" href={href}>{details}<ArrowDownRightIcon className="w-4 h-4" /></Link>
      </div>
    );
}