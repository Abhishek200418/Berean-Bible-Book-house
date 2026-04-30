import { Link } from "@tanstack/react-router";
import { BookOpen, MapPin, Phone, Clock, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-gold text-accent-foreground">
              <BookOpen className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">Berean</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Bible Book House</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Your trusted source for Bibles, Christian literature, and spiritual resources in Ongole.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/reviews", label: "Reviews" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Visit Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Beside Bank of Maharashtra, Gadiyaram Vari Veedhi, Bandla Metla, Ongole, AP — 523001</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-accent" />
              <span>Open until 8:30 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+919440324356" className="flex items-center gap-3 text-muted-foreground hover:text-accent">
                <Phone className="h-4 w-4 text-accent" /> +91 94403 24356
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919440324356"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Berean Bible Book House. All rights reserved.</p>
          <p>Ongole, Andhra Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
