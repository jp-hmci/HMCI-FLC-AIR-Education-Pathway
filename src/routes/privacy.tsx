import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/privacy")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Privacy"
        title="What this site holds"
        lede="AIR Pathways is a public information site. The contact form in this preview stores your note only in this browser."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-muted">
        <p>
          Do not submit student records, health information, or other sensitive data through the contact form or into
          any AI tool recommended here. Pathways are designed around fictional practice data.
        </p>
        <p>
          When live college registration opens, Folsom Lake College and Los Rios will describe their own student-record
          practices. Those notices govern enrollment. This page does not.
        </p>
        <p>Industry and NVIDIA courses run on those providers’ sites under their terms once you leave AIR Pathways.</p>
      </div>
    </div>
  );
}
