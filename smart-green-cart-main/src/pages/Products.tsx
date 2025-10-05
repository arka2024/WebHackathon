import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import sourdoughImg from "@/assets/sourdough.jpg";
import eggsImg from "@/assets/eggs.jpg";
import salmonImg from "@/assets/salmon.jpg";
import beefImg from "@/assets/beef.jpg";
import yogurtImg from "@/assets/yogurt.jpg";
import avocadosImg from "@/assets/avocados.jpg";
import tomatoesImg from "@/assets/tomatoes.jpg";
import blueberriesImg from "@/assets/blueberries.jpg";

const products = [
  { id: 1, name: "Artisan Sourdough", price: "$5.50", image: sourdoughImg, carbonImpact: "Low Carbon", ecoGrade: "A+" },
  { id: 2, name: "Free-Range Eggs", price: "$3.75", image: eggsImg, carbonImpact: "Low Carbon", ecoGrade: "A+" },
  { id: 3, name: "Fresh Salmon", price: "$12.99/lb", image: salmonImg, carbonImpact: "Medium Carbon", ecoGrade: "B" },
  { id: 4, name: "Grass-Fed Beef", price: "$14.99/lb", image: beefImg, carbonImpact: "High Carbon", ecoGrade: "C" },
  { id: 5, name: "Greek Yogurt", price: "$2.99", image: yogurtImg, carbonImpact: "Low Carbon", ecoGrade: "A" },
  { id: 6, name: "Organic Avocados", price: "$4.99", image: avocadosImg, carbonImpact: "Low Carbon", ecoGrade: "A+" },
  { id: 7, name: "Organic Tomatoes", price: "$3.49/lb", image: tomatoesImg, carbonImpact: "Low Carbon", ecoGrade: "A" },
  { id: 8, name: "Wild Blueberries", price: "$5.99", image: blueberriesImg, carbonImpact: "Low Carbon", ecoGrade: "A+" },
];

const Products = () => {
  const [sortBy, setSortBy] = useState("name");
  const [category, setCategory] = useState("all");

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            Fresh, Sustainable Groceries, Right to Your Door
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline" className="gap-2">
            Filter & Sort
          </Button>
          
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="produce">Produce</SelectItem>
              <SelectItem value="dairy">Dairy</SelectItem>
              <SelectItem value="bakery">Bakery</SelectItem>
              <SelectItem value="meat">Meat & Seafood</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="eco">Eco Score</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
