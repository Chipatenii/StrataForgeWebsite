export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/about-story.png","assets/hero-visual.png","assets/logo-mark.png","assets/primary-logo.png","assets/services-banner.png","images/about_visual.png","images/favicon.png","images/hero_visual.png","images/logo-full.png","images/services_banner.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DzZlDOrn.js",app:"_app/immutable/entry/app.B6xIbwPd.js",imports:["_app/immutable/entry/start.DzZlDOrn.js","_app/immutable/chunks/TJb2Wux-.js","_app/immutable/chunks/Bdt1wtWl.js","_app/immutable/chunks/D2W8kKxN.js","_app/immutable/entry/app.B6xIbwPd.js","_app/immutable/chunks/Bdt1wtWl.js","_app/immutable/chunks/BvmvetLh.js","_app/immutable/chunks/BXkeE4lB.js","_app/immutable/chunks/DCJPmqwH.js","_app/immutable/chunks/D2W8kKxN.js","_app/immutable/chunks/BB-k88Wp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/how-we-work",
				pattern: /^\/how-we-work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
