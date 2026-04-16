import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CtaSection() {
  return (
    <section
      id="cta"
      data-ocid="cta.section"
      className="relative py-36 overflow-hidden"
      style={{ background: "oklch(0.06 0 0)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, oklch(0.75 0.25 200 / 0.08) 0%, oklch(0.65 0.22 270 / 0.05) 40%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.75 0.25 200) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.25 200) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glassmorphism rounded-full px-5 py-2 glowing-border-cyan mb-10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-accent text-xs font-body font-medium tracking-[0.25em] uppercase">
              Join the Movement
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-black mb-6 leading-[1.05]">
            <span className="gradient-text-white-cyan">Join the Movement</span>
            <br />
            <span className="text-foreground">for Clean Air</span>
          </h2>

          <p className="text-muted-foreground text-xl md:text-2xl font-body leading-relaxed mb-4 max-w-3xl mx-auto">
            The future is breathable.
          </p>
          <p className="text-muted-foreground text-lg font-body leading-relaxed mb-14 max-w-2xl mx-auto">
            Together we can transform urban air quality. Air Pura by Plethora is
            ready to make every city a place where clean air is a certainty, not
            a hope.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.button
              type="button"
              data-ocid="cta.primary_button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .querySelector("#solution")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 px-10 py-5 rounded-full font-display font-black text-sm tracking-[0.1em] uppercase transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.25 200), oklch(0.65 0.22 270))",
                color: "#000",
                boxShadow:
                  "0 0 50px oklch(0.75 0.25 200 / 0.5), 0 0 100px oklch(0.75 0.25 200 / 0.2)",
              }}
            >
              Breathe the Future
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              type="button"
              data-ocid="cta.secondary_button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .querySelector("#problem")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-3 px-10 py-5 rounded-full font-display font-semibold text-sm tracking-[0.1em] uppercase glowing-border-cyan glassmorphism text-accent hover-glow-cyan transition-smooth"
            >
              Learn More
            </motion.button>
          </div>

          {/* Final tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-20"
          >
            <div className="section-divider mb-10" />
            <p className="font-display text-2xl md:text-4xl font-black">
              <span className="text-muted-foreground">Air Pura · </span>
              <span className="gradient-text-cyan">Redefining Clean Air</span>
              <span className="text-muted-foreground"> · Plethora</span>
            </p>
            <p className="text-muted-foreground text-sm font-body mt-4 tracking-[0.2em] uppercase">
              Engineering cleaner air for a smarter future
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
