import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#usps" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
  { label: "Vision", href: "#vision" },
  { label: "Team", href: "#team" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      data-ocid="nav.header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "glassmorphism border-b border-accent/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.logo"
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse-glow" />
            <div className="relative w-8 h-8 rounded-full glowing-border-cyan flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-black tracking-[0.15em] text-glow-cyan text-accent uppercase">
              PLETHORA
            </span>
            <span className="text-[9px] font-body text-muted-foreground tracking-[0.2em] uppercase">
              Air Pura
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          data-ocid="nav.links"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid={`nav.link.${link.label.toLowerCase()}`}
              onClick={() => scrollTo(link.href)}
              className="text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-smooth relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          type="button"
          data-ocid="nav.cta_button"
          onClick={() => scrollTo("#cta")}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full glowing-border-cyan glassmorphism text-accent text-xs font-display font-semibold tracking-[0.1em] uppercase hover-glow-cyan transition-smooth"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          Get Access
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          data-ocid="nav.mobile_menu_button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-accent transition-smooth ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-accent transition-smooth ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-accent transition-smooth ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism border-t border-accent/10"
            data-ocid="nav.mobile_menu"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-body tracking-wider text-muted-foreground hover:text-accent transition-smooth text-left uppercase"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollTo("#cta")}
                className="mt-2 px-4 py-2 rounded-full glowing-border-cyan text-accent text-xs font-semibold tracking-wider uppercase text-center"
              >
                Get Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
