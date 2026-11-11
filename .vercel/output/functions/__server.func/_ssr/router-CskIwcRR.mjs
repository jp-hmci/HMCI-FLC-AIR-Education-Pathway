import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, S as useRouter, Y as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CskIwcRR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var learn = [
	{
		to: "/pathways",
		label: "All pathways"
	},
	{
		to: "/pathways/foundations",
		label: "AIR Foundations"
	},
	{
		to: "/pathways/industry",
		label: "Industry certificates"
	},
	{
		to: "/pathways/nvidia",
		label: "NVIDIA education"
	},
	{
		to: "/pathways/credentials",
		label: "Credentials"
	}
];
var audiences = [
	{
		to: "/educators",
		label: "Educators"
	},
	{
		to: "/government",
		label: "Government"
	},
	{
		to: "/business",
		label: "Business"
	},
	{
		to: "/students",
		label: "Students"
	}
];
var resources = [
	{
		to: "/resources",
		label: "Resource directory"
	},
	{
		to: "/resources/playbooks",
		label: "Playbooks"
	},
	{
		to: "/resources/prompting",
		label: "Prompting guides"
	},
	{
		to: "/resources/policy",
		label: "Policy guides"
	},
	{
		to: "/resources/tools",
		label: "Tools"
	},
	{
		to: "/faqs",
		label: "FAQs"
	}
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-3 no-underline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "36",
			height: "36",
			viewBox: "0 0 36 36",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "36",
					height: "36",
					rx: "8",
					fill: "#0c2340"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 24.5 14.2 10h3.1L11.2 24.5H8Zm8.6 0 6.1-14.5h3.1L19.7 24.5h-3.1Z",
					fill: "#f4f1ea"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "26.2",
					cy: "11.2",
					r: "2.3",
					fill: "#c8891a"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-xl text-navy",
				children: "AIR Pathways"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs tracking-wide text-muted",
				children: "Rancho Cordova · Los Rios"
			})]
		})]
	});
}
function DeskMenu({ label, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "rounded-md px-2 py-2 text-sm text-white/90 hover:text-white",
			"aria-haspopup": "true",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "invisible absolute left-0 top-full z-40 min-w-56 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-line bg-card py-2 shadow-lg",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "block px-4 py-2 text-sm text-ink no-underline hover:bg-mist",
					children: item.label
				}, item.to))
			})
		})]
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const path = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-white/10 bg-navy text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ai-in-rancho",
							className: "rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white",
							children: "AI in Rancho Cordova"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskMenu, {
							label: "Learn",
							items: learn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskMenu, {
							label: "For you",
							items: audiences
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskMenu, {
							label: "Resources",
							items: resources
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/partners",
							className: "rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white",
							children: "Partners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/news",
							className: "rounded-md px-2 py-2 text-sm text-white/90 no-underline hover:text-white",
							children: "News"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/search",
							search: { q: "" },
							"aria-label": "Search AIR Pathways",
							className: "rounded-md p-2 text-white/90 no-underline hover:bg-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pathways",
							className: "hidden rounded-md bg-gold px-3 py-2 text-sm font-semibold text-navy-deep no-underline hover:bg-white sm:inline-block",
							children: "Free pathways"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-md p-2 text-white lg:hidden",
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
					title: "Learn",
					items: learn,
					onNavigate: () => setOpen(false)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
					title: "For you",
					items: audiences,
					onNavigate: () => setOpen(false)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
					title: "Resources",
					items: resources,
					onNavigate: () => setOpen(false)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid gap-1",
					children: [
						["/about", "About"],
						["/ai-in-rancho", "AI in Rancho Cordova"],
						["/services", "Services"],
						["/partners", "Partners"],
						["/news", "News"],
						["/events", "Events"],
						["/contact", "Contact"]
					].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						onClick: () => setOpen(false),
						className: "rounded-md px-2 py-2 text-white no-underline hover:bg-white/10",
						"data-active": path === to,
						children: label
					}, to))
				})
			]
		})]
	});
}
function MobileGroup({ title, items, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-2 text-xs uppercase tracking-wider text-gold",
			children: title
		}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.to,
			onClick: onNavigate,
			className: "block rounded-md px-2 py-2 text-white no-underline hover:bg-white/10",
			children: item.label
		}, item.to))]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-16 bg-navy-deep text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "AIR Pathways"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/70",
					children: "Free AI training for Rancho Cordova and the Los Rios colleges. Operated with Folsom Lake College, HMCI, and the City of Rancho Cordova."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-gold",
					children: "Learn"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: learn.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-white/80 no-underline hover:text-white",
						children: item.label
					}) }, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-gold",
					children: "For you"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						audiences.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-white/80 no-underline hover:text-white",
							children: item.label
						}) }, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "text-white/80 no-underline hover:text-white",
							children: "Services"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-white/80 no-underline hover:text-white",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-gold",
					children: "Site"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/search",
							search: { q: "" },
							className: "text-white/80 no-underline hover:text-white",
							children: "Search"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "text-white/80 no-underline hover:text-white",
							children: "Events"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faqs",
							className: "text-white/80 no-underline hover:text-white",
							children: "FAQs"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/accessibility",
							className: "text-white/80 no-underline hover:text-white",
							children: "Accessibility"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "text-white/80 no-underline hover:text-white",
							children: "Privacy"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-white/50",
				children: "AIR Pathways is a regional learning network. Course certificates from industry providers are issued by those providers. This site does not provide legal, medical, or security advice."
			})
		})]
	});
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var styles_default = "/assets/styles-y6Cm383F.css";
var Route$27 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AIR Pathways | AI training for Rancho Cordova" },
			{
				name: "description",
				content: "AIR Pathways is free AI training for Rancho Cordova and Los Rios, anchored at Folsom Lake College with HMCI and the City of Rancho Cordova."
			},
			{
				name: "theme-color",
				content: "#0c2340"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,450;6..72,560&family=Source+Sans+3:wght@400;600;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$26 = () => import("./routes-BSA77_Se.mjs");
var Route$26 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./about-CC6N0faJ.mjs");
var Route$25 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./accessibility-Cr9keDyf.mjs");
var Route$24 = createFileRoute("/accessibility")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./ai-in-rancho-Z-Lm9XOa.mjs");
var Route$23 = createFileRoute("/ai-in-rancho")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./business-DonnM49j.mjs");
var Route$22 = createFileRoute("/business")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./contact-CiEf6HpQ.mjs");
var Route$21 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./educators-B41hrrYK.mjs");
var Route$20 = createFileRoute("/educators")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./events-XEfCUaRP.mjs");
var Route$19 = createFileRoute("/events")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./faqs-DBMqXb6V.mjs");
var Route$18 = createFileRoute("/faqs")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./government-ur8M60lR.mjs");
var Route$17 = createFileRoute("/government")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./news-CvZzuTB5.mjs");
var Route$16 = createFileRoute("/news")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./partners-BhYGvp4B.mjs");
var Route$15 = createFileRoute("/partners")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./privacy-DOsVqM_t.mjs");
var Route$14 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./search-KxzHn9GB.mjs");
var Route$13 = createFileRoute("/search")({
	validateSearch: (search) => ({ q: typeof search.q === "string" ? search.q : "" }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./services-DN1nygZ7.mjs");
var Route$12 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./students-CVuCP4eQ.mjs");
var Route$11 = createFileRoute("/students")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./pathways-eY1DSoKK.mjs");
var Route$10 = createFileRoute("/pathways/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("../_courseId-CSYQaVMh.mjs");
var Route$9 = createFileRoute("/pathways/$courseId")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./credentials-D489jqD8.mjs");
var Route$8 = createFileRoute("/pathways/credentials")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./foundations-CLbMJYVa.mjs");
var Route$7 = createFileRoute("/pathways/foundations")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./industry-CSJ_26Tn.mjs");
var Route$6 = createFileRoute("/pathways/industry")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./nvidia-CqByT878.mjs");
var Route$5 = createFileRoute("/pathways/nvidia")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./resources-DobKqcZx.mjs");
var Route$4 = createFileRoute("/resources/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./playbooks-Ciz38SFf.mjs");
var Route$3 = createFileRoute("/resources/playbooks")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./policy-DXqMUNnf.mjs");
var Route$2 = createFileRoute("/resources/policy")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./prompting-CUXnXkFW.mjs");
var Route$1 = createFileRoute("/resources/prompting")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./tools-wmu53m0B.mjs");
var Route = createFileRoute("/resources/tools")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$26.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$27
});
var AboutRoute = Route$25.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$27
});
var AccessibilityRoute = Route$24.update({
	id: "/accessibility",
	path: "/accessibility",
	getParentRoute: () => Route$27
});
var AiInRanchoRoute = Route$23.update({
	id: "/ai-in-rancho",
	path: "/ai-in-rancho",
	getParentRoute: () => Route$27
});
var BusinessRoute = Route$22.update({
	id: "/business",
	path: "/business",
	getParentRoute: () => Route$27
});
var ContactRoute = Route$21.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$27
});
var EducatorsRoute = Route$20.update({
	id: "/educators",
	path: "/educators",
	getParentRoute: () => Route$27
});
var EventsRoute = Route$19.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$27
});
var FaqsRoute = Route$18.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$27
});
var GovernmentRoute = Route$17.update({
	id: "/government",
	path: "/government",
	getParentRoute: () => Route$27
});
var NewsRoute = Route$16.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$27
});
var PartnersRoute = Route$15.update({
	id: "/partners",
	path: "/partners",
	getParentRoute: () => Route$27
});
var PrivacyRoute = Route$14.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$27
});
var SearchRoute = Route$13.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$27
});
var ServicesRoute = Route$12.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$27
});
var StudentsRoute = Route$11.update({
	id: "/students",
	path: "/students",
	getParentRoute: () => Route$27
});
var PathwaysIndexRoute = Route$10.update({
	id: "/pathways/",
	path: "/pathways/",
	getParentRoute: () => Route$27
});
var PathwaysCourseIdRoute = Route$9.update({
	id: "/pathways/$courseId",
	path: "/pathways/$courseId",
	getParentRoute: () => Route$27
});
var PathwaysCredentialsRoute = Route$8.update({
	id: "/pathways/credentials",
	path: "/pathways/credentials",
	getParentRoute: () => Route$27
});
var PathwaysFoundationsRoute = Route$7.update({
	id: "/pathways/foundations",
	path: "/pathways/foundations",
	getParentRoute: () => Route$27
});
var PathwaysIndustryRoute = Route$6.update({
	id: "/pathways/industry",
	path: "/pathways/industry",
	getParentRoute: () => Route$27
});
var PathwaysNvidiaRoute = Route$5.update({
	id: "/pathways/nvidia",
	path: "/pathways/nvidia",
	getParentRoute: () => Route$27
});
var ResourcesIndexRoute = Route$4.update({
	id: "/resources/",
	path: "/resources/",
	getParentRoute: () => Route$27
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccessibilityRoute,
	AiInRanchoRoute,
	BusinessRoute,
	ContactRoute,
	EducatorsRoute,
	EventsRoute,
	FaqsRoute,
	GovernmentRoute,
	NewsRoute,
	PartnersRoute,
	PrivacyRoute,
	SearchRoute,
	ServicesRoute,
	StudentsRoute,
	PathwaysCourseIdRoute,
	PathwaysCredentialsRoute,
	PathwaysFoundationsRoute,
	PathwaysIndustryRoute,
	PathwaysNvidiaRoute,
	ResourcesPlaybooksRoute: Route$3.update({
		id: "/resources/playbooks",
		path: "/resources/playbooks",
		getParentRoute: () => Route$27
	}),
	ResourcesPolicyRoute: Route$2.update({
		id: "/resources/policy",
		path: "/resources/policy",
		getParentRoute: () => Route$27
	}),
	ResourcesPromptingRoute: Route$1.update({
		id: "/resources/prompting",
		path: "/resources/prompting",
		getParentRoute: () => Route$27
	}),
	ResourcesToolsRoute: Route.update({
		id: "/resources/tools",
		path: "/resources/tools",
		getParentRoute: () => Route$27
	}),
	PathwaysIndexRoute,
	ResourcesIndexRoute
};
var routeTree = Route$27._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route$9 as n, Route$13 as r, router_exports as t };
