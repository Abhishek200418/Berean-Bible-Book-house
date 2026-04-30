import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Star, Phone, MapPin, BookOpen, Heart, Sparkles, Users, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-bible.jpg";
import biblesImg from "@/assets/bibles.jpg";
import devotionalsImg from "@/assets/devotionals.jpg";
import literatureImg from "@/assets/literature.jpg";
import storeImg from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berean Bible Book House — Bible Store in Ongole | Christian Books" },
      { name: "description", content: "Berean Bible Book House in Ongole offers Bibles, Christian books, devotionals & study materials. Trusted local store. ⭐ 4.5 rating. Visit us today." },
      { property: "og:title", content: "Berean Bible Book House — Your Trusted Source for Spiritual Growth" },
      { property: "og:description", content: "Bibles, Christian literature, devotionals & study guides in Ongole, Andhra Pradesh." },
    ],
  }),
  component: HomePage,
});

const categories = [
  { name: "Holy Bibles", desc: "Multiple versions & translations", img: biblesImg },
  { name: "Christian Literature", desc: "Inspiring books & biographies", img: literatureImg },
  { name: "Devotionals", desc: "Daily readings for your walk", img: devotionalsImg },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-warm">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(oklch(0.4_0.05_50)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Established in Ongole
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Berean <span className="text-gradient-gold">Bible</span> Book House
            </h1>
            <p className="mt-5 max-w-lg font-display text-2xl italic text-muted-foreground md:text-3xl">
              "Your Trusted Source for Spiritual Growth"
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/75">
              A welcoming Christian bookstore offering Bibles, devotionals, study materials and inspiring
              literature — helping families, students and church members grow deeper in the Word of God.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=Berean+Bible+Book+House+Ongole"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-warm transition-all hover:scale-[1.02]"
              >
                <MapPin className="h-4 w-4" /> Visit Store
              </a>
              <a
                href="tel:+919440324356"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`h-5 w-5 ${i <= 4 ? "fill-accent text-accent" : "fill-accent/50 text-accent"}`} />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">4.5</span>
                <span className="text-muted-foreground"> · 31 Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-warm ring-1 ring-border">
              <img src={heroImg} alt="Open Bible on a wooden table with warm sunlight" width={1600} height={1024} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-warm ring-1 ring-border sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Open Today</div>
                  <div className="text-sm font-semibold text-foreground">Until 8:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Welcome</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
            A place where faith finds its voice
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            For years, Berean Bible Book House has served the Ongole community as a quiet sanctuary of
            Scripture and spiritual literature. Step inside and discover carefully curated Bibles,
            devotionals and resources to nourish your daily walk with God.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Explore</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Featured Categories</h2>
            </div>
            <Link to="/products" className="hidden items-center gap-1.5 text-sm font-medium text-primary hover:text-accent sm:inline-flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.name}
                to="/products"
                className="group overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{c.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Browse <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: BookOpen, title: "Wide Selection", desc: "Bibles in multiple translations and languages." },
            { icon: Heart, title: "Faithful Service", desc: "Helping the community grow in faith for years." },
            { icon: Users, title: "Family Friendly", desc: "Resources for children, students and adults alike." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT US TODAY */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={storeImg} alt="" loading="lazy" width={1400} height={900} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center text-primary-foreground sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Come See Us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Visit Us Today</h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            Beside Bank of Maharashtra, Gadiyaram Vari Veedhi, Bandla Metla, Ongole, AP — 523001
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://maps.google.com/?q=Berean+Bible+Book+House+Ongole"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground hover:bg-gold"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
            <a
              href="tel:+919440324356"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur hover:bg-primary-foreground/20"
            >
              <Phone className="h-4 w-4" /> +91 94403 24356
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
