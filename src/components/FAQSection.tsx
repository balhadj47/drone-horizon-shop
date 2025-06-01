
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need a license to fly these drones?",
      answer: "For drones weighing 250g or more, you'll need to register with the CAA and obtain an Operator ID. Our team can guide you through the registration process."
    },
    {
      question: "What's included with my drone purchase?",
      answer: "Each drone comes with the aircraft, controller, battery, charging cables, propellers, and a comprehensive user manual. Professional models include additional accessories."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard delivery takes 2-3 business days within the UK. Express delivery (next day) is available for £15. EU delivery takes 5-7 days, Canada 7-10 days."
    },
    {
      question: "What if my drone gets damaged?",
      answer: "All our drones come with a comprehensive 2-year warranty covering manufacturing defects. We also offer optional care packages for accidental damage."
    },
    {
      question: "Can I return my drone if I'm not satisfied?",
      answer: "Yes! We offer a 30-day return policy. The drone must be in original condition with all accessories and packaging included."
    },
    {
      question: "Do you offer training or support?",
      answer: "Absolutely! We provide 24/7 technical support, online tutorials, and can connect you with certified drone training instructors in your area."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about buying and flying your new drone.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
