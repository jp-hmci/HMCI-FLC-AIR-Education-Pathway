import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/resources/")({ component: Page });

const cards = [
  { to: "/pathways", k: "Learn", title: "AIR Pathways", text: "Foundations, industry certificates, and NVIDIA education." },
  { to: "/faqs", k: "Learn", title: "FAQs", text: "What this is, who it is for, and what it costs." },
  { to: "/resources/prompting", k: "Use", title: "Prompting guides", text: "Role-specific prompts with a review step built in." },
  { to: "/resources/playbooks", k: "Use", title: "Playbooks", text: "Workflows and short pilots for school, plant, and security teams." },
  { to: "/resources/tools", k: "Use", title: "Tools", text: "A short awareness list. Not an endorsement or a purchase order." },
  { to: "/resources/policy", k: "Govern", title: "Policy guides", text: "Drafts for schools, colleges, the city, employers, and nonprofits." },
  { to: "/services", k: "Connect", title: "Services", text: "Workshops, readiness, and implementation planning." },
  { to: "/partners", k: "Connect", title: "Partners", text: "Who operates AIR Pathways and who teaches beside it." },
  { to: "/news", k: "Updates", title: "Newsroom", text: "What changed, in dated notes." },
  { to: "/events", k: "Updates", title: "Events", text: "Briefings and office hours." },
];

function Page() {
  return (
    <div>
      <PageHero
        kicker="Resources"
        title="A directory, not a pile"
        lede="Grouped by what you want next: learn, use, govern, connect, or stay current."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link key={c.to + c.title} to={c.to} className="rounded-xl border border-line bg-card p-5 no-underline hover:border-gold">
            <p className="text-xs uppercase tracking-wider text-gold-deep">{c.k}</p>
            <h2 className="mt-1 text-2xl text-navy">{c.title}</h2>
            <p className="mt-2 text-sm text-muted">{c.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
