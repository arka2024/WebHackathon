import { ShoppingCart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  carbonImpact: string;
  ecoGrade: string;
}

const getEcoGradeColor = (grade: string) => {
  switch (grade) {
    case 'A+':
      return 'bg-eco-excellent';
    case 'A':
      return 'bg-eco-good';
    case 'B':
      return 'bg-eco-fair';
    case 'C':
      return 'bg-eco-poor';
    default:
      return 'bg-eco-good';
  }
};

const ProductCard = ({ name, price, image, carbonImpact, ecoGrade }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-muted/30">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-2xl font-bold text-primary">{price}</p>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Leaf className="h-4 w-4 text-primary" />
            <span>{carbonImpact}</span>
          </div>
          <div className={`px-2 py-1 rounded-md text-xs font-semibold text-white ${getEcoGradeColor(ecoGrade)}`}>
            {ecoGrade}
          </div>
        </div>
        
        <Button className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
