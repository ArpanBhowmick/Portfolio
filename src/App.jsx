import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap"


function App() {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.refresh()

    return () =>{
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill() )
    }

  }, [])
 

  return <>
  <Header />
  <HeroSection />
  <CustomCursor/>
  <AboutSection />
  <SkillSection/>
  <ProjectSection/>
  </>
    
  
}

export default App
