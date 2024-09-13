import HeroFeatures from "@/components/HeroFeature";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeroImage from "@/app/assets/images/van45.png";

const features = [
  { display: "block", title: "З комфортом" },
  { display: "hidden", title: "Безпечно" },
  { display: "hidden", title: "Надійно" },
  { display: "hidden", title: "Швидко" },
];

export default function Hero() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-14 uppercase">
        <h1 className="text-[175px] font-black italic text-[--accent]">
          Подорожуй
        </h1>
        <div className="w-full flex justify-between text-xl font-normal">
          <div className="flex flex-col gap-1">
            {features.map((feature, index) => (
              <HeroFeatures key={index} display={feature.display} title={feature.title} />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <BanknotesIcon className="w-10 h-10 text-[--foreground]" />
            <p>Без передплат</p>
          </div>
        </div>
        <h1 className="text-[150px] font-black italic text-[--additional]">
          Та відправляй
        </h1>
      </div>
      <Image
        className="absolute w-[1200px] h-[800px] top-[-35px] left-0"
        src={HeroImage}
        alt="Hero"
      />
    </div>
  );
}
