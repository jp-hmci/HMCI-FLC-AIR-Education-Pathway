import { C as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route$9 } from "./_ssr/router-CskIwcRR.mjs";
import { t as courseById } from "./_ssr/content-PQgFBQpR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_courseId-CSYQaVMh.js
var import_jsx_runtime = require_jsx_runtime();
function CoursePage() {
	const { courseId } = Route$9.useParams();
	const course = courseById(courseId);
	if (!course) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl text-navy",
				children: "Pathway not listed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "That course is not in the current catalog."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/pathways",
				className: "mt-6 inline-block font-semibold text-navy",
				children: "Back to AIR Pathways"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-gold-deep",
					children: course.provider
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl text-navy md:text-5xl",
					children: course.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted",
					children: course.summary
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-3xl gap-8 px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					["Audience", course.audience],
					["Time", course.hours],
					["Credential", course.credential],
					["Educator credit", course.ceu]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-wider text-muted",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl text-navy",
				children: "What you practice"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 list-disc space-y-2 pl-5 text-muted",
				children: course.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: o }, o))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-navy p-6 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Enroll"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/75",
						children: "Registration opens through Folsom Lake College. Until that window is linked, use Contact and name this pathway so a coordinator can place you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-4 inline-flex min-h-11 items-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-deep no-underline",
						children: "Request this pathway"
					})
				]
			})
		]
	})] });
}
//#endregion
export { CoursePage as component };
