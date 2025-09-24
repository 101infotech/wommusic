import Hero from '@/components/Hero';
import ReleasePackages from '@/components/ReleasePackages';
import AddOnPackages from '@/components/AddOnPackages';
import WebsitePackages from '@/components/WebsitePackages';
import MerchPackages from '@/components/MerchPackages';
import BundleDiscounts from '@/components/BundleDiscounts';
import CaseStudies from '@/components/CaseStudies';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import PlanBuilderDrawer from '@/components/PlanBuilderDrawer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags would be handled by Helmet or similar */}
      <main>
        <Hero />
        <ReleasePackages />
        <AddOnPackages />
        <WebsitePackages />
        <MerchPackages />
        <BundleDiscounts />
        <CaseStudies />
        <ProcessTimeline />
        <FAQ />
        <ContactForm />
      </main>
      
      {/* Floating Plan Builder */}
      <PlanBuilderDrawer />
    </div>
  );
};

export default Index;