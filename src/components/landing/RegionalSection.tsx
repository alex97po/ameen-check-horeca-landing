import { Globe2, MapPin, Scale, Clock } from "lucide-react";

const regionalFeatures = [
  {
    icon: Globe2,
    title: "Multi-National Talent Pools",
    description: "Built to handle the diverse workforce that makes Middle Eastern hospitality world-class—from local talent to expat professionals from Asia, Europe, Africa, and beyond.",
  },
  {
    icon: MapPin,
    title: "MENA Market Expertise",
    description: "Understands MENA labor markets. Knows the visa categories, sponsorship requirements, and hiring patterns unique to the region.",
  },
  {
    icon: Scale,
    title: "Cultural Intelligence",
    description: "Screens across cultures without bias. Evaluates Michelin-trained European chefs alongside Asian hospitality professionals and local talent—fairly and effectively.",
  },
  {
    icon: Clock,
    title: "Time Zone Resilient",
    description: "Your AI works 24/7. Candidates apply at midnight? They're screened by morning. Your hiring never stops.",
  },
];

const RegionalSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                Regional Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                Built for the Middle East & Global HORECA
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Understands regional hospitality hiring like no other platform. From visa requirements to cultural nuances, we've got you covered.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Screening</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">MENA</div>
                  <div className="text-sm text-muted-foreground mt-1">Focused</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regionalFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-serif font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalSection;
