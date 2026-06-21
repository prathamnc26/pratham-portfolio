import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-6 md:px-20 py-24 text-white scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/30"
        >
          <h3 className="text-2xl font-semibold mb-2">
            KC College
          </h3>

          <p className="text-gray-400 mb-4">
            B.Sc. Computer Science • 2024 – 2028
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <p className="font-medium text-white mb-1">First Year</p>
              <p>CGPA: 9.05</p>
              <p className="text-gray-400">
                Sem 1: 8.95 • Sem 2: 9.15
              </p>
            </div>

            <div>
              <p className="font-medium text-white mb-1">Second Year</p>
              <p>CGPA: 8.55</p>
              <p className="text-gray-400">
                Sem 3: 8.35 • Sem 4: 8.75
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Currently in Third Year (Final Year).
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;