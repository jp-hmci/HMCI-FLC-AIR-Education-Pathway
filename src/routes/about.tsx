import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/about")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="About"
        title="A regional AI network with a college at the center"
        lede="AIR Pathways is the learning layer of Rancho Cordova’s AI and robotics effort. It connects a community college, a city, and an institute so residents are not left to figure out AI alone."
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 text-muted">
        <section>
          <h2 className="text-2xl text-navy">Why it exists</h2>
          <p className="mt-2">
            People were already being asked to use AI at school, at city hall, and at work. The region needed one
            front door for free training, plain-language rules, and a way to plan a use without buying a platform first.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-navy">Who operates it</h2>
          <p className="mt-2">
            Folsom Lake College, within the Los Rios Community College District, is the education home — registration,
            the learning system, and the credential conversation. HMCI designs the pathways and the support around
            them. The City of Rancho Cordova is the civic partner and the place the network is for.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-navy">What “AIR” covers in this phase</h2>
          <p className="mt-2">
            This site is the education offering: AIR Pathways. The wider ecosystem — sites, power, research, and
            employers — stays visible, but it is not the job of the course catalog. Intel remains in the educator
            curriculum. Solidigm is the local industry neighbor. NVIDIA education is its own track.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-navy">What it is modeled on</h2>
          <p className="mt-2">
            The structure follows a statewide pattern that already works: audience doors, a free catalog, playbooks,
            policy drafts, services with a written limit, and a partner list that says who does what. The geography,
            the college, and the partners are local.
          </p>
          <p className="mt-4">
            <Link to="/ai-in-rancho" className="font-semibold text-navy">
              Read how AI work is split locally
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
