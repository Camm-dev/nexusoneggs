import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="mb-8 animate-scale-in">
          <img 
            src="/lovable-uploads/249f2c20-f50c-402a-b275-55161aa91266.png" 
            alt="Nexus One" 
            className="h-[576px] w-[576px] mx-auto mb-8"
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
            <Button size="lg" variant="outline" className="bg-black border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
              Watch Highlights
            </Button>
          </a>
        </div>
        
        <div className="mt-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <a href="https://discord.gg/S3wjMaJa8c" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="bg-black border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
              Join Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;