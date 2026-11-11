import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bits-B17611j9.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 md:py-16",
			children: [
				kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-gold-deep",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-3xl text-4xl text-navy md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-muted",
					children: lede
				})
			]
		})
	});
}
function CourseCard({ course }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col rounded-xl border border-line bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-wider text-gold-deep",
				children: course.provider
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 text-2xl text-navy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pathways/$courseId",
					params: { courseId: course.id },
					className: "no-underline hover:underline",
					children: course.title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm text-ink",
				children: course.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-muted",
				children: course.credential
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/pathways/$courseId",
				params: { courseId: course.id },
				className: "mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-navy no-underline hover:text-gold-deep",
				children: "View pathway"
			})
		]
	});
}
function GoldLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-deep no-underline hover:bg-white",
		children
	});
}
function GhostLink({ to, children, dark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: dark ? "inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-white/10" : "inline-flex min-h-11 items-center justify-center rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-mist",
		children
	});
}
//#endregion
export { PageHero as i, GhostLink as n, GoldLink as r, CourseCard as t };
