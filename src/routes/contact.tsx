import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/bits";

export const Route = createFileRoute("/contact")({ component: Page });

const reasons = ["Pathway registration", "Workshop or briefing", "Educator credit question", "Partnership", "Something else"];

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHero
        kicker="Contact"
        title="Ask for a pathway or a briefing"
        lede="Folsom Lake College, HMCI, and the City of Rancho Cordova share this front door. Say who you are and what you need."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_280px]">
        {sent ? (
          <div className="rounded-xl border border-line bg-card p-6">
            <h2 className="text-2xl text-navy">Request saved on this device</h2>
            <p className="mt-2 text-muted">
              This preview keeps your note in the browser so you can see the flow. A live intake through the college
              will replace it before public registration. Nothing was emailed.
            </p>
            <button type="button" className="mt-4 text-sm font-semibold text-navy" onClick={() => setSent(false)}>
              Write another
            </button>
          </div>
        ) : (
          <form
            className="space-y-4 rounded-xl border border-line bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const entry = {
                name: String(data.get("name") ?? ""),
                email: String(data.get("email") ?? ""),
                reason: String(data.get("reason") ?? ""),
                note: String(data.get("note") ?? ""),
                at: new Date().toISOString(),
              };
              const prior = JSON.parse(localStorage.getItem("air-requests") ?? "[]") as unknown[];
              localStorage.setItem("air-requests", JSON.stringify([entry, ...prior].slice(0, 20)));
              setSent(true);
            }}
          >
            <label className="block text-sm font-semibold text-navy">
              Name
              <input name="name" required className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal" />
            </label>
            <label className="block text-sm font-semibold text-navy">
              Email
              <input name="email" type="email" required className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal" />
            </label>
            <label className="block text-sm font-semibold text-navy">
              What do you need?
              <select name="reason" className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal">
                {reasons.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-navy">
              Note
              <textarea name="note" required rows={5} className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal" placeholder="Name the pathway, school, or department." />
            </label>
            <button type="submit" className="min-h-11 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-deep">
              Save request
            </button>
          </form>
        )}
        <aside className="text-sm text-muted">
          <h2 className="font-display text-2xl text-navy">Operators</h2>
          <ul className="mt-3 space-y-2">
            <li>Folsom Lake College / Los Rios — education home</li>
            <li>HMCI — pathways and support</li>
            <li>City of Rancho Cordova — civic partner</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
