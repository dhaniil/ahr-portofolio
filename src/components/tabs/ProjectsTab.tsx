import { motion } from "framer-motion";
import { Github, ExternalLink, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React and Node.js",
    image: "/placeholder.svg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Frontend", "Backend", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "/placeholder.svg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Frontend", "SaaS", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design",
    image: "/placeholder.svg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    tags: ["Frontend", "React", "TypeScript", "MongoDB"],
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
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-muted">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                asChild
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1" />
                  Demo
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1" />
                  Repository
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};