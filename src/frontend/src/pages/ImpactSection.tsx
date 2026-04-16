import { Globe, MapPin, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";

const impacts = [
  {
    icon: MapPin,
    title: "Cleaner High-Pollution Zones",
    stat: "60%",
    statLabel: "reduction in local PM2.5",
    description:
      "Deployed at traffic signals and public spaces, Air Pura dramatically reduces pollution in the most affected urban hotspots.",
    color: "cyan",
  },
  {
    icon: Users,
    title: "Safer Public Environments",
    stat: "1B+",
    statLabel: "people in target deployment areas",
    description:
      "Schools, hospitals, transport hubs, and parks gain protection from the invisible threats people face every day.",
    color: "blue",
  },
  {
    icon: Globe,
    title: "City-Scale Deployment",
    stat: "500+",
    statLabel: "units per smart city network",
    description:
      "Networked units share data and coordinate purification, creating city-wide air quality intelligence and response.",
    color: "cyan",
  },
  {
    icon: Rocket,
    title: "Future-Ready Technology",
    stat: "10x",
    statLabel: "more scalable than alternatives",
    description:
      "Modular architecture means Air Pura can grow with cities, integrate with IoT networks, and evolve with emerging standards.",
    color: "blue",
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      data-ocid="impact.section"
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, oklch(0.75 0.25 200 / 0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-xs font-body font-medium tracking-[0.3em] uppercase mb-4">
            Real-World Impact
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground">
            A World That Breathes
            <br />
            <span className="gradient-text-cyan">Freely Again</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
            Air Pura isn't a product — it's a movement. Every unit deployed
            creates a ripple of positive impact through communities and cities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {impacts.map((impact, i) => (
            <motion.div
              key={impact.title}
              data-ocid={`impact.card.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`glassmorphism rounded-2xl p-8 transition-smooth group cursor-default ${
                impact.color === "cyan"
                  ? "glowing-border-cyan hover-glow-cyan"
                  : "glowing-border-blue hover-glow-blue"
              }`}
            >
              <div className="flex items-center gap-5 mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-smooth ${
                    impact.color === "cyan"
                      ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/20"
                      : "bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/20"
                  }`}
                >
                  <impact.icon
                    className={`w-6 h-6 ${impact.color === "cyan" ? "text-accent" : "text-secondary"}`}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {impact.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`font-display text-3xl font-black ${impact.color === "cyan" ? "gradient-text-cyan" : "text-secondary"}`}
                    >
                      {impact.stat}
                    </span>
                    <span className="text-muted-foreground text-xs font-body">
                      {impact.statLabel}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
