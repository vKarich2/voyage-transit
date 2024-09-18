

// components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Feedback from "@/components/sections/Feedback";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <About />
      <Services />
      <Feedback />
    </div>
  );
}
