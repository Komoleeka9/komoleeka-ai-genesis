import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Trophy, Star, Code, Database } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "LifeSkills Programme by Barclays",
      issuer: "Barclays",
      year: "2023",
      type: "Professional Development",
      description: "Completed comprehensive professional development program focusing on essential workplace skills",
      icon: Trophy,
      verified: true
    },
    {
      title: "Top 20 Finalist - Amdocs W Code 2025",
      issuer: "Amdocs",
      year: "2025",
      type: "Competition",
      description: "Selected as top 20 finalist in prestigious tech competition, invited to special tech event",
      icon: Star,
      verified: true
    },
    {
      title: "Databricks Generative AI Fundamentals",
      issuer: "Databricks Academy",
      year: "2024",
      type: "AI/ML",
      description: "Comprehensive training on generative AI concepts, LLMs, and practical applications",
      icon: Database,
      verified: true
    },
    {
      title: "ML and Deep Learning Bootcamp in Python",
      issuer: "Udemy",
      year: "2023",
      type: "AI/ML",
      description: "Intensive bootcamp covering machine learning algorithms and deep learning frameworks",
      icon: Code,
      verified: true
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      year: "2023",
      type: "Database",
      description: "Demonstrated proficiency in intermediate SQL concepts and database management",
      icon: Database,
      verified: true
    }
  ];

  const achievements = [
    {
      title: "Research Publications",
      count: "3+",
      description: "Published research papers in AI/ML domains"
    },
    {
      title: "Competition Wins",
      count: "5+",
      description: "Tech competitions and hackathons"
    },
    {
      title: "Projects Deployed",
      count: "10+",
      description: "Production-ready AI applications"
    },
    {
      title: "Technologies Mastered",
      count: "25+",
      description: "Programming languages and frameworks"
    }
  ];

  const typeColors = {
    "Professional Development": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Competition": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "AI/ML": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Database": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
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
              Continuous learning and recognition in cutting-edge technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-foreground mx-auto rounded-full mt-6" />
          </div>

          {/* Achievements Stats */}
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
                      <Badge className={`text-xs ${typeColors[cert.type as keyof typeof typeColors]}`}>
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

                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn w-full"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Recognition */}
          <div className="text-center">
            <Card className="tech-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-tech-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">
                    More Certifications Available
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For a complete list of certifications and detailed portfolio, visit my Google Drive certification portfolio.
                  </p>
                </div>
                
                <Button 
                  className="hire-button font-montserrat font-semibold"
                  onClick={() => window.open("https://drive.google.com/drive/folders/1QRLC_pbXIAOmnxEDZO_lhzA-kactFq_M?usp=sharing", "_blank")}
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