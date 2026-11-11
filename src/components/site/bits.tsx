import { Link } from "@tanstack/react-router";
import type { Course } from "@/lib/content";
import { flc } from "@/lib/flc";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

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
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          href={flc.enroll}
          {...external}
          className="inline-flex min-h-11 items-center text-sm font-semibold text-gold-deep no-underline hover:underline"
        >
          Enroll at Folsom Lake College
        </a>
        <Link
          to="/pathways/$courseId"
          params={{ courseId: course.id }}
          className="inline-flex min-h-11 items-center text-sm font-semibold text-navy no-underline hover:text-gold-deep"
        >
          View pathway
        </Link>
      </div>
    </article>
  );
}

export function EnrollPanel({ pathway }: { pathway: string }) {
  return (
    <section className="rounded-xl bg-navy p-6 text-white">
      <h2 className="text-2xl">Enroll at Folsom Lake College</h2>
      <p className="mt-2 text-sm text-white/75">
        {pathway} is an AIR Pathway. Sign-up and class registration happen on Folsom Lake College’s own site, not
        here. New students apply once. Continuing Los Rios students enroll in eServices.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={flc.enroll}
          {...external}
          className="inline-flex min-h-11 items-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-deep no-underline"
        >
          Enroll in classes
        </a>
        <a
          href={flc.apply}
          {...external}
          className="inline-flex min-h-11 items-center rounded-md border border-white/40 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-white/10"
        >
          Apply to FLC
        </a>
      </div>
      <p className="mt-4 text-sm text-white/70">
        Already a student?{" "}
        <a href={flc.eservices} {...external} className="font-semibold text-gold underline">
          Sign in to eServices
        </a>
        . Spring 2027 enrollment begins November 23, 2026. Search the{" "}
        <a href={flc.schedule} {...external} className="font-semibold text-gold underline">
          class schedule
        </a>{" "}
        for the section once it is posted.
      </p>
    </section>
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
