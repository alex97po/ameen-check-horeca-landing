import { 
  UtensilsCrossed, 
  Globe, 
  Inbox, 
  Star, 
  Mic, 
  Zap, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Knows Hospitality Roles Inside Out",
    description: "Creates job descriptions that attract real hospitality talent—from line cooks to sommeliers to guest relations. Understands industry language, certifications, and requirements.",
  },
  {
    icon: Globe,
    title: "Posts Everywhere Hospitality Talent Lives",
    description: "LinkedIn, Indeed, hospitality job boards, and local platforms—all with one click. Your AI knows where chefs, servers, and hotel staff look for work.",
  },
  {
    icon: Inbox,
    title: "Centralizes All Applications",
    description: "WhatsApp inquiries, email applications, walk-in CVs—everything flows into one organized dashboard. Never lose a candidate in the chaos again.",
  },
  {
    icon: Star,
    title: "Screens for Hospitality Fit",
    description: "Evaluates candidates on hospitality-specific criteria: experience with POS systems, food safety certifications, language skills, shift flexibility, customer service aptitude.",
  },
  {
    icon: Mic,
    title: "Pre-Screens in Multiple Languages",
    description: "Conducts initial interviews via WhatsApp audio in English, Arabic, Tagalog, Hindi, and more. Asks the right questions: shift availability, visa status, hospitality experience.",
  },
  {
    icon: Zap,
    title: "Delivers Shortlists in Hours, Not Days",
    description: "Get ranked, interview-ready candidates fast. When you need a sous chef by next week, your AI has already done the legwork.",
  },
  {
    icon: BarChart3,
    title: "Smart Matching for Hospitality",
    description: "Matches candidates not just by skills, but by what matters in HORECA: shift patterns, location, salary expectations, visa status, language abilities.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Your AI Talent Specialist—Built for Hospitality
          </h2>
          <p className="text-lg text-muted-foreground">
            Understands HORECA roles, schedules, and the urgency of hospitality hiring. Works around the clock, speaks multiple languages, never takes a day off.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group flex gap-5 p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 ${
                index === features.length - 1 && features.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-xl md:mx-auto"
                  : ""
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
