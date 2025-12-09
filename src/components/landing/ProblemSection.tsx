import { Clock, Smartphone, Users, Globe, AlertTriangle, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: RefreshCw,
    title: "High Turnover, Constant Hiring",
    description: "You're always recruiting. Servers, chefs, housekeepers, front desk—the cycle never stops.",
  },
  {
    icon: Clock,
    title: "No Time to Hire Properly",
    description: "You're running operations, managing shifts, and dealing with no-shows. When do you screen 50 CVs?",
  },
  {
    icon: Smartphone,
    title: "Applications Everywhere",
    description: "WhatsApp messages, emails, walk-ins, Indeed, LinkedIn—candidates come from everywhere and nowhere at once.",
  },
  {
    icon: Users,
    title: "Quality Is a Gamble",
    description: "Hire fast or hire right? In hospitality, you need both. One bad hire disrupts the entire team.",
  },
  {
    icon: Globe,
    title: "Language & Cultural Barriers",
    description: "Diverse talent pool, but screening across languages and backgrounds takes expertise and time you don't have.",
  },
  {
    icon: AlertTriangle,
    title: "Last-Minute Panic Hiring",
    description: "Someone quits Friday night. You need a replacement by Monday. Desperation leads to poor decisions.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Hospitality Hiring Is Broken
          </h2>
          <p className="text-lg text-muted-foreground">
            The same problems, every day, across every property.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card-gradient border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-foreground/70" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="text-xl font-serif text-foreground italic">
            "What if AI could handle the hiring chaos while you focus on guests and operations?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
