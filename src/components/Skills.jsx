import { motion } from "framer-motion";

const skills = [
  "Python",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "PL/SQL",
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-24 text-white scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-md shadow-black/30 text-center hover:bg-white/10 transition"
          >
            <p className="text-sm font-medium">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;