import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/5d0d7753-8c0c-4492-9ac5-a539dae441ee.png" 
            alt="Nexus One" 
            className="h-24 w-24 mx-auto mb-4 filter drop-shadow-glow"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          NEXUS ONE
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Elite Fortnite Esports Organization. Dominating the battlefield with precision, strategy, and unmatched skill.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            View Roster
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
            Watch Highlights
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Tournament Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$250K+</div>
            <div className="text-sm text-muted-foreground">Prize Money</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">#3</div>
            <div className="text-sm text-muted-foreground">Global Ranking</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;