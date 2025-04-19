
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
          <div className="absolute inset-0 bg-[#FFD84F] rounded-full blur-3xl opacity-20" />
          <div className="relative aspect-square rounded-full bg-[#FFD84F]/10 border-2 border-[#FFD84F] flex items-center justify-center">
            <span className="text-6xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};
