import { Building2, ChefHat, PartyPopper, Coffee, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Hotel Groups & Resorts",
    description: "Managing recruitment across properties? From front desk to F&B to housekeeping—centralize and automate hiring for all departments and locations.",
  },
  {
    icon: ChefHat,
    title: "Restaurant Chains & Groups",
    description: "Opening new locations or replacing staff across multiple venues? Scale your hiring without scaling your HR headcount.",
  },
  {
    icon: PartyPopper,
    title: "Catering Companies & Event Venues",
    description: "Seasonal spikes and project-based hiring? Ramp up talent quickly when you need it, with quality screening that doesn't compromise.",
  },
  {
    icon: Coffee,
    title: "Independent Operators",
    description: "Running a boutique hotel or acclaimed restaurant? Get enterprise-level hiring tools without the enterprise team or budget.",
  },
  {
    icon: Briefcase,
    title: "Hospitality Recruitment Agencies",
    description: "Placing talent for HORECA clients? Give your consultants an AI teammate that handles the volume while they focus on relationships.",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Who It's For
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Built for Hospitality Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            From boutique hotels to international chains, we understand your hiring needs.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 ${
                index >= 3 ? "lg:col-span-1" : ""
              } ${index === 3 ? "lg:col-start-1 lg:col-end-2" : ""} ${
                index === 4 ? "lg:col-start-2 lg:col-end-3" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
