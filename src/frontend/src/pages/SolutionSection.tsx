import { Eye, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Eye,
    title: "Detects in Real-Time",
    description:
      "Advanced sensor arrays continuously monitor PM2.5, PM10, CO2, VOCs, and NO2 levels — providing live air quality intelligence.",
  },
  {
    icon: Zap,
    title: "Automatically Purifies",
    description:
      "When pollution exceeds safe thresholds, Air Pura activates multi-stage purification instantly — no human input needed.",
  },
  {
    icon: Shield,
    title: "Smart Adaptive System",
    description:
      "AI-driven logic learns pollution patterns over time, predicting spikes and preemptively activating purification for continuous clean air.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      data-ocid="solution.section"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000 0%, oklch(0.07 0 0) 50%, #000 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 50%, oklch(0.75 0.25 200 / 0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent text-xs font-body font-medium tracking-[0.3em] uppercase mb-5">
              Introducing the Solution
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground leading-tight">
              Air Pura
              <br />
              <span className="gradient-text-cyan">by Plethora</span>
            </h2>
            <p className="text-muted-foreground text-xl font-body leading-relaxed mb-8">
              Air Pura is not just an appliance — it's a statement against the
              unseen crisis. A system that fights pollution autonomously,
              intelligently, and continuously.
            </p>
            <p className="text-muted-foreground text-lg font-body leading-relaxed mb-10">
              Engineered for urban infrastructure, public spaces, and smart city
              deployments, Air Pura brings clean air from a dream to a
              deployable reality.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Non-Technical",
                "Fully Autonomous",
                "Smart City Ready",
                "Energy Efficient",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-body font-medium tracking-wider text-accent glowing-border-cyan glassmorphism uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                data-ocid={`solution.feature.${i + 1}`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="glassmorphism rounded-2xl p-6 glowing-border-cyan hover-glow-cyan transition-smooth group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-smooth">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {feature.description}
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
