import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as services } from "./content-PQgFBQpR.mjs";
import { i as PageHero, r as GoldLink } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DN1nygZ7.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Services and support",
		title: "Help beyond the self-paced catalog",
		lede: "Workshops, readiness conversations, policy drafts, and a path into a bounded pilot. Many public resources stay free. Custom work is scoped before anyone starts."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-navy",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: s.detail
					})]
				}, s.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-mist p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-navy",
						children: "What AIR will do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Teach tools and review habits" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Help name a use case and its constraints" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Draft policy language for local counsel to edit" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Prepare a team and introduce partners for a pilot" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-navy p-6 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "What AIR will not do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm text-white/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Build, host, or operate your production AI system" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Replace legal, cybersecurity, procurement, or clinical review" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Promise that a pilot will be selected" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Assign NVIDIA hardware" })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLink, {
					to: "/contact",
					children: "Request support"
				})
			})
		]
	})] });
}
//#endregion
export { Page as component };
