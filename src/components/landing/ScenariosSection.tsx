import { ChefHat, Building, Sun } from "lucide-react";

const scenarios = [
  {
    icon: ChefHat,
    title: "Emergency Chef Replacement",
    context: "Your head chef gives notice. You have 2 weeks.",
    without: "Panic post on every platform, manually screen 80+ CVs, conduct rushed interviews, hope for the best.",
    with: "Post once. AI screens overnight, delivers 5 qualified candidates by morning—with experience levels, cuisine specialties, notice periods, and salary expectations clearly mapped. Interview the best, hire with confidence.",
  },
  {
    icon: Building,
    title: "New Restaurant Opening",
    context: "You need 25 staff across all positions in 6 weeks.",
    without: "Overwhelmed with hundreds of applications across multiple roles. Can't keep track. Miss great candidates. Hire whoever responds fastest.",
    with: "AI manages all roles simultaneously. Screens, ranks, and organizes candidates by position. You focus on final interviews for each department, knowing AI has already filtered for quality and fit.",
  },
  {
    icon: Sun,
    title: "Seasonal Hotel Staffing",
    context: "Summer season hits. Need 40 additional F&B and housekeeping staff.",
    without: "Rehire last year's seasonal staff (who may not return) and scramble to fill gaps. Quality drops because you're hiring in volume-panic mode.",
    with: "AI maintains a pipeline of pre-screened seasonal candidates. When you need to scale, you activate hiring and have shortlists within 48 hours—quality maintained at volume.",
  },
];

const ScenariosSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Real Scenarios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Real Problems. Real Solutions.
          </h2>
          <p className="text-lg text-muted-foreground">
            See how AI transforms everyday hospitality hiring challenges.
          </p>
        </div>

        {/* Scenarios */}
        <div className="max-w-5xl mx-auto space-y-8">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.title}
              className="rounded-3xl bg-card border border-border/50 overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              {/* Scenario Header */}
              <div className="p-6 lg:p-8 border-b border-border/50 bg-secondary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <scenario.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-muted-foreground italic">
                      {scenario.context}
                    </p>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border/50">
                {/* Without AI */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-accent-foreground/70 uppercase tracking-wide">
                      Without AI
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {scenario.without}
                  </p>
                </div>

                {/* With AI */}
                <div className="p-6 lg:p-8 bg-primary/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">
                      With AI
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {scenario.with}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
