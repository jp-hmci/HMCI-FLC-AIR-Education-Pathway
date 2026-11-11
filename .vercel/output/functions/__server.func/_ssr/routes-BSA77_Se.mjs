import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as milestones, f as services, n as courses, o as news, s as partners } from "./content-PQgFBQpR.mjs";
import { n as GhostLink, r as GoldLink, t as CourseCard } from "./bits-B17611j9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BSA77_Se.js
var import_jsx_runtime = require_jsx_runtime();
var audiences = [
	{
		to: "/educators",
		title: "Educators",
		text: "Free training, classroom prompts, playbooks, and a planned credit path through Los Rios."
	},
	{
		to: "/government",
		title: "Government",
		text: "Hands-on practice for public employees, plus policy drafts a city can edit."
	},
	{
		to: "/business",
		title: "Business",
		text: "Workforce pathways and playbooks for manufacturing, cybersecurity, and small firms."
	},
	{
		to: "/students",
		title: "Students",
		text: "Foundations, industry certificates, and NVIDIA labs — with rules for how to use them in class."
	}
];
function Home() {
	const featured = courses.filter((c) => [
		"ai-in-business",
		"ai-for-educators",
		"nvidia-genai",
		"google-prompting"
	].includes(c.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/campus.jpg",
					alt: "Folsom-area college campus in late-afternoon light",
					className: "absolute inset-0 h-full w-full object-cover opacity-45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/75" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-20 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-gold",
							children: "AI and robotics learning · Rancho Cordova"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-5xl text-white md:text-6xl",
							children: "AIR Pathways"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl font-display text-2xl text-white/90",
							children: "Practical AI training for the people who live, teach, and work here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-white/80",
							children: "Preparing educators, public employees, businesses, students, and neighbors for work that now includes AI. Anchored at Folsom Lake College."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLink, {
								to: "/pathways",
								children: "Start AIR Pathways"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostLink, {
								to: "/ai-in-rancho",
								dark: true,
								children: "See the local landscape"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-white/70",
							children: "Free pathways are listed now. Registration runs through Folsom Lake College."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl text-navy",
					children: "AI for Rancho Cordova"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted",
					children: "Find the door that matches your job. The courses behind them are the same catalog."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: audiences.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: a.to,
						className: "rounded-xl border border-line bg-card p-5 no-underline transition hover:-translate-y-0.5 hover:border-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl text-navy",
								children: a.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: a.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-4 inline-block text-sm font-semibold text-gold-deep",
								children: "Open"
							})
						]
					}, a.to))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "From awareness to a real use"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-white/75",
						children: "AIR Pathways is more than a course list. It is how the region learns, sets rules, and decides whether a tool belongs in the work."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostLink, {
							to: "/services",
							dark: true,
							children: "Explore services"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-4",
					children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-white/15 pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-wider text-gold",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/75",
								children: s.detail
							})
						]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl text-navy",
					children: "Pathways to start with"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Foundations, an industry certificate, and NVIDIA education."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pathways",
					className: "text-sm font-semibold text-navy no-underline hover:text-gold-deep",
					children: "Browse the full catalog"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: featured.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/classroom.jpg",
					alt: "Empty classroom workshop with laptops on tables",
					className: "h-72 w-full rounded-xl object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-gold-deep",
						children: "The network"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl text-navy",
						children: "One front door. Three operators."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Folsom Lake College and Los Rios hold the education. HMCI builds the pathways and the support around them. The City of Rancho Cordova makes this a civic project, not a vendor brochure. Intel’s educator curriculum, Solidigm’s local industry context, and NVIDIA’s education track come in beside that core."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: milestones.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[6rem_1fr] gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-gold-deep",
								children: m.when
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-navy",
								children: [m.title, ". "]
							}), m.detail] })]
						}, m.when))
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl text-navy",
					children: "Who is already in the room"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: partners.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/partners",
						className: "text-sm font-semibold text-navy no-underline hover:text-gold-deep",
						children: "Full partner list"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl text-navy",
						children: "Latest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/news",
						className: "text-sm font-semibold text-navy no-underline",
						children: "Newsroom"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					children: news.slice(0, 3).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/news",
						hash: n.slug,
						className: "rounded-xl border border-line bg-card p-5 no-underline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: n.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-xl text-navy",
								children: n.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: n.summary
							})
						]
					}, n.slug))
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
