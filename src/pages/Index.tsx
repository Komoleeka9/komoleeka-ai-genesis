import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Certifications />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
