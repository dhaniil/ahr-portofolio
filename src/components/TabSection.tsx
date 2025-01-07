import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillsTab } from "./tabs/SkillsTab";
import { ProjectsTab } from "./tabs/ProjectsTab";
import { CertificatesTab } from "./tabs/CertificatesTab";

const tabs = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
];

export const TabSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white/5 backdrop-blur-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white/10 text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "skills" && <SkillsTab />}
            {activeTab === "projects" && <ProjectsTab />}
            {activeTab === "certificates" && <CertificatesTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};