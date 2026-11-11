import { createFileRoute, Link } from "@tanstack/react-router";
import { CourseCard, GhostLink, GoldLink } from "@/components/site/bits";
import { courses, milestones, news, partners, services } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

const audiences = [
  {
    to: "/educators",
    title: "Educators",
    text: "Free training, classroom prompts, playbooks, and a planned credit path through Los Rios.",
  },
  {
    to: "/government",
    title: "Government",
    text: "Hands-on practice for public employees, plus policy drafts a city can edit.",
  },
  {
    to: "/business",
    title: "Business",
    text: "Workforce pathways and playbooks for manufacturing, cybersecurity, and small firms.",
  },
  {
    to: "/students",
    title: "Students",
    text: "Foundations, industry certificates, and NVIDIA labs — with rules for how to use them in class.",
  },
];

function Home() {
  const featured = courses.filter((c) =>
    ["ai-in-business", "ai-for-educators", "nvidia-genai", "google-prompting"].includes(c.id),
  );

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src="/images/campus.jpg"
          alt="Folsom-area college campus in late-afternoon light"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            AI and robotics learning · Rancho Cordova
          </p>
          <h1 className="mt-3 max-w-3xl text-5xl text-white md:text-6xl">
            AIR Pathways
          </h1>
          <p className="mt-4 max-w-xl font-display text-2xl text-white/90">
            Practical AI training for the people who live, teach, and work here.
          </p>
          <p className="mt-4 max-w-xl text-white/80">
            Preparing educators, public employees, businesses, students, and neighbors for work that now includes AI.
            Anchored at Folsom Lake College.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GoldLink to="/pathways">Start AIR Pathways</GoldLink>
            <GhostLink to="/ai-in-rancho" dark>
              See the local landscape
            </GhostLink>
          </div>
          <p className="mt-4 text-sm text-white/70">Free pathways are listed now. Registration runs through Folsom Lake College.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl text-navy">AI for Rancho Cordova</h2>
        <p className="mt-2 max-w-2xl text-muted">Find the door that matches your job. The courses behind them are the same catalog.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <Link
              key={a.to}
              to={a.to}
              className="rounded-xl border border-line bg-card p-5 no-underline transition hover:-translate-y-0.5 hover:border-gold"
            >
              <h3 className="text-2xl text-navy">{a.title}</h3>
              <p className="mt-2 text-sm text-muted">{a.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold-deep">Open</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">From awareness to a real use</h2>
            <p className="mt-3 text-white/75">
              AIR Pathways is more than a course list. It is how the region learns, sets rules, and decides whether a
              tool belongs in the work.
            </p>
            <div className="mt-6">
              <GhostLink to="/services" dark>
                Explore services
              </GhostLink>
            </div>
          </div>
          <ol className="space-y-4">
            {services.map((s, i) => (
              <li key={s.title} className="border-t border-white/15 pt-4">
                <p className="text-xs uppercase tracking-wider text-gold">0{i + 1}</p>
                <h3 className="text-xl">{s.title}</h3>
                <p className="text-sm text-white/75">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl text-navy">Pathways to start with</h2>
            <p className="mt-2 text-muted">Foundations, an industry certificate, and NVIDIA education.</p>
          </div>
          <Link to="/pathways" className="text-sm font-semibold text-navy no-underline hover:text-gold-deep">
            Browse the full catalog
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
          <div>
            <img
              src="/images/classroom.jpg"
              alt="Empty classroom workshop with laptops on tables"
              className="h-72 w-full rounded-xl object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-deep">The network</p>
            <h2 className="mt-2 text-3xl text-navy">One front door. Three operators.</h2>
            <p className="mt-4 text-muted">
              Folsom Lake College and Los Rios hold the education. HMCI builds the pathways and the support around
              them. The City of Rancho Cordova makes this a civic project, not a vendor brochure. Intel’s educator
              curriculum, Solidigm’s local industry context, and NVIDIA’s education track come in beside that core.
            </p>
            <ul className="mt-6 space-y-3">
              {milestones.map((m) => (
                <li key={m.when} className="grid grid-cols-[6rem_1fr] gap-3 text-sm">
                  <span className="font-semibold text-gold-deep">{m.when}</span>
                  <span>
                    <span className="font-semibold text-navy">{m.title}. </span>
                    {m.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl text-navy">Who is already in the room</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.slice(0, 6).map((p) => (
            <article key={p.name} className="rounded-xl border border-line bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-gold-deep">{p.role}</p>
              <h3 className="mt-1 text-xl text-navy">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/partners" className="text-sm font-semibold text-navy no-underline hover:text-gold-deep">
            Full partner list
          </Link>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl text-navy">Latest</h2>
            <Link to="/news" className="text-sm font-semibold text-navy no-underline">
              Newsroom
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {news.slice(0, 3).map((n) => (
              <Link
                key={n.slug}
                to="/news"
                hash={n.slug}
                className="rounded-xl border border-line bg-card p-5 no-underline"
              >
                <p className="text-xs text-muted">{n.date}</p>
                <h3 className="mt-2 text-xl text-navy">{n.title}</h3>
                <p className="mt-2 text-sm text-muted">{n.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
