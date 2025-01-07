import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background pointer-events-none" />
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Ahmad Hanaffi R.
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto">
            Web Developer crafting beautiful digital experiences with modern technologies
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              View Portfolio
            </button>
            <button className="px-6 py-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};