import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, TrendingDown, Users, Eye } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Eye,
      title: "Lost in the Noise",
      stat: "99%",
      description: "of music releases get less than 1,000 streams in their first month",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Users,
      title: "No Visual Identity",
      stat: "78%",
      description: "of independent artists struggle with consistent visual branding",
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      icon: TrendingDown,
      title: "Wasted Ad Spend",
      stat: "$2.4K",
      description: "average wasted on ineffective social media campaigns per artist",
      gradient: "from-yellow-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/10 to-yellow-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-sm text-red-400 mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Great Music Isn't <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Enough</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In today's oversaturated music industry, talent alone won't cut it. 
            Without the right visual strategy, even the best songs get lost in the noise.
          </p>
        </div>

        {/* Problem Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            
            return (
              <Card 
                key={index}
                className={`group hover-lift hover-glow bg-gradient-to-br ${problem.gradient} border-border/50 backdrop-blur-sm animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {problem.stat}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* The Solution Teaser */}
        <div className="text-center bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold mb-4">
            But What If Your Music Could Stand Out?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Imagine having a complete visual identity that captures your unique sound, 
            professional content that converts listeners into fans, and a strategic campaign 
            that actually drives real results.
          </p>
          <div className="inline-flex items-center gap-2 text-neon-blue font-medium">
            That's exactly what we do →
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;