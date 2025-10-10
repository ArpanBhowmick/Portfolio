import gsap from "gsap";
import { useEffect, useRef } from "react";

const StarBackground = ({ children }) => {
  const containerRef = useRef();

 useEffect(() => {
    const stars = containerRef.current.querySelectorAll(".star");

    stars.forEach((star) => {
      gsap.to(star, {
        opacity: Math.random(),
        duration: 1 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2,
      });
    });
  }, []);

  const starsArray = Array.from({ length: 65 });

  return (
    <>
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* stars generation  */}
      {starsArray.map((_, i) => (
        <span
          key={i}
          className="star absolute bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `2px`,
            height: `2px`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
    <div className="relative z-10">{children}</div>
    </>
  );
};

export default StarBackground;
