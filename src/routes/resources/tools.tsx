import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { tools } from "@/lib/content";

export const Route = createFileRoute("/resources/tools")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Tools"
        title="A short awareness list"
        lede="Names you will meet in the pathways. Listing a tool is not a purchase recommendation and not permission to connect it to agency or student systems."
      />
      <div className="mx-auto max-w-3xl overflow-x-auto px-4 py-12">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-wider text-muted">
              <th className="py-2 pr-4 font-semibold">Tool</th>
              <th className="py-2 pr-4 font-semibold">Typical use</th>
              <th className="py-2 font-semibold">Pause before</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((t) => (
              <tr key={t.name} className="border-b border-line align-top">
                <td className="py-3 pr-4 font-semibold text-navy">{t.name}</td>
                <td className="py-3 pr-4">{t.use}</td>
                <td className="py-3 text-muted">{t.caution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
