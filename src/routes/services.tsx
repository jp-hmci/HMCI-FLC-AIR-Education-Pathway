import { createFileRoute } from "@tanstack/react-router";
import { GoldLink, PageHero } from "@/components/site/bits";
import { services } from "@/lib/content";

export const Route = createFileRoute("/services")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Services and support"
        title="Help beyond the self-paced catalog"
        lede="Workshops, readiness conversations, policy drafts, and a path into a bounded pilot. Many public resources stay free. Custom work is scoped before anyone starts."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="rounded-xl border border-line bg-card p-5">
              <h2 className="text-2xl text-navy">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl bg-mist p-6">
            <h2 className="text-2xl text-navy">What AIR will do</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Teach tools and review habits</li>
              <li>Help name a use case and its constraints</li>
              <li>Draft policy language for local counsel to edit</li>
              <li>Prepare a team and introduce partners for a pilot</li>
            </ul>
          </section>
          <section className="rounded-xl bg-navy p-6 text-white">
            <h2 className="text-2xl">What AIR will not do</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/75">
              <li>Build, host, or operate your production AI system</li>
              <li>Replace legal, cybersecurity, procurement, or clinical review</li>
              <li>Promise that a pilot will be selected</li>
              <li>Assign NVIDIA hardware</li>
            </ul>
          </section>
        </div>
        <div className="mt-8">
          <GoldLink to="/contact">Request support</GoldLink>
        </div>
      </div>
    </div>
  );
}
