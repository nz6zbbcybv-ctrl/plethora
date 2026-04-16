import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToDiscover = () => {
    const el = document.querySelector("#problem");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.75 0.25 200 / 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[600px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.65 0.22 270 / 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.28 200) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.28 200) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-accent" />
            <span className="text-accent text-xs font-body font-medium tracking-[0.3em] uppercase">
              Air Pura · Redefining Clean Air
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-black leading-[1.0] mb-6"
          >
            <span className="block text-foreground">The Air You</span>
            <span className="block text-foreground">Breathe Is</span>
            <span className="block gradient-text-cyan">Killing You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed mb-10 max-w-lg"
          >
            Pollution is invisible, but its impact is deadly. Every breath you
            take in urban spaces may contain toxic particles harming your lungs,
            heart, and brain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={scrollToDiscover}
              className="group relative px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase overflow-hidden transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.25 200), oklch(0.65 0.22 270))",
                color: "#000",
                boxShadow: "0 0 40px oklch(0.75 0.25 200 / 0.5)",
              }}
            >
              <span className="relative z-10">
                Discover the Future of Clean Air
              </span>
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() =>
                document
                  .querySelector("#solution")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full font-display font-semibold text-sm tracking-[0.1em] uppercase glowing-border-cyan text-accent glassmorphism hover-glow-cyan transition-smooth"
            >
              Our Solution
            </button>
          </motion.div>
        </div>

        {/* Right: Product image */}
        <div className="flex-1 flex items-center justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-[-40px] rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse, oklch(0.75 0.25 200 / 0.4) 0%, transparent 60%)",
              }}
            />
            <div className="animate-float">
              <img
                src="/assets/generated/hero-air-purifier.dim_900x900.png"
                alt="Air Pura purification device"
                className="w-64 md:w-80 lg:w-96 h-auto object-contain relative z-10"
                style={{
                  filter:
                    "drop-shadow(0 0 40px oklch(0.75 0.25 200 / 0.5)) drop-shadow(0 0 80px oklch(0.65 0.22 270 / 0.3))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-20"
      >
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "7M+", label: "Annual Deaths", color: "cyan" },
            { value: "99%", label: "Particulate Removal", color: "blue" },
            { value: "24/7", label: "Real-Time Monitoring", color: "cyan" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`glassmorphism rounded-xl p-4 text-center ${stat.color === "cyan" ? "glowing-border-cyan" : "glowing-border-blue"}`}
            >
              <div
                className={`font-display text-2xl md:text-3xl font-black ${stat.color === "cyan" ? "gradient-text-cyan" : "text-foreground"}`}
              >
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs mt-1 font-body tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToDiscover}
        data-ocid="hero.scroll_indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-smooth scroll-indicator"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.2em] uppercase font-body">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
}
