import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";


const ContactFormModal = ({ contactFormOpen, openContactForm, form, setForm, handleSubmit }) => {






  return (
    
      <AnimatePresence>
        {contactFormOpen && (

        


            <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
       transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      
      style={{ pointerEvents: "auto" }}
      onClick={(e) => e.target === e.currentTarget && openContactForm()}
    >



            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className=" bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >



          






              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get In Touch
                </h1>

                <button onClick={openContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>

              {/* input forms */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-600 
            focus:outline-none
            rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-600 
            focus:outline-none
            rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>

                  <textarea
                    rows="4"
                    id="message"
                    placeholder="How can i help you?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-600 
            focus:outline-none
            rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={form.sending}
                  className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-green-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-b-lg shadow-md hover:shadow-lg hover:shadow-green-600/50"
                >
                  {form.sending ? "Sending..." : "Send Message"}
                </motion.button>

                {/* <div>
                {form.status === "success" && <p className="text-green-500">Message sent!</p> }
                {form.status === "error" &&  <p className="text-red-500">Something went wrong.</p>}
              </div> */}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default ContactFormModal