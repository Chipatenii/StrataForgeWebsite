import { z as sanitize_props, F as spread_props, G as slot, J as ensure_array_like, x as attr_class, w as attr, y as stringify } from "../../chunks/index.js";
import { C as ClientLogos } from "../../chunks/ClientLogos.js";
import { j as escape_html } from "../../chunks/context.js";
import { F as FAQ } from "../../chunks/FAQ.js";
import { w as whatsappUrl } from "../../chunks/siteConfig.js";
import { I as Icon } from "../../chunks/Icon.js";
import { G as Globe, P as Pencil_ruler, M as Megaphone } from "../../chunks/pencil-ruler.js";
function Cpu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M17 20v2" }],
    ["path", { "d": "M17 2v2" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M2 17h2" }],
    ["path", { "d": "M2 7h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "M20 17h2" }],
    ["path", { "d": "M20 7h2" }],
    ["path", { "d": "M7 20v2" }],
    ["path", { "d": "M7 2v2" }],
    [
      "rect",
      { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "2" }
    ],
    [
      "rect",
      { "x": "8", "y": "8", "width": "8", "height": "8", "rx": "1" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "cpu" },
    $$sanitized_props,
    {
      /**
       * @component @name Cpu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjB2MiIgLz4KICA8cGF0aCBkPSJNMTIgMnYyIiAvPgogIDxwYXRoIGQ9Ik0xNyAyMHYyIiAvPgogIDxwYXRoIGQ9Ik0xNyAydjIiIC8+CiAgPHBhdGggZD0iTTIgMTJoMiIgLz4KICA8cGF0aCBkPSJNMiAxN2gyIiAvPgogIDxwYXRoIGQ9Ik0yIDdoMiIgLz4KICA8cGF0aCBkPSJNMjAgMTJoMiIgLz4KICA8cGF0aCBkPSJNMjAgMTdoMiIgLz4KICA8cGF0aCBkPSJNMjAgN2gyIiAvPgogIDxwYXRoIGQ9Ik03IDIwdjIiIC8+CiAgPHBhdGggZD0iTTcgMnYyIiAvPgogIDxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcng9IjIiIC8+CiAgPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/cpu
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
function Palette($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
      }
    ],
    [
      "circle",
      { "cx": "13.5", "cy": "6.5", "r": ".5", "fill": "currentColor" }
    ],
    [
      "circle",
      {
        "cx": "17.5",
        "cy": "10.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "circle",
      { "cx": "6.5", "cy": "12.5", "r": ".5", "fill": "currentColor" }
    ],
    [
      "circle",
      { "cx": "8.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "palette" },
    $$sanitized_props,
    {
      /**
       * @component @name Palette
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjJhMSAxIDAgMCAxIDAtMjAgMTAgOSAwIDAgMSAxMCA5IDUgNSAwIDAgMS01IDVoLTIuMjVhMS43NSAxLjc1IDAgMCAwLTEuNCAyLjhsLjMuNGExLjc1IDEuNzUgMCAwIDEtMS40IDIuOHoiIC8+CiAgPGNpcmNsZSBjeD0iMTMuNSIgY3k9IjYuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KICA8Y2lyY2xlIGN4PSIxNy41IiBjeT0iMTAuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KICA8Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMi41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIiAvPgogIDxjaXJjbGUgY3g9IjguNSIgY3k9IjcuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/palette
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
function Panels_top_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }
    ],
    ["path", { "d": "M3 9h18" }],
    ["path", { "d": "M9 21V9" }]
  ];
  Icon($$renderer, spread_props([
    { name: "panels-top-left" },
    $$sanitized_props,
    {
      /**
       * @component @name PanelsTopLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0zIDloMTgiIC8+CiAgPHBhdGggZD0iTTkgMjFWOSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/panels-top-left
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
function Trending_up($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16 7h6v6" }],
    ["path", { "d": "m22 7-8.5 8.5-5-5L2 17" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trending-up" },
    $$sanitized_props,
    {
      /**
       * @component @name TrendingUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgN2g2djYiIC8+CiAgPHBhdGggZD0ibTIyIDctOC41IDguNS01LTVMMiAxNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/trending-up
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
const testimonials = [
  {
    name: "[TESTIMONIAL_1_NAME]",
    title: "[TESTIMONIAL_1_TITLE]",
    photo: null,
    // TODO: Replace with [TESTIMONIAL_1_PHOTO] path or leave null for monogram
    quote: "[TESTIMONIAL_1_QUOTE]"
  },
  {
    name: "[TESTIMONIAL_2_NAME]",
    title: "[TESTIMONIAL_2_TITLE]",
    photo: null,
    // TODO: Replace with [TESTIMONIAL_2_PHOTO]
    quote: "[TESTIMONIAL_2_QUOTE]"
  },
  {
    name: "[TESTIMONIAL_3_NAME]",
    title: "[TESTIMONIAL_3_TITLE]",
    photo: null,
    // TODO: Replace with [TESTIMONIAL_3_PHOTO]
    quote: "[TESTIMONIAL_3_QUOTE]"
  }
];
function Testimonials($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    function initials(name) {
      if (!name) return "·";
      const parts = name.trim().split(/\s+/);
      const a = parts[0]?.[0] ?? "";
      const b = parts[1]?.[0] ?? "";
      return (a + b).toUpperCase() || "·";
    }
    $$renderer2.push(`<section class="testimonials svelte-1jhcrt0"><div class="container fade-up-element"><div class="text-center mb-6"><h2 class="section-title">What our clients say</h2> <p class="section-subtitle svelte-1jhcrt0">Real results for real Zambian businesses.</p></div> <div class="testimonials-grid svelte-1jhcrt0"><!--[-->`);
    const each_array = ensure_array_like(testimonials);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let t = each_array[i];
      $$renderer2.push(`<article${attr_class(`testimonial-card glass-panel fade-up-element delay-${stringify(Math.min((i + 1) * 100, 400))}`, "svelte-1jhcrt0")}><span class="quote-mark svelte-1jhcrt0" aria-hidden="true">“</span> <p class="quote svelte-1jhcrt0">${escape_html(t.quote)}</p> <div class="who svelte-1jhcrt0">`);
      if (t.photo) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img class="avatar svelte-1jhcrt0"${attr("src", t.photo)}${attr("alt", t.name)}/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="avatar avatar-monogram svelte-1jhcrt0" aria-hidden="true">${escape_html(initials(t.name))}</div>`);
      }
      $$renderer2.push(`<!--]--> <div class="meta svelte-1jhcrt0"><p class="name svelte-1jhcrt0">${escape_html(t.name)}</p> <p class="title svelte-1jhcrt0">${escape_html(t.title)}</p></div></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="home-page"><section id="hero" class="hero svelte-1uha8ag"><div class="container hero-content fade-up-element svelte-1uha8ag"><div class="hero-text svelte-1uha8ag"><h1 class="svelte-1uha8ag">We build your systems and brand, then help them grow.</h1> <p class="subtext svelte-1uha8ag">Scalable websites, custom apps, and premium brand identities forged for Zambian SMEs and
					growing regional brands—then amplified with data-driven marketing.</p> <div class="hero-ctas svelte-1uha8ag"><a${attr("href", whatsappUrl())} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Chat on WhatsApp</a> <a href="/services" class="btn btn-outline">View Services</a></div></div> <div class="hero-visual svelte-1uha8ag"><div class="visual-mockup svelte-1uha8ag"><img src="/images/hero_visual.png" alt="Modern Dashboard" class="hero-image svelte-1uha8ag"/></div></div></div></section> `);
    ClientLogos($$renderer2);
    $$renderer2.push(`<!----> <section class="who-we-help bg-neutral"><div class="container fade-up-element"><h2 class="section-title text-center mb-4">Empowering the engines of Zambia's economy.</h2> <div class="help-grid svelte-1uha8ag"><div class="help-item glass-panel svelte-1uha8ag"><span>SMEs &amp; Growing Businesses</span></div> <div class="help-item glass-panel svelte-1uha8ag"><span>Colleges &amp; Institutions</span></div> <div class="help-item glass-panel svelte-1uha8ag"><span>Finance &amp; Fintech</span></div> <div class="help-item glass-panel svelte-1uha8ag"><span>Service Brands</span></div></div></div></section> <section id="pillars" class="pillars"><div class="container fade-up-element"><div class="text-center mb-6"><h2 class="section-title">Built in layers. Forged for growth.</h2> <p class="section-subtitle">A holistic approach to digital excellence.</p></div> <div class="pillars-grid svelte-1uha8ag"><div class="pillar-card glass-panel svelte-1uha8ag"><div class="icon-wrapper svelte-1uha8ag">`);
    Cpu($$renderer2, { size: 32 });
    $$renderer2.push(`<!----></div> <h3 class="svelte-1uha8ag">Systems &amp; Development</h3> <p class="svelte-1uha8ag">Custom-coded tools and websites built on secure, scalable architecture.</p> <a href="/services#systems-dev" class="svelte-1uha8ag">Learn more →</a></div> <div class="pillar-card glass-panel svelte-1uha8ag"><div class="icon-wrapper svelte-1uha8ag">`);
    Palette($$renderer2, { size: 32 });
    $$renderer2.push(`<!----></div> <h3 class="svelte-1uha8ag">Brand &amp; Design</h3> <p class="svelte-1uha8ag">Strategic visual identities that turn first impressions into lasting trust.</p> <a href="/services#brand-design" class="svelte-1uha8ag">Learn more →</a></div> <div class="pillar-card glass-panel svelte-1uha8ag"><div class="icon-wrapper svelte-1uha8ag">`);
    Trending_up($$renderer2, { size: 32 });
    $$renderer2.push(`<!----></div> <h3 class="svelte-1uha8ag">Digital Growth</h3> <p class="svelte-1uha8ag">Targeted campaigns designed to turn traffic into measurable leads and sales.</p> <a href="/services#marketing-growth" class="svelte-1uha8ag">Learn more →</a></div></div></div></section> <section id="featured-services" class="featured-services bg-neutral"><div class="container fade-up-element"><div class="grid-2 svelte-1uha8ag"><div class="service-card glass-panel svelte-1uha8ag"><div class="icon-wrapper mb-3 svelte-1uha8ag">`);
    Globe($$renderer2, { size: 24 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-1uha8ag">Business Websites</h4> <p class="svelte-1uha8ag">High-performance, mobile-first windows to your business.</p></div> <div class="service-card glass-panel svelte-1uha8ag"><div class="icon-wrapper mb-3 svelte-1uha8ag">`);
    Panels_top_left($$renderer2, { size: 24 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-1uha8ag">Web Apps &amp; Tools</h4> <p class="svelte-1uha8ag">Custom software built to solve unique operational bottlenecks.</p></div> <div class="service-card glass-panel svelte-1uha8ag"><div class="icon-wrapper mb-3 svelte-1uha8ag">`);
    Pencil_ruler($$renderer2, { size: 24 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-1uha8ag">UI/UX Design</h4> <p class="svelte-1uha8ag">Human-centered design that prioritizes your users.</p></div> <div class="service-card glass-panel svelte-1uha8ag"><div class="icon-wrapper mb-3 svelte-1uha8ag">`);
    Megaphone($$renderer2, { size: 24 });
    $$renderer2.push(`<!----></div> <h4 class="svelte-1uha8ag">Paid Campaigns</h4> <p class="svelte-1uha8ag">Strategic growth through Meta, Google, and TikTok ads.</p></div></div></div></section> `);
    Testimonials($$renderer2);
    $$renderer2.push(`<!----> `);
    FAQ($$renderer2);
    $$renderer2.push(`<!----> <section id="final-cta" class="final-cta text-center svelte-1uha8ag"><div class="container fade-up-element"><h2 class="svelte-1uha8ag">Let’s build something that actually scales.</h2> <p class="mb-4">Ready to move from manual chaos to digital clarity? Let's map your project together.</p> <div class="hero-ctas svelte-1uha8ag"><a${attr("href", whatsappUrl())} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Start on WhatsApp</a> <a href="/contact" class="btn btn-outline">Book a Discovery Call</a></div></div></section></div>`);
  });
}
export {
  _page as default
};
