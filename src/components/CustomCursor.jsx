import { useEffect, useRef } from "react";
import {gsap} from "gsap";


const CustomCursor = () => {
    
    const cursorRef = useRef()
    const cursorBorderRef = useRef()

    // hide when in phone 
    const isMobile = ('ontouchstart' in window || window.innerWidth < 768) ? 'hidden' : ''

    useEffect(() =>{
        // if (isMobile) return;

        const cursor = cursorRef.current
        const cursorBorder = cursorBorderRef.current

        // initial position 

        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        })

        const xTo = gsap.quickTo(cursor , "x", {duration: 0.2, ease: "power3.out"})
        
        const yTo = gsap.quickTo(cursor , "y", {duration: 0.2, ease: "power3.out"})

        const xToBorder= gsap.quickTo(cursorBorder , "x", {duration: 0.2, ease: "power1.out"}) 

        const yToBorder= gsap.quickTo(cursorBorder , "y", {duration: 0.2, ease: "power3.out"}) 


        // mouse movement handler 
        const handleMouseMove = (e) => {
          xTo(e.clientX)
          yTo(e.clientY)
          xToBorder(e.clientX)
          yToBorder(e.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)

        // click animation 
        window.addEventListener("mousedown",() =>{
          gsap.to([cursor, cursorBorder], {
            scale: 0.6,
            duration: 0.2,
          })
        })

        window.addEventListener("mouseup",() =>{
          gsap.to([cursor, cursorBorder], {
            scale: 1,
            duration: 0.2,
          })
        })


    },[])
   

  return (
    <>
    {/* main central dot of cursor  */}

  <div
  ref={cursorRef}
  className={`fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference ${isMobile}`}
  >

  </div>

  <div
  ref={cursorBorderRef}
  className={`fixed top-0 left-0 h-[40px] w-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-50 ${isMobile}`}
  >

  </div>

    </>
  )
}

export default CustomCursor