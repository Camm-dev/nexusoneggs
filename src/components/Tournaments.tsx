import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Trophy, DollarSign } from "lucide-react";

const tournaments = [
  {
    name: "FNCS Grand Finals",
    date: "March 15, 2024",
    placement: "1st",
    prize: "$75,000",
    status: "completed"
  },
  {
    name: "DreamHack Championship",
    date: "February 22, 2024", 
    placement: "3rd",
    prize: "$25,000",
    status: "completed"
  },
  {
    name: "World Cup Qualifiers",
    date: "April 8, 2024",
    placement: "2nd",
    prize: "$50,000",
    status: "completed"
  },
  {
    name: "Spring Invitational",
    date: "May 20, 2024",
    placement: "TBD",
    prize: "$100,000",
    status: "upcoming"
  }
];

const Tournaments = () => {
  return (
    <section id="tournaments" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Tournaments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our competitive journey and achievements in major Fortnite tournaments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tournaments.map((tournament, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {tournament.name}
                  </CardTitle>
                  <Badge 
                    variant={tournament.status === "completed" ? "default" : "secondary"}
                    className={tournament.status === "completed" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {tournament.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>{tournament.date}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-primary">{tournament.placement} Place</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-primary">{tournament.prize}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;