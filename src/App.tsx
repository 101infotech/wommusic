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
import { useGtag } from "@/hooks/useGtag";


const queryClient = new QueryClient();

// App.tsx
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />

          {/* ✅ useGtag is now inside the Router */}
          <GtagListener />

          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <FloatingConsultation />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// This small component lives inside BrowserRouter
const GtagListener = () => {
  useGtag();
  return null;
};


export default App;
