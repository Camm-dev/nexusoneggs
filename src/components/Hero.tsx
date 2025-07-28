import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="mb-8 animate-scale-in">
          <img 
            src="/lovable-uploads/5d0d7753-8c0c-4492-9ac5-a539dae441ee.png" 
            alt="Nexus One" 
            className="h-32 w-32 mx-auto mb-6 animate-float [filter:drop-shadow(0_0_0_transparent)]"
            style={{ background: 'transparent' }}
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
          NEXUS ONE
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          Elite Fortnite Esports Organization
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow">
            View Roster
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
            Watch Highlights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;