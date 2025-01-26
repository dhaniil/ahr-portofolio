import { Home, User, Briefcase, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  {
    title: "Home",
    url: "#home",
    icon: Home,
  },
  {
    title: "About",
    url: "#about",
    icon: User,
  },
  {
    title: "Experience",
    url: "#experience",
    icon: Briefcase,
  },
  {
    title: "Contact",
    url: "#contact",
    icon: Mail,
  },
];

export function MainNavigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = sectionElement.id;

        if (
          scrollPosition >= sectionTop - sectionHeight * 0.25 &&
          scrollPosition < sectionTop + sectionHeight * 0.75
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 bg-[#1A1F2C]/80 backdrop-blur-sm rounded-full px-3 py-4">
      <ul className="flex flex-col gap-6">
        {items.map((item) => {
          const isActive = activeSection === item.url.substring(1);
          return (
            <li key={item.title}>
              <a
                href={item.url}
                className={`block p-2 rounded-full transition-all duration-300 group ${
                  isActive ? "bg-[#9b87f5]" : "hover:bg-[#D6BCFA]/20"
                }`}
                title={item.title}
              >
                <item.icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? "text-white" : "text-[#D6BCFA] group-hover:text-white"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}