import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/pathways/credentials")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Credentials"
        title="What you actually earn"
        lede="Three different pieces of paper. They are not interchangeable, and none of them is a college degree."
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-12">
        <section>
          <h2 className="text-2xl text-navy">AIR certificate of completion</h2>
          <p className="mt-2 text-muted">
            Issued for AIR Foundations and for ChatGPT Foundations for Teachers after the required checks. It means
            you finished this network’s course. It is not transferable college credit.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-navy">Provider certificate</h2>
          <p className="mt-2 text-muted">
            Industry pathways award the certificate the provider already issues — Google, Microsoft, IBM, a university,
            or another catalog partner. AIR does not reprint those.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-navy">NVIDIA DLI certificate</h2>
          <p className="mt-2 text-muted">
            Completed inside NVIDIA’s learning system under NVIDIA’s rules. Faculty instructor credentials are a
            further, separate program.
          </p>
        </section>
        <section className="rounded-xl border border-line bg-card p-5">
          <h2 className="text-2xl text-navy">K–12 professional learning credit</h2>
          <p className="mt-2 text-muted">
            Credit for eligible educator pathways is planned through Folsom Lake College / Los Rios. It is not open as
            an automatic claim on this website. Districts still decide what counts toward their own requirements.
            When the form is live, deadlines and module rules will be posted here and on{" "}
            <Link to="/educators" className="font-semibold text-navy">
              the educator page
            </Link>
            .
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-navy">How enrollment works</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
            <li>Choose a pathway and read the outcomes.</li>
            <li>
              New to Los Rios? Apply to Folsom Lake College. Continuing students sign in to eServices and enroll.
            </li>
            <li>For industry and NVIDIA courses, open the provider seat after the college registration is confirmed.</li>
            <li>Finish the checks. Request credit only if your course and your district both allow it.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
