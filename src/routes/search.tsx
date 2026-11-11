import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";
import { searchContent } from "@/lib/content";

type Search = { q: string };

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  component: Page,
});

function Page() {
  const { q } = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });
  const hits = searchContent(q);
  return (
    <div>
      <PageHero kicker="Search" title="Courses, guides, and notes" lede="Search the pathways and the resource library. Two letters or more." />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            navigate({ search: { q: String(data.get("q") ?? "") } });
          }}
        >
          <label className="sr-only" htmlFor="q">
            Search
          </label>
          <input
            id="q"
            name="q"
            defaultValue={q}
            className="min-h-11 flex-1 rounded-md border border-line bg-card px-3"
            placeholder="Try educators, NVIDIA, manufacturing"
          />
          <button type="submit" className="min-h-11 rounded-md bg-navy px-4 text-sm font-semibold text-white">
            Search
          </button>
        </form>
        <ul className="mt-8 space-y-4">
          {q.trim().length >= 2 && hits.length === 0 && <li className="text-muted">No matches for “{q}”.</li>}
          {hits.map((h) => (
            <li key={h.href + h.title}>
              <Link to={h.href} className="no-underline">
                <p className="text-xs uppercase tracking-wider text-gold-deep">{h.kind}</p>
                <p className="text-lg font-semibold text-navy">{h.title}</p>
                <p className="text-sm text-muted">{h.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
