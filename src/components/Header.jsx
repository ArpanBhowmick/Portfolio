import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import ContactFormModal from "./forms/ContactFormModal";

const Header = () => {
  // for fixed navigation bar

  const headerRef = useRef();

  // navigation
  const navigate = useNavigate();

  // menu state

  const [isOpen, setIsOpen] = useState(false);

  // contack form state

  const [contactFormOpen, setContactFormOpen] = useState(false);

  //  Contact form state (single state)

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    sending: false,
    status: null,
  });

  //  Functions

  const toggleMenu = () => setIsOpen(!isOpen);
  const openContactForm = () => setContactFormOpen(!contactFormOpen);

  // handle form submission function

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setForm({ ...form, sending: true });
    setForm((form) => ({ ...form, sending: true }));

    try {
      const res = await fetch("https://formspree.io/f/mblzygpb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setForm({
          name: "",
          email: "",
          message: "",
          sending: false,
          status: "success",
        });
        toast.success("Message sent successfully!");
      } else {
        setForm({ ...form, sending: false, status: "error" });
        toast.error("Something went wrong. Try again!");
      }
    } catch (err) {
      console.error(err);
      setForm({ ...form, sending: false, status: "error" });
      toast.error("Something went wrong. Try again!");
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const openModalHandler = () => setContactFormOpen(true);
    window.addEventListener("openContactModal", openModalHandler);

  

    const projectsSection = document.getElementById("Projects");

    const updateHeaderStyle = () => {
      const scroll = window.scrollY; // current scroll
      const projectsTop = projectsSection.offsetTop;
      const projectsBottom = projectsTop + projectsSection.offsetHeight;

     

      if (scroll < 50) {
        // At the very top → transparent
        headerRef.current.style.backgroundColor = "rgba(0,0,0,0)";
        headerRef.current.style.backdropFilter = "blur(0px)";
        headerRef.current.classList.remove("shadow-lg");
      } else if (scroll >= projectsTop && scroll <= projectsBottom) {
        // Inside Projects → transparent
        headerRef.current.style.backgroundColor = "rgba(0,0,0,0)";

        headerRef.current.style.backdropFilter = "blur(0px)";
        headerRef.current.classList.add("shadow-lg");
      } else {
        // Everywhere else → blur
        headerRef.current.style.backgroundColor = "rgba(0,0,0,0)";
        headerRef.current.style.backdropFilter = "blur(10px)";
        headerRef.current.classList.add("shadow-lg");
      }
    };

    updateHeaderStyle();
    // ScrollTrigger instance
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: updateHeaderStyle,
    });

    
    return () => {
      window.removeEventListener("openContactModal", openModalHandler);
      scrollTriggerInstance.kill();
    };


  }, []);

  return (
    // absolute top-0  bg-transparent backdrop-blur-md
    <header
      ref={headerRef}
      className=" fixed shadow-lg w-full z-50 transition-all duration-300  h-16 md:h-21"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20 ">
        {/* h-16 md:h-20 */}
        {/* h-16 md:h-12 lg:h-20
      pt-0 md:pt-10 lg:pt-0  */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
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
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           className="h-10 w-16 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl mr-3 ">
            {"<A/B>"}
          </div>
          {/* <span>Arpan Bhowmick</span> */}
        </motion.div>

        {/* navigation bar */}


 
        <nav className="lg:flex hidden space-x-8 ">
          {["Home", "About", "Projects", "Contact","Resume"].map(
            (item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative  text-gray-800 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                // href="#"
                onClick={() => {
                  if (item === "Resume") {
                    // Kill all active ScrollTriggers before navigating

                    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                    navigate("/resume");
                  } else {
                    const section = document.getElementById(item);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* socail-icons */}

        <div className="hidden lg:flex items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://github.com/ArpanBhowmick"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300"
            href="#"
          >
            <FaXTwitter className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://www.linkedin.com/in/arpan-bhowmick28/"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          {/* hire me button */}

          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 1.6,
              duration: 0.8,
            }}
            className="ml-4 px-2 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-green-700 hover:to-green-700 hover:text-white transition-all duration-500 cursor-pointer "
          >
            Hire me
          </motion.button>
        </div>

        {/* mobile menu button*/}

        <div className="lg:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* mobile menu  */}

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="lg:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Contact", "Resume"].map((item) => (
            <a
              className="text-gray-300 font-medium py-2 hover:text-violet-600"
              key={item}
              

              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                setTimeout(() => {
                  if (item === "Resume") {
                    // Kill all active ScrollTriggers before navigating
                    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                    setContactFormOpen(false);
                    navigate("/resume");
                  } else {
                    const section = document.getElementById(item);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }, 100);
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/ArpanBhowmick">
              <FiGithub className="h-5 w-5 hover:text-violet-600 dark:hover:text-violet-400" />
            </a>

            <a href="">
              <FaXTwitter className="h-5 w-5 hover:text-violet-600 dark:hover:text-violet-400" />
            </a>

            <a href="https://www.linkedin.com/in/arpan-bhowmick28/">
              <FiLinkedin className="h-5 w-5 hover:text-violet-600 dark:hover:text-violet-400" />
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold "
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      {/* Contact form */}

      <ContactFormModal
        contactFormOpen={contactFormOpen}
        openContactForm={openContactForm}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
      />
    </header>
  );
};

export default Header;
