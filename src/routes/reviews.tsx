import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Berean Bible Book House, Ongole ⭐ 4.5" },
      { name: "description", content: "Read what customers say about Berean Bible Book House. ⭐ 4.5 stars from 31 Google reviews." },
      { property: "og:title", content: "Customer Reviews — Berean Bible Book House" },
      { property: "og:description", content: "Trusted by the Ongole community — 4.5 star rating." },
    ],
  }),
  component: ReviewsPage,
});

const testimonials = [
  { name: "Prakash R.", text: "Wonderful collection of Bibles and Christian books. The owner is very helpful and friendly. Best place in Ongole for spiritual books.", stars: 5 },
  { name: "Mary J.", text: "I have been buying devotionals from here for years. They always have something new and the prices are very reasonable.", stars: 5 },
  { name: "Daniel K.", text: "Great selection of study Bibles in both English and Telugu. Highly recommended for pastors and Bible students.", stars: 5 },
  { name: "Sunitha P.", text: "Bought beautiful children's Bible storybooks for my kids. They love them! Lovely store with a peaceful atmosphere.", stars: 4 },
  { name: "Joseph M.", text: "Trustworthy place. The staff genuinely cares and gives honest recommendations. A blessing to our community.", stars: 5 },
  { name: "Esther A.", text: "Found exactly the commentary I needed. Very neat shop and easy to find. Will visit again.", stars: 4 },
];

function ReviewsPage() {
  return (
    <Layout>
      <section className="bg-warm py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Loved by the Community</p>
          <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">
            What our <span className="text-gradient-gold">customers</span> say
          </h1>

          <div className="mt-10 inline-flex items-center gap-5 rounded-2xl border border-border bg-card px-8 py-5 shadow-warm">
            <div className="text-left">
              <div className="font-display text-5xl font-semibold text-foreground">4.5</div>
              <div className="mt-1 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`h-4 w-4 ${i <= 4 ? "fill-accent text-accent" : "fill-accent/50 text-accent"}`} />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <div className="text-sm font-medium text-foreground">31 Reviews</div>
              <div className="text-xs text-muted-foreground">on Google</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-warm">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-accent/20" />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`h-4 w-4 ${i <= t.stars ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">Verified Customer</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground">Have you visited us? We'd love to hear from you.</p>
          <a
            href="https://www.google.com/search?q=Berean+Bible+Book+House+Ongole"
            target="_blank" rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-warm"
          >
            Leave a Google Review
          </a>
        </div>
      </section>
    </Layout>
  );
}
