import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="relative">{children}</main>
      <footer className="relative py-10 border-t border-accent/10 glassmorphism">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full glowing-border-cyan flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <span className="font-display text-sm font-bold tracking-[0.15em] text-accent uppercase">
              PLETHORA
            </span>
            <span className="text-muted-foreground text-xs">· Air Pura</span>
          </div>
          <p className="text-muted-foreground text-xs text-center">
            Engineering cleaner air for a smarter future
          </p>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
