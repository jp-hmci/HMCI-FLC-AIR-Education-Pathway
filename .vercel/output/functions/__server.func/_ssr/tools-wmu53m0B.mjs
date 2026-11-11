import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as tools } from "./content-PQgFBQpR.mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-wmu53m0B.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Tools",
		title: "A short awareness list",
		lede: "Names you will meet in the pathways. Listing a tool is not a purchase recommendation and not permission to connect it to agency or student systems."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl overflow-x-auto px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full border-collapse text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-line text-xs uppercase tracking-wider text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2 pr-4 font-semibold",
						children: "Tool"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2 pr-4 font-semibold",
						children: "Typical use"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2 font-semibold",
						children: "Pause before"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-line align-top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-3 pr-4 font-semibold text-navy",
						children: t.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-3 pr-4",
						children: t.use
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-3 text-muted",
						children: t.caution
					})
				]
			}, t.name)) })]
		})
	})] });
}
//#endregion
export { Page as component };
