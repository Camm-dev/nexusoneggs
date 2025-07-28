import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Youtube, Twitch, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/5d0d7753-8c0c-4492-9ac5-a539dae441ee.png" 
                alt="Nexus One" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                NEXUS ONE
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Elite Fortnite esports organization dedicated to competitive excellence and community engagement.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Twitch className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#roster" className="text-muted-foreground hover:text-primary transition-colors">Roster</a></li>
              <li><a href="#tournaments" className="text-muted-foreground hover:text-primary transition-colors">Tournaments</a></li>
              <li><a href="#news" className="text-muted-foreground hover:text-primary transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Stay updated with our latest news and tournament results.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter email" 
                className="bg-background border-border"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Nexus One Esports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;