import { createFileRoute } from "@tanstack/react-router";
import { CourseCard, PageHero } from "@/components/site/bits";
import { coursesByTrack } from "@/lib/content";

export const Route = createFileRoute("/pathways/industry")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Industry certificates"
        title="Provider courses, local access"
        lede="Microsoft, Google, Anthropic, DeepLearning.AI, Vanderbilt, Arizona State, Michigan, and IBM. You register with Folsom Lake College, then request the partner catalog seat."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coursesByTrack("industry").map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
