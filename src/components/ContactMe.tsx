import { Mail, Phone, MapPin } from "lucide-react";

export const ContactMe = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Contact Me</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
            <Mail className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:your.email@example.com" className="text-muted hover:text-accent">
              your.email@example.com
            </a>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
            <Phone className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-muted hover:text-accent">
              +1 (234) 567-890
            </a>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
            <MapPin className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-muted text-center">
              Your City, Country
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};