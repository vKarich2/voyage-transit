'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useLayoutEffect } from 'react'

const data = [
  {
    title: "Our Journey",
    description: "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time."
  },
  {
    title: "Our Promise",
    description: "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community."
  },
  {
    title: "Our Team",
    description: "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories."
  },
];

export default function Services() {
  const scrollableSectionRef = useRef(null);
	const scrollTriggerRef = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const animation = gsap.fromTo(
			scrollableSectionRef.current, 
			{ translateX: 0 },
			{
				translateX: "-200vw",
				ease: "none",
				duration: 1,

				scrollTrigger: {
					trigger: scrollTriggerRef.current,
					start: "top top",
					end: "1800vw top",
					scrub: 0.6,
					pin: true,
				},

			}
		);

		return () => {
			animation.kill();
		};
	}, []);
	
	return (
		<section ref={scrollTriggerRef} className="relative h-screen w-screen overflow-hidden">
			<div ref={scrollableSectionRef} className="flex h-full w-[200vw]">
				
			</div>
		</section>
	)