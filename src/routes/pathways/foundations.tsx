import { createFileRoute } from "@tanstack/react-router";
import { CourseCard, PageHero } from "@/components/site/bits";
import { coursesByTrack } from "@/lib/content";

export const Route = createFileRoute("/pathways/foundations")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="AIR Foundations"
        title="Five practical courses, built here"
        lede="Business, healthcare, manufacturing, cybersecurity, and K–12 teaching. Each one ends in an AIR certificate of completion. AI for Educators is informed by Intel’s classroom curriculum."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <ul className="mb-8 max-w-2xl list-disc space-y-2 pl-5 text-sm text-muted">
          <li>No paid AI subscription is required. Free tools are enough for the practice tasks.</li>
          <li>Use fictional records. Do not paste student, patient, or resident data.</li>
          <li>Sign up and enroll at Folsom Lake College. Each pathway links to the college’s apply and eServices pages.</li>
        </ul>
        <div className="grid gap-4 md:grid-cols-2">
          {coursesByTrack("foundations").map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
