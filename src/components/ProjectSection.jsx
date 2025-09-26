import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiShare1 } from "react-icons/ci";

const ProjectSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const titleLineRef = useRef();

//   project images data 

  const projectImages = [
    {
    id:1, 
    title: "Todo App",
    imageSrc: "/projects/project-1.png ",
  },

  {
    id:2,
    title: "prject-2",
    imageSrc: "/images/project-2.png",
  },

  {
    id:3,
    title: "prject-3",
    imageSrc: "/images/project-3.png",
  }
]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // title animation

    gsap.fromTo(
      titleRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // title line animation

    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "Power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className=" relative w-full overflow-hidden min-h-screen py-20 bg-white "
    >
      {/* section title */}

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0">
          Featured Projects
        </h2>

        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto ">

          </div>
      </div>

        {/* horizontal scroll  */}

        <div className="overflow-hidden">
            <div className="horizontal-section flex md:w-[400%] w-[420%]">

            {projectImages.map((project) => 
            <div key={project.id}
             className="w-full h-screen relative flex items-center justify-center ">

                <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 max-w-4xl ">

                    <img className="project-image max-w-full max-h-full rounded-2xl object-cover"
                     src={project.imageSrc}
                    alt="Project-img"
                     />

                    <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer ">
                        {project.title} <CiShare1 />
                    </h2>


                </div>

            </div>
         )}
                

            </div>
        </div>

    </section>
  );
};

export default ProjectSection;





