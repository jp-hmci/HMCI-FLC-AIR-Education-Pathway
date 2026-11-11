import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/accessibility")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="Accessibility"
        title="The site should be usable without a mouse trick"
        lede="Pages use text, visible focus, and labels. If something blocks you, tell us and name the page."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-muted">
        <p>
          Navigation works with a keyboard. The skip link is the first focusable control. Color contrast is built on
          navy, paper, and gold used as a button with dark text — not gold text on white.
        </p>
        <p>
          Course materials hosted later by Folsom Lake College or by NVIDIA and other providers have their own
          accessibility statements. A problem inside a lab should go to that provider as well as to us.
        </p>
        <p>
          <Link to="/contact" className="font-semibold text-navy">
            Report a barrier
          </Link>
        </p>
      </div>
    </div>
  );
}
