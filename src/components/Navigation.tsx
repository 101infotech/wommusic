import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, DollarSign, Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Package },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Book Call', href: '/booking', icon: Calendar }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-xl gradient-text">WomMusic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.href}
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className={`transition-all duration-200 ${
                    isActive(item.href) 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' 
                      : 'hover:bg-muted'
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
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.href}
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    className={`justify-start transition-all duration-200 ${
                      isActive(item.href) 
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' 
                        : 'hover:bg-muted'
                    }`}
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.href}>
                      <Icon className="w-4 h-4 mr-2" />
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