import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const learn = [
  { to: "/pathways", label: "All pathways" },
  { to: "/pathways/foundations", label: "AIR Foundations" },
  { to: "/pathways/industry", label: "Industry certificates" },
  { to: "/pathways/nvidia", label: "NVIDIA education" },
  { to: "/pathways/credentials", label: "Credentials" },
] as const;

const audiences = [
  { to: "/educators", label: "Educators" },
  { to: "/government", label: "Government" },
  { to: "/business", label: "Business" },
  { to: "/students", label: "Students" },
] as const;

const resources = [
  { to: "/resources", label: "Resource directory" },
  { to: "/resources/playbooks", label: "Playbooks" },
  { to: "/resources/prompting", label: "Prompting guides" },
  { to: "/resources/policy", label: "Policy guides" },
  { to: "/resources/tools", label: "Tools" },
  { to: "/faqs", label: "FAQs" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 no-underline">
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="#0c2340" />
        <path d="M8 24.5 14.2 10h3.1L11.2 24.5H8Zm8.6 0 6.1-14.5h3.1L19.7 24.5h-3.1Z" fill="#f4f1ea" />
        <circle cx="26.2" cy="11.2" r="2.3" fill="#c8891a" />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-xl text-navy">AIR Pathways</span>
        <span className="block text-xs tracking-wide text-muted">Rancho Cordova · Los Rios</span>
      </span>
    </Link>
  );
}

function DeskMenu({
  label,
  items,
}: {
  label: string;
  items: readonly { to: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="rounded-md px-2 py-2 text-sm text-white/90 hover:text-white"
        aria-haspopup="true"
      >
        {label}
      </button>
      <div className="invisible absolute left-0 top-full z-40 min-w-56 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-lg border border-line bg-card py-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-2 text-sm text-ink no-underline hover:bg-mist"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link to="/about" className="rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white">
            About
          </Link>
          <Link
            to="/ai-in-rancho"
            className="rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white"
          >
            AI in Rancho Cordova
          </Link>
          <DeskMenu label="Learn" items={learn} />
          <DeskMenu label="For you" items={audiences} />
          <Link to="/services" className="rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white">
            Services
          </Link>
          <DeskMenu label="Resources" items={resources} />
          <Link to="/partners" className="rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white">
            Partners
          </Link>
          <Link to="/news" className="rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white">
            News
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/search"
            search={{ q: "" }}
            aria-label="Search AIR Pathways"
            className="rounded-md p-2 text-white/90 no-underline hover:bg-white/10"
          >
            <Search size={18} />
          </Link>
          <Link
            to="/pathways"
            className="hidden rounded-md bg-gold px-3 py-2 text-sm font-semibold text-navy-deep no-underline hover:bg-white sm:inline-block"
          >
            Free pathways
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden">
          <MobileGroup title="Learn" items={learn} onNavigate={() => setOpen(false)} />
          <MobileGroup title="For you" items={audiences} onNavigate={() => setOpen(false)} />
          <MobileGroup title="Resources" items={resources} onNavigate={() => setOpen(false)} />
          <div className="mt-2 grid gap-1">
            {[
              ["/about", "About"],
              ["/ai-in-rancho", "AI in Rancho Cordova"],
              ["/services", "Services"],
              ["/partners", "Partners"],
              ["/news", "News"],
              ["/events", "Events"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-white no-underline hover:bg-white/10"
                data-active={path === to}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function MobileGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: readonly { to: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="mb-3">
      <p className="px-2 text-xs uppercase tracking-wider text-gold">{title}</p>
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className="block rounded-md px-2 py-2 text-white no-underline hover:bg-white/10"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">AIR Pathways</p>
          <p className="mt-2 text-sm text-white/70">
            Free AI training for Rancho Cordova and the Los Rios colleges. Operated with Folsom Lake College, HMCI,
            and the City of Rancho Cordova.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gold">Learn</p>
          <ul className="mt-3 space-y-2 text-sm">
            {learn.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/80 no-underline hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gold">For you</p>
          <ul className="mt-3 space-y-2 text-sm">
            {audiences.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/80 no-underline hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-white/80 no-underline hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white/80 no-underline hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gold">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/search" search={{ q: "" }} className="text-white/80 no-underline hover:text-white">
                Search
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-white/80 no-underline hover:text-white">
                Events
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="text-white/80 no-underline hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/accessibility" className="text-white/80 no-underline hover:text-white">
                Accessibility
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-white/80 no-underline hover:text-white">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50">
          AIR Pathways is a regional learning network. Course certificates from industry providers are issued by those
          providers. This site does not provide legal, medical, or security advice.
        </p>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
