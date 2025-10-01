import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap"
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";


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
  {/* <ProjectSection/> */}
  <ContactSection/>
  <Footer/>
  <ProgressBar/>
  </>
    
  
}

export default App
