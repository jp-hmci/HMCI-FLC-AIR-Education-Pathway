import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { news } from "@/lib/content";

export const Route = createFileRoute("/news")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Newsroom"
        title="Notes from the build"
        lede="Dated updates on pathways, credit, and scope. Older items stay on the page."
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-12">
        {news.map((n) => (
          <article key={n.slug} id={n.slug} className="scroll-mt-24 border-b border-line pb-8">
            <p className="text-xs text-muted">{n.date}</p>
            <h2 className="mt-1 text-3xl text-navy">{n.title}</h2>
            {n.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-3 text-muted">
                {p}
              </p>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}
