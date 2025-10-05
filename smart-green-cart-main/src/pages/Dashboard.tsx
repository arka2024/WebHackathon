import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DollarSign, TrendingUp, Award, Leaf } from "lucide-react";

const spendingData = [
  { month: "Jan", amount: 450 },
  { month: "Feb", amount: 520 },
  { month: "Mar", amount: 480 },
  { month: "Apr", amount: 500 },
];

const categoryData = [
  { category: "Produce", amount: 150 },
  { category: "Dairy", amount: 100 },
  { category: "Bakery", amount: 80 },
  { category: "Meat", amount: 170 },
];

const impactData = [
  { category: "Produce", impact: 20, grade: "A+" },
  { category: "Dairy", impact: 35, grade: "A" },
  { category: "Bakery", impact: 45, grade: "B" },
  { category: "Meat", impact: 65, grade: "C" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Track Your Spending, Savings, and Sustainability Impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Spent This Month</span>
            </div>
            <p className="text-3xl font-bold">$500</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              <span className="text-sm text-muted-foreground">Monthly Budget</span>
            </div>
            <p className="text-3xl font-bold">$700</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-5 w-5 text-savings" />
              <span className="text-sm text-muted-foreground">Savings Earned</span>
            </div>
            <p className="text-3xl font-bold text-savings">$50</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <Award className="h-5 w-5 text-rewards" />
              <span className="text-sm text-muted-foreground">Rewards Points</span>
            </div>
            <p className="text-3xl font-bold text-rewards">1,200</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <Leaf className="h-5 w-5 text-eco-excellent" />
              <span className="text-sm text-muted-foreground">Overall Eco Score</span>
            </div>
            <p className="text-3xl font-bold text-eco-excellent">A</p>
          </Card>
        </div>
        
        <Card className="p-6 bg-gradient-card shadow-card mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Monthly Budget</h3>
              <span className="text-sm text-muted-foreground">$500 / $700</span>
            </div>
            <Progress value={71} className="h-3" />
            <p className="text-sm text-muted-foreground">71% of budget used</p>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-lg font-semibold mb-4">Spending Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }} 
                />
                <Line type="monotone" dataKey="amount" stroke="hsl(var(--primary))" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
          
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }} 
                />
                <Bar dataKey="amount" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
        
        <Card className="p-6 bg-gradient-card shadow-card">
          <h3 className="text-lg font-semibold mb-6">Environmental Impact by Category</h3>
          <div className="space-y-4">
            {impactData.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.category}</span>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                      item.grade === 'A+' ? 'bg-eco-excellent text-white' :
                      item.grade === 'A' ? 'bg-eco-good text-white' :
                      item.grade === 'B' ? 'bg-eco-fair text-white' :
                      'bg-eco-poor text-white'
                    }`}>
                      {item.grade}
                    </span>
                  </div>
                </div>
                <Progress value={item.impact} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
