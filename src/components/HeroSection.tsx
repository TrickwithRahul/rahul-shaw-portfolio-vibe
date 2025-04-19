
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Hello, my name is{" "}
            <span className="text-[#FFD84F]">Rahul Shaw</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Passionate Software Engineer crafting digital experiences
          </p>
          <div className="flex gap-4 pt-4">
            <Button variant="default" size="lg" className="bg-[#FFD84F] hover:bg-[#FFD84F]/90 text-black" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Work</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/myselfrahul6290" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/rahulshaw1002/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:myselfrahul6290@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-[#FFD84F] rounded-full blur-[80px] opacity-30" />
          <div 
            className="relative aspect-square overflow-hidden rounded-full border-4 border-[#FFD84F]"
            style={{
              boxShadow: `
                0 0 60px rgba(255, 216, 79, 0.3),
                0 0 100px rgba(255, 216, 79, 0.2),
                -10px 10px 30px rgba(0, 0, 0, 0.2)
              `,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD84F]/10 to-transparent" />
            <img
              src="/lovable-uploads/88554165-fe93-4d57-bb4a-2bdefae3e014.png"
              alt="Rahul Shaw"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
