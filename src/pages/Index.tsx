import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Roster from "@/components/Roster";
import Tournaments from "@/components/Tournaments";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Roster />
      <Tournaments />
      <News />
      <Footer />
    </div>
  );
};

export default Index;