
import { Card, CardContent } from "./ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 gradient-text">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Om Dayal Group of Institutions</p>
                    <p className="text-muted-foreground">B. Tech in Computer Science</p>
                    <p className="text-sm text-muted-foreground">2020 - 2024 • SGPA: 8.83</p>
                  </div>
                  <div>
                    <p className="font-medium">Vikram Vidyalaya</p>
                    <p className="text-sm text-muted-foreground">Higher Secondary • 2019 • 61%</p>
                  </div>
                  <div>
                    <p className="font-medium">Howrah Shiksha Sadan High School</p>
                    <p className="text-sm text-muted-foreground">Secondary • 2017 • 74%</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>11/11 Hem Chakraborty Lane</p>
                  <p>Howrah - 711101</p>
                  <p>(+91) 6290741412</p>
                  <p>myselfrahul6290@gmail.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
