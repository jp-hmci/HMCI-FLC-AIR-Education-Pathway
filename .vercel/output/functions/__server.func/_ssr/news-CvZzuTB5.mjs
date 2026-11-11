import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as news } from "./content-PQgFBQpR.mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-CvZzuTB5.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Newsroom",
		title: "Notes from the build",
		lede: "Dated updates on pathways, credit, and scope. Older items stay on the page."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl space-y-8 px-4 py-12",
		children: news.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: n.slug,
			className: "scroll-mt-24 border-b border-line pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: n.date
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-3xl text-navy",
					children: n.title
				}),
				n.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: p
				}, p.slice(0, 24)))
			]
		}, n.slug))
	})] });
}
//#endregion
export { Page as component };
