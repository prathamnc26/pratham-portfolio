import { motion } from "framer-motion";

function About() {
  return (
    <section
        id="about"
        className="min-h-screen px-6 md:px-20 py-24  text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-white/10 hover:border-white/20"
        >
          <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I’m a Computer Science student passionate about building modern
            web applications and exploring AI-driven solutions. I enjoy
            turning ideas into real, usable software.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-white/10 hover:border-white/20"
        >
          <h3 className="text-xl font-semibold mb-3">Interests</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Full Stack Development, scalable backend systems, clean UI/UX,
            and experimenting with AI to enhance learning and productivity.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-white/10 hover:border-white/20"
        >
          <h3 className="text-xl font-semibold mb-3">Goals</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            My goal is to become a Full Stack Developer at a top tech company
            and eventually build my own startup solving real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;