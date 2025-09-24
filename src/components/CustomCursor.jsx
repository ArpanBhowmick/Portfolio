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
            yPercent: -50
        })




        // mouse movement handler 
        const handleMouseMove = (event) => {

        }

    })
   

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