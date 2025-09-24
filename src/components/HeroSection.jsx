import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

    {/* left section */}

    <div className="z-40 mb-[20%] xl:mb-0 ">
        <motion.h1
        initial={{opacity: 0, y: 80}}
        animate={{opacity: 1, y: 0}}
        transition={{
            type:"spring",
            stiffness:40,
            damping:25,
            delay: 1.3,
            duration: 1.5,
        }}
        
        className="text-5xl md:text-6xl lg:text-7xl font-bold z-10 mb-6">
          Building Fast 
            <br />
            Reliable Results
        </motion.h1>

        <motion.p
        initial={{opacity: 0, y: 80}}
        animate={{opacity: 1, y: 0}}
        transition={{
            type:"spring",
            stiffness:40,
            damping:25,
            delay: 1.8,
            duration: 1.5,
        }}
        className="text-xl md:text-xl lg:text-md text-purple-200 max-w-xl">
           I transform ideas into functional websites and applications. Through clean code, efficient problem-solving, and dependable performance, I deliver projects that meet their goals and work 
        </motion.p>
    </div>

      {/* right section  */}

          {/* <Spline className="absolute  right-0 xl:left-[28%] top-[-25%] lg:top-0" scene="https://prod.spline.design/llAinHObO2daCKVr/scene.splinecode" /> */}

          <Spline className="absolute  right-0 xl:left-[28%] top-[-25%] lg:top-0" scene="https://prod.spline.design/llAinHObO2daCKVr/scene.splinecode" />





    </section>
  )
}

export default HeroSection

//  I am a Front-End Developer specializing in creating responsive, accessible, and visually engaging web applications that deliver seamless user experiences. With a strong focus on writing clean, maintainable code and implementing modern UI practices, I aim to bridge the gap between design and functionality. I am continuously expanding my technical skills and look forward to contributing to innovative projects where I can add value through both creativity and precision.