import { Link } from "@tanstack/react-router";
import type { Course } from "@/lib/content";

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {kicker && <p className="text-xs font-semibold uppercase tracking-widest text-gold-deep">{kicker}</p>}
        <h1 className="mt-2 max-w-3xl text-4xl text-navy md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{lede}</p>
      </div>
    </header>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold-deep">{course.provider}</p>
      <h3 className="mt-2 text-2xl text-navy">
        <Link to="/pathways/$courseId" params={{ courseId: course.id }} className="no-underline hover:underline">
          {course.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-ink">{course.summary}</p>
      <p className="mt-4 text-xs text-muted">{course.credential}</p>
      <Link
        to="/pathways/$courseId"
        params={{ courseId: course.id }}
        className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-navy no-underline hover:text-gold-deep"
      >
        View pathway
      </Link>
    </article>
  );
}

export function GoldLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-deep no-underline hover:bg-white"
    >
      {children}
    </Link>
  );
}

export function GhostLink({ to, children, dark }: { to: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      to={to}
      className={
        dark
          ? "inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-white/10"
          : "inline-flex min-h-11 items-center justify-center rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-mist"
      }
    >
      {children}
    </Link>
  );
}
