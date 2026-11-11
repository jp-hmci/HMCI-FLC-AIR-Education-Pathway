import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-DobKqcZx.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		to: "/pathways",
		k: "Learn",
		title: "AIR Pathways",
		text: "Foundations, industry certificates, and NVIDIA education."
	},
	{
		to: "/faqs",
		k: "Learn",
		title: "FAQs",
		text: "What this is, who it is for, and what it costs."
	},
	{
		to: "/resources/prompting",
		k: "Use",
		title: "Prompting guides",
		text: "Role-specific prompts with a review step built in."
	},
	{
		to: "/resources/playbooks",
		k: "Use",
		title: "Playbooks",
		text: "Workflows and short pilots for school, plant, and security teams."
	},
	{
		to: "/resources/tools",
		k: "Use",
		title: "Tools",
		text: "A short awareness list. Not an endorsement or a purchase order."
	},
	{
		to: "/resources/policy",
		k: "Govern",
		title: "Policy guides",
		text: "Drafts for schools, colleges, the city, employers, and nonprofits."
	},
	{
		to: "/services",
		k: "Connect",
		title: "Services",
		text: "Workshops, readiness, and implementation planning."
	},
	{
		to: "/partners",
		k: "Connect",
		title: "Partners",
		text: "Who operates AIR Pathways and who teaches beside it."
	},
	{
		to: "/news",
		k: "Updates",
		title: "Newsroom",
		text: "What changed, in dated notes."
	},
	{
		to: "/events",
		k: "Updates",
		title: "Events",
		text: "Briefings and office hours."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Resources",
		title: "A directory, not a pile",
		lede: "Grouped by what you want next: learn, use, govern, connect, or stay current."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3",
		children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: c.to,
			className: "rounded-xl border border-line bg-card p-5 no-underline hover:border-gold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-gold-deep",
					children: c.k
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-2xl text-navy",
					children: c.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: c.text
				})
			]
		}, c.to + c.title))
	})] });
}
//#endregion
export { Page as component };
