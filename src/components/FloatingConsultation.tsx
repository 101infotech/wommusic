import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, MessageCircle, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingConsultation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick action buttons - shown when expanded */}
      {isExpanded && (
        <div className="flex flex-col gap-2 animate-fade-in">
          {/* Book Call */}
          <Button
            size="sm"
            variant="outline"
            className="bg-background/95 backdrop-blur-sm border-neon-blue/50 hover:bg-neon-blue/10 hover:border-neon-blue"
            asChild
          >
            <Link to="/booking">
              <Calendar className="w-4 h-4 mr-2" />
              Book Call
            </Link>
          </Button>

          {/* Call Now */}
          <Button
            size="sm"
            variant="outline"
            className="bg-background/95 backdrop-blur-sm border-neon-blue/50 hover:bg-neon-blue/10 hover:border-neon-blue"
            onClick={() => window.open("tel:+16803024004", "_self")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>

          {/* Email Us */}
          <Button
            size="sm"
            variant="outline"
            className="bg-background/95 backdrop-blur-sm border-neon-purple/50 hover:bg-neon-purple/10 hover:border-neon-purple"
            onClick={() => window.open("mailto:info@womholdings.com", "_self")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Email Us
          </Button>

          {/* WhatsApp */}
          <Button
            size="sm"
            variant="outline"
            className="bg-background/95 backdrop-blur-sm border-neon-pink/50 hover:bg-neon-pink/10 hover:border-neon-pink"
            onClick={() =>
              window.open(
                "https://wa.me/16803024004?text=Hello%20WomMusic!",
                "_blank"
              )
            }
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      )}

      {/* Main floating button */}
      <div className="relative">
        {/* Close button - only visible when expanded */}
        {isExpanded && (
          <Button
            size="sm"
            variant="ghost"
            className="absolute -top-2 -right-2 w-6 h-6 p-0 bg-background border border-border rounded-full"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-3 h-3" />
          </Button>
        )}

        <Button
          size="lg"
          className="rounded-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-neon-blue/25 group relative overflow-hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Button content */}
          <div className="relative flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {isExpanded ? "Options" : "Free Consultation"}
          </div>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingConsultation;
