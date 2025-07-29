import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutUs = () => {
  const animationRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div ref={animationRef} className="opacity-0 translate-y-8 transition-all duration-700">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-12 text-center">
                <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  About Nexus One
                </h1>
                <div className="space-y-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                  <p>
                    Welcome to Nexus One, where competitive gaming meets excellence. We are a professional esports organization dedicated to fostering talent and pushing the boundaries of competitive gaming.
                  </p>
                  <p>
                    Our team consists of skilled players, content creators, and gaming enthusiasts who share a passion for achieving greatness in the digital arena. From strategic gameplay to community building, we strive to create an environment where talent can flourish.
                  </p>
                  <p>
                    Join us on our journey as we compete at the highest levels and build a community that celebrates the art of gaming.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;