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
import { Toaster } from "react-hot-toast";
import Resume from "./components/ResumePage";


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
  <Toaster position="top-right" />
  <HeroSection />
  <CustomCursor/>
  <AboutSection />
  

  <SkillSection/>
  <ProjectSection/>
  <ContactSection/>
  {/* <Resume/> */}
  <Footer/>
  <ProgressBar/>
  </>
    
  
}

export default App
