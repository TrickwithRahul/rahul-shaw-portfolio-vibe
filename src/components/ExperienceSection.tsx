
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Nrxen It Technologies</h3>
                  <Badge>July 2024 - Present</Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-4">Software Engineer</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Developed and implemented the Nimmos 2.0 project, focusing on front-end development</li>
                  <li>Tech Stack: NextJS, Hasura, GraphQL</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-lg text-muted-foreground">Software Engineering Intern</p>
                  <Badge variant="outline">Feb 2024 - July 2024</Badge>
                </div>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Developed Railway Housekeeping Management System</li>
                  <li>Tech Stack: NextJS, Hasura, GraphQL</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">PMN Patralok</h3>
                <Badge>June 2023 - Dec 2023</Badge>
              </div>
              <p className="text-lg text-muted-foreground mb-4">Backend Developer Intern</p>
              <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                <li>Implemented social media login and Image compression</li>
                <li>Worked on troubleshooting and resolving backend issues</li>
                <li>Tech Stack: Laravel, JavaScript, MySQL, PHP</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
