import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Trophy, Star, Database, Cloud, Code, BookOpen } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Generative AI Engineer Associate",
      issuer: "Databricks Academy",
      year: "2024",
      type: "AI/ML",
      description: "Industry-recognised certification covering LLMs, RAG, fine-tuning, and GenAI application development on the Databricks platform.",
      icon: Database,
      verified: true
    },
    {
      title: "Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      year: "2024",
      type: "Cloud AI",
      description: "Microsoft certified in Azure AI services including machine learning, computer vision, NLP, and conversational AI workloads.",
      icon: Cloud,
      verified: true
    },
    {
      title: "IBM AI Foundational",
      issuer: "IBM",
      year: "2024",
      type: "AI/ML",
      description: "Foundational certification in AI concepts, machine learning workflows, and IBM AI tools.",
      icon: BookOpen,
      verified: true
    },
    {
      title: "Google Generative AI",
      issuer: "Google",
      year: "2024",
      type: "AI/ML",
      description: "Google-certified in Generative AI fundamentals, LLM architecture, and responsible AI practices via Google Cloud Skills Boost.",
      icon: Star,
      verified: true
    },
    {
      title: "AWS Generative AI",
      issuer: "Amazon Web Services",
      year: "2024",
      type: "Cloud AI",
      description: "Certified in AWS GenAI services, prompt engineering on Bedrock, and deploying generative AI workloads on AWS.",
      icon: Cloud,
      verified: true
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      year: "2023",
      type: "Data",
      description: "Demonstrated proficiency in intermediate SQL — joins, subqueries, aggregations, and database management.",
      icon: Database,
      verified: true
    },
    {
      title: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      year: "2024",
      type: "Professional Development",
      description: "Completed McKinsey's competitive forward programme developing problem-solving, digital, and leadership skills.",
      icon: Trophy,
      verified: true
    },
    {
      title: "Top 20 Finalist — Amdocs W Code 2025",
      issuer: "Amdocs",
      year: "2025",
      type: "Competition",
      description: "Selected as a Top 20 national finalist in the Amdocs W Code 2025 tech competition with an invite to an exclusive tech event.",
      icon: Star,
      verified: true
    },
    {
      title: "ML & Deep Learning Bootcamp",
      issuer: "Udemy",
      year: "2023",
      type: "AI/ML",
      description: "Intensive bootcamp covering ML algorithms, neural networks, CNNs, and deep learning frameworks in Python.",
      icon: Code,
      verified: true
    }
  ];

  const achievements = [
    {
      title: "Certifications",
      count: "16+",
      description: "Across AI, cloud, data, and professional development"
    },
    {
      title: "GitHub Repos",
      count: "26+",
      description: "Projects, experiments & GenAI builds"
    },
    {
      title: "Languages",
      count: "3",
      description: "English, Hindi, Marathi"
    },
    {
      title: "Immediate Joiner",
      count: "✓",
      description: "Available to join now — Pune + relocation ready"
    }
  ];

  const typeColors: Record<string, string> = {
    "AI/ML": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Cloud AI": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Data": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Professional Development": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Competition": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6 text-foreground">
              Certifications & Achievements
            </h2>
            <p className="font-roboto text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning across GenAI, cloud AI, and professional development — 16+ certifications and counting
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-foreground mx-auto rounded-full mt-6" />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="tech-card text-center group">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-montserrat font-black text-tech-accent mb-2 group-hover:scale-110 transition-transform">
                    {achievement.count}
                  </div>
                  <h4 className="font-montserrat font-bold text-sm md:text-base mb-1 text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="tech-card group h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-tech-accent group-hover:text-primary-foreground transition-all duration-300">
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      {cert.verified && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Award className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <Badge className={`text-xs ${typeColors[cert.type] ?? ""}`}>
                        {cert.type}
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="font-montserrat font-bold text-lg text-foreground group-hover:text-tech-accent transition-colors mb-2">
                    {cert.title}
                  </CardTitle>

                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold">{cert.issuer}</p>
                    <p>{cert.year}</p>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {cert.description}
                  </p>

                  <Button variant="outline" size="sm" className="group/btn w-full">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Drive Portfolio CTA */}
          <div className="text-center">
            <Card className="tech-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-tech-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">
                    Full Certification Portfolio
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    View all 16+ certificates with verification links on Google Drive.
                  </p>
                </div>

                <Button
                  className="hire-button font-montserrat font-semibold"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/drive/folders/1QRLC_pbXIAOmnxEDZO_lhzA-kactFq_M?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
