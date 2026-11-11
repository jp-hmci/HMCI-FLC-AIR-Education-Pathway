import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/students-CVuCP4eQ.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "For students",
		title: "Learn the tools without skipping the thinking",
		lede: "Free pathways for Los Rios students and dual enrollment. Your instructor’s rules win if they are stricter than ours."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-2",
		children: [
			[
				"/pathways",
				"Start with a pathway",
				"Foundations if you are new. Machine learning with Python if you already write code."
			],
			[
				"/pathways/nvidia",
				"NVIDIA labs",
				"Certificates come from NVIDIA. They are optional, not a graduation requirement."
			],
			[
				"/resources/playbooks",
				"Student playbook",
				"What to disclose, what not to paste, and how to use AI as a tutor instead of a ghostwriter."
			],
			[
				"/resources/prompting",
				"Study prompts",
				"Quizzes and outlines that leave the sentences to you."
			]
		].map(([to, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			className: "rounded-xl border border-line bg-card p-5 no-underline hover:border-gold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl text-navy",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: text
			})]
		}, title))
	})] });
}
//#endregion
export { Page as component };
