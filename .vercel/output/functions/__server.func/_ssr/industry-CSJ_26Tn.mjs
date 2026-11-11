import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as coursesByTrack } from "./content-PQgFBQpR.mjs";
import { i as PageHero, t as CourseCard } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industry-CSJ_26Tn.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Industry certificates",
		title: "Provider courses, local access",
		lede: "Microsoft, Google, Anthropic, DeepLearning.AI, Vanderbilt, Arizona State, Michigan, and IBM. You register with Folsom Lake College, then request the partner catalog seat."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: coursesByTrack("industry").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.id))
		})
	})] });
}
//#endregion
export { Page as component };
