import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will this be available?",
    answer: "We're currently in development and selecting early pilot partners. Waitlist members will get priority access as we launch—expected Q2 2025 for UAE-based hospitality businesses.",
  },
  {
    question: "Does it work for all hospitality positions?",
    answer: "Yes. Front-of-house, back-of-house, management, and support staff. From commis chefs to hotel GMs. The AI understands hospitality role hierarchies and requirements.",
  },
  {
    question: "Can it handle high-volume hiring?",
    answer: "Absolutely. That's exactly what it's built for. Whether you're filling 5 positions or 50, the AI scales effortlessly.",
  },
  {
    question: "What languages does it support?",
    answer: "Currently: English, Arabic, Tagalog, Hindi, and Urdu for screening. We're adding more languages based on regional hiring needs.",
  },
  {
    question: "Will it understand UAE/GCC hiring requirements?",
    answer: "Yes. Built specifically for the Middle East hospitality market. Understands visa categories, sponsorship, notice periods, and regional hiring patterns.",
  },
  {
    question: "Can it replace our HR team?",
    answer: "No—it empowers them. Think of it as an AI team member that handles the repetitive, time-consuming parts (posting, screening, organizing) so your team focuses on interviewing, relationship-building, and final decisions.",
  },
  {
    question: "How much will it cost?",
    answer: "Pricing will be announced closer to launch. Waitlist members and early partners will receive preferential rates. We're building this to be accessible for independent operators and scalable for large groups.",
  },
  {
    question: "Is candidate data secure?",
    answer: "Yes. We follow international data protection standards (GDPR-compliant) and understand the sensitivity of handling personal information in recruitment.",
  },
  {
    question: "What if we already use an ATS or recruitment agency?",
    answer: "This can work alongside your existing systems or replace them. Many hospitality businesses don't have formal ATS—this can be your first. Agencies can use this to scale their HORECA practice.",
  },
  {
    question: "Can it handle walk-in applications?",
    answer: "Yes. You can quickly upload walk-in CVs or have candidates apply via QR code/WhatsApp. Everything flows into the same system.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Questions About AI Hiring for HORECA
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl bg-card border border-border/50 px-6 data-[state=open]:shadow-soft transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-serif font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
