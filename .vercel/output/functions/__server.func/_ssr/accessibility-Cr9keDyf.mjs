import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accessibility-Cr9keDyf.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Accessibility",
		title: "The site should be usable without a mouse trick",
		lede: "Pages use text, visible focus, and labels. If something blocks you, tell us and name the page."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-4 px-4 py-12 text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Navigation works with a keyboard. The skip link is the first focusable control. Color contrast is built on navy, paper, and gold used as a button with dark text — not gold text on white." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Course materials hosted later by Folsom Lake College or by NVIDIA and other providers have their own accessibility statements. A problem inside a lab should go to that provider as well as to us." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "font-semibold text-navy",
				children: "Report a barrier"
			}) })
		]
	})] });
}
//#endregion
export { Page as component };
