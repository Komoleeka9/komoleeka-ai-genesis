import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { TypewriterText } from "./TypewriterText";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/df117c49-7325-4b44-863b-5677fecca738.png';
    link.download = 'Komoleeka_Gostu_Resume.png';
    link.click();
  };

  const roles = [
    "GenAI Operations Specialist",
    "Prompt Engineer",
    "AI Product Enthusiast",
    "LLM Application Builder",
    "RAG Pipeline Developer",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tech-accent/5 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-foreground/5 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          <div className="text-center max-w-4xl">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-montserrat font-black text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
                <motion.span
                  className="text-foreground inline-block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Komoleeka
                </motion.span>
                <br />
                <motion.span
                  className="text-gradient inline-block"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Gostu
                </motion.span>
              </h1>
              <motion.h2
                className="font-montserrat font-bold text-2xl md:text-3xl text-tech-accent mb-6 min-h-[2.5rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <TypewriterText texts={roles} className="text-foreground" />
              </motion.h2>
            </motion.div>

            <motion.p
              className="font-roboto text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl leading-relaxed mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              B.Tech CSE graduate with a{" "}
              <span className="text-foreground font-semibold">Minor in AI & ML</span> and hands-on experience
              building{" "}
              <span className="text-foreground font-semibold">RAG pipelines</span>,{" "}
              <span className="text-foreground font-semibold">LLM applications</span>, and{" "}
              <span className="text-foreground font-semibold">AI-powered tools</span>.
              Immediate joiner — open to GenAI ops, AI product, and prompt engineering roles.
            </motion.p>

            <motion.div
              className="flex justify-center gap-3 mb-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              {["Databricks GenAI Certified", "Azure AI-900", "16+ Certifications", "Immediate Joiner"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full border border-border bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={scrollToContact}
                    className="hire-button font-montserrat font-bold text-lg px-8 py-4 rounded-xl group"
                    size="lg"
                  >
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Hire Me
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={downloadResume}
                    variant="outline"
                    className="font-montserrat font-semibold text-lg px-8 py-4 rounded-xl border-2 hover:bg-accent transition-all duration-300"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
