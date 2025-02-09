'use client'
import CircleUp from "@/components/Icons/circle-up";
import Navigation from "@/components/navigation";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import ExperiencePage from "@/pages/experience";
import HeroPage from "@/pages/hero";
import ProjectPage from "@/pages/project";
import TechnologyStack from "@/pages/technology-stack";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    let ticking = false;
  
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            setShowBackButton(true);
          } else {
            setShowBackButton(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen h-auto bg-gradient-to-tr from-[#0a192f] via-[#112240] to-[#233554] tracking-widest text-center pb-5">
      {/* Navigation */}
      <Navigation is_scroll={showBackButton}/>

      {/* Hero */}
      <HeroPage />

      {/* About */}
      <AboutPage />

      {/* Experience, Technology Use, What I Do, and copy of resume */}
      <ExperiencePage />

      <TechnologyStack />

      {/* Project */}
      <ProjectPage />

      {/* contact */}
      <ContactPage />

      {/* footer */}

      <span className="text-center text-slate-400 hover:text-[#64ffda] cursor-pointer">Design Built by Eduardo Tacorda &#xA9; 2024</span>

      {/* Back */}
      {showBackButton && (
        <Link href="#hero" className="h-14 w-14 flex items-center justify-center fixed bottom-5 right-5 hover:-translate-y-1 transition-transform transform-gpu">
          <CircleUp className="fill-[#64ffda] w-12 h-12 z-10"/>
        </Link>
      )}
    </div>
  )
}
