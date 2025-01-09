import { Mail, Phone, MapPin, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

export const ContactMe = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Here you would typically send the email using an API
    console.log("Sending email:", { email, subject, message });
    
    toast({
      title: "Email Sent",
      description: "Your message has been sent successfully!",
    });
    
    setOpen(false);
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Contact Me</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <div className="flex flex-col items-center p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors cursor-pointer">
                <Mail className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <span className="text-muted hover:text-accent">
                  your.email@example.com
                </span>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Send me an email</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          
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