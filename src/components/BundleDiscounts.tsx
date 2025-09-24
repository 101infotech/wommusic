import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Package, Zap, Crown } from 'lucide-react';
import { bundleDiscounts } from '@/content/packages';

const BundleDiscounts = () => {
  const getDiscountIcon = (discount: number) => {
    if (discount >= 30) return Crown;
    if (discount >= 20) return Zap;
    if (discount >= 10) return Package;
    return Sparkles;
  };

  const getDiscountGradient = (discount: number) => {
    if (discount >= 30) return 'from-neon-pink/20 to-neon-cyan/20';
    if (discount >= 20) return 'from-neon-purple/20 to-neon-pink/20';
    if (discount >= 10) return 'from-neon-blue/20 to-neon-purple/20';
    return 'from-neon-cyan/20 to-neon-blue/20';
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <Sparkles className="w-4 h-4" />
            Bundle Discounts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Save More with <span className="gradient-text">Smart Bundles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combine packages and save big. Our bundle discounts are automatically applied when you add qualifying items to your plan.
          </p>
        </div>

        {/* Bundle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundleDiscounts.map((bundle, index) => {
            const Icon = getDiscountIcon(bundle.discount);
            
            return (
              <Card 
                key={bundle.id}
                className={`group hover-lift hover-glow relative overflow-hidden bg-gradient-to-br ${getDiscountGradient(bundle.discount)} border-border/50 backdrop-blur-sm animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-4 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <Badge 
                      className="mb-4 bg-gradient-neon text-white text-lg px-4 py-2"
                    >
                      {bundle.discount}% OFF
                    </Badge>
                    
                    <h3 className="text-xl font-bold mb-3">{bundle.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{bundle.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Automatically applied when you add:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {bundle.conditions.map((condition, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs border-border/50"
                          >
                            {condition.replace('-', ' ').replace('_', ' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="mt-16 p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            How Bundle Savings Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-3 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Add Qualifying Items</h4>
              <p className="text-sm text-muted-foreground">Select packages that qualify for bundle discounts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink p-3 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Automatic Detection</h4>
              <p className="text-sm text-muted-foreground">We automatically detect and apply the best discount</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan p-3 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Instant Savings</h4>
              <p className="text-sm text-muted-foreground">See your savings reflected immediately in your plan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleDiscounts;