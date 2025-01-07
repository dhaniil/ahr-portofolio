import { motion } from "framer-motion";

const certificates = [
  {
    title: "Advanced React Development",
    issuer: "Frontend Masters",
    date: "2023",
  },
  {
    title: "TypeScript Professional",
    issuer: "Microsoft",
    date: "2023",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
  },
];

export const CertificatesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
          <p className="text-muted">{cert.issuer}</p>
          <p className="text-sm text-accent mt-2">{cert.date}</p>
        </motion.div>
      ))}
    </div>
  );
};