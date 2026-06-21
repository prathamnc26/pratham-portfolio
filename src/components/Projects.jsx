import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-24 text-white scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/30"
        >
          <h3 className="text-2xl font-semibold mb-2">
            CS Mentor AI
          </h3>

          <p className="text-gray-400 mb-4">
            An AI-powered platform to study and explore different topics of
            Computer Science through guided learning.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["HTML", "CSS", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
                href="https://github.com/prathamnc26/CS-Mentor-AI"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 text-sm rounded-md border border-white/20 hover:bg-white hover:text-black transition"
            >
                GitHub
            </a>

            <a
                href="https://csmentorai.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 text-sm rounded-md bg-white text-black hover:bg-gray-200 transition"
            >
            Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;