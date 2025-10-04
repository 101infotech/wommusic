import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Music, Globe, TrendingUp, Shirt, ArrowRight, Star, 
  Users, Award, Zap, Play, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const serviceCategories = [
    {
      title: 'Release Launches',
      icon: Music,
      description: 'Blow up your next single or EP with viral campaigns.',
      features: ['Custom Graphics', 'Video Content', 'Distribution', 'Marketing'],
      gradient: 'from-neon-blue/10 to-neon-purple/10',
      link: '/services#release'
    },
    {
      title: 'Digital Presence',
      icon: Globe,
      description: 'Professional websites and online platforms to showcase your music.',
      features: ['Custom Websites', 'E-commerce', 'Fan Engagement', 'SEO Optimization'],
      gradient: 'from-neon-green/10 to-neon-blue/10',
      link: '/services#digital'
    },
    {
      title: 'Events & Marketing',
      icon: TrendingUp,
      description: 'Fill your venue—no more empty guest lists.',
      features: ['Social Media', 'Playlist Promotion', 'Radio Outreach', 'Influencer Campaigns'],
      gradient: 'from-neon-orange/10 to-neon-pink/10',
      link: '/services#marketing'
    },
    {
      title: 'Merchandise',
      icon: Shirt,
      description: 'Quality merchandise to build your brand and connect with fans.',
      features: ['Custom Apparel', 'Physical Media', 'Promotional Items', 'Bulk Pricing'],
      gradient: 'from-neon-purple/10 to-neon-cyan/10',
      link: '/services#merchandise'
    }
  ];

  const stats = [
    { number: '500+', label: 'Artists Helped', icon: Users },
    { number: '1M+', label: 'Streams Generated', icon: Play },
    { number: '50+', label: 'Successful Releases', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Independent Artist',
      content: 'WomMusic transformed my release strategy. Their team delivered incredible results that exceeded my expectations.',
      rating: 5
    },
    {
      name: 'Marcus Chen',
      role: 'Band Leader',
      content: 'Professional service from start to finish. The quality of their work speaks for itself.',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Singer-Songwriter',
      content: 'Amazing team that truly understands the music industry. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <>
      {/* Services Overview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
              <Zap className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Backstage Pass to <span className="gradient-text">Growth</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From music release to digital presence, we provide comprehensive services to help artists thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neon-blue/10 border-border/50 bg-gradient-to-br ${category.gradient} backdrop-blur-sm`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-background/50 backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Service
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Includes:</h4>
                      <ul className="space-y-1">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-neon-blue flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-neon-blue/10 group-hover:border-neon-blue/50 transition-all duration-300"
                      asChild
                    >
                      <Link to={category.link}>
                        Learn More
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

      {/* Stats Section */}
      {/* <section className="py-16 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Artists <span className="gradient-text">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden border-border/50 bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-blue text-neon-blue" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Your Music <span className="gradient-text">Further</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom plan that fits your vision and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/booking">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOverview;