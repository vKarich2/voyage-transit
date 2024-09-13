import Image from "next/image";
import AboutImage from "@/app/assets/images/about.png";
import AboutItem from "@/components/AboutItem";
import { MapIcon, PercentBadgeIcon, ArchiveBoxIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

const items = [
  {
    icon: <MapIcon className="w-10 h-10 text-[--background]" />,
    title: "Понад 40 населених пунктів",
    href: "#",
    details: "Детальніше про маршрути та напрямки",
  },
  {
    icon: <PercentBadgeIcon className="w-10 h-10 text-[--background]" />,
    title: "Спеціальні пропозиції",
    href: "#",
    details: "Детальніше про акції для наших клієнтів",
  },
  {
    icon: <ArchiveBoxIcon className="w-10 h-10 text-[--background]" />,
    title: "Доставка посилок З НП* по Україні",
    href: "#",
    details: "Скористатися калькулятором вартості",
  },
  {
    icon: <ChatBubbleLeftEllipsisIcon className="w-10 h-10 text-[--background]" />,
    title: "МАКСИМАЛЬНА ЯСНІСТЬ І ДОПОМОГА",
    href: "#",
    details: "Переглянути FAQ (найчастіші запитання)",
  },
];

export default function About() {
    return (
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="uppercase text-[40px] font-bold mb-16">Про нас</h1>
            <p className="text-[20px] font-normal text-[--text] max-w-[500px]">
              Ми — провідний перевізник, що спеціалізується на міжнародних
              перевезеннях між Україною та Німеччиною, а також на організації
              транзиту людей. Наша місія — забезпечити безперебійну, швидку та
              безпечну доставку вашого вантажу та комфортний переїзд для
              пасажирів.
            </p>
          </div>
          <Image
            className="rounded-[20px]"
            src={AboutImage}
            alt="Про нас"
            width={590}
            height={300}
          />
        </div>
        <div className="flex justify-between mt-16 mb-12">
          {items.map((item, index) => (
            <AboutItem
              key={index}
              icon={item.icon}
              title={item.title}
              href={item.href}
              details={item.details}
            />
          ))}
        </div>
        <p className="text-base text-[--text]">
          *НП - Нова пошта (відправлення посилок по всій Україні з Чернівців)
        </p>
      </div>
    );
}