import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import player1 from "@/assets/player1.jpg";
import player2 from "@/assets/player2.jpg";
import player3 from "@/assets/player3.jpg";

const players = [
  {
    name: "Reaper",
    realName: "",
    role: "Owner",
    image: player1,
    link: "https://www.tiktok.com/@nexus.1.reaper"
  },
  {
    name: "Cloave",
    realName: "",
    role: "Co-Owner",
    image: "/lovable-uploads/e815197f-c73e-43ab-a2f2-0251e04d8c8e.png",
    link: "https://www.tiktok.com/@ho11and"
  },
  {
    name: "Spacie",
    realName: "",
    role: "Comp Player",
    image: "/lovable-uploads/d119c7d0-39c3-479a-aee4-e217c94ca56d.png",
    link: "https://www.tiktok.com/@za.spacie?"
  }
];

const Roster = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="roster" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
            Our Roster
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Meet the elite players who represent Nexus One
          </p>
        </div>
        
        <div ref={scrollRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
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
                <Card className="bg-black border-white border-[1px] shadow-lg transition-all duration-500 group hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img 
                        src={player.image} 
                        alt={player.name}
                        className="w-24 h-24 mx-auto rounded-full border-4 border-primary group-hover:border-accent transition-colors"
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
                    {player.realName && (
                      <p className="text-muted-foreground mb-6">
                        {player.realName}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roster;