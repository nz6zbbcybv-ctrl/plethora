import { CheckCircle2, Cpu, Wifi, Wind } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Wifi,
    number: "01",
    title: "Sensors",
    description:
      "Multi-parameter sensors continuously scan for PM2.5, PM10, VOCs, CO2, and NO2 in real-time.",
    color: "cyan",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Smart Logic",
    description:
      "Onboard AI processor analyzes data, identifies pollution patterns, and triggers responses intelligently.",
    color: "blue",
  },
  {
    icon: Wind,
    number: "03",
    title: "Air Purification",
    description:
      "Multi-stage filtration activates — HEPA, activated carbon, UV sterilization — targeting all contaminants.",
    color: "cyan",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Clean Environment",
    description:
      "Purified, safe air returns to the environment. Verified, monitored, and continuously maintained.",
    color: "blue",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      data-ocid="how_it_works.section"
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(0.07 0 0)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, oklch(0.75 0.25 200 / 0.04) 0%, transparent 70%)",
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
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground">
            Simple Flow,
            <br />
            <span className="gradient-text-cyan">Powerful Results</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.75 0.25 200 / 0.5), oklch(0.65 0.22 270 / 0.4), oklch(0.75 0.25 200 / 0.5))",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                data-ocid={`how_it_works.step.${i + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step circle */}
                <div
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 ${
                    step.color === "cyan"
                      ? "glowing-border-cyan glow-cyan"
                      : "glowing-border-blue glow-blue"
                  } glassmorphism`}
                >
                  <step.icon
                    className={`w-6 h-6 ${step.color === "cyan" ? "text-accent" : "text-secondary"}`}
                  />
                  {/* Number badge */}
                  <span
                    className={`absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-display font-bold flex items-center justify-center ${
                      step.color === "cyan"
                        ? "bg-accent text-black"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Result callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 glassmorphism rounded-2xl p-8 glowing-border-cyan text-center"
        >
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
            From Detection to Clean Air in{" "}
            <span className="gradient-text-cyan">Under 60 Seconds</span>
          </p>
          <p className="text-muted-foreground text-base font-body mt-3">
            Faster response. Smarter adaptation. Cleaner environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
