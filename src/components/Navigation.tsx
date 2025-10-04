import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, DollarSign, Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/womlogo.png";
import soulstice from "@/assets/soulstic_crop.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Package },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Book Call", href: "/booking", icon: Calendar },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="lg:px-64 mx-auto ">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center ">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="WomMusic Logo"
                className="w-28 h-28 rounded-lg object-contain pl-2"
              />
              <span className="font-bold text-5xl gradient-text">X</span>
              <img
                src={soulstice}
                alt="Soulstice Logo"
                className="w-32 h-32 rounded-lg object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.href}
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="lg" // bigger buttons
                  className={`transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                      : "hover:bg-muted"
                  }`}
                  asChild
                >
                  <Link to={item.href}>
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.href}
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="lg"
                    className={`w-full justify-start py-3 px-4 text-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                        : "hover:bg-muted"
                    }`}
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.href} className="flex items-center gap-3">
                      <Icon className="w-6 h-6" />
                      {item.name}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
