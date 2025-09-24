import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Music, Disc3, Album, Clapperboard, Zap, Check, Star, Plus } from 'lucide-react';
import { releasePackages } from '@/content/packages';
import { usePlanBuilder } from '@/hooks/use-plan-builder';

const ReleasePackages = () => {
  const [activeTab, setActiveTab] = useState<'cards' | 'comparison'>('cards');
  const { addItem } = usePlanBuilder();

  const getPackageIcon = (type: string) => {
    switch (type) {
      case 'single': return Music;
      case 'ep': return Disc3;
      case 'album': return Album;
      case 'visual': return Clapperboard;
      default: return Music;
    }
  };

  const getPackageGradient = (type: string) => {
    switch (type) {
      case 'single': return 'from-neon-blue/10 to-neon-purple/10';
      case 'ep': return 'from-neon-purple/10 to-neon-pink/10';
      case 'album': return 'from-neon-pink/10 to-neon-cyan/10';
      case 'visual': return 'from-neon-cyan/10 to-neon-blue/10';
      default: return 'from-neon-blue/10 to-neon-purple/10';
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <Zap className="w-4 h-4" />
            Release Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Singles to <span className="gradient-text">Full Albums</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional packages designed to elevate your music and maximize your reach across all platforms.
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted/50 p-1 rounded-full backdrop-blur-sm border border-border/50">
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                activeTab === 'cards'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Package Cards
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                activeTab === 'comparison'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Compare All
            </button>
          </div>
        </div>

        {activeTab === 'cards' ? (
          /* Package Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releasePackages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`group hover-lift hover-glow relative overflow-hidden bg-gradient-to-br ${getPackageGradient(pkg.type)} border-border/50 backdrop-blur-sm animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-gradient-neon text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-2 flex items-center justify-center">
                      {React.createElement(getPackageIcon(pkg.type), { className: "w-4 h-4 text-white" })}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      {pkg.songCount && (
                        <p className="text-sm text-muted-foreground">{pkg.songCount} songs</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${pkg.price.toLocaleString()}</span>
                    {pkg.description && (
                      <span className="text-sm text-muted-foreground">
                        {pkg.description}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pb-6">
                  <div className="space-y-3">
                    {pkg.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 gap-3">
                  <Button 
                    onClick={() => addItem(pkg)}
                    className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300"
                  >
                    Add to Plan
                  </Button>
                  <Button variant="outline" className="border-border/50">
                    Book Call
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          /* Comparison Table */
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-6 font-semibold">Package</th>
                    <th className="text-left p-6 font-semibold">Price</th>
                    <th className="text-left p-6 font-semibold">Songs</th>
                    <th className="text-left p-6 font-semibold">Graphics</th>
                    <th className="text-left p-6 font-semibold">Videos</th>
                    <th className="text-left p-6 font-semibold">Extras</th>
                    <th className="text-right p-6 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {releasePackages.map((pkg, index) => (
                    <tr 
                      key={pkg.id} 
                      className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-1 flex items-center justify-center">
                            {React.createElement(getPackageIcon(pkg.type), { className: "w-3 h-3 text-white" })}
                          </div>
                          <div>
                            <div className="font-medium">{pkg.name}</div>
                            {pkg.featured && (
                              <Badge variant="secondary" className="text-xs">Popular</Badge>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-6 font-semibold text-lg">${pkg.price.toLocaleString()}</td>
                      <td className="p-6">{pkg.songCount || '1'}</td>
                      <td className="p-6">
                        {pkg.deliverables.filter(d => d.toLowerCase().includes('graphic')).length || '-'}
                      </td>
                      <td className="p-6">
                        {pkg.deliverables.filter(d => d.toLowerCase().includes('video') || d.toLowerCase().includes('reel')).length || '-'}
                      </td>
                      <td className="p-6">
                        <div className="text-sm text-muted-foreground">
                          {pkg.deliverables.filter(d => 
                            !d.toLowerCase().includes('graphic') && 
                            !d.toLowerCase().includes('video') && 
                            !d.toLowerCase().includes('reel')
                          ).slice(0, 2).join(', ')}
                        </div>
                      </td>
                      <td className="p-6 text-right">
                        <Button 
                          size="sm"
                          onClick={() => addItem(pkg)}
                          className="bg-gradient-to-r from-neon-blue to-neon-purple"
                        >
                          Add to Plan
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReleasePackages;