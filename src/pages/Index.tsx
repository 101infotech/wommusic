import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import ServicesOverview from "@/components/ServicesOverview";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import PlanBuilderDrawer from "@/components/PlanBuilderDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags would be handled by Helmet or similar */}
      <main>
        <Hero />
        <ProblemSection />
        <ProcessTimeline />
        {/* <CaseStudies /> */}
        <ServicesOverview />
        <FAQ />
        <ContactForm />
      </main>
      
      {/* Floating Plan Builder */}
      {/* <PlanBuilderDrawer /> */}
    </div>
  );
};

export default Index;