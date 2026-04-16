import { BrainCircuit, Globe2, Network, TrafficCone } from "lucide-react";
import { motion } from "motion/react";

const visions = [
  {
    icon: TrafficCone,
    title: "Traffic Signal Purification",
    description:
      "Every traffic signal becomes an air purification node — turning the problem source into the solution infrastructure.",
    timeline: "Phase 1",
    color: "cyan",
  },
  {
    icon: Network,
    title: "Smart City Integration",
    description:
      "Air Pura units communicate across city networks, sharing real-time data for coordinated, city-wide clean air management.",
    timeline: "Phase 2",
    color: "blue",
  },
  {
    icon: BrainCircuit,
    title: "AI Pollution Prediction",
    description:
      "Machine learning models predict pollution spikes hours in advance, pre-activating systems before air quality degrades.",
    timeline: "Phase 3",
    color: "cyan",
  },
  {
    icon: Globe2,
    title: "Nationwide Deployment",
    description:
      "From pilot cities to national infrastructure — scalable to every major urban center in India and beyond.",
    timeline: "Phase 4",
    color: "blue",
  },
];

export default function VisionSection() {
  return (
    <section
      id="vision"
      data-ocid="vision.section"
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(0.07 0 0)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 30%, oklch(0.65 0.22 270 / 0.07) 0%, transparent 65%)",
        }}
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.75 0.25 200) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.25 200) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
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
            The Road Ahead
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground">
            A Future Where Every
            <br />
            <span className="gradient-text-cyan">City Breathes Clean</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
            Air Pura is just the beginning. Our vision extends to a world where
            intelligent infrastructure ensures clean air is a right, not a
            privilege.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.75 0.25 200 / 0.4), oklch(0.65 0.22 270 / 0.3), oklch(0.75 0.25 200 / 0.1))",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visions.map((vision, i) => (
              <motion.div
                key={vision.title}
                data-ocid={`vision.card.${i + 1}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className={`glassmorphism rounded-2xl p-7 transition-smooth group cursor-default relative ${
                  vision.color === "cyan"
                    ? "glowing-border-cyan hover-glow-cyan"
                    : "glowing-border-blue hover-glow-blue"
                } ${i % 2 === 0 ? "lg:mr-8" : "lg:ml-8 lg:mt-8"}`}
              >
                {/* Phase badge */}
                <span
                  className={`inline-block text-[10px] font-display font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4 ${
                    vision.color === "cyan"
                      ? "bg-accent/15 text-accent border border-accent/25"
                      : "bg-secondary/15 text-secondary border border-secondary/25"
                  }`}
                >
                  {vision.timeline}
                </span>
                <div className="flex items-start gap-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-smooth ${
                      vision.color === "cyan"
                        ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/20"
                        : "bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/20"
                    }`}
                  >
                    <vision.icon
                      className={`w-5 h-5 ${vision.color === "cyan" ? "text-accent" : "text-secondary"}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {vision.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {vision.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
