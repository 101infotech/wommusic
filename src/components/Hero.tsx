import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { sampleClients } from "@/content/packages";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const backgroundElements = [
    {
      color: "from-neon-blue/20 to-neon-purple/20",
      position: "top-1/4 left-1/4",
    },
    {
      color: "from-neon-purple/20 to-neon-pink/20",
      position: "top-1/3 right-1/4",
    },
    {
      color: "from-neon-pink/20 to-neon-cyan/20",
      position: "bottom-1/3 left-1/3",
    },
    {
      color: "from-neon-cyan/20 to-neon-blue/20",
      position: "bottom-1/4 right-1/3",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {backgroundElements.map((element, index) => (
          <div
            key={index}
            className={`absolute w-96 h-96 rounded-full bg-gradient-to-br ${
              element.color
            } blur-3xl transition-all duration-[3000ms] ${element.position} ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-40 scale-75"
            } animate-float`}
            style={{ animationDelay: `${index * 1.5}s` }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20 md:pt-28">
        {/* Main Headline */}
        <div className="space-y-8 mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            Premium Music Marketing Solutions
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Make Your Sound
            <span className="gradient-hero-text"> Unmissable</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From underground tracks to sold-out venues, we help EDM producers,
            DJs, and event brands get the spotlight they deserve with visuals
            and campaigns that electrify.
          </p>
        </div>

        {/* Primary CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-left"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            asChild
            size="lg"
            className="pill-button-secondary group min-w-[200px] h-14 text-lg font-semibold"
          >
            <Link to="/booking">
              Book a Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center z-10" >
        {isPlaying ? (
          <video
            src="/sample-video.mp4"
            className="w-full h-full object-cover rounded-none"
            autoPlay
            controls
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center text-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="group relative w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-0.5 hover:scale-110 transition-all duration-300"
              >
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-foreground ml-1 group-hover:scale-110 transition-transform" />
                </div>
              </button>
              <p className="text-sm text-muted-foreground mt-4">
                {isPlaying ? "Experience our work" : "Click to hear our work"}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
