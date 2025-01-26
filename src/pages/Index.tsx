import { Hero } from "@/components/Hero";
import { TabSection } from "@/components/TabSection";
import { Experience } from "@/components/Experience";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { MainNavigation } from "@/components/MainNavigation";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      const container = sectionsRef.current;
      if (!container) return;
      
      const sections = container.querySelectorAll('section');
      const currentScroll = window.scrollY;
      const direction = e.deltaY > 0 ? 1 : -1;
      
      let targetSection: HTMLElement | null = null;
      
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        
        if (direction > 0 && sectionTop > currentScroll) {
          if (!targetSection || sectionTop < targetSection.offsetTop) {
            targetSection = sectionElement;
          }
        } else if (direction < 0 && sectionTop < currentScroll) {
          if (!targetSection || sectionTop > targetSection.offsetTop) {
            targetSection = sectionElement;
          }
        }
      });
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    window.addEventListener('wheel', handleScroll, { passive: false });
    
    // Handle click navigation
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link?.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = link.getAttribute('href')?.substring(1);
        const section = document.getElementById(id || '');
        
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleNavClick);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="relative">
      <MainNavigation />
      <div 
        ref={sectionsRef}
        className="min-h-screen bg-background text-foreground overflow-y-auto scroll-smooth"
      >
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <TabSection />
        </section>
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>
        <section id="contact" className="min-h-screen">
          <ContactMe />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;