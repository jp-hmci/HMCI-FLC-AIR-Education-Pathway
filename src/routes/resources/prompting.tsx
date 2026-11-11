import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { prompts } from "@/lib/content";

export const Route = createFileRoute("/resources/prompting")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Prompting"
        title="Prompts with the review left in"
        lede="Copy them, then change the facts. If a prompt would need a real student, patient, or resident record, do not run it."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-2">
        {prompts.map((group) => (
          <section key={group.role} className="rounded-xl border border-line bg-card p-6">
            <h2 className="text-2xl text-navy">{group.role}</h2>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
