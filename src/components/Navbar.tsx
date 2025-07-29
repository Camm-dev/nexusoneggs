import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center relative">
        <div className="flex items-center space-x-2 animate-fade-in absolute left-4">
          <img 
            src="/lovable-uploads/249f2c20-f50c-402a-b275-55161aa91266.png" 
            alt="Nexus One Logo" 
            className="h-8 w-8"
            style={{ background: 'transparent' }}
          />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            NEXUS ONE
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 animate-fade-in">
          <Link to="/" className="text-primary font-bold hover:text-primary/80 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Home
          </Link>
          <a href="#roster" className="text-primary font-bold hover:text-primary/80 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Roster
          </a>
          <Link to="/about" className="text-primary font-bold hover:text-primary/80 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            About
          </Link>
          <Link to="/shop" className="text-primary font-bold hover:text-primary/80 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Shop
          </Link>
        </div>
        
        <div className="absolute right-4">
          <a href="https://discord.gg/S3wjMaJa8c" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="bg-black border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 font-bold transition-all duration-300 hover:scale-105 animate-fade-in">
              Join Us
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;