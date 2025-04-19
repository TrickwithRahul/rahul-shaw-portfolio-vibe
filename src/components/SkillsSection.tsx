
import { Card, CardContent } from "./ui/card";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "C", "C++", "Java", "PHP", "Python"]
    },
    {
      title: "Frameworks",
      skills: ["Laravel", "Node.js", "Express.js", "React.js"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "Hasura", "GraphQL"]
    },
    {
      title: "Front End",
      skills: ["HTML", "CSS", "React.js", "Next.js"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
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
