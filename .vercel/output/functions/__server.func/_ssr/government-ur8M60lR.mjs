import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/government-ur8M60lR.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "For government",
		title: "Public employees, public records, practical AI",
		lede: "Training and planning for city and agency teams in Rancho Cordova. AIR does not run a production system for you."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/civic.jpg",
			alt: "Civic plaza and low public building",
			className: "h-80 w-full rounded-xl object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: [
				[
					"/pathways",
					"Free pathways",
					"Foundations in business, cybersecurity, and everyday prompting for staff who write, route, and review."
				],
				[
					"/resources/prompting",
					"Prompts for public work",
					"Agenda summaries, resident FAQs, and a reminder to quote only what you pasted."
				],
				[
					"/resources/policy",
					"Local policy drafts",
					"City, records, procurement, and a public-safety supplement. Your counsel still reviews them."
				],
				[
					"/services",
					"Use-case planning",
					"One problem, named users, a data boundary, and a decision to pilot or stop."
				]
			].map(([to, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				className: "block rounded-xl border border-line bg-card p-5 no-underline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl text-navy",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: text
				})]
			}, to))
		})]
	})] });
}
//#endregion
export { Page as component };
