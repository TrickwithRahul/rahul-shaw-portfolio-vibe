
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-[#FFD84F]" asChild>
              <a href="https://github.com/myselfrahul6290" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-[#FFD84F]" asChild>
              <a href="https://www.linkedin.com/in/rahulshaw1002/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-[#FFD84F]" asChild>
              <a href="mailto:myselfrahul6290@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Rahul Shaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
