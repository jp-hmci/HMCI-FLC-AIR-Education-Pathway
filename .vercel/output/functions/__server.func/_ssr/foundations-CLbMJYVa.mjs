import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as coursesByTrack } from "./content-PQgFBQpR.mjs";
import { i as PageHero, t as CourseCard } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/foundations-CLbMJYVa.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "AIR Foundations",
		title: "Five practical courses, built here",
		lede: "Business, healthcare, manufacturing, cybersecurity, and K–12 teaching. Each one ends in an AIR certificate of completion. AI for Educators is informed by Intel’s classroom curriculum."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mb-8 max-w-2xl list-disc space-y-2 pl-5 text-sm text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No paid AI subscription is required. Free tools are enough for the practice tasks." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Use fictional records. Do not paste student, patient, or resident data." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Registration will run through Folsom Lake College when the term is open." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: coursesByTrack("foundations").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.id))
		})]
	})] });
}
//#endregion
export { Page as component };
