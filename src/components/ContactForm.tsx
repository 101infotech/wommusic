import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MessageSquare,
  Send,
  Check,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  artistName: string;
  links: string;
  budget: string;
  selectedPackages: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    artistName: "",
    links: "",
    budget: "",
    selectedPackages: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      toast.success("Form submitted successfully! We'll be in touch soon.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const budgetRanges = ["$0 - $1K", "$1K - $3K", "$3K - $5K"];

  const packageTypes = [
    "Single Release",
    "EP Package",
    "Album Package",
    "Website Design",
    "Merchandise",
    "Full Campaign",
    "Not Sure Yet",
  ];

  if (isSubmitted) {
    return (
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border-border/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-6 flex items-center justify-center">
                  <Check className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Thanks for Reaching Out!
                </h2>
                <p className="text-muted-foreground mb-8">
                  We've received your submission and will be in touch within 24
                  hours to discuss your project.
                </p>

                {/* WhatsApp Deep Link for Mobile */}
                <div className="space-y-4">
                  <Button
                    className="w-full sm:w-auto pill-button-primary"
                    onClick={() =>
                      window.open(
                        "https://wa.me/1234567890?text=Hi%20WoM%20Holdings,%20I%20just%20submitted%20a%20contact%20form%20and%20wanted%20to%20follow%20up",
                        "_blank"
                      )
                    }
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Follow up on WhatsApp
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="text-sm text-muted-foreground">
                    For urgent inquiries, reach us directly on WhatsApp
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <Send className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Launch?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your project and goals. We'll create a custom strategy
            to amplify your music.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <a
                  href="tel:+16803024004"
                  className="flex items-center gap-3 mb-4 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-2.5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-sm text-muted-foreground">
                      +1 (680) 302-4004
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <a
                  href="mailto:info@womholdings.com"
                  className="flex items-center gap-3 mb-4 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink p-2.5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      info@womholdings.com
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <a
                  href="https://wa.me/16803024004" // phone number in international format without '+' or dashes
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 mb-4 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan p-2.5 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">
                      Quick responses
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Tell Us About Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your@email.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+1 (555) 123-4567"
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="artistName">Artist Name *</Label>
                      <Input
                        id="artistName"
                        value={formData.artistName}
                        onChange={(e) =>
                          handleInputChange("artistName", e.target.value)
                        }
                        placeholder="Your artist/band name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="links">Music Links</Label>
                    <Input
                      id="links"
                      value={formData.links}
                      onChange={(e) =>
                        handleInputChange("links", e.target.value)
                      }
                      placeholder="Spotify, SoundCloud, YouTube, etc."
                      className="bg-background/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="packages">Interested In</Label>
                      <Select
                        value={formData.selectedPackages}
                        onValueChange={(value) =>
                          handleInputChange("selectedPackages", value)
                        }
                      >
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select package type" />
                        </SelectTrigger>
                        <SelectContent>
                          {packageTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Goals</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="What are your goals? What type of music do you make? Any specific requirements or ideas?"
                      rows={4}
                      className="bg-background/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
