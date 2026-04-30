import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";
import storeImg from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Berean Bible Book House, Ongole" },
      { name: "description", content: "Learn the story of Berean Bible Book House — a community-focused Christian bookstore in Ongole helping people grow spiritually through the Word of God." },
      { property: "og:title", content: "About Berean Bible Book House" },
      { property: "og:description", content: "Our story, mission and heart for the community in Ongole." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="bg-warm py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Our Story</p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-6xl">
            Rooted in the <span className="text-gradient-gold">Word</span>, growing the community
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Berean Bible Book House was founded with a simple desire — to make the Word of God and
            sound Christian teaching easily available to families and believers in Ongole.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-warm ring-1 ring-border">
            <img src={storeImg} alt="Inside the Berean Bible Book House" loading="lazy" width={1400} height={900} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl font-semibold">A community-focused bookstore</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Inspired by the believers of Berea who "received the word with all readiness of mind and
              searched the Scriptures daily" (Acts 17:11), our store is a place where curiosity meets
              conviction. Whether you're picking up your first Bible, finding a devotional for a loved
              one, or studying for ministry, we are here to serve you.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Locals, families, students and church members from across Ongole have made our store
              part of their faith journey — and we treat every visitor like family.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-4 font-display text-4xl font-semibold">Our Mission</h2>
          <p className="mt-5 text-xl leading-relaxed text-foreground/80 italic font-display">
            "Helping people grow spiritually through the Word of God."
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We believe a single book can change a life. Our mission is to put trustworthy spiritual
            resources within reach of every seeker — affordably, faithfully, and with care.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: BookOpen, title: "Faithful Resources", desc: "Carefully selected Bibles & sound Christian literature." },
            { icon: Heart, title: "Warm Welcome", desc: "Personal recommendations from people who care." },
            { icon: Users, title: "For Everyone", desc: "Children, families, students, pastors & seekers." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
