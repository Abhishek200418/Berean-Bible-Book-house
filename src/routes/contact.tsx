import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Berean Bible Book House, Ongole" },
      { name: "description", content: "Visit Berean Bible Book House in Ongole. Address, phone, store timings, map & contact form. Open until 8:30 PM." },
      { property: "og:title", content: "Contact Berean Bible Book House" },
      { property: "og:description", content: "Find us beside Bank of Maharashtra, Ongole. Call +91 94403 24356." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-warm py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Get in Touch</p>
          <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">
            We'd love to <span className="text-gradient-gold">hear</span> from you
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Visit us in person, call, or send a message — we're glad to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: MapPin, title: "Address", body: "Beside Bank of Maharashtra, Gadiyaram Vari Veedhi, Bandla Metla, Ongole, AP — 523001" },
            { icon: Phone, title: "Phone", body: "+91 94403 24356", href: "tel:+919440324356" },
            { icon: Clock, title: "Store Timings", body: "Open until 8:30 PM" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="mt-2 block text-base text-foreground/80 hover:text-accent">{c.body}</a>
              ) : (
                <p className="mt-2 text-base text-foreground/80">{c.body}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-warm ring-1 ring-border">
            <iframe
              title="Berean Bible Book House Location"
              src="https://www.google.com/maps?q=Berean+Bible+Book+House+Ongole&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h2 className="font-display text-3xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>

            {sent ? (
              <div className="mt-6 rounded-xl bg-accent/15 p-5 text-center text-sm text-foreground">
                <Mail className="mx-auto mb-2 h-5 w-5 text-accent" />
                Thank you! Your message has been received. We'll be in touch shortly.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-foreground/80">Name</label>
                    <input required className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/80">Phone</label>
                    <input className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground/80">Email</label>
                  <input type="email" required className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground/80">Message</label>
                  <textarea required rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-warm hover:scale-[1.01] transition-transform">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
