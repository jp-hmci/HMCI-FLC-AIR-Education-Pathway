import { createFileRoute } from "@tanstack/react-router";
import { CourseCard, PageHero } from "@/components/site/bits";
import { coursesByTrack } from "@/lib/content";

export const Route = createFileRoute("/pathways/nvidia")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="NVIDIA education"
        title="Deep Learning Institute, listed on purpose"
        lede="NVIDIA’s own labs and certificates sit next to AIR Foundations so nobody confuses a local completion certificate with an NVIDIA credential. This track does not assign GPUs."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1fr_280px]">
        <div className="grid gap-4">
          {coursesByTrack("nvidia").map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
        <aside className="h-fit rounded-xl border border-line bg-card p-5 text-sm">
          <h2 className="font-display text-2xl text-navy">Faculty note</h2>
          <p className="mt-2 text-muted">
            The NVIDIA Certified Instructor and University Ambassador programs have their own applications, teaching
            requirements, and sponsors. AIR can brief a department. It cannot grant that status.
          </p>
        </aside>
      </div>
    </div>
  );
}
