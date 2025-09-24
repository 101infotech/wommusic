import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shirt, Package, TrendingDown } from 'lucide-react';
import { merchPackages } from '@/content/packages';
import { usePlanBuilder } from '@/hooks/use-plan-builder';

const MerchPackages = () => {
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({});
  const { addItem } = usePlanBuilder();

  const handleQuantityChange = (packageId: string, qtyIndex: number) => {
    setSelectedQuantities(prev => ({
      ...prev,
      [packageId]: qtyIndex
    }));
  };

  const addMerchToCart = (pkg: any, qtyIndex: number) => {
    const selectedQty = pkg.quantities[qtyIndex];
    const merchItem = {
      id: `${pkg.id}-${selectedQty.qty}`,
      name: `${pkg.name} (${selectedQty.qty} units)`,
      price: selectedQty.price,
      category: 'merch' as const,
      deliverables: [`${selectedQty.qty} high-quality ${pkg.name.toLowerCase()}`, 'Custom design printing', 'Quality guarantee'],
      quantity: 1
    };
    addItem(merchItem);
  };

  return (
    <section className="py-24 relative w-screen">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <Shirt className="w-4 h-4" />
            Merchandise Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Merch That <span className="gradient-text">Moves</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-quality merchandise that turns fans into walking billboards for your brand.
          </p>
        </div>

        {/* Merch Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 lg:px-12">
          {merchPackages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className="group hover-lift hover-glow relative overflow-hidden bg-gradient-to-br from-neon-cyan/10 to-neon-blue/10 border-border/50 backdrop-blur-sm animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue p-3 flex items-center justify-center">
                    <Shirt className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Quantity Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {pkg.quantities.map((qty, qtyIndex) => (
                    <div 
                      key={qtyIndex}
                      className="p-4 rounded-lg bg-background/30 border border-border/30 hover:border-border/50 transition-colors"
                    >
                      <div className="text-center mb-4">
                        <Badge variant="secondary" className="bg-neon-cyan/20 text-neon-cyan mb-2">
                          {qty.qty} units
                        </Badge>
                        {qtyIndex > 0 && (
                          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                            <TrendingDown className="w-3 h-3" />
                            {((pkg.quantities[0].pricePerUnit - qty.pricePerUnit) / pkg.quantities[0].pricePerUnit * 100).toFixed(0)}% savings
                          </div>
                        )}
                        <div className="text-2xl font-bold">${qty.price.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">${qty.pricePerUnit}/unit</div>
                      </div>
                      
                      <div className="space-y-3">
                        <Select
                          value={selectedQuantities[pkg.id] === qtyIndex ? qtyIndex.toString() : ''}
                          onValueChange={(value) => handleQuantityChange(pkg.id, parseInt(value))}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={qtyIndex.toString()}>
                              {qty.qty} units
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <Button 
                          onClick={() => addMerchToCart(pkg, qtyIndex)}
                          className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-purple transition-all duration-300"
                        >
                          Add to Plan
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Options */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="p-8 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-2xl border border-border/50 backdrop-blur-sm">
            <Package className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
            <h3 className="text-2xl font-bold mb-4">
              Need Other Items?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We also offer headwear, jerseys, hoodies, and other custom merchandise. 
              All items are available with your custom designs and branding.
            </p>
            <Button 
              size="lg"
              className="pill-button-primary"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchPackages;