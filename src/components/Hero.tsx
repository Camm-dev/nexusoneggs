import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Flowing liquid background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-flow rounded-full blur-3xl animate-flow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-flow rounded-full blur-3xl animate-flow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-flow rounded-full blur-3xl animate-flow" style={{animationDelay: '10s'}}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-secondary/40" />
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="mb-8 animate-scale-in">
          <img 
            src="/lovable-uploads/249f2c20-f50c-402a-b275-55161aa91266.png" 
            alt="Nexus One" 
            className="h-96 w-96 mx-auto mb-8"
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
          <a href="#roster">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow">
              View Roster
            </Button>
          </a>
          <a href="https://www.tiktok.com/@nexus.one.esports?lang=en" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
              Watch Highlights
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;