import { Linkedin, Github, FileText, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/komoleekagostu-b82247235/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      url: "https://github.com/komoleekag",
      label: "GitHub"
    },
    {
      icon: FileText,
      url: "https://medium.com/@komoleekagostu",
      label: "Medium"
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-1">
                Komoleeka Gostu
              </h3>
              <p className="text-muted-foreground text-sm">
                GenAI Ops · Prompt Engineering · AI Product
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Pune, India — Immediate Joiner
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-tech-accent hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Komoleeka Gostu
              </p>
              <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1 mt-1">
                Built with <Heart className="h-4 w-4 text-red-500" /> by Komoleeka Gostu
              </p>
              <p className="text-tech-accent text-xs mt-1 font-semibold">
                Powered by GenAI Curiosity
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Open to GenAI ops, AI product, prompt engineering & data analytics roles · India & International
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
