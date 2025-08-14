import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Research & Development Intern (AI/ML)",
      company: "Lisys Technocraft LLP",
      location: "Pune",
      duration: "June 2024 - Sep 2024",
      type: "Internship",
      achievements: [
        "Implemented deep learning models (ResNet-50, EfficientNetV2) for precise medical image analysis",
        "Developed YOLO-based models for detecting medical conditions with high accuracy",
        "Conducted comprehensive model evaluation and performance optimization"
      ],
      skills: ["Deep Learning", "Computer Vision", "Medical AI", "YOLO", "ResNet", "EfficientNet"]
    },
    {
      title: "Research & Development Intern (Machine Learning)",
      company: "D.Y. Patil International University",
      location: "Pune",
      duration: "May 2023 - Aug 2023",
      type: "Research",
      achievements: [
        "Developed predictive ML models for drug efficacy assessment",
        "Researched AI applications in neurological disorders and breast cancer treatments",
        "Applied advanced data preprocessing and exploratory data analysis techniques"
      ],
      skills: ["Machine Learning", "Medical Research", "Data Analysis", "Python", "Healthcare AI"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6 text-foreground">
              Professional Experience
            </h2>
            <p className="font-roboto text-xl text-muted-foreground">
              Building AI solutions in research and industry settings
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-foreground mx-auto rounded-full mt-6" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-tech-accent rounded-full border-4 border-background shadow-lg animate-pulse-slow" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                    <Card className="tech-card">
                      <CardHeader>
                        <div className="flex items-start gap-2 mb-2">
                          <Badge variant="outline" className="text-xs font-semibold">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <CardTitle className="font-montserrat font-bold text-xl text-foreground mb-2">
                          {exp.title}
                        </CardTitle>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-tech-accent font-bold mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                            {exp.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-center mb-12 text-foreground">
              Education
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="tech-card">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="font-montserrat font-bold text-lg mb-2 text-foreground">
                      D.Y. Patil International University
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      Bachelor of Technology (B.Tech) in Computer Science and Engineering
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Minor: Artificial Intelligence and Machine Learning
                    </p>
                    <Badge className="bg-tech-accent text-primary-foreground">
                      2021 - 2025 (Expected)
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-card">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="font-montserrat font-bold text-lg mb-2 text-foreground">
                      Sanjay Ghodawat IIT and Medical Academy
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      Maharashtra State Board
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Percentage: 82%
                    </p>
                    <Badge className="bg-tech-accent text-primary-foreground">
                      2020 - 2021
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}