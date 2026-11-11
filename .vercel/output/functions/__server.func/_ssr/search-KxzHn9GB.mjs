import { C as require_jsx_runtime, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$13 } from "./router-CskIwcRR.mjs";
import { d as searchContent } from "./content-PQgFBQpR.mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-KxzHn9GB.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { q } = Route$13.useSearch();
	const navigate = useNavigate({ from: "/search" });
	const hits = searchContent(q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Search",
		title: "Courses, guides, and notes",
		lede: "Search the pathways and the resource library. Two letters or more."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex gap-2",
			onSubmit: (e) => {
				e.preventDefault();
				const data = new FormData(e.currentTarget);
				navigate({ search: { q: String(data.get("q") ?? "") } });
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "q",
					children: "Search"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "q",
					name: "q",
					defaultValue: q,
					className: "min-h-11 flex-1 rounded-md border border-line bg-card px-3",
					placeholder: "Try educators, NVIDIA, manufacturing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 rounded-md bg-navy px-4 text-sm font-semibold text-white",
					children: "Search"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-8 space-y-4",
			children: [q.trim().length >= 2 && hits.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "text-muted",
				children: [
					"No matches for “",
					q,
					"”."
				]
			}), hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: h.href,
				className: "no-underline",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-gold-deep",
						children: h.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold text-navy",
						children: h.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: h.blurb
					})
				]
			}) }, h.href + h.title))]
		})]
	})] });
}
//#endregion
export { Page as component };
