import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import ReleasePackages from "@/components/ReleasePackages";
import AddOnPackages from "@/components/AddOnPackages";
import WebsitePackages from "@/components/WebsitePackages";
import MerchPackages from "@/components/MerchPackages";
import BundleDiscounts from "@/components/BundleDiscounts";
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
        <CaseStudies />
        <div id="packages">
          <ReleasePackages />
          <AddOnPackages />
          <WebsitePackages />
          <MerchPackages />
          <BundleDiscounts />
        </div>
        <FAQ />
        <ContactForm />
      </main>
      
      {/* Floating Plan Builder */}
      <PlanBuilderDrawer />
    </div>
  );
};

export default Index;