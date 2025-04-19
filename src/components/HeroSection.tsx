
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fadeIn">
          RAHUL SHAW
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Passionate Software Engineer
        </p>
        <div className="flex gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/myselfrahul6290" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/rahulshaw1002/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:myselfrahul6290@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
