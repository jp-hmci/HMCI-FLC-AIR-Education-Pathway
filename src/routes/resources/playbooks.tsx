import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { playbooks } from "@/lib/content";

export const Route = createFileRoute("/resources/playbooks")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Playbooks"
        title="Working guides for a bounded pilot"
        lede="Each playbook assumes a human still owns the decision. They are written for Rancho Cordova and Los Rios, not copied as statewide mandates."
      />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12">
        {playbooks.map((p) => (
          <article key={p.slug} id={p.slug} className="scroll-mt-24 rounded-xl border border-line bg-card p-6">
            <p className="text-xs uppercase tracking-wider text-gold-deep">{p.forWhom}</p>
            <h2 className="mt-1 text-2xl text-navy">{p.title}</h2>
            <p className="mt-2 text-muted">{p.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.uses.map((u) => (
                <li key={u} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy">
                  {u}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
