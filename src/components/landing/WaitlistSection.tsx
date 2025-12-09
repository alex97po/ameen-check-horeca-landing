import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              Early Access
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              Be First to Hire Smarter in Hospitality
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the waitlist for early access. Built by people who understand HORECA, for people who live it.
            </p>
          </div>

          {/* Waitlist Card */}
          <div className="rounded-3xl bg-card border border-border/50 shadow-elevated overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  We're launching first in the MENA region. Early waitlist members will get priority access, special launch pricing, and direct input on features that matter to hospitality hiring.
                </p>
              </div>

              {/* Airtable Form Embed */}
              <div className="rounded-2xl bg-background border border-border overflow-hidden">
                <iframe 
                  className="airtable-embed w-full" 
                  src="https://airtable.com/embed/appWtoHXWnbrc6y7W/pag3XWoXsb6gZUQxm/form" 
                  frameBorder="0" 
                  width="100%" 
                  height="533" 
                  style={{ background: 'transparent' }}
                />
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-foreground mb-1">Priority</div>
                  <p className="text-sm text-muted-foreground">First access to the platform</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-foreground mb-1">Pricing</div>
                  <p className="text-sm text-muted-foreground">Special launch rates</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-foreground mb-1">Input</div>
                  <p className="text-sm text-muted-foreground">Shape product features</p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Prefer to chat? Reach out directly:
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" size="default" asChild>
                <a href="mailto:sas.pogorelov@gmail.com">
                  <Mail size={16} className="mr-2" />
                  Email Us
                </a>
              </Button>
              <Button variant="outline" size="default" asChild>
                <a href="https://wa.me/message/FIOH33SJFXQ6J1" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
