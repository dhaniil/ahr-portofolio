import { Hero } from "@/components/Hero";
import { TabSection } from "@/components/TabSection";
import { Experience } from "@/components/Experience";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MainNavigation } from "@/components/MainNavigation";

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
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };
    
    window.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <MainNavigation />
        <div 
          ref={sectionsRef}
          className="flex-1 min-h-screen bg-background text-foreground overflow-y-auto scroll-smooth"
        >
          <Hero />
          <TabSection />
          <Experience />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;