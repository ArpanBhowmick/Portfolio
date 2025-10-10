import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiShare1 } from "react-icons/ci";

const ProjectSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const titleLineRef = useRef();
  const triggerRef = useRef();
  const horizontalRef = useRef();

  //   project images data

  const projectImages = [
    {
      id: 1,
      title: "Todo App",
      imageSrc: "/projects/project-1.png",
      link:"https://todo-app-28.vercel.app/",
    },

    {
      id: 2,
      title: "prject-2",
      imageSrc: "/projects/project-2.png",
      link:"",
    },

    {
      id: 3,
      title: "prject-3",
      imageSrc: "/projects/project-3.png",
      link:"",
    },
  ];

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

    // section entrance animation

    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotateX: 20, opacity: 0 },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1,
        ease: "Power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50%  100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: " top 80%",
          end: "bottom top",
          scrub: true,
          // toggleActions: "",
        },
      }
    );

    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1) - 10,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { main: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
        // anticipatePin: 1,
      },
    });

    // image animation

    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel, i) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      tl.fromTo(
        image,
        { scale: 0, rotate: -20 },
        { scale: 1, rotate: 1, duration: 0.5 }
      );

      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, [projectImages.length]);

  return (
    <section
    
      ref={sectionRef}
      // id="horizontal-section"
      id="Projects"
      className=" relative w-full overflow-hidden min-h-screen py-20 bg-white scroll-mt-12"
    >
      {/* section title */}

      <div className="container mx-auto px-4 mb-16 md:mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0"
        >
          Featured Projects
        </h2>

        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto "
        ></div>
      </div>

      {/* horizontal scroll  */}

      <div ref={triggerRef} className="overflow-hidden">
        <div
          ref={horizontalRef}
          className="horizontal-section flex md:w-[300%] w-[300%]"
        >
          {projectImages.map((project) => (
            <div
              key={project.id}
              className="panel w-full  min-h-[50vh] md:h-screen mt-8 md:mt-0 relative flex items-center justify-center "
            >
              <a 
               href={project.link}
               className="relative w-full h-full flex flex-col items-center justify-center p-4  sm:p-8 md:p-12 ">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover "
                  src={project.imageSrc}
                  alt="Project-img"
                />

                <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm text-black mt-6 z-50 white-space: nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer ">
                  {project.title} <CiShare1 />
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
