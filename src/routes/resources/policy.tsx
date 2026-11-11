import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { policies } from "@/lib/content";

export const Route = createFileRoute("/resources/policy")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Policy guides"
        title="Drafts for local adaptation"
        lede="These are planning templates for California schools, a community college, a city, and local employers. They are not board policy, a regulation, or legal advice."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12">
        {policies.map((p) => (
          <article key={p.slug} id={p.slug} className="scroll-mt-24 rounded-xl border border-line bg-card p-5">
            <h2 className="text-2xl text-navy">{p.title}</h2>
            <p className="mt-2 text-sm text-muted">{p.summary}</p>
          </article>
        ))}
        <p className="text-sm text-muted">
          Official rules still come from your district, Los Rios, the City, and state or federal law. Start from those
          when they exist, and use these drafts only to see what a local document should cover.
        </p>
      </div>
    </div>
  );
}
