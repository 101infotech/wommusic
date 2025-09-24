import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Globe, Crown, Rocket } from 'lucide-react';
import { websitePackages } from '@/content/packages';
import { usePlanBuilder } from '@/hooks/use-plan-builder';

const WebsitePackages = () => {
  const { addItem } = usePlanBuilder();

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'starter': return Globe;
      case 'pro': return Crown;
      case 'premium': return Rocket;
      default: return Globe;
    }
  };

  const getTierGradient = (tier: string) => {
    switch (tier) {
      case 'starter': return 'from-neon-blue/10 to-neon-purple/10';
      case 'pro': return 'from-neon-purple/10 to-neon-pink/10';
      case 'premium': return 'from-neon-pink/10 to-neon-cyan/10';
      default: return 'from-neon-blue/10 to-neon-purple/10';
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <Globe className="w-4 h-4" />
            Artist Websites
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Digital <span className="gradient-text">Home Base</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional websites that showcase your music, engage your fans, and drive your career forward.
          </p>
        </div>

        {/* Website Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {websitePackages.map((pkg, index) => {
            const Icon = getTierIcon(pkg.tier);
            const isPopular = pkg.tier === 'pro';
            
            return (
              <Card 
                key={pkg.id}
                className={`group hover-lift hover-glow relative overflow-hidden bg-gradient-to-br ${getTierGradient(pkg.tier)} border-border/50 backdrop-blur-sm animate-slide-in-left ${
                  isPopular ? 'ring-2 ring-neon-purple/50 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-gradient-neon text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold mb-4">
                    ${pkg.price.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Perfect for {pkg.tier === 'starter' ? 'new artists' : pkg.tier === 'pro' ? 'growing artists' : 'established artists'}
                  </p>
                </CardHeader>

                <CardContent className="pb-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button 
                    onClick={() => addItem(pkg)}
                    className={`w-full ${
                      isPopular 
                        ? 'bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-cyan' 
                        : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink'
                    } transition-all duration-300`}
                  >
                    Choose {pkg.tier.charAt(0).toUpperCase() + pkg.tier.slice(1)}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="mt-16 p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            All Websites Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-3 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">Optimized for speed and performance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink p-3 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Mobile First</h4>
              <p className="text-sm text-muted-foreground">Perfect on all devices</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan p-3 flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">SEO Ready</h4>
              <p className="text-sm text-muted-foreground">Built to rank on search engines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitePackages;