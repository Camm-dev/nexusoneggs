import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    id: 1,
    name: "Nexus One Esports Jersey",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Apparel"
  },
  {
    id: 2,
    name: "Gaming Arm Sleeve",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Professional Gaming Mousepad",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Gaming Gear"
  },
  {
    id: 4,
    name: "Nexus One Hoodie",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Apparel"
  }
];

const Shop = () => {
  const animationRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div ref={animationRef} className="opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Nexus One Shop
              </h1>
              <p className="text-lg text-muted-foreground">
                Get your official Nexus One gear and gaming accessories
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;