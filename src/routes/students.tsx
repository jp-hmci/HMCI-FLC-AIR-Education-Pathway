import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/students")({ component: Page });

function Page() {
  return (
    <div>
      <PageHero
        kicker="For students"
        title="Learn the tools without skipping the thinking"
        lede="Free pathways for Los Rios students and dual enrollment. Your instructor’s rules win if they are stricter than ours."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-2">
        {[
          ["/pathways", "Start with a pathway", "Foundations if you are new. Machine learning with Python if you already write code."],
          ["/pathways/nvidia", "NVIDIA labs", "Certificates come from NVIDIA. They are optional, not a graduation requirement."],
          ["/resources/playbooks", "Student playbook", "What to disclose, what not to paste, and how to use AI as a tutor instead of a ghostwriter."],
          ["/resources/prompting", "Study prompts", "Quizzes and outlines that leave the sentences to you."],
        ].map(([to, title, text]) => (
          <Link key={title} to={to} className="rounded-xl border border-line bg-card p-5 no-underline hover:border-gold">
            <h2 className="text-2xl text-navy">{title}</h2>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
