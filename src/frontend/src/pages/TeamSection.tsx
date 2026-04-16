import { motion } from "motion/react";

const members = [
  { name: "Plethora Team", role: "Engineering & Design", initial: "P" },
  { name: "Air Systems Division", role: "Sensor & Hardware", initial: "A" },
  { name: "AI Research Group", role: "Smart Logic & ML", initial: "AI" },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      data-ocid="team.section"
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.75 0.25 200 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Team info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent text-xs font-body font-medium tracking-[0.3em] uppercase mb-5">
              The Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6 text-foreground leading-tight">
              Team Plethora
            </h2>
            <p className="text-muted-foreground text-xl font-body leading-relaxed mb-6 italic">
              "Engineering cleaner air for a smarter future"
            </p>
            <p className="text-muted-foreground text-base font-body leading-relaxed mb-8">
              We are a passionate team of engineers, designers, and visionaries
              united by one mission — making clean air accessible to every human
              on this planet. Air Pura is our statement, our commitment, and our
              legacy.
            </p>

            {/* Team badges */}
            <div className="flex flex-col gap-4">
              {members.map((member, i) => (
                <motion.div
                  key={member.name}
                  data-ocid={`team.member.${i + 1}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4 glassmorphism rounded-xl p-4 glowing-border-cyan"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-display text-sm font-bold">
                      {member.initial}
                    </span>
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-foreground">
                      {member.name}
                    </div>
                    <div className="text-muted-foreground text-xs font-body">
                      {member.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Project declaration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glassmorphism-blue rounded-3xl p-10 glowing-border-blue"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full glowing-border-cyan flex items-center justify-center animate-pulse-glow">
                <div className="w-4 h-4 rounded-full bg-accent" />
              </div>
              <div>
                <div className="font-display text-xl font-black text-accent tracking-[0.1em] uppercase">
                  PLETHORA
                </div>
                <div className="text-xs text-muted-foreground font-body tracking-[0.15em]">
                  Air Pura Project
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "Project",
                  value: "Air Pura – Smart Purification System",
                },
                {
                  label: "Mission",
                  value: "Deploy intelligent clean-air infrastructure globally",
                },
                { label: "Stage", value: "Prototype → Pilot Deployment" },
                {
                  label: "Goal",
                  value: "Urban air quality transformation at scale",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-accent/10 pb-4 last:border-0 last:pb-0"
                >
                  <div className="text-xs text-muted-foreground font-body tracking-[0.2em] uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="font-display text-sm font-semibold text-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-accent/10">
              <p className="text-muted-foreground text-sm font-body italic leading-relaxed">
                "We don't just build technology. We build the future — one
                breath at a time."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
