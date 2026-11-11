import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as partners } from "./content-PQgFBQpR.mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partners-BhYGvp4B.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Partners",
		title: "The network behind the pathways",
		lede: "Folsom Lake College and Los Rios are the education home. HMCI and the City of Rancho Cordova operate the effort with them. Intel, Solidigm, and NVIDIA education sit in the industry row."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-10 px-4 py-12",
		children: [[
			"Education",
			"Public",
			"Industry"
		].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl text-navy",
			children: group
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4 md:grid-cols-2",
			children: partners.filter((p) => p.group === group).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-gold-deep",
						children: p.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-xl text-navy",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: p.detail
					})
				]
			}, p.name))
		})] }, group)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-2xl text-sm text-muted",
			children: "A logo here means a role in this phase of AIR Pathways. It does not mean the partner runs every course, funds every seat, or endorses a specific tool."
		})]
	})] });
}
//#endregion
export { Page as component };
