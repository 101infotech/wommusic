import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Music, Disc3, Album, Clapperboard, Globe, Package, Shirt, Zap, Check, Star } from 'lucide-react';
import { releasePackages, addonPackages, websitePackages, merchPackages } from '@/content/packages';
import { usePlanBuilder } from '@/hooks/use-plan-builder';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { addItem } = usePlanBuilder();

  const getPackageIcon = (type: string, category: string) => {
    if (category === 'release') {
      switch (type) {
        case 'single': return Music;
        case 'ep': return Disc3;
        case 'album': return Album;
        case 'visual': return Clapperboard;
        default: return Music;
      }
    }
    switch (category) {
      case 'website': return Globe;
      case 'addon': return Package;
      case 'merch': return Shirt;
      default: return Package;
    }
  };

  const getPackageGradient = (type: string, category: string) => {
    if (category === 'release') {
      switch (type) {
        case 'single': return 'from-neon-blue/10 to-neon-purple/10';
        case 'ep': return 'from-neon-purple/10 to-neon-pink/10';
        case 'album': return 'from-neon-pink/10 to-neon-cyan/10';
        case 'visual': return 'from-neon-cyan/10 to-neon-blue/10';
        default: return 'from-neon-blue/10 to-neon-purple/10';
      }
    }
    switch (category) {
      case 'website': return 'from-neon-green/10 to-neon-blue/10';
      case 'addon': return 'from-neon-orange/10 to-neon-pink/10';
      case 'merch': return 'from-neon-purple/10 to-neon-cyan/10';
      default: return 'from-neon-blue/10 to-neon-purple/10';
    }
  };

  const renderPackageCard = (pkg: any, category: string) => {
    const Icon = getPackageIcon(pkg.type || category, category);
    const gradient = getPackageGradient(pkg.type || category, category);

    return (
      <Card 
        key={pkg.id} 
        className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neon-blue/10 border-border/50 bg-gradient-to-br ${gradient} backdrop-blur-sm`}
      >
        {pkg.featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-none">
              <Star className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          </div>
        )}
        
        <CardHeader className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-background/50 backdrop-blur-sm">
              <Icon className="w-6 h-6 text-foreground" />
            </div>
          </div>
          
          <CardTitle className="text-xl font-bold mb-2">{pkg.name}</CardTitle>
          
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold gradient-text">
              ${typeof pkg.price === 'number' ? pkg.price.toLocaleString() : 'Custom'}
            </span>
            {pkg.quantities && (
              <span className="text-sm text-muted-foreground">starting from</span>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {pkg.description && (
            <p className="text-muted-foreground text-sm">{pkg.description}</p>
          )}
          
          {pkg.deliverables && (
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Includes:</h4>
              <ul className="space-y-1">
                {pkg.deliverables.slice(0, 4).map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-neon-blue flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
                {pkg.deliverables.length > 4 && (
                  <li className="text-sm text-muted-foreground">
                    + {pkg.deliverables.length - 4} more items
                  </li>
                )}
              </ul>
            </div>
          )}
          
          {pkg.features && (
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Features:</h4>
              <ul className="space-y-1">
                {pkg.features.slice(0, 4).map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-neon-blue flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.features.length > 4 && (
                  <li className="text-sm text-muted-foreground">
                    + {pkg.features.length - 4} more features
                  </li>
                )}
              </ul>
            </div>
          )}

          {pkg.quantities && (
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Quantity Pricing:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {pkg.quantities.slice(0, 3).map((qty: any, index: number) => (
                  <div key={index} className="flex justify-between p-2 bg-background/30 rounded">
                    <span>{qty.qty} units</span>
                    <span className="font-semibold">${qty.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button 
            className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300"
            onClick={() => addItem(pkg)}
          >
            Add to Plan
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
              <Zap className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your <span className="gradient-text">Perfect Package</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional music marketing packages with transparent pricing. No hidden fees, no surprises.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/">← Back to Home</Link>
              </Button>
              <Button asChild>
                <Link to="/booking">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="release" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-16">
              <TabsTrigger value="release">Release</TabsTrigger>
              <TabsTrigger value="website">Website</TabsTrigger>
              <TabsTrigger value="addon">Add-ons</TabsTrigger>
              <TabsTrigger value="merch">Merch</TabsTrigger>
            </TabsList>

            <TabsContent value="release" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Release Packages</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From singles to full albums, choose the perfect package for your music release.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {releasePackages.map(pkg => renderPackageCard(pkg, 'release'))}
              </div>
            </TabsContent>

            <TabsContent value="website" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Packages</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Professional websites to showcase your music and connect with fans.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {websitePackages.map(pkg => renderPackageCard(pkg, 'website'))}
              </div>
            </TabsContent>

            <TabsContent value="addon" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-on Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Enhance your releases with additional marketing and promotional services.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {addonPackages.map(pkg => renderPackageCard(pkg, 'addon'))}
              </div>
            </TabsContent>

            <TabsContent value="merch" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Merchandise</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Quality merchandise to help build your brand and connect with fans.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {merchPackages.map(pkg => renderPackageCard(pkg, 'merch'))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your project and get a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/booking">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;