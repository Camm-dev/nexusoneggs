import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      <div className="relative z-10 text-center max-w-4xl px-4 pt-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
          NEXUS ONE
        </h1>
        
        <div className="mb-8 animate-scale-in">
          <img 
            src="/lovable-uploads/9e7cf861-bcc6-4367-84d0-b0c5f37c9a42.png" 
            alt="Nexus One Jersey" 
            className="h-[400px] w-[400px] mx-auto object-contain"
            style={{ background: 'transparent' }}
          />
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          Elite Fortnite Esports Organization
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <a href="/roster">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-glow border-2 border-primary">
              View Roster
            </Button>
          </a>
          <a href="https://www.tiktok.com/@nexus.one.esports?lang=en" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="bg-black border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-6 text-xl font-bold transition-all duration-300 hover:scale-105">
              Watch Highlights
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;