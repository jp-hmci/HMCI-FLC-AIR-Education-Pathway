import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { events } from "@/lib/content";

export const Route = createFileRoute("/events")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Events"
        title="Briefings and office hours"
        lede="Small sessions for faculty, city staff, and educators. Seats are limited and listed as they are confirmed."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12">
        {events.map((e) => (
          <article key={e.title} className="grid gap-2 rounded-xl border border-line bg-card p-5 sm:grid-cols-[9rem_1fr]">
            <div>
              <p className="font-semibold text-navy">{e.date}</p>
              <p className="text-sm text-muted">{e.when}</p>
            </div>
            <div>
              <h2 className="text-xl text-navy">{e.title}</h2>
              <p className="text-sm text-gold-deep">{e.place}</p>
              <p className="mt-2 text-sm text-muted">{e.summary}</p>
            </div>
          </article>
        ))}
        <p className="text-sm text-muted">
          To hold a seat, use <Link to="/contact" className="font-semibold text-navy">Contact</Link> and name the session.
        </p>
      </div>
    </div>
  );
}
