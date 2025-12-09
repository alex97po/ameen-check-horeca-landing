import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Now accepting early access applications for UAE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Your AI Hiring Manager for{" "}
            <span className="text-gradient">Hotels, Restaurants & Catering</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up animation-delay-200">
            Staff shortages shouldn't close tables or delay service. Meet the AI assistant that finds, screens, and delivers ready-to-hire hospitality talent—24/7.
          </p>

          {/* Supporting Text */}
          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10 animate-fade-up animation-delay-300">
            Purpose-built for the fast-paced HORECA industry. Join forward-thinking hospitality operators who are getting early access to smarter, faster hiring.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#waitlist" className="group">
                Join the Waitlist
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#solution">
                <Play size={18} className="mr-1" />
                See How It Works
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up animation-delay-500">
            <p className="text-sm text-muted-foreground mb-4">Trusted by hospitality leaders across the GCC</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-sm font-medium text-foreground/70">Dubai Hotels</div>
              <div className="w-px h-4 bg-border" />
              <div className="text-sm font-medium text-foreground/70">Restaurant Groups</div>
              <div className="w-px h-4 bg-border" />
              <div className="text-sm font-medium text-foreground/70">Catering Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
