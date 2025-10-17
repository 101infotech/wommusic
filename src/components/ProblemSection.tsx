import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProblemSection = () => {
  const problems = [
    {
      icon: Eye,
      title: "Lost in the Noise",
      stat: "96%",
      description:
        "of music releases get less than 1,000 streams in their first month",
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      title: "No Visual Identity",
      stat: "78%",
      description:
        "of independent artists struggle with consistent visual branding",
      gradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      icon: TrendingDown,
      title: "Wasted Ad Spend",
      stat: "$2.4K",
      description:
        "average wasted on ineffective social media campaigns per artist",
      gradient: "from-yellow-500/20 to-red-500/20",
    },
  ];

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/10 to-yellow-500/10 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-sm text-red-400 mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Great Music Isn't{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Enough
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your beats are ready for the world—but how do you fill dance
              floors in cities where nobody knows your name?
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

                    <h3 className="text-xl font-bold mb-4">{problem.title}</h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* The Solution Teaser */}
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
        <div className=" mx-auto ">
          <div className="text-center   p-8 md:p-12 animate-scale-in max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              But What If Your Music Could{" "}
              <span className="gradient-text">Stand Out?</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-8xl mx-auto leading-relaxed">
              Imagine having a complete visual identity that captures your
              sound, professional content that turns listeners into fans, and a
              campaign strategy built to get real traction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="pill-button-secondary">
                <Link to="/booking">Let’s Build It Together</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
