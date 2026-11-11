import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as coursesByTrack } from "./content-PQgFBQpR.mjs";
import { i as PageHero, t as CourseCard } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nvidia-CqByT878.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "NVIDIA education",
		title: "Deep Learning Institute, listed on purpose",
		lede: "NVIDIA’s own labs and certificates sit next to AIR Foundations so nobody confuses a local completion certificate with an NVIDIA credential. This track does not assign GPUs."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1fr_280px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: coursesByTrack("nvidia").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-xl border border-line bg-card p-5 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-navy",
				children: "Faculty note"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "The NVIDIA Certified Instructor and University Ambassador programs have their own applications, teaching requirements, and sponsors. AIR can brief a department. It cannot grant that status."
			})]
		})]
	})] });
}
//#endregion
export { Page as component };
