import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { partners } from "@/lib/content";

export const Route = createFileRoute("/partners")({ component: Page });

function Page() {
  const groups = ["Education", "Public", "Industry"] as const;
  return (
    <div>
      <PageHero
        kicker="Partners"
        title="The network behind the pathways"
        lede="Folsom Lake College and Los Rios are the education home. HMCI and the City of Rancho Cordova operate the effort with them. Intel, Solidigm, and NVIDIA education sit in the industry row."
      />
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
        {groups.map((group) => (
          <section key={group}>
            <h2 className="text-2xl text-navy">{group}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {partners
                .filter((p) => p.group === group)
                .map((p) => (
                  <article key={p.name} className="rounded-xl border border-line bg-card p-5">
                    <p className="text-xs uppercase tracking-wider text-gold-deep">{p.role}</p>
                    <h3 className="mt-1 text-xl text-navy">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted">{p.detail}</p>
                  </article>
                ))}
            </div>
          </section>
        ))}
        <p className="max-w-2xl text-sm text-muted">
          A logo here means a role in this phase of AIR Pathways. It does not mean the partner runs every course, funds
          every seat, or endorses a specific tool.
        </p>
      </div>
    </div>
  );
}
