import { Hero } from "@/components/Hero";
import { TabSection } from "@/components/TabSection";
import { Experience } from "@/components/Experience";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <TabSection />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Index;