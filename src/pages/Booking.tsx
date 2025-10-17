import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/womlogo.png";
import soulstice from "@/assets/soulstic_crop.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  Calendar,
  Phone,
  Mail,
  User,
  DollarSign,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    artistName: "",
    socialLinks: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formBody = new URLSearchParams(formData as any).toString();

  try {
    await fetch("https://script.google.com/macros/s/AKfycby7MIh45_PBfhoTDAdTVlKzy1EtLwvyFTJU0wqOYfw9xIIRGlvCWCM-LADCGzvyWwKdbQ/exec", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    setIsSubmitted(true);
  } catch (err) {
    console.error(err);
    alert("Error submitting form. Please try again.");
  }
};


  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Booking Request Received!
            </h2>
            <p className="text-muted-foreground mb-6">
              We'll review your project details and get back to you within 24
              hours with next steps.
            </p>
            <div className="space-y-4">
              <Button asChild className="w-full pill-button-secondary">
                <Link to="/">Return Home</Link>
              </Button>
              <a
                href={`https://wa.me/1234567890?text=Hi! I just submitted a booking request for ${formData.artistName}. Looking forward to discussing our project!`}
                className="block w-full"
              >
                <Button variant="outline" className="w-full">
                  Continue on WhatsApp
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold gradient-text">
            <ArrowLeft className="w-5 h-5 " />
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="WomMusic Logo"
                className="w-24 h-24 rounded-lg object-contain pl-2"
              />
              <span className="font-bold text-4xl gradient-text">X</span>
              <img
                src={soulstice}
                alt="Soulstice Logo"
                className="w-28 h-28 rounded-lg object-contain"
              />
            </div>
          </Link>
          <Badge variant="outline" className="text-xs">
            <Music className="w-3 h-3 mr-1" />
            Music Division
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <Calendar className="w-4 h-4" />
            Schedule Consultation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Your{" "}
            <span className="gradient-text">Visual Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll create a custom strategy to
            elevate your music.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="artistName">Artist/Band Name</Label>
                      <Input
                        id="artistName"
                        placeholder="Your stage name"
                        value={formData.artistName}
                        onChange={(e) =>
                          handleInputChange("artistName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label htmlFor="socialLinks">Social Media Links</Label>
                    <Textarea
                      id="socialLinks"
                      placeholder="Instagram, Spotify, YouTube, etc."
                      value={formData.socialLinks}
                      onChange={(e) =>
                        handleInputChange("socialLinks", e.target.value)
                      }
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("projectType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single Release</SelectItem>
                          <SelectItem value="ep">EP (3-5 songs)</SelectItem>
                          <SelectItem value="album">
                            Album (6+ songs)
                          </SelectItem>
                          <SelectItem value="visual">Stage Visuals</SelectItem>
                          <SelectItem value="website">
                            Artist Website
                          </SelectItem>
                          <SelectItem value="merch">Merchandise</SelectItem>
                          <SelectItem value="complete">
                            Complete Campaign
                          </SelectItem>
                          <SelectItem value="consulting">
                            Strategy Only
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                        // '$5k-$10k',"$10k-$15k","$15-$20k"
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1k-3k">$0 - $1,000</SelectItem>
                          <SelectItem value="3k-5k">$1,000 - $3,000</SelectItem>
                          <SelectItem value="5k-10k">
                            $3,000 - $5,000
                          </SelectItem>
                          <SelectItem value="$10k-$15k">
                            $10k-$15k
                          </SelectItem>
                          <SelectItem value="$15-$20k">
                            $15-$20k
                          </SelectItem>
                          <SelectItem value="flexible">
                            Flexible/Not Sure
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("timeline", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush - +50%)</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                        <SelectItem value="1-2months">1-2 months</SelectItem>
                        <SelectItem value="flexible">
                          Flexible timing
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your vision, musical style, target audience, and any specific requirements..."
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full pill-button-secondary h-12 text-lg"
                  >
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* What Happens Next */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Initial Review</h4>
                    <p className="text-sm text-muted-foreground">
                      We review your project within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Strategy Call</h4>
                    <p className="text-sm text-muted-foreground">
                      30-minute consultation to discuss your vision
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center text-white text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Custom Proposal</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailored package with timeline and pricing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Need to Talk First?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="tel:+16803024004"
                  className="flex items-center gap-3 mb-2 cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-neon-blue" />
                  <div>
                    <p className="text-sm font-medium">Call us directly</p>
                    <p className="text-sm text-muted-foreground">
                      +1 (680) 302-4004
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@womholdings.com"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-neon-purple" />
                  <div>
                    <p className="text-sm font-medium">Email us</p>
                    <p className="text-sm text-muted-foreground">
                      info@womholdings.com
                    </p>
                  </div>
                </a>

                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://wa.me/16803024004"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Pricing Reminder */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Transparent Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  All our packages have transparent, upfront pricing. No hidden
                  fees.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/#packages">View All Packages</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
