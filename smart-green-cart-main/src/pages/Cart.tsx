import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import avocadosImg from "@/assets/avocados.jpg";
import eggsImg from "@/assets/eggs.jpg";
import sourdoughImg from "@/assets/sourdough.jpg";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Organic Avocados", price: 4.99, quantity: 2, image: avocadosImg },
    { id: 2, name: "Free-Range Eggs", price: 3.75, quantity: 1, image: eggsImg },
    { id: 3, name: "Artisan Sourdough", price: 5.50, quantity: 1, image: sourdoughImg },
  ]);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = 2.25;
  const total = subtotal - savings;

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Shopping Cart</h1>
          <p className="text-xl text-muted-foreground">
            Review your items and proceed to checkout
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4 bg-gradient-card shadow-card">
                <div className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-primary font-bold">${item.price.toFixed(2)} each</p>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 border border-border rounded-lg">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div>
            <Card className="p-6 bg-gradient-card shadow-card sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-savings font-medium">
                  <span>Savings</span>
                  <span>-${savings.toFixed(2)}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full mb-4" size="lg">
                Proceed to Checkout
              </Button>
              
              <div className="bg-gradient-eco border border-primary/20 rounded-lg p-4 text-center">
                <p className="text-sm font-medium mb-1">Eco Score</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Your cart has a low carbon footprint!
                </p>
                <div className="inline-block bg-eco-excellent text-white px-3 py-1 rounded-md text-lg font-bold">
                  A+
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
