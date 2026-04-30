import { Link } from "@tanstack/react-router";
import { BookOpen, Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-gold text-accent-foreground shadow-sm">
            <BookOpen className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-foreground">Berean</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Bible Book House</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+919440324356"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+919440324356"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> +91 94403 24356
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
