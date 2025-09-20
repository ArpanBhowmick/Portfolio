import {motion,  delay } from "framer-motion";

const Header = () => {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-15 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-200 flex items-center justify-center text-black font-bold text-xl mr-3">
            {"<A/B>"}
          </div>
          {/* <span>Arpan Bhowmick</span> */}
        </motion.div>

          {/* navigation bar */}

          <div className="lg:flex hidden space-x-8">
            {["Home", "About", "Projects","Experience", "Contact" ].map((item, index) => 
            <a 
            key={item}
            className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#">
                {item}
            </a>
            )}
          </div>
        
      </div>
    </header>
  );
};

export default Header;
