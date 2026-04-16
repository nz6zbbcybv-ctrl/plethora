import { AlertTriangle, Heart, TrendingUp, Wind } from "lucide-react";
import { motion } from "motion/react";

const problems = [
  {
    icon: Wind,
    title: "Rising Pollution Levels",
    stat: "8.1M",
    statLabel: "deaths/year from air pollution",
    points: [
      "PM2.5 particles 30x thinner than human hair",
      "Indoor air can be 5× more toxic than outdoor",
      "Urban areas exceed WHO safety limits daily",
    ],
    color: "cyan",
  },
  {
    icon: AlertTriangle,
    title: "Traffic Signal Hotspots",
    stat: "40%",
    statLabel: "higher exposure at intersections",
    points: [
      "Cars idle for 1-2 minutes at signals",
      "Concentrated exhaust at pedestrian level",
      "Children in school zones most vulnerable",
    ],
    color: "blue",
  },
  {
    icon: Heart,
    title: "Devastating Health Risks",
    stat: "1 in 3",
    statLabel: "deaths linked to air quality",
    points: [
      "Lung cancer, COPD, and asthma",
      "Cardiovascular disease & heart failure",
      "Neurological impact on children's IQ",
    ],
    color: "cyan",
  },
  {
    icon: TrendingUp,
    title: "Growing Crisis",
    stat: "$5T+",
    statLabel: "global economic burden annually",
    points: [
      "91% of world population breathes polluted air",
      "Low-income communities disproportionately affected",
      "No scalable solution exists at infrastructure level",
    ],
    color: "blue",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      data-ocid="problem.section"
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, oklch(0.65 0.22 270 / 0.06) 0%, transparent 60%)",
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
            The Invisible Epidemic
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground">
            We Breathe Toxins Daily
            <br />
            <span className="gradient-text-cyan">Without Realizing It</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Air pollution is the world's largest environmental health risk. The
            crisis isn't coming — it's already here, invisible in every breath.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              data-ocid={`problem.card.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`glassmorphism rounded-2xl p-7 transition-smooth group cursor-default ${
                problem.color === "cyan"
                  ? "glowing-border-cyan hover-glow-cyan"
                  : "glowing-border-blue hover-glow-blue"
              }`}
            >
              <div className="flex items-start gap-5 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    problem.color === "cyan"
                      ? "bg-accent/10 border border-accent/20"
                      : "bg-secondary/10 border border-secondary/20"
                  }`}
                >
                  <problem.icon
                    className={`w-5 h-5 ${problem.color === "cyan" ? "text-accent" : "text-secondary"}`}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {problem.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`font-display text-3xl font-black ${problem.color === "cyan" ? "gradient-text-cyan" : "text-secondary"}`}
                    >
                      {problem.stat}
                    </span>
                    <span className="text-muted-foreground text-xs font-body">
                      {problem.statLabel}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {problem.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-muted-foreground font-body"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${problem.color === "cyan" ? "bg-accent" : "bg-secondary"}`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bold statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center glassmorphism-blue rounded-3xl p-12 glowing-border-blue"
        >
          <blockquote className="font-display text-2xl md:text-4xl font-black text-foreground leading-tight">
            "The air we breathe freely today
            <br />
            <span className="gradient-text-cyan">
              carries a price we pay with our lives."
            </span>
          </blockquote>
          <p className="mt-4 text-muted-foreground text-sm font-body">
            — World Health Organization, Air Quality Report 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
