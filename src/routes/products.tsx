import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import biblesImg from "@/assets/bibles.jpg";
import literatureImg from "@/assets/literature.jpg";
import devotionalsImg from "@/assets/devotionals.jpg";
import childrenImg from "@/assets/children.jpg";
import studyImg from "@/assets/study.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Categories — Bibles, Christian Books in Ongole" },
      { name: "description", content: "Browse Bibles, Christian literature, devotionals, children's religious books and Bible study guides at Berean Bible Book House, Ongole." },
      { property: "og:title", content: "Our Products — Berean Bible Book House" },
      { property: "og:description", content: "Bibles, devotionals, study guides, children's Bibles & more in Ongole." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    name: "Holy Bibles",
    img: biblesImg,
    desc: "Bibles in multiple translations and languages — KJV, NIV, ESV, Telugu and more. Choose from compact, study, journaling and gift editions.",
    items: ["Telugu Bibles", "English KJV / NIV / ESV", "Study Bibles", "Gift & Journaling Editions"],
  },
  {
    name: "Christian Literature",
    img: literatureImg,
    desc: "Timeless classics, biographies of faith and contemporary Christian writers to encourage and challenge your walk.",
    items: ["Classics", "Biographies", "Theology", "Apologetics"],
  },
  {
    name: "Devotional Books",
    img: devotionalsImg,
    desc: "Daily devotionals to keep your heart anchored in God's Word every morning and evening.",
    items: ["Daily Devotionals", "Topical Devotionals", "Women & Men", "Couples & Families"],
  },
  {
    name: "Children's Religious Books",
    img: childrenImg,
    desc: "Beautifully illustrated Bible storybooks and activity books to nurture faith from a young age.",
    items: ["Storybooks", "Picture Bibles", "Activity Books", "Sunday School"],
  },
  {
    name: "Bible Study Guides",
    img: studyImg,
    desc: "Commentaries, concordances, workbooks and tools for deeper personal and group Bible study.",
    items: ["Commentaries", "Concordances", "Workbooks", "Group Studies"],
  },
];

export function ProductsPage() {
  return (
    <Layout>
      <section className="bg-warm py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">What We Offer</p>
          <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">
            Products & <span className="text-gradient-gold">Categories</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A carefully curated selection of Bibles, books, devotionals and study materials —
            something for every age and stage of faith.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          {products.map((p, idx) => (
            <div
              key={p.name}
              className={`grid items-center gap-10 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-border">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Category</p>
                <h2 className="mt-2 font-display text-4xl font-semibold">{p.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Looking for something specific?</h2>
          <p className="mt-3 text-muted-foreground">Call us — we're happy to help you find the right book.</p>
          <a href="tel:+919440324356" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-warm">
            Call +91 94403 24356
          </a>
        </div>
      </section>
    </Layout>
  );
}
