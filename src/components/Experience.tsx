import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Leading frontend development team and architecting scalable solutions.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Developed responsive web applications using modern technologies.",
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    period: "2018 - 2019",
    description: "Collaborated on various web development projects and learned modern practices.",
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-px h-full bg-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-accent mb-1">{exp.company}</p>
                <p className="text-sm text-muted mb-4">{exp.period}</p>
                <p className="text-white/80">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};