import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/business")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="For business"
        title="Upskilling for firms that are already here"
        lede="Free pathways for office, plant, and security work, plus playbooks that assume a 30-day pilot — not a transformation program."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Name the work", "One workflow, one owner, one measure. Not “adopt AI.”"],
            ["Train the people", "AIR Foundations or a provider certificate matched to the role."],
            ["Decide", "Scale, revise, or stop. Write it down."],
          ].map(([t, d], i) => (
            <li key={t} className="rounded-xl border border-line bg-card p-5">
              <p className="text-xs font-semibold text-gold-deep">0{i + 1}</p>
              <h2 className="mt-1 text-2xl text-navy">{t}</h2>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link to="/pathways/industry" className="text-navy no-underline">Industry certificates</Link>
          <Link to="/resources/playbooks" className="text-navy no-underline">Manufacturing and security playbooks</Link>
          <Link to="/services" className="text-navy no-underline">Request a briefing</Link>
        </div>
      </div>
    </div>
  );
}
