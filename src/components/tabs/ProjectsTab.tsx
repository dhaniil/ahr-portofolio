import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React and Node.js",
    image: "/placeholder.svg",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "/placeholder.svg",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design",
    image: "/placeholder.svg",
  },
];

export const ProjectsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-muted">{project.description}</p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300">
              View Project
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};