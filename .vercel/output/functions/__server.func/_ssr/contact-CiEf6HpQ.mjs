import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CiEf6HpQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var reasons = [
	"Pathway registration",
	"Workshop or briefing",
	"Educator credit question",
	"Partnership",
	"Something else"
];
function Page() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Contact",
		title: "Ask for a pathway or a briefing",
		lede: "Folsom Lake College, HMCI, and the City of Rancho Cordova share this front door. Say who you are and what you need."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_280px]",
		children: [sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-navy",
					children: "Request saved on this device"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "This preview keeps your note in the browser so you can see the flow. A live intake through the college will replace it before public registration. Nothing was emailed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 text-sm font-semibold text-navy",
					onClick: () => setSent(false),
					children: "Write another"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4 rounded-xl border border-line bg-card p-6",
			onSubmit: (e) => {
				e.preventDefault();
				const data = new FormData(e.currentTarget);
				const entry = {
					name: String(data.get("name") ?? ""),
					email: String(data.get("email") ?? ""),
					reason: String(data.get("reason") ?? ""),
					note: String(data.get("note") ?? ""),
					at: (/* @__PURE__ */ new Date()).toISOString()
				};
				const prior = JSON.parse(localStorage.getItem("air-requests") ?? "[]");
				localStorage.setItem("air-requests", JSON.stringify([entry, ...prior].slice(0, 20)));
				setSent(true);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm font-semibold text-navy",
					children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "name",
						required: true,
						className: "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm font-semibold text-navy",
					children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "email",
						type: "email",
						required: true,
						className: "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm font-semibold text-navy",
					children: ["What do you need?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						name: "reason",
						className: "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal",
						children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: r }, r))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm font-semibold text-navy",
					children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "note",
						required: true,
						rows: 5,
						className: "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal",
						placeholder: "Name the pathway, school, or department."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-deep",
					children: "Save request"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-navy",
				children: "Operators"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Folsom Lake College / Los Rios — education home" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "HMCI — pathways and support" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "City of Rancho Cordova — civic partner" })
				]
			})]
		})]
	})] });
}
//#endregion
export { Page as component };
