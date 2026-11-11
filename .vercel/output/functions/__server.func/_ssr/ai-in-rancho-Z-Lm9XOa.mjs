import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-in-rancho-Z-Lm9XOa.js
var import_jsx_runtime = require_jsx_runtime();
var paths = [
	{
		to: "/educators",
		title: "Educators",
		text: "K–12 and college faculty, credit, and classroom rules."
	},
	{
		to: "/students",
		title: "Students",
		text: "Free courses and study rules that defer to the syllabus."
	},
	{
		to: "/business",
		title: "Employers",
		text: "Workforce pathways and short pilots."
	},
	{
		to: "/government",
		title: "City and agencies",
		text: "Staff training and drafts a counsel can edit."
	},
	{
		to: "/partners",
		title: "Institutions",
		text: "Who operates the network and who teaches beside it."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "AI in Rancho Cordova",
		title: "Choose a path. The city is not one audience.",
		lede: "AIR Pathways coordinates learning and practical adoption. It does not regulate AI, and it does not replace a college, a district, or the City’s own authority."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: paths.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: p.to,
				className: "rounded-xl border border-line bg-card p-5 no-underline hover:border-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-navy",
					children: p.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: p.text
				})]
			}, p.to))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12 max-w-3xl space-y-4 text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-navy",
					children: "How the work is split"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The City sets local conditions and is a learner in its own right. Schools and Los Rios teach. Employers decide what they will allow at work. NVIDIA, Intel, and Solidigm contribute education or industry context. HMCI keeps the pieces aimed at the same front door." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you need the authoritative rule — a board policy, a city purchasing rule, a privacy statute — go to that institution. This site will point at the draft and the training, and it will say when it is not the source." })
			]
		})]
	})] });
}
//#endregion
export { Page as component };
