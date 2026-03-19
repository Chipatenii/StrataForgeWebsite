

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Ddw-tYrg.js","_app/immutable/chunks/P8B-byN9.js","_app/immutable/chunks/BnoWBN-w.js","_app/immutable/chunks/D4KuA4tR.js"];
export const stylesheets = ["_app/immutable/assets/3.D9Bubgwx.css"];
export const fonts = [];
