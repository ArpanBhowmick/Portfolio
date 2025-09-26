import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";



const AboutSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const introRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -200,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // intro animation

    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blure(10px)" },
      {
        y: -400,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >

        {/* <div className="absolute inset-0 overflow-hidden"> */}

            {/* stars  */}

            {/* {[...Array(10).map(())]} */}

        {/* </div> */}

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      {/* <Spline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        scene="https://prod.spline.design/KeE4lpx2xnLG4OBd/scene.splinecode"
      /> */}

      <div
        ref={introRef}
        className="absolute lg:bottom-[-15rem] md:bottom-[-23rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-center lg:px-24 px-5 items-center"
      >
        <h3 className="text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-2xl max-w-[27rem] tracking-wide md:mt-20 sm:mt-[-40rem] mt-[-32rem]">
          I am a Front-End Developer specializing in building responsive and
          high-performance web applications. Skilled in HTML, CSS, JavaScript,
          React, and modern frameworks, I focus on writing clean, maintainable
          code and delivering seamless user experiences. I am passionate about
          learning new technologies, solving complex problems efficiently, and
          transforming ideas into visually engaging digital solutions.
        </h3>
      </div>
    </section>
  );
};

export default AboutSection;

// styling for h3:  text-xl  md:text-2xl font-bold text-purple-200 z-50 max-w-2xl text-center tracking-wide

// for div: absolute bottom-60 xl:bottom-60 md:bottom-60 left-0 w-full flex justify-center px-5
