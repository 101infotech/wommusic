import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Music, Disc3, Album, Clapperboard, Globe, Package, Shirt, 
  Zap, ArrowRight, Star, Users, TrendingUp, Award 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      category: 'Music Release Services',
      icon: Music,
      gradient: 'from-neon-blue/10 to-neon-purple/10',
      description: 'Complete music release packages for singles, EPs, and albums',
      services: [
        {
          name: 'Single Release',
          icon: Music,
          description: 'Professional single release with complete marketing package',
          features: ['8 Custom Graphics', '3 Promotional Reels', 'Social Media Kit', 'Distribution Support']
        },
        {
          name: 'EP Release',
          icon: Disc3,
          description: 'Multi-song EP release with comprehensive promotion',
          features: ['Multiple Graphics per Song', 'Video Content', 'Playlist Promotion', 'Press Kit']
        },
        {
          name: 'Album Release',
          icon: Album,
          description: 'Full album release with premium marketing campaign',
          features: ['Complete Visual Identity', 'Stage Visualizer', 'Music Videos', 'Radio Promotion']
        },
        {
          name: 'Visual Albums',
          icon: Clapperboard,
          description: 'Video-first album releases with cinematic content',
          features: ['Professional Video Production', 'Visual Storytelling', 'Premium Editing', 'Platform Optimization']
        }
      ]
    },
    {
      category: 'Digital Presence',
      icon: Globe,
      gradient: 'from-neon-green/10 to-neon-blue/10',
      description: 'Professional websites and digital platforms for artists',
      services: [
        {
          name: 'Artist Website - Starter',
          icon: Globe,
          description: 'Essential web presence for emerging artists',
          features: ['Professional Design', 'Music Player', 'Contact Forms', 'Mobile Responsive']
        },
        {
          name: 'Artist Website - Pro',
          icon: Globe,
          description: 'Advanced website with e-commerce capabilities',
          features: ['Online Store', 'Fan Engagement Tools', 'Analytics Dashboard', 'SEO Optimization']
        },
        {
          name: 'Artist Website - Premium',
          icon: Globe,
          description: 'Full-featured platform with advanced integrations',
          features: ['Custom Features', 'Advanced Analytics', 'Premium Support', 'Regular Updates']
        }
      ]
    },
    {
      category: 'Marketing Add-ons',
      icon: TrendingUp,
      gradient: 'from-neon-orange/10 to-neon-pink/10',
      description: 'Enhance your reach with additional marketing services',
      services: [
        {
          name: 'Social Media Management',
          icon: Users,
          description: 'Professional social media presence and engagement',
          features: ['Content Creation', 'Daily Posting', 'Community Management', 'Analytics Reporting']
        },
        {
          name: 'Playlist Promotion',
          icon: Music,
          description: 'Strategic playlist placement and promotion',
          features: ['Playlist Research', 'Submission Management', 'Follow-up Campaigns', 'Performance Tracking']
        },
        {
          name: 'Radio Promotion',
          icon: Award,
          description: 'Professional radio promotion and outreach',
          features: ['Radio Station Outreach', 'Press Kit Creation', 'Interview Coordination', 'Airplay Tracking']
        },
        {
          name: 'Influencer Campaigns',
          icon: Star,
          description: 'Collaborate with influencers to expand your reach',
          features: ['Influencer Matching', 'Campaign Management', 'Content Creation', 'Performance Analytics']
        }
      ]
    },
    {
      category: 'Merchandise & Physical Products',
      icon: Shirt,
      gradient: 'from-neon-purple/10 to-neon-cyan/10',
      description: 'Quality merchandise to build your brand',
      services: [
        {
          name: 'Custom Apparel',
          icon: Shirt,
          description: 'High-quality clothing with your branding',
          features: ['T-Shirts & Hoodies', 'Custom Designs', 'Quality Materials', 'Bulk Pricing Available']
        },
        {
          name: 'Physical Music Products',
          icon: Disc3,
          description: 'Vinyl records, CDs, and cassettes',
          features: ['Vinyl Records', 'CD Production', 'Cassette Tapes', 'Custom Packaging']
        },
        {
          name: 'Promotional Items',
          icon: Package,
          description: 'Branded promotional materials for fans',
          features: ['Stickers & Pins', 'Posters & Prints', 'Branded Accessories', 'Limited Edition Items']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Professional Quality',
      description: 'Industry-standard production and marketing materials'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Experienced professionals working on your project'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful music releases and campaigns'
    },
    {
      icon: Award,
      title: 'Industry Connections',
      description: 'Established relationships with platforms and influencers'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
              <Zap className="w-4 h-4" />
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From music release to digital presence, we provide comprehensive services to help artists thrive in the modern music industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/">← Back to Home</Link>
              </Button>
              <Button asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;
        return (
          <section key={categoryIndex} className="py-16">
            <div className="container mx-auto px-4">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${category.gradient} backdrop-blur-sm mb-6`}>
                  <CategoryIcon className="w-6 h-6" />
                  <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => {
                  const ServiceIcon = service.icon;
                  return (
                    <Card 
                      key={serviceIndex}
                      className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neon-blue/10 border-border/50 bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-background/50">
                            <ServiceIcon className="w-5 h-5" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Service
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-xs">
                                <div className="w-1.5 h-1.5 bg-neon-blue rounded-full flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full group-hover:bg-neon-blue/10 group-hover:border-neon-blue/50 transition-all duration-300"
                          asChild
                        >
                          <Link to="/pricing">
                            View Pricing
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise with modern technology to deliver exceptional results for artists.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mb-4">
                    <BenefitIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Music?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom plan that fits your needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/booking">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;