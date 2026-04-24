import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Bot, Search, Eye, BarChart, FileText } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "RAG-Based Document Q&A System",
      description:
        "Full-stack GenAI application that lets users upload documents and ask natural language questions. Built a production-grade retrieval-augmented generation pipeline with semantic search and context-aware LLM responses.",
      technologies: ["LangChain", "FAISS", "Gemini 1.5 Flash", "FastAPI", "React", "Python"],
      icon: Brain,
      category: "Generative AI",
      githubUrl: "https://github.com/komoleekag",
      features: [
        "Semantic vector search with FAISS",
        "Context-aware answers via Gemini 1.5 Flash",
        "FastAPI backend + React frontend"
      ]
    },
    {
      title: "Autonomous Research Agent",
      description:
        "Agentic AI system that autonomously browses, retrieves, and synthesises information from the web to answer complex research queries — powered by LangChain and Tavily API.",
      technologies: ["LangChain", "Tavily API", "Python", "Agentic AI", "OpenAI"],
      icon: Search,
      category: "Agentic AI",
      githubUrl: "https://github.com/komoleekag",
      features: [
        "Multi-step autonomous web search",
        "LangChain agent orchestration",
        "Synthesised, sourced summaries"
      ]
    },
    {
      title: "Medical Image Analysis (YOLOv8 + ResNet-50)",
      description:
        "Deep learning pipeline for medical condition detection using YOLOv8 object detection and ResNet-50/EfficientNetV2 classification — developed during R&D internship at Lisys Technocraft LLP.",
      technologies: ["YOLOv8", "ResNet-50", "EfficientNetV2", "TensorFlow", "Python", "OpenCV"],
      icon: Eye,
      category: "Computer Vision",
      githubUrl: "https://github.com/komoleekag",
      features: [
        "YOLO-based real-time detection",
        "ResNet-50 classification pipeline",
        "Medical domain performance benchmarking"
      ]
    },
    {
      title: "Drug Efficacy Prediction (ML Research)",
      description:
        "Predictive ML models for assessing drug efficacy in neurological disorder and breast cancer research — built during university research internship with full EDA and feature engineering pipeline.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Healthcare AI"],
      icon: BarChart,
      category: "Healthcare AI",
      githubUrl: "https://github.com/komoleekag",
      features: [
        "Multi-model comparison and evaluation",
        "Advanced EDA and feature engineering",
        "Clinical outcome prediction"
      ]
    },
    {
      title: "Translation & Speech Recognition System",
      description:
        "AI-powered multilingual speech translation system enabling real-time speech-to-speech conversion across languages using NLP and speech recognition APIs.",
      technologies: ["NLP", "Speech Recognition", "Translation API", "Python", "ML"],
      icon: FileText,
      category: "NLP",
      githubUrl: "https://github.com/komoleekag",
      features: [
        "Real-time multilingual translation",
        "Speech-to-speech pipeline",
        "Multi-language support"
      ]
    },
    {
      title: "RoboAdvisory Investment Platform",
      description:
        "Chatbot-driven investment platform that provides personalised portfolio recommendations and risk assessments using AI-driven financial analysis and conversational UI.",
      technologies: ["Python", "Chatbot", "Finance API", "Portfolio Management", "ML"],
      icon: Bot,
      category: "FinTech AI",
      githubUrl: "https://github.com/komoleekag",
      features: [
        "AI-driven portfolio recommendations",
        "Risk profile assessment",
        "Conversational investment interface"
      ]
    }
  ];

  const categoryColors: Record<string, string> = {
    "Generative AI": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Agentic AI": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    "Computer Vision": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Healthcare AI": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "NLP": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "FinTech AI": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
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
              Real-world GenAI and ML applications — from RAG pipelines to agentic systems and medical AI
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
                    <Badge className={`text-xs ${categoryColors[project.category]}`}>
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

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open("https://github.com/komoleekag", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl p-6 shadow-tech">
              <div className="text-4xl animate-bounce">🚀</div>
              <div className="text-left">
                <h3 className="font-montserrat font-bold text-xl text-foreground">
                  26+ Repositories on GitHub
                </h3>
                <p className="text-muted-foreground">
                  Explore more projects, experiments, and GenAI builds
                </p>
              </div>
              <Button
                className="hire-button font-montserrat font-semibold"
                onClick={() => window.open("https://github.com/komoleekag", "_blank")}
              >
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
