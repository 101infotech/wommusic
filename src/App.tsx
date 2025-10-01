import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import FloatingConsultation from "./components/FloatingConsultation";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global Navigation */}
        <Navigation />
        
        {/* Main Content with top padding to account for fixed nav */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
        {/* Global Floating Consultation Button */}
        <FloatingConsultation />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
