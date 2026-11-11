import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as events } from "./content-PQgFBQpR.mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-XEfCUaRP.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Events",
		title: "Briefings and office hours",
		lede: "Small sessions for faculty, city staff, and educators. Seats are limited and listed as they are confirmed."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-4 px-4 py-12",
		children: [events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid gap-2 rounded-xl border border-line bg-card p-5 sm:grid-cols-[9rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-navy",
				children: e.date
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: e.when
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl text-navy",
					children: e.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-gold-deep",
					children: e.place
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: e.summary
				})
			] })]
		}, e.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: [
				"To hold a seat, use ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "font-semibold text-navy",
					children: "Contact"
				}),
				" and name the session."
			]
		})]
	})] });
}
//#endregion
export { Page as component };
