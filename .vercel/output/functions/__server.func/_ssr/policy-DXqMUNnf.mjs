import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as policies } from "./content-PQgFBQpR.mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/policy-DXqMUNnf.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Policy guides",
		title: "Drafts for local adaptation",
		lede: "These are planning templates for California schools, a community college, a city, and local employers. They are not board policy, a regulation, or legal advice."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-4 px-4 py-12",
		children: [policies.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: p.slug,
			className: "scroll-mt-24 rounded-xl border border-line bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl text-navy",
				children: p.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: p.summary
			})]
		}, p.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Official rules still come from your district, Los Rios, the City, and state or federal law. Start from those when they exist, and use these drafts only to see what a local document should cover."
		})]
	})] });
}
//#endregion
export { Page as component };
