import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/educators-B41hrrYK.js
var import_jsx_runtime = require_jsx_runtime();
var blocks = [
	{
		href: "/pathways/foundations",
		title: "Start with AI for Educators",
		text: "Lessons, assessments, family notes, and classroom rules. Informed by Intel’s curriculum."
	},
	{
		href: "/pathways/credentials",
		title: "Professional learning credit",
		text: "Planned through Los Rios. Not automatic, and not a substitute for district approval."
	},
	{
		href: "/resources/prompting",
		title: "Classroom prompts",
		text: "Short prompts that keep student names and records out of the tool."
	},
	{
		href: "/resources/policy",
		title: "Policy drafts",
		text: "K–12 and community college starting points your board or senate still has to adopt."
	},
	{
		href: "/resources/playbooks",
		title: "Playbooks",
		text: "K–12, CTE, faculty, and dual enrollment — written as working tools, not posters."
	},
	{
		href: "/pathways/nvidia",
		title: "NVIDIA for faculty",
		text: "DLI labs and a clear line between a learner certificate and instructor status."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "For educators",
		title: "Training and classroom tools for K–12 and college faculty",
		lede: "Free pathways, prompts you can edit, and drafts of policy. The teacher still decides what counts as learning."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3",
		children: blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: b.href,
			className: "rounded-xl border border-line bg-card p-5 no-underline hover:border-gold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl text-navy",
				children: b.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: b.text
			})]
		}, b.href))
	})] });
}
//#endregion
export { Page as component };
