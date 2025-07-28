import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/5d0d7753-8c0c-4492-9ac5-a539dae441ee.png" 
            alt="Nexus One Logo" 
            className="h-8 w-8"
          />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            NEXUS ONE
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#roster" className="text-foreground hover:text-primary transition-colors">
            Roster
          </a>
          <a href="#tournaments" className="text-foreground hover:text-primary transition-colors">
            Tournaments
          </a>
          <a href="#news" className="text-foreground hover:text-primary transition-colors">
            News
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Join Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;