import { motion } from "framer-motion";

function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Certification Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">
              Diploma in Advanced Excel
            </h3>
            <p className="text-gray-400">Sai Computer Classes</p>
            <p className="text-sm text-gray-500 mt-1">May 2022</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Certifications;