import { createFileRoute, Link } from "@tanstack/react-router";
import { CourseCard, PageHero } from "@/components/site/bits";
import { coursesByTrack } from "@/lib/content";

export const Route = createFileRoute("/pathways/")({ component: PathwaysHome });

function PathwaysHome() {
  return (
    <div>
      <PageHero
        kicker="Learn"
        title="AIR Pathways"
        lede="Free, self-paced AI training for Rancho Cordova and Los Rios. No prior coding is required for Foundations. Industry certificates come from the provider. NVIDIA labs are a separate track."
      />
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12">
        <Track
          title="AIR Foundations"
          href="/pathways/foundations"
          note="Built for this network. Completed on the Folsom Lake College learning system when enrollment is open."
          courses={coursesByTrack("foundations")}
        />
        <Track
          title="Industry certificates"
          href="/pathways/industry"
          note="Recognized provider courses. Access is requested after you register through the college."
          courses={coursesByTrack("industry")}
        />
        <Track
          title="NVIDIA education"
          href="/pathways/nvidia"
          note="Deep Learning Institute pathways. Certificates are issued by NVIDIA."
          courses={coursesByTrack("nvidia")}
        />
        <p className="text-sm text-muted">
          Seats and licenses are limited. Unused seats may be released. See{" "}
          <Link to="/pathways/credentials" className="font-semibold text-navy">
            credentials
          </Link>{" "}
          before you plan on professional learning credit.
        </p>
      </div>
    </div>
  );
}

function Track({
  title,
  href,
  note,
  courses,
}: {
  title: string;
  href: "/pathways/foundations" | "/pathways/industry" | "/pathways/nvidia";
  note: string;
  courses: ReturnType<typeof coursesByTrack>;
}) {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-3xl text-navy">{title}</h2>
          <p className="mt-1 max-w-2xl text-sm text-muted">{note}</p>
        </div>
        <Link to={href} className="text-sm font-semibold text-navy no-underline">
          About this track
        </Link>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}
