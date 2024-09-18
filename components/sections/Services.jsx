'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

// images and icons
import Boxes from "@/app/assets/images/boxes.png"
import Transfer from "@/app/assets/images/transfer.png"
import Call from "@/app/assets/images/call.png"

// components
import Separator from '@/components/Separator'
import Check from '@/components/Check'

const data = [
  {
    imgSrc: Boxes,
    title: "Перевезення посилок",
    description:
      "Пропонуємо швидку та надійну доставку посилок між Україною та Німеччиною.",
    check: {
      first: "Надійне транспортування",
      second: "Своєчасне прибуття",
    },
  },
  {
    imgSrc: Transfer,
    title: "Трансфер людей",
    description:
      "Ми організовуємо трансфер пасажирів між Україною та Німеччиною, забезпечуючи максимальний комфорт і безпеку на кожному етапі поїздки.",
    check: {
      first: "Комфортний транспорт",
      second: "Безпека пасажирів",
    },
  },
  {
    imgSrc: Call,
    title: "Постійна підтримка",
    description:
      "Ми завжди на зв’язку для наших клієнтів і забезпечуємо всебічну підтримку на кожному етапі перевезення чи подорожі.",
    check: {
      first: "Цілодобова допомога",
      second: "Оперативні консультації",
    },
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = gsap.utils.toArray(".scroll-item");

    const animation = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top",
        end: () => "+=" + document.querySelector(".scroll-container").offsetWidth,
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden" id="services">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-container flex flex-col h-screen w-[300vw] relative"
        >
          <h1 className="uppercase text-[40px] font-bold pt-10 mb-24">
            Наші послуги
          </h1>
          <div className="flex">
            {data.map((item, index) => (
              <div
                key={index}
                className="scroll-item w-screen h-screen flex gap-x-16"
              >
                <div className="flex flex-col gap-8 max-w-[350px]">
                  <Separator />
                  <h3 className="text-xl uppercase font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-[20px] font-normal text-text max-w-[460px]">
                    {item.description}
                  </p>
                  <div className="flex flex-col gap-2 text mt-5">
                    <Check title={item.check.first} />
                    <Check title={item.check.second} />
                  </div>
                </div>
                <div className="max-w-[800px]">
                  <Image
                    className="rounded-2xl"
                    src={item.imgSrc}
                    alt={item.title}
                    width={800}
                    height={420}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}