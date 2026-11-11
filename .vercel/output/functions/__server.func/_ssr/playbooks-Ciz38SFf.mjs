import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as playbooks } from "./content-PQgFBQpR.mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/playbooks-Ciz38SFf.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Playbooks",
		title: "Working guides for a bounded pilot",
		lede: "Each playbook assumes a human still owns the decision. They are written for Rancho Cordova and Los Rios, not copied as statewide mandates."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl space-y-6 px-4 py-12",
		children: playbooks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: p.slug,
			className: "scroll-mt-24 rounded-xl border border-line bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-gold-deep",
					children: p.forWhom
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-2xl text-navy",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: p.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-2",
					children: p.uses.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy",
						children: u
					}, u))
				})
			]
		}, p.slug))
	})] });
}
//#endregion
export { Page as component };
