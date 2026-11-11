import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as coursesByTrack } from "./content-PQgFBQpR.mjs";
import { i as PageHero, t as CourseCard } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pathways-eY1DSoKK.js
var import_jsx_runtime = require_jsx_runtime();
function PathwaysHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Learn",
		title: "AIR Pathways",
		lede: "Free, self-paced AI training for Rancho Cordova and Los Rios. No prior coding is required for Foundations. Industry certificates come from the provider. NVIDIA labs are a separate track."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-12 px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {
				title: "AIR Foundations",
				href: "/pathways/foundations",
				note: "Built for this network. Completed on the Folsom Lake College learning system when enrollment is open.",
				courses: coursesByTrack("foundations")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {
				title: "Industry certificates",
				href: "/pathways/industry",
				note: "Recognized provider courses. Access is requested after you register through the college.",
				courses: coursesByTrack("industry")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {
				title: "NVIDIA education",
				href: "/pathways/nvidia",
				note: "Deep Learning Institute pathways. Certificates are issued by NVIDIA.",
				courses: coursesByTrack("nvidia")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Seats and licenses are limited. Unused seats may be released. See",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pathways/credentials",
						className: "font-semibold text-navy",
						children: "credentials"
					}),
					" ",
					"before you plan on professional learning credit."
				]
			})
		]
	})] });
}
function Track({ title, href, note, courses }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl text-navy",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 max-w-2xl text-sm text-muted",
			children: note
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: href,
			className: "text-sm font-semibold text-navy no-underline",
			children: "About this track"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
		children: courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.id))
	})] });
}
//#endregion
export { PathwaysHome as component };
