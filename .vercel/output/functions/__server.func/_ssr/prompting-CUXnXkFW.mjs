import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as prompts } from "./content-PQgFBQpR.mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prompting-CUXnXkFW.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Prompting",
		title: "Prompts with the review left in",
		lede: "Copy them, then change the facts. If a prompt would need a real student, patient, or resident record, do not run it."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-2",
		children: prompts.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-line bg-card p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl text-navy",
				children: group.role
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-gold pl-3 text-sm text-ink",
					children: item
				}, item))
			})]
		}, group.role))
	})] });
}
//#endregion
export { Page as component };
