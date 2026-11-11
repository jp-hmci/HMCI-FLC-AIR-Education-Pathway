import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/government")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="For government"
        title="Public employees, public records, practical AI"
        lede="Training and planning for city and agency teams in Rancho Cordova. AIR does not run a production system for you."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2">
        <img src="/images/civic.jpg" alt="Civic plaza and low public building" className="h-80 w-full rounded-xl object-cover" />
        <div className="space-y-4">
          {[
            ["/pathways", "Free pathways", "Foundations in business, cybersecurity, and everyday prompting for staff who write, route, and review."],
            ["/resources/prompting", "Prompts for public work", "Agenda summaries, resident FAQs, and a reminder to quote only what you pasted."],
            ["/resources/policy", "Local policy drafts", "City, records, procurement, and a public-safety supplement. Your counsel still reviews them."],
            ["/services", "Use-case planning", "One problem, named users, a data boundary, and a decision to pilot or stop."],
          ].map(([to, title, text]) => (
            <Link key={to} to={to} className="block rounded-xl border border-line bg-card p-5 no-underline">
              <h2 className="text-xl text-navy">{title}</h2>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
