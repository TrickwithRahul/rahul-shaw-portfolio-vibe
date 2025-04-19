
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Chat-app",
      description: "A real-time chat application with Google authentication and Firebase integration",
      techStack: ["React.js", "Firebase", "Google Auth"],
      github: "https://github.com/myselfrahul6290",
      date: "Jan 2024"
    },
    {
      title: "NonVegKing",
      description: "Food ordering website with features like user authentication, cart management, and menu filtering",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/myselfrahul6290",
      date: "Mar 2023"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-secondary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
