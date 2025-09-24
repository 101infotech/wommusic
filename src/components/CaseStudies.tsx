import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Play, Users, DollarSign, Eye, Heart } from 'lucide-react';
import { caseStudies } from '@/content/packages';

const CaseStudies = () => {
  const [animatedCounters, setAnimatedCounters] = useState<Record<string, number>>({});

  // Animate counters when component mounts
  useEffect(() => {
    const animateCounter = (id: string, targetValue: string) => {
      const numericValue = parseFloat(targetValue.replace(/[^0-9.]/g, ''));
      let current = 0;
      const increment = numericValue / 50; // 50 steps
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }
        setAnimatedCounters(prev => ({ ...prev, [id]: current }));
      }, 30);
    };

    const timeout = setTimeout(() => {
      caseStudies.forEach(study => {
        animateCounter(study.id, study.value);
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const getMetricIcon = (metric: string) => {
    switch (metric.toLowerCase()) {
      case 'streams': return Play;
      case 'views': return Eye;
      case 'followers': return Users;
      case 'revenue': return DollarSign;
      case 'engagement': return Heart;
      case 'roas': return TrendingUp;
      default: return TrendingUp;
    }
  };

  const getMetricGradient = (index: number) => {
    const gradients = [
      'from-neon-blue/20 to-neon-purple/20',
      'from-neon-purple/20 to-neon-pink/20',
      'from-neon-pink/20 to-neon-cyan/20',
      'from-neon-cyan/20 to-neon-blue/20',
      'from-neon-blue/20 to-neon-pink/20',
      'from-neon-purple/20 to-neon-cyan/20'
    ];
    return gradients[index % gradients.length];
  };

  const formatAnimatedValue = (studyId: string, originalValue: string, metric: string) => {
    const animated = animatedCounters[studyId] || 0;
    
    if (originalValue.includes('M')) {
      return `${(animated).toFixed(1)}M+`;
    }
    if (originalValue.includes('K')) {
      return `${Math.round(animated)}K+`;
    }
    if (originalValue.includes('%')) {
      return `${Math.round(animated)}%`;
    }
    if (originalValue.includes('x')) {
      return `${Math.round(animated)}x`;
    }
    if (originalValue.includes('$')) {
      return `$${Math.round(animated)}K+`;
    }
    
    return originalValue;
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <TrendingUp className="w-4 h-4" />
            Results & Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Artists, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our comprehensive marketing packages have transformed careers and driven measurable success.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const Icon = getMetricIcon(study.metric);
            
            return (
              <Card 
                key={study.id}
                className={`group hover-lift hover-glow relative overflow-hidden bg-gradient-to-br ${getMetricGradient(index)} border-border/50 backdrop-blur-sm animate-scale-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold mb-2 counter animate-counter-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      {formatAnimatedValue(study.id, study.value, study.metric)}
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {study.metric}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{study.artistName}</h3>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-neon-blue rounded-full animate-pulse opacity-60" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-purple rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Artists Promoted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 gradient-text">100M+</div>
              <div className="text-sm text-muted-foreground">Total Streams Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 gradient-text">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;