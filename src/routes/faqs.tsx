import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/faqs")({ component: Page });

const faqs = [
  ["Is this free?", "The listed pathways are intended to be free for regional learners. Seats and partner licenses are limited and can be waitlisted."],
  ["Who can join?", "Educators, students, city staff, employers, and residents. You do not need to be enrolled in a degree to start a pathway."],
  ["Do I need to code?", "No, except Machine Learning with Python and some NVIDIA labs. Foundations assume no coding."],
  ["Is this a degree?", "No. You can earn an AIR completion certificate, a provider certificate, or an NVIDIA DLI certificate. None of those is an associate degree."],
  ["Will I get educator credit?", "Professional learning credit is planned through Los Rios for eligible educator pathways. It is not open as a self-serve claim yet, and your district still has to accept it."],
  ["Do you build AI systems?", "No. AIR trains people and helps them plan. Operating a production system stays with the organization that owns the data."],
  ["Does this include NVIDIA hardware?", "No. The NVIDIA track is education: Deep Learning Institute courses and faculty briefings."],
  ["Where do I register?", "Through Folsom Lake College when the enrollment window is linked. Until then, send a request from the contact page and name the pathway."],
];

function Page() {
  return (
    <div>
      <PageHero kicker="FAQs" title="Short answers" lede="If your question is really a request for training, use Contact and say who it is for." />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12">
        {faqs.map(([q, a]) => (
          <section key={q}>
            <h2 className="text-xl text-navy">{q}</h2>
            <p className="mt-1 text-muted">{a}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
