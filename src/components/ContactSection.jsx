import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const ContactSection = ({id}) => {

    const circleRef = useRef()
    const sectionRef = useRef()
    const initialTextRef = useRef()
    const finalTextRef = useRef()


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const cleanUp = () => {
            ScrollTrigger.getAll().forEach((st) => {
                if (st.vars.trigger === sectionRef.current) {
                    st.kill(true)
                }
            });
        }

        cleanUp()

        gsap.set(circleRef.current, {scale: 1, backgroundColor: "white"})
        gsap.set(initialTextRef.current, {opacity: 1})
        gsap.set(finalTextRef.current, {opacity: 0})


        // main timeline 

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 0.5,
                anticipatePin: 1,
                fastScrollEnd: true,
                preventOverlaps: true,
                invalidateOnRefresh: true,

            }
        })

        // initial state to mid zoom 0-50%

        tl.to(
            circleRef.current,
            {
                scale: 5,
                backgroundColor: "#9333EA",
                ease: "power1.inOut",
                duration: 0.5,

            },
            0,
        )

        // face out initial text first half

        tl.to(
            initialTextRef.current ,{
                opacity: 0,
                ease: 'power1.out',
                duration: 0.2,
            },
            0.1,
        )


        // midzoomto final state 50-100

        tl.to(circleRef.current, {
            scale: 17,
            backgroundColor: "#E9D5FF",
            boxShadow: "0 0 50px 20px rgb(233, 213, 255, 0.3)",
            ease:"power2.inOut",
            duration: 0.5,

        },0.5,
    )

        // fading in final text duraing seconf half 

        tl.to(finalTextRef.current, {
            opacity: 1,
            ease: "power2.in",
            duration: 0.2,
        },0.7
    )

    return cleanUp

    }, [])



  return (
    <section
    id={id}
    ref={sectionRef}
    className="w-full h-screen overflow-hidden flex items-center justify-center bg-black relative" 
    style={{overscrollBehavior: "none"}}>

        {/* simple circle with minimal nesting  */}

        <div
        ref={circleRef} className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100 ">

            <p
            ref={initialTextRef}
            className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center "
            >
                SCROLL DOWN
            </p>

            {/* final text  */}

            <div
            ref={finalTextRef}
            className="text-center relative flex flex-col items-center justify-center opacity-0"
            >

                <h1 className="text-black md:w-110 w-[90rem] lg:scale-[0.4] sm:scale-[0.
                25] scale-[0.07] md:font-bold text-xl sm:text-3xl md:text-5xl lg:text-sm leading-none mb-5 font-bold ">
                     Let's Get in Touch 
                </h1>

                <p className="text-black lg:w-[45rem] w-[25rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
                    Have a project idea or just want to say hi? I'm always excited to connect with fellow developers, designers, and creators. Drop me a message and let's make it happen!
 
                </p>

                {/* call to action button  */}

                <button className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-7 mt-6 text-nowrap ">
                    contact me 
                </button>

            </div>


        </div>

    </section>
  )
}

export default ContactSection