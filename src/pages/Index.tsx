import { Hero } from "@/components/Hero";
import { TabSection } from "@/components/TabSection";
import { Experience } from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <TabSection />
      <Experience />
    </div>
  );
};

export default Index;