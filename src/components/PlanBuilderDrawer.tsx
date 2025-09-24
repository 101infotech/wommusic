import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, X, Plus, Minus, Download, Phone, Sparkles } from 'lucide-react';
import { usePlanBuilder } from '@/hooks/use-plan-builder';
import { bundleDiscounts } from '@/content/packages';

const PlanBuilderDrawer = () => {
  const { items, isOpen, toggleDrawer, removeItem, updateQuantity, subtotal, discount, total, appliedBundles } = usePlanBuilder();
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  const itemCount = items.reduce((total, item) => total + (item.quantity || 1), 0);

  const appliedBundleDetails = appliedBundles
    .map(bundleId => bundleDiscounts.find(b => b.id === bundleId))
    .filter(Boolean);

  return (
    <>
      {/* Sticky Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8">
        <div className="relative">
          <Button
            onClick={toggleDrawer}
            size="lg"
            className="h-14 w-14 lg:w-auto lg:px-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink shadow-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="w-6 h-6 lg:mr-2" />
            <span className="hidden lg:inline font-semibold">Your Plan</span>
          </Button>
          
          {itemCount > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 bg-neon-pink text-white border-0 animate-pulse"
            >
              {itemCount}
            </Badge>
          )}
        </div>
      </div>

      {/* Mobile Bottom Sheet / Desktop Side Panel */}
      <Sheet open={isOpen} onOpenChange={toggleDrawer}>
        <SheetContent 
          side="right" 
          className="w-full sm:w-[400px] p-0 bg-card/95 backdrop-blur-xl border-l border-border/50"
        >
          <div className="h-full flex flex-col">
            <SheetHeader className="p-6 border-b border-border/50">
              <SheetTitle className="flex items-center gap-2 text-xl">
                <Sparkles className="w-5 h-5 text-neon-blue" />
                Your Plan
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your plan is empty</h3>
                  <p className="text-muted-foreground text-sm">
                    Add packages to start building your music marketing plan
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Applied Bundles */}
                  {appliedBundleDetails.length > 0 && (
                    <div className="p-4 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg border border-neon-blue/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-neon-blue" />
                        <span className="text-sm font-medium">Bundle Discount Applied!</span>
                      </div>
                      {appliedBundleDetails.map(bundle => (
                        <div key={bundle!.id} className="text-xs text-muted-foreground">
                          {bundle!.description} - {bundle!.discount}% off
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Plan Items */}
                  {items.map((item) => (
                    <div key={item.id} className="group">
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm leading-tight mb-1">
                            {item.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 bg-background/50 rounded-md">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="text-sm font-medium px-2 min-w-[2rem] text-center">
                                {item.quantity || 1}
                              </span>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="text-sm font-semibold">
                              ${(item.price * (item.quantity || 1)).toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with totals and CTAs */}
            {items.length > 0 && (
              <div className="border-t border-border/50 p-6 bg-background/50">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-neon-blue">
                      <span>Bundle Discount:</span>
                      <span>-${discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink h-12 font-semibold"
                    onClick={() => setIsSchedulerOpen(true)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book a Call
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12 font-semibold border-border/50"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Media Kit
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Scheduler Placeholder Modal */}
      {isSchedulerOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-card p-8 rounded-2xl border border-border/50 max-w-md w-full text-center">
            <h3 className="text-xl font-semibold mb-4">Book Your Consultation</h3>
            <p className="text-muted-foreground mb-6">
              Scheduler integration would be implemented here (Calendly, etc.)
            </p>
            <Button 
              onClick={() => setIsSchedulerOpen(false)}
              variant="outline"
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanBuilderDrawer;