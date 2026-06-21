import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-20 py-24 text-white flex items-center scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-10"
        >
          Interested in collaborating, internships, or opportunities?
          Feel free to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="mailto:prathamkc26@gmail.com"
            className="px-6 py-3 rounded-md border border-white/20 hover:bg-white hover:text-black transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/prathamchudasama"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border border-white/20 hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/prathamnc26"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border border-white/20 hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;