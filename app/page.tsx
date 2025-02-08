"use client"
import Hero from "@/components/layout/home/hero";
import Newsletter from "@/components/layout/home/news-letter";
import Problem from "@/components/layout/home/problem";
import Services from "@/components/layout/home/services";
import Target from "@/components/layout/home/target";
import { useCallback, useRef } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <Hero scrollToSection={scrollToSection} />
      <Problem />
      <Services />
      <Target />
      <Newsletter sectionRef={sectionRef} />
    </div>
  );
}
