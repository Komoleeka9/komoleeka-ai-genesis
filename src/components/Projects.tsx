import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Brain, Bot, Heart, Mic, Cpu } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "GenAI Retrieval QA System",
      description: "Built a retrieval-augmented QA pipeline for enterprise search using LLMs and vector databases with high accuracy question answering capabilities.",
      technologies: ["LangChain", "FAISS", "OpenAI", "Vector DB"],
      icon: Brain,
      category: "Generative AI",
      features: [
        "Enterprise-grade RAG pipeline",
        "Vector similarity search",
        "Context-aware responses"
      ]
    },
    {
      title: "Radio-Diagnostic Prediction System",
      description: "Implemented ML classification models for medical image prediction and early disease detection with high precision diagnostic capabilities.",
      technologies: ["Python", "TensorFlow", "Medical Imaging", "ML"],
      icon: Heart,
      category: "Medical AI",
      features: [
        "Medical image analysis",
        "Early disease detection",
        "Clinical decision support"
      ]
    },
    {
      title: "RoboAdvisory Investment Platform",
      description: "Developing a chatbot-based investment platform for personalized portfolio recommendations using AI-driven financial analysis.",
      technologies: ["Python", "Finance API", "Chatbot", "Portfolio Management"],
      icon: Bot,
      category: "FinTech AI",
      features: [
        "Personalized recommendations",
        "Risk assessment algorithms",
        "Portfolio optimization"
      ]
    },
    {
      title: "Translation & Speech Recognition System",
      description: "Developed an AI-based speech translation system for multilingual conversation with real-time processing capabilities.",
      technologies: ["NLP", "Speech Recognition", "Translation API", "ML"],
      icon: Mic,
      category: "NLP",
      features: [
        "Real-time translation",
        "Multi-language support",
        "Speech-to-speech conversion"
      ]
    },
    {
      title: "Arduino Robotic Arm",
      description: "Engineered a robotic arm with precision control using embedded systems for automated task execution.",
      technologies: ["Arduino", "C++", "Servo Control", "Embedded Systems"],
      icon: Cpu,
      category: "Hardware",
      features: [
        "Precision servo control",
        "Automated task execution",
        "Real-time feedback systems"
      ]
    },
    {
      title: "AI Code Assistant",
      description: "Built an intelligent code generation and review assistant using large language models for developer productivity enhancement.",
      technologies: ["OpenAI", "Code Analysis", "Python", "API Integration"],
      icon: Code,
      category: "Developer Tools",
      features: [
        "Intelligent code generation",
        "Automated code review",
        "Multi-language support"
      ]
    }
  ];

  const categoryColors = {
    "Generative AI": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Medical AI": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "FinTech AI": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "NLP": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Hardware": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Developer Tools": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
  };

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="font-roboto text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative AI solutions spanning healthcare, finance, and cutting-edge technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-foreground mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="tech-card group h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-tech-accent group-hover:text-primary-foreground transition-all duration-300">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <Badge className={`text-xs ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground group-hover:text-tech-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-montserrat font-semibold text-sm mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-tech-accent font-bold mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl p-6 shadow-tech">
              <div className="text-4xl animate-bounce">🚀</div>
              <div className="text-left">
                <h3 className="font-montserrat font-bold text-xl text-foreground">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground">
                  Let's collaborate on your next AI project
                </p>
              </div>
              <Button 
                className="hire-button font-montserrat font-semibold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}