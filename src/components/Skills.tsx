import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "SQL"],
      icon: "💻"
    },
    {
      title: "AI/ML Frameworks",
      skills: ["TensorFlow", "PyTorch", "Keras", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      icon: "🧠"
    },
    {
      title: "Generative AI & LLMs",
      skills: ["LangChain", "FAISS", "OpenAI", "RAG Pipelines", "Prompt Engineering", "Vector Databases"],
      icon: "⚡"
    },
    {
      title: "DevOps & Cloud",
      skills: ["Git", "MATLAB", "PowerBI", "Excel", "REST APIs"],
      icon: "☁️"
    },
    {
      title: "Domains",
      skills: ["NLP", "Computer Vision", "Prompt Engineering", "Medical AI", "Financial AI"],
      icon: "🎯"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Agile", "Critical Thinking", "Team Collaboration"],
      icon: "🤝"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6 text-foreground">
              Skills & Technologies
            </h2>
            <p className="font-roboto text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building next-generation AI applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-foreground mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="tech-card h-full group">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="skill-badge font-roboto font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Skills Highlight */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-tech-accent text-primary-foreground px-6 py-3 rounded-full font-montserrat font-bold">
                <span className="text-2xl">🔥</span>
                <span>Generative AI Specialist</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-full font-montserrat font-bold">
                <span className="text-2xl">🚀</span>
                <span>Production AI Systems</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-full font-montserrat font-bold">
                <span className="text-2xl">⭐</span>
                <span>Research & Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}