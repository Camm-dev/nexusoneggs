import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const players = [
  {
    name: "Vortex",
    role: "Content",
    image: "/lovable-uploads/031de604-901e-42a7-b8bd-7ae97e604340.png",
    link: ""
  },
  {
    name: "Velo",
    role: "Content",
    image: "/lovable-uploads/979c201e-47e9-4b86-a368-ad2c7046ae66.png",
    link: ""
  },
  {
    name: "Razer",
    role: "Content",
    image: "/lovable-uploads/096b124d-98e0-411d-b852-d3811fb237cb.png",
    link: ""
  },
  {
    name: "Jaxy",
    role: "Content",
    image: "/lovable-uploads/6e81e7bf-0bd5-463f-bfee-b850321b74a4.png",
    link: ""
  },
  {
    name: "Servix",
    role: "Comp",
    image: "/lovable-uploads/a0565c91-4fae-4e7b-ab58-b1f3c0cfbb84.png",
    link: ""
  },
  {
    name: "Eddie",
    role: "Comp",
    image: "/lovable-uploads/e3ff9613-a269-45d8-99c5-159486f473f3.png",
    link: ""
  },
  {
    name: "Rex",
    role: "Comp",
    image: "/lovable-uploads/4c93458b-3857-4514-92f1-ef4207792299.png",
    link: ""
  },
  {
    name: "Zen",
    role: "Comp",
    image: "/lovable-uploads/1f785129-cd35-43a2-a5f3-7e01a1463d76.png",
    link: ""
  },
  {
    name: "Bxck",
    role: "Editor",
    image: "/lovable-uploads/aba469e0-ca55-493c-a9f0-9232bc388f0b.png",
    link: ""
  },
  {
    name: "Zero",
    role: "Editor",
    image: "/lovable-uploads/aba469e0-ca55-493c-a9f0-9232bc388f0b.png",
    link: ""
  }
];

const RosterPage = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 bg-black pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
              Our Roster
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Meet the elite players who represent Nexus One
            </p>
          </div>
          
          <div ref={scrollRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
            {players.map((player, index) => {
              const CardWrapper = player.link ? 'a' : 'div';
              const cardProps = player.link 
                ? { 
                    href: player.link, 
                    target: "_blank", 
                    rel: "noopener noreferrer",
                    className: "block cursor-pointer"
                  }
                : {};
              
              return (
                <CardWrapper key={index} {...cardProps}>
                  <Card className="bg-black border-primary border-[1px] shadow-lg transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-6">
                        <img 
                          src={player.image} 
                          alt={player.name}
                          className="w-24 h-24 mx-auto rounded-full border-4 border-primary group-hover:border-accent transition-colors object-cover"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <Badge variant="secondary" className="bg-primary text-primary-foreground">
                            {player.role}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {player.name}
                      </h3>
                    </CardContent>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RosterPage;