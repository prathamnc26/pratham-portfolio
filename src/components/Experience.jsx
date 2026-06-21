import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 md:px-20 py-24 text-white scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-8">

        {/* Teaching Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
shadow-lg shadow-black/30
transition-all duration-300
hover:-translate-y-2
hover:shadow-white/10 hover:border-white/20"
        >
          <h3 className="text-xl font-semibold">
            Academic Staff & Mathematics / Science Teacher
          </h3>
          <p className="text-gray-400 mb-2">
            Newton Private Tutorials • June 2024 – June 2026
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Taught Mathematics and Science, mentored students academically,
            and contributed to curriculum planning and academic guidance.
          </p>
        </motion.div>

        {/* Leadership Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
shadow-lg shadow-black/30
transition-all duration-300
hover:-translate-y-2
hover:shadow-white/10 hover:border-white/20"
        >
          <h3 className="text-xl font-semibold">
            Head of Department — Accounts & Tech Club
          </h3>
          <p className="text-gray-400 mb-2">
            KC College
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Led departmental activities, coordinated technical events,
            and guided students in academic and technical initiatives.
          </p>
        </motion.div>

        {/* Internship 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
shadow-lg shadow-black/30
transition-all duration-300
hover:-translate-y-2
hover:shadow-white/10 hover:border-white/20"
        >
          <h3 className="text-xl font-semibold">
            Internship — Indian Servers
          </h3>
          <p className="text-gray-400 mb-2">
            Major Internship
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Gained hands-on experience working with real-world server-side
            environments and practical development workflows.
          </p>
        </motion.div>

        {/* Internship 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
shadow-lg shadow-black/30
transition-all duration-300
hover:-translate-y-2
hover:shadow-white/10 hover:border-white/20"
        >
          <h3 className="text-xl font-semibold">
            Internship — Asha Next Technologies
          </h3>
          <p className="text-gray-400 mb-2">
            4 Weeks • May 2026
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Worked on short-term development tasks, gaining exposure to
            professional project environments and industry practices.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;