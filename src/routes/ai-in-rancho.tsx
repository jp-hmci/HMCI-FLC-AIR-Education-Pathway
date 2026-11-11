import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/ai-in-rancho")({ component: Page });

const paths = [
  { to: "/educators", title: "Educators", text: "K–12 and college faculty, credit, and classroom rules." },
  { to: "/students", title: "Students", text: "Free courses and study rules that defer to the syllabus." },
  { to: "/business", title: "Employers", text: "Workforce pathways and short pilots." },
  { to: "/government", title: "City and agencies", text: "Staff training and drafts a counsel can edit." },
  { to: "/partners", title: "Institutions", text: "Who operates the network and who teaches beside it." },
];

function Page() {
  return (
    <div>
      <PageHero
        kicker="AI in Rancho Cordova"
        title="Choose a path. The city is not one audience."
        lede="AIR Pathways coordinates learning and practical adoption. It does not regulate AI, and it does not replace a college, a district, or the City’s own authority."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p) => (
            <Link key={p.to} to={p.to} className="rounded-xl border border-line bg-card p-5 no-underline hover:border-gold">
              <h2 className="text-2xl text-navy">{p.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
            </Link>
          ))}
        </div>
        <section className="mt-12 max-w-3xl space-y-4 text-muted">
          <h2 className="text-2xl text-navy">How the work is split</h2>
          <p>
            The City sets local conditions and is a learner in its own right. Schools and Los Rios teach. Employers
            decide what they will allow at work. NVIDIA, Intel, and Solidigm contribute education or industry context.
            HMCI keeps the pieces aimed at the same front door.
          </p>
          <p>
            If you need the authoritative rule — a board policy, a city purchasing rule, a privacy statute — go to
            that institution. This site will point at the draft and the training, and it will say when it is not the
            source.
          </p>
        </section>
      </div>
    </div>
  );
}
