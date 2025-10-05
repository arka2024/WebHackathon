import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingDown, Leaf, DollarSign, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-0">
          <img 
            src={heroBanner} 
            alt="Fresh groceries" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Shop Smart, Eat Well,{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Live Sustainably
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Your premium online grocery destination for intelligent budgeting, 
                eco-conscious choices, and personalized meal planning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/products">Start Shopping</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-savings/20 p-3 rounded-lg">
                    <DollarSign className="h-5 w-5 text-savings" />
                  </div>
                  <span className="font-medium">Save up to 30%</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-rewards/20 p-3 rounded-lg">
                    <Award className="h-5 w-5 text-rewards" />
                  </div>
                  <span className="font-medium">Earn points with every purchase</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6 bg-gradient-card border-2 border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <TrendingDown className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Smart Budgeting</h3>
                    <p className="text-muted-foreground">
                      Track spending, set limits, and save more.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-2 border-secondary/20 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Leaf className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Eco-Conscious Shopping</h3>
                    <p className="text-muted-foreground">
                      See your impact, choose sustainable options.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
