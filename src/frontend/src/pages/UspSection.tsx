import { Brain, Building2, Cpu, DollarSign, Leaf, Sliders } from "lucide-react";
import { motion } from "motion/react";

const usps = [
  {
    icon: Brain,
    title: "Real-Time Air Intelligence",
    description:
      "Sensor arrays deliver millisecond-level air quality readings — detecting threats before they become dangers.",
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "Autonomous Purification System",
    description:
      "Zero manual intervention required. The system detects, decides, and purifies — all on its own.",
    color: "blue",
  },
  {
    icon: Sliders,
    title: "Manual + Smart Hybrid Control",
    description:
      "Override when needed. Full manual control available alongside autonomous smart mode for complete flexibility.",
    color: "cyan",
  },
  {
    icon: Leaf,
    title: "Energy Efficient Design",
    description:
      "Engineered to deliver maximum purification with minimal power consumption — sustainable by design.",
    color: "blue",
  },
  {
    icon: Building2,
    title: "Scalable for Smart Cities",
    description:
      "From single units to city-wide networks — Air Pura scales seamlessly into smart urban infrastructure.",
    color: "cyan",
  },
  {
    icon: DollarSign,
    title: "Low-Cost & Deployable Anywhere",
    description:
      "Affordable manufacturing and modular design enables deployment in any environment, globally.",
    color: "blue",
  },
];

export default function UspSection() {
  return (
    <section
      id="usps"
      data-ocid="usps.section"
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.65 0.22 270 / 0.05) 0%, transparent 70%)",
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
            What Makes Us Different
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground">
            Built for the
            <br />
            <span className="gradient-text-cyan">Next Generation</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-xl mx-auto">
            Six core advantages that make Air Pura the most advanced,
            deployable, and impactful clean-air solution available today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              data-ocid={`usps.card.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`glassmorphism rounded-2xl p-7 transition-smooth cursor-default group ${
                usp.color === "cyan"
                  ? "glowing-border-cyan hover-glow-cyan"
                  : "glowing-border-blue hover-glow-blue"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-smooth ${
                  usp.color === "cyan"
                    ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/20"
                    : "bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/20"
                }`}
              >
                <usp.icon
                  className={`w-6 h-6 ${usp.color === "cyan" ? "text-accent" : "text-secondary"}`}
                />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-tight">
                {usp.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
