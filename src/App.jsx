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
import ResumePage from "./components/ResumePage";
import StarBackground from "./components/StarBackground";
import { Route, Routes } from "react-router-dom";


function App() {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.refresh()

    return () =>{
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill() )
    }

  }, []);

  const HomePage = () => {
    return(

    <>
  <Header />
  <Toaster position="top-right" />
  <HeroSection id="Home" />
  <CustomCursor />

{/* start background  */}

<StarBackground>
  <AboutSection id="About" />
  <SkillSection id="About"/>
</StarBackground>

  <ProjectSection id="Projects"/>
  <ContactSection id="Contact"/>

  <Footer/>
  <ProgressBar/>
  </>
    )
  }

  
 

  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage/>} />
      </Routes>
    
  )
  
}

export default App
