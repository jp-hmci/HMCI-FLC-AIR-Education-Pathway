import { createFileRoute, Link } from "@tanstack/react-router";
import { EnrollPanel } from "@/components/site/bits";
import { courseById } from "@/lib/content";

export const Route = createFileRoute("/pathways/$courseId")({ component: CoursePage });

function CoursePage() {
  const { courseId } = Route.useParams();
  const course = courseById(courseId);
  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="text-4xl text-navy">Pathway not listed</h1>
        <p className="mt-3 text-muted">That course is not in the current catalog.</p>
        <Link to="/pathways" className="mt-6 inline-block font-semibold text-navy">
          Back to AIR Pathways
        </Link>
      </div>
    );
  }
  return (
    <article>
      <header className="border-b border-line bg-card">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-deep">{course.provider}</p>
          <h1 className="mt-2 text-4xl text-navy md:text-5xl">{course.title}</h1>
          <p className="mt-4 text-lg text-muted">{course.summary}</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-3xl gap-8 px-4 py-12">
        <dl className="grid gap-4 sm:grid-cols-2">
          {[
            ["Audience", course.audience],
            ["Time", course.hours],
            ["Credential", course.credential],
            ["Educator credit", course.ceu],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-line bg-card p-4">
              <dt className="text-xs uppercase tracking-wider text-muted">{k}</dt>
              <dd className="mt-1 text-sm">{v}</dd>
            </div>
          ))}
        </dl>
        <section>
          <h2 className="text-2xl text-navy">What you practice</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {course.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>
        <EnrollPanel pathway={course.title} />
      </div>
    </article>
  );
}
