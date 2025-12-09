import { Zap, Languages, FileCheck, Calendar, TrendingUp, Heart } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Speed Matters",
    description: "Hospitality can't wait. Get shortlisted candidates in hours, not weeks. Fill urgent positions before they impact service.",
    highlight: "Hours, not weeks",
  },
  {
    icon: FileCheck,
    title: "Visa & Documentation Aware",
    description: "Automatically flags visa status, work permits, and required certifications (food handlers, alcohol service, etc.). No surprises after you've invested time in interviews.",
    highlight: "Zero surprises",
  },
  {
    icon: Calendar,
    title: "Shift Flexibility Matching",
    description: "Night shifts? Split shifts? Weekends? Your AI understands hospitality scheduling and matches candidates who actually fit your operational needs.",
    highlight: "Perfect fit",
  },
  {
    icon: TrendingUp,
    title: "High-Volume Hiring Support",
    description: "Opening a new venue? Seasonal surge? Handle 100+ applications for multiple roles simultaneously without drowning in CVs.",
    highlight: "100+ at once",
  },
  {
    icon: Heart,
    title: "Cultural Fit for Hospitality",
    description: "Screens for hospitality mindset: service attitude, teamwork, stress management, guest-focused thinking—the intangibles that make great hospitality staff.",
    highlight: "Beyond skills",
  },
];

const ValuePropsSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            HORECA-Specific
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Designed for the Way Hospitality Actually Works
          </h2>
        </div>

        {/* Value Props Grid - Alternating Layout */}
        <div className="max-w-5xl mx-auto space-y-6">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className={`flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-10 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } bg-card-gradient`}
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <prop.icon className="w-10 h-10 text-primary" />
              </div>
              <div className={`flex-1 text-center lg:text-left ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground mb-3">
                  {prop.highlight}
                </div>
                <h3 className="text-xl lg:text-2xl font-serif font-semibold text-foreground mb-3">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
