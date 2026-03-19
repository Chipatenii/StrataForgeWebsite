
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/how-we-work" | "/services";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/how-we-work": Record<string, never>;
			"/services": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/contact" | "/contact/" | "/how-we-work" | "/how-we-work/" | "/services" | "/services/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/assets/about-story.png" | "/assets/hero-visual.png" | "/assets/logo-mark.png" | "/assets/primary-logo.png" | "/assets/services-banner.png" | "/images/about_visual.png" | "/images/favicon.png" | "/images/hero_visual.png" | "/images/logo-full.png" | "/images/services_banner.png" | string & {};
	}
}