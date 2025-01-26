import { Hero } from "@/components/Hero";
import { TabSection } from "@/components/TabSection";
import { Experience } from "@/components/Experience";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let isScrolling = false;
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const container = sectionsRef.current;
      if (!container) return;
      
      isScrolling = true;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = container.querySelectorAll('section');
      const currentScroll = window.scrollY;
      
      let targetSection: Element | null = null;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (direction > 0 && sectionTop > currentScroll) {
          if (!targetSection || sectionTop < targetSection.offsetTop) {
            targetSection = section;
          }
        } else if (direction < 0 && sectionTop < currentScroll) {
          if (!targetSection || sectionTop > targetSection.offsetTop) {
            targetSection = section;
          }
        }
      });
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
      
      // Reset isScrolling after animation
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isScrolling = false;
      }, 1000); // Adjust this value to match your scroll animation duration
    };
    
    window.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      ref={sectionsRef}
      className="min-h-screen bg-background text-foreground overflow-y-auto scroll-smooth"
    >
      <Hero />
      <TabSection />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Index;