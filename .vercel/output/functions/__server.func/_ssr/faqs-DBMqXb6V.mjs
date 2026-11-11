import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHero } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-DBMqXb6V.js
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	["Is this free?", "The listed pathways are intended to be free for regional learners. Seats and partner licenses are limited and can be waitlisted."],
	["Who can join?", "Educators, students, city staff, employers, and residents. You do not need to be enrolled in a degree to start a pathway."],
	["Do I need to code?", "No, except Machine Learning with Python and some NVIDIA labs. Foundations assume no coding."],
	["Is this a degree?", "No. You can earn an AIR completion certificate, a provider certificate, or an NVIDIA DLI certificate. None of those is an associate degree."],
	["Will I get educator credit?", "Professional learning credit is planned through Los Rios for eligible educator pathways. It is not open as a self-serve claim yet, and your district still has to accept it."],
	["Do you build AI systems?", "No. AIR trains people and helps them plan. Operating a production system stays with the organization that owns the data."],
	["Does this include NVIDIA hardware?", "No. The NVIDIA track is education: Deep Learning Institute courses and faculty briefings."],
	["Where do I register?", "Through Folsom Lake College when the enrollment window is linked. Until then, send a request from the contact page and name the pathway."]
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "FAQs",
		title: "Short answers",
		lede: "If your question is really a request for training, use Contact and say who it is for."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl space-y-6 px-4 py-12",
		children: faqs.map(([q, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl text-navy",
			children: q
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-muted",
			children: a
		})] }, q))
	})] });
}
//#endregion
export { Page as component };
