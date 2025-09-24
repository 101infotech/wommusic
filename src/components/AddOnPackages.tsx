import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Plus, Info, Target, Megaphone, Video, Share2 } from 'lucide-react';
import { addonPackages } from '@/content/packages';
import { usePlanBuilder } from '@/hooks/use-plan-builder';

const AddOnPackages = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addItem } = usePlanBuilder();

  const categories = [
    { id: 'all', name: 'All Add-Ons', icon: Plus, count: addonPackages.length },
    { id: 'strategy', name: 'Strategy & Branding', icon: Target, count: 3 },
    { id: 'marketing', name: 'Marketing Collateral', icon: Megaphone, count: 3 },
    { id: 'video', name: 'Video Enhancements', icon: Video, count: 3 },
    { id: 'social', name: 'Social Add-Ons', icon: Share2, count: 3 }
  ];

  const getFilteredPackages = () => {
    if (activeCategory === 'all') return addonPackages;
    
    const categoryMap: Record<string, string[]> = {
      strategy: ['creative-direction', 'artist-brand-kit', 'campaign-rollout-strategy'],
      marketing: ['epk-design', 'ad-creatives', 'lyric-graphics'],
      video: ['spotify-canvas', 'lyric-video', 'trailer-teasers'],
      social: ['posting-calendar', 'hashtag-caption-pack', 'profile-optimization']
    };

    return addonPackages.filter(pkg => categoryMap[activeCategory]?.includes(pkg.id));
  };

  const getCategoryGradient = (categoryId: string) => {
    const gradients: Record<string, string> = {
      strategy: 'from-neon-blue/10 to-neon-purple/10',
      marketing: 'from-neon-purple/10 to-neon-pink/10',
      video: 'from-neon-pink/10 to-neon-cyan/10',
      social: 'from-neon-cyan/10 to-neon-blue/10',
      all: 'from-neon-blue/5 to-neon-purple/5'
    };
    return gradients[categoryId] || gradients.all;
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <Plus className="w-4 h-4" />
            À-la-Carte Add-Ons
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enhance Your <span className="gradient-text">Campaign</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Customize your package with professional add-ons designed to maximize your music's impact and reach.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                    : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Add-On Grid */}
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredPackages().map((addon, index) => (
              <Card 
                key={addon.id}
                className={`group hover-lift hover-glow relative overflow-hidden bg-gradient-to-br ${getCategoryGradient(activeCategory)} border-border/50 backdrop-blur-sm animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight pr-2">
                      {addon.name}
                    </CardTitle>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-60 hover:opacity-100">
                          <Info className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="max-w-xs">
                        <div className="space-y-2">
                          <p className="font-medium">Includes:</p>
                          <ul className="text-sm space-y-1">
                            {addon.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-neon-blue">•</span>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-bold">${addon.price}</span>
                  </div>
                </CardHeader>

                <CardContent className="pb-6">
                  <div className="space-y-2">
                    {addon.deliverables.slice(0, 2).map((deliverable, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">
                        • {deliverable}
                      </div>
                    ))}
                    {addon.deliverables.length > 2 && (
                      <div className="text-sm text-muted-foreground">
                        + {addon.deliverables.length - 2} more...
                      </div>
                    )}
                  </div>
                </CardContent>

                <div className="p-6 pt-0">
                  <Button 
                    onClick={() => addItem(addon)}
                    className="w-full bg-gradient-to-r from-muted to-muted/50 hover:from-neon-blue hover:to-neon-purple hover:text-white transition-all duration-300 group-hover:shadow-lg"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TooltipProvider>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="p-8 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-2xl border border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Need Something <span className="gradient-text">Custom?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can create bespoke solutions tailored to your unique vision and goals.
            </p>
            <Button 
              size="lg"
              className="pill-button-primary"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddOnPackages;