import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/business-DonnM49j.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "For business",
		title: "Upskilling for firms that are already here",
		lede: "Free pathways for office, plant, and security work, plus playbooks that assume a 30-day pilot — not a transformation program."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-4 md:grid-cols-3",
			children: [
				["Name the work", "One workflow, one owner, one measure. Not “adopt AI.”"],
				["Train the people", "AIR Foundations or a provider certificate matched to the role."],
				["Decide", "Scale, revise, or stop. Write it down."]
			].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-line bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold text-gold-deep",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl text-navy",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: d
					})
				]
			}, t))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-4 text-sm font-semibold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pathways/industry",
					className: "text-navy no-underline",
					children: "Industry certificates"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/resources/playbooks",
					className: "text-navy no-underline",
					children: "Manufacturing and security playbooks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services",
					className: "text-navy no-underline",
					children: "Request a briefing"
				})
			]
		})]
	})] });
}
//#endregion
export { Page as component };
