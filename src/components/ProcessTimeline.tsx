import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music2, Headphones, Video, Radio, BarChart3, Clock } from 'lucide-react';
import { processSteps } from '@/content/packages';

const ProcessTimeline = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return Music2;
      case 'Target': return Headphones;
      case 'Palette': return Video;
      case 'Rocket': return Radio;
      case 'TrendingUp': return BarChart3;
      default: return Music2;
    }
  };

  const getStepGradient = (index: number) => {
    const gradients = [
      'from-neon-blue/20 to-neon-purple/20',
      'from-neon-purple/20 to-neon-pink/20',
      'from-neon-pink/20 to-neon-cyan/20',
      'from-neon-cyan/20 to-neon-blue/20',
      'from-neon-blue/20 to-neon-pink/20'
    ];
    return gradients[index] || gradients[0];
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <Clock className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Vision to <span className="gradient-text">Viral</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 5-step process ensures your music gets the attention it deserves, from initial strategy to ongoing growth.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple via-neon-pink to-neon-cyan transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = getStepIcon(step.icon);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.id}
                  className={`relative animate-slide-in-left`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Connector - Mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-neon-blue to-neon-purple" />
                  )}
                  
                  <Card 
                    className={`group hover-lift hover-glow relative overflow-hidden bg-gradient-to-br ${getStepGradient(index)} border-border/50 backdrop-blur-sm ${
                      isEven ? 'lg:mt-0' : 'lg:mt-16'
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-4 mt-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-4 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.duration}
                      </Badge>
                    </CardContent>
                  </Card>
                  
                  {/* Desktop Timeline Dot */}
                  <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full border-2 border-background ${
                    isEven ? 'top-full mt-6' : 'bottom-full mb-6'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-16 p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Our Process Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-3 flex items-center justify-center">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Music Industry Focus</h4>
              <p className="text-sm text-muted-foreground">Specialized in music marketing with proven industry results</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink p-3 flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Visual Storytelling</h4>
              <p className="text-sm text-muted-foreground">Professional video production and graphic design</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan p-3 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Data-Driven Growth</h4>
              <p className="text-sm text-muted-foreground">Real-time analytics and optimization for maximum impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;