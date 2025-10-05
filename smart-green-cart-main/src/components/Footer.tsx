import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">FreshMart</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your premium online grocery destination for smart, sustainable shopping.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/cart" className="hover:text-primary transition-colors">Cart</Link></li>
              <li><Link to="/signin" className="hover:text-primary transition-colors">Sign In</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Budget Tracking</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Meal Planning</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Subscription Boxes</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Rewards Program</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@freshmart.com</li>
              <li>(555) 123-4567</li>
              <li>123 Fresh St, Green City</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2023 FreshMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
