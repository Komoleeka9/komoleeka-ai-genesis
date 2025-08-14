
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/df117c49-7325-4b44-863b-5677fecca738.png';
    link.download = 'Komoleeka_Gostu_Resume.png';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-border shadow-tech animate-float">
                <img
                  src="/lovable-uploads/083c3e93-45d5-4ec2-9d0f-01e23de63086.png"
                  alt="Komoleeka Gostu - Generative AI Engineer"
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-transparent via-tech-accent to-transparent opacity-20 animate-pulse-slow" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="font-montserrat font-black text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-foreground">Komoleeka</span>
                <br />
                <span className="text-gradient">Gostu</span>
              </h1>
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-tech-accent mb-6">
                Generative AI Engineer & ML Developer
              </h2>
            </div>

            <p className="font-roboto text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Specializing in <span className="text-foreground font-semibold">LLMs</span>, 
              <span className="text-foreground font-semibold"> prompt engineering</span>, 
              <span className="text-foreground font-semibold"> RAG pipelines</span>, and 
              <span className="text-foreground font-semibold"> scalable AI solutions</span>. 
              Let's build the next wave of intelligent tech together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToContact}
                className="hire-button font-montserrat font-bold text-lg px-8 py-4 rounded-xl group"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Hire Me
              </Button>
              
              <Button
                onClick={downloadResume}
                variant="outline"
                className="font-montserrat font-semibold text-lg px-8 py-4 rounded-xl border-2 hover:bg-accent transition-all duration-300"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center lg:justify-start">
              <div className="animate-bounce">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
