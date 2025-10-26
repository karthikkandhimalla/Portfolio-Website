import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            John Doe
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Full Stack Developer & Designer
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, functional web experiences that solve real problems. 
          Specializing in modern web technologies and user-centered design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="shadow-medium hover:shadow-lg transition-all"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="shadow-soft hover:shadow-medium transition-all"
          >
            Get In Touch
          </Button>
        </div>

        <div className="pt-12">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
