import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Brain, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech CSE + Minor AI & ML",
      description: "D.Y. Patil International University, Pune — 2025 Graduate"
    },
    {
      icon: Brain,
      title: "GenAI & LLM Focus",
      description: "RAG Pipelines, Prompt Engineering, LangChain, FAISS"
    },
    {
      icon: Code,
      title: "Hands-On Builder",
      description: "Python, FastAPI, Streamlit, Azure AI, Databricks"
    },
    {
      icon: Zap,
      title: "Immediate Joiner",
      description: "Open to GenAI ops, AI product & prompt engineering roles"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-foreground mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Text */}
            <div className="space-y-6">
              <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground">
                Turning AI Curiosity into Real Products
              </h3>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-semibold">Komoleeka Gostu</span>, a 2025
                  B.Tech Computer Science & Engineering graduate with a{" "}
                  <span className="text-foreground font-semibold">Minor in AI & ML</span> from
                  D.Y. Patil International University, Pune.
                </p>

                <p>
                  I've built <span className="text-foreground font-semibold">RAG-based document Q&A
                  systems</span>, an <span className="text-foreground font-semibold">Autonomous Research
                  Agent</span> using LangChain and Tavily API, and applied computer vision in a medical AI
                  internship at Lisys Technocraft LLP — all while maintaining a{" "}
                  <span className="text-foreground font-semibold">26+ repository GitHub portfolio</span> and
                  writing about AI on Medium.
                </p>

                <p>
                  I thrive at the intersection of <span className="text-foreground font-semibold">GenAI
                  operations, AI product thinking, and prompt engineering</span> — turning complex LLM
                  capabilities into practical, user-facing solutions. Based in Pune, open to Bangalore,
                  Hyderabad, Chennai, and international (visa-sponsored) opportunities.
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-tech border-2 border-border">
                  <img
                    src="/lovable-uploads/23b2f2a5-7c75-45d1-b382-449f5b1647ff.png"
                    alt="Komoleeka Gostu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-tech-accent/20 to-foreground/20 rounded-2xl -z-10 animate-pulse-slow" />
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="tech-card text-center group">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-tech-accent group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h4 className="font-montserrat font-bold text-lg mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
