import { z as sanitize_props, F as spread_props, G as slot, w as attr } from "../../../chunks/index.js";
import { j as escape_html } from "../../../chunks/context.js";
import { w as whatsappUrl } from "../../../chunks/siteConfig.js";
import { G as Globe, P as Pencil_ruler, M as Megaphone } from "../../../chunks/pencil-ruler.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Award($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
      }
    ],
    ["circle", { "cx": "12", "cy": "8", "r": "6" }]
  ];
  Icon($$renderer, spread_props([
    { name: "award" },
    $$sanitized_props,
    {
      /**
       * @component @name Award
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUuNDc3IDEyLjg5IDEuNTE1IDguNTI2YS41LjUgMCAwIDEtLjgxLjQ3bC0zLjU4LTIuNjg3YTEgMSAwIDAgMC0xLjE5NyAwbC0zLjU4NiAyLjY4NmEuNS41IDAgMCAxLS44MS0uNDY5bDEuNTE0LTguNTI2IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/award
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Chart_column($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { "d": "M18 17V9" }],
    ["path", { "d": "M13 17V5" }],
    ["path", { "d": "M8 17v-3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "chart-column" },
    $$sanitized_props,
    {
      /**
       * @component @name ChartColumn
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAzdjE2YTIgMiAwIDAgMCAyIDJoMTYiIC8+CiAgPHBhdGggZD0iTTE4IDE3VjkiIC8+CiAgPHBhdGggZD0iTTEzIDE3VjUiIC8+CiAgPHBhdGggZD0iTTggMTd2LTMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chart-column
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Database($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }],
    ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }],
    ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "database" },
    $$sanitized_props,
    {
      /**
       * @component @name Database
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8ZWxsaXBzZSBjeD0iMTIiIGN5PSI1IiByeD0iOSIgcnk9IjMiIC8+CiAgPHBhdGggZD0iTTMgNVYxOUE5IDMgMCAwIDAgMjEgMTlWNSIgLz4KICA8cGF0aCBkPSJNMyAxMkE5IDMgMCAwIDAgMjEgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/database
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Target($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "12", "r": "6" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "target" },
    $$sanitized_props,
    {
      /**
       * @component @name Target
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI2IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/target
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Webhook($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
      }
    ],
    [
      "path",
      {
        "d": "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"
      }
    ],
    [
      "path",
      {
        "d": "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "webhook" },
    $$sanitized_props,
    {
      /**
       * @component @name Webhook
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggMTYuOThoLTUuOTljLTEuMSAwLTEuOTUuOTQtMi40OCAxLjlBNCA0IDAgMCAxIDIgMTdjLjAxLS43LjItMS40LjU3LTIiIC8+CiAgPHBhdGggZD0ibTYgMTcgMy4xMy01Ljc4Yy41My0uOTcuMS0yLjE4LS41LTMuMWE0IDQgMCAxIDEgNi44OS00LjA2IiAvPgogIDxwYXRoIGQ9Im0xMiA2IDMuMTMgNS43M0MxNS42NiAxMi43IDE2LjkgMTMgMTggMTNhNCA0IDAgMCAxIDAgOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/webhook
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const pricing = {
      systems: "Business Websites from K8,500",
      brand: "Brand Identity Packages from K4,500",
      growth: "Custom Web Apps from K18,000"
    };
    $$renderer2.push(`<div class="services-page"><section class="page-intro bg-none svelte-4z030h" style="background-image: linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url('/images/services_banner.png'); background-size: cover; background-position: center; color: white;"><div class="container text-center fade-up-element"><h1 style="color: white;" class="svelte-4z030h">Core Systems. Premium Design.</h1> <p class="large-text svelte-4z030h" style="color: rgba(255, 255, 255, 0.9);">Digital systems and design are the core of what we do. Growth
                marketing is the engine that drives it all forward.</p></div></section> <section id="systems-dev" class="service-detail svelte-4z030h"><div class="container fade-up-element"><h2 class="section-title">Systems &amp; Development</h2> <div class="service-items-grid svelte-4z030h"><div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Globe($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">Business Websites</h4> <p class="svelte-4z030h">Fast, mobile-optimized, and built for SEO. Every pixel
                        is designed to convert visitors into clients.</p></div> <div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Database($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">Web Apps &amp; Internal Tools</h4> <p class="svelte-4z030h">From client portals to lightweight ERPs, we build the
                        software that runs your business.</p></div> <div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Webhook($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">APIs &amp; Automations</h4> <p class="svelte-4z030h">Connect payment gateways (DPO, Airtel, MTN) and automate
                        repetitive tasks.</p></div></div> <div class="price-anchor svelte-4z030h"><span class="price-icon svelte-4z030h" aria-hidden="true">💡</span> <span class="price-text svelte-4z030h">${escape_html(pricing.systems)}</span> <span class="price-sep svelte-4z030h">·</span> <span class="price-cta svelte-4z030h">Custom quotes available — <a${attr("href", whatsappUrl())} target="_blank" rel="noopener noreferrer" class="svelte-4z030h">chat with us on WhatsApp</a></span></div></div></section> <section id="brand-design" class="service-detail bg-neutral svelte-4z030h"><div class="container fade-up-element"><h2 class="section-title">Brand &amp; Design</h2> <div class="service-items-grid svelte-4z030h"><div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Award($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">Brand Identity</h4> <p class="svelte-4z030h">Logos, color systems, and brand guides that define how
                        the world sees you.</p></div> <div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Pencil_ruler($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">Marketing Collateral</h4> <p class="svelte-4z030h">Company profiles and social templates that maintain your
                        premium edge.</p></div> <div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Pencil_ruler($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">UI/UX Design</h4> <p class="svelte-4z030h">Human-centered wireframes and hi-fi prototypes built for
                        clarity.</p></div></div> <div class="price-anchor svelte-4z030h"><span class="price-icon svelte-4z030h" aria-hidden="true">💡</span> <span class="price-text svelte-4z030h">${escape_html(pricing.brand)}</span> <span class="price-sep svelte-4z030h">·</span> <span class="price-cta svelte-4z030h">Custom quotes available — <a${attr("href", whatsappUrl())} target="_blank" rel="noopener noreferrer" class="svelte-4z030h">chat with us on WhatsApp</a></span></div></div></section> <section id="marketing-growth" class="service-detail svelte-4z030h"><div class="container fade-up-element"><h2 class="section-title">Digital Growth</h2> <div class="service-items-grid svelte-4z030h"><div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Megaphone($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">Paid Campaigns</h4> <p class="svelte-4z030h">Strategic Meta, Google, and TikTok ads tuned to convert
                        Zambian and regional audiences.</p></div> <div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Target($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">SEO &amp; Content</h4> <p class="svelte-4z030h">Search-friendly content and on-page SEO that lifts you
                        above local competitors.</p></div> <div class="item glass-panel svelte-4z030h"><div class="icon-wrapper svelte-4z030h">`);
    Chart_column($$renderer2, { size: 28 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-4z030h">Analytics &amp; Reporting</h4> <p class="svelte-4z030h">Clear monthly reports tied to revenue, leads, and the
                        decisions that grow your business.</p></div></div> <div class="price-anchor svelte-4z030h"><span class="price-icon svelte-4z030h" aria-hidden="true">💡</span> <span class="price-text svelte-4z030h">${escape_html(pricing.growth)}</span> <span class="price-sep svelte-4z030h">·</span> <span class="price-cta svelte-4z030h">Custom quotes available — <a${attr("href", whatsappUrl())} target="_blank" rel="noopener noreferrer" class="svelte-4z030h">chat with us on WhatsApp</a></span></div></div></section> <section class="service-cta svelte-4z030h"><div class="container text-center fade-up-element"><h3>Not sure where to start?</h3> <p class="mb-4">Send us a message and we’ll map it with you.</p> <a${attr("href", whatsappUrl())} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Chat on WhatsApp</a></div></section></div>`);
  });
}
export {
  _page as default
};
