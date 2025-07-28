import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "Nexus One Wins FNCS Grand Finals",
    excerpt: "Our team dominated the competition in an incredible display of skill and teamwork, taking home the championship title.",
    date: "March 16, 2024",
    category: "Tournament"
  },
  {
    title: "New Team House Unveiled", 
    excerpt: "We've moved into our state-of-the-art gaming facility designed to maximize performance and team synergy.",
    date: "March 10, 2024",
    category: "Team News"
  },
  {
    title: "Spring Training Camp Announcement",
    excerpt: "Intensive preparation begins for the upcoming World Cup qualifiers with our coaching staff.",
    date: "March 5, 2024",
    category: "Training"
  },
  {
    title: "Partnership with GamerGear",
    excerpt: "Exciting new sponsorship deal brings cutting-edge equipment and support to our organization.",
    date: "February 28, 2024",
    category: "Partnership"
  }
];

const News = () => {
  return (
    <section id="news" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Latest News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings from Nexus One
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-primary font-medium">{item.category}</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="p-0 text-primary hover:text-accent group/btn">
                  Read More 
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;