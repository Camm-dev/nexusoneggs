import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 animate-fade-in">
          <img 
            src="/lovable-uploads/5d0d7753-8c0c-4492-9ac5-a539dae441ee.png" 
            alt="Nexus One Logo" 
            className="h-8 w-8 animate-float"
          />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            NEXUS ONE
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 animate-fade-in">
          <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Home
          </a>
          <a href="#roster" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Roster
          </a>
        </div>
        
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 animate-fade-in">
          Join Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;