import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";



const SKILLS = [
  { name: "HTML", Icon: FaHtml5, color: "#f97316" },
  { name: "CSS", Icon: FaCss3Alt, color: "#3b82f6" },
  { name: "JavaScript", Icon: FaJs, color: "#facc15" },
  { name: "React", Icon: FaReact, color: "#22d3ee" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#14b8a6" },
  { name: "Git", Icon: FaGitAlt, color: "#ef4444" },
];

const SkillSection = () => {
  const titleRef = useRef();
  const iconBoxRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // title animation 

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -110,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // skill container animation

    gsap.fromTo(
      iconBoxRef.current,
      { y: 100, opacity: 0 },
      {
        y: -10,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    
    // skill cards animation 

    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: -28,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-b from-transparent via-[#9a74cf50] to-black  text-white px-6 py-30  overflow-hidden lg:px-60 md:px-24"
    >
      <div
        ref={iconBoxRef}
        className="w-full max-w-6xl border-2  border-gray-700 rounded-2xl sm:p-8 bg-white/5 shadow-inner p-6 "
      >
        <h2 ref={titleRef} className="text-4xl font-bold mb-10 text-center">
          My Skills
        </h2>

        <div className="flex flex-row justify-center items-center gap-8 flex-wrap ">
          {SKILLS.map((s, i) => {
            const Icon = s.Icon;

            return (
              <motion.div
                key={s.name}
                className="skill-card relative flex flex-col items-center justify-center w-28 h-28 rounded-xl border-2 border-gray-700 bg-white/5 cursor-pointer z-10"
                // initial={{ opacity: 0, y: 80 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{
                //   type: "spring",
                //   stiffness: 40,
                //   damping: 25,
                //   delay: i * 0.2,
                // }}
                whileHover={{
                  boxShadow: `0 0 12px ${s.color}, 0 0 25px ${s.color}`,
                  borderColor: s.color,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
              >
                {/* Skill Icon */}

                <Icon size={36} style={{ color: s.color, zIndex: 10 }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
