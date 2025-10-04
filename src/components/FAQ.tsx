import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { faqs } from '@/content/packages';

const FAQ = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to the most common questions about our services, process, and what to expect.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border border-border/30 rounded-lg px-6 hover:border-border/50 transition-colors animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-0">
                    <div className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="p-8 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-2xl border border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get personalized answers and discuss your specific needs.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="pill-button-primary">
                Schedule Consultation
              </button>
              <button className="pill-button-secondary">
                Live Chat Support
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;