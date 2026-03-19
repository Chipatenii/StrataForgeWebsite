import "clsx";
import { w as attr_class, x as stringify, y as sanitize_props, z as spread_props, F as slot } from "../../chunks/index.js";
import { j as escape_html } from "../../chunks/context.js";
import { I as Icon } from "../../chunks/Icon.js";
function Header($$renderer) {
  $$renderer.push(`<header class="sticky-header svelte-1elxaub"><nav class="container nav-bar svelte-1elxaub"><a href="/" class="logo-container svelte-1elxaub"><img src="/images/logo-full.png" alt="Strata Forge Technologies" class="logo-desktop svelte-1elxaub"/> <img src="/images/logo-full.png" alt="Strata Forge" class="logo-mobile svelte-1elxaub"/></a> <div class="menu-desktop svelte-1elxaub"><a href="/" class="svelte-1elxaub">Home</a> <a href="/services" class="svelte-1elxaub">Services</a> <a href="/how-we-work" class="svelte-1elxaub">Process</a> <a href="/portfolio" class="svelte-1elxaub">Portfolio</a> <a href="/about" class="svelte-1elxaub">About</a> <a href="/contact" class="btn btn-primary svelte-1elxaub">Book a Call</a></div> <button class="menu-toggle svelte-1elxaub" aria-label="Toggle menu"><div${attr_class(`hamburger ${stringify("")}`, "svelte-1elxaub")}><span class="svelte-1elxaub"></span> <span class="svelte-1elxaub"></span> <span class="svelte-1elxaub"></span></div></button> <div${attr_class(`menu-mobile-overlay ${stringify("")}`, "svelte-1elxaub")}><div class="menu-mobile-content svelte-1elxaub"><a href="/" class="svelte-1elxaub">Home</a> <a href="/services" class="svelte-1elxaub">Services</a> <a href="/how-we-work" class="svelte-1elxaub">Process</a> <a href="/portfolio" class="svelte-1elxaub">Portfolio</a> <a href="/about" class="svelte-1elxaub">About</a> <a href="/contact" class="btn btn-primary svelte-1elxaub">Book a Call</a></div></div></nav></header>`);
}
function Facebook($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "facebook" },
    $$sanitized_props,
    {
      /**
       * @component @name Facebook
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggMmgtM2E1IDUgMCAwIDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMCAxIDEtMWgzeiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/facebook
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=facebook instead. This icon will be removed in v1.0
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
function Instagram($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "20",
        "x": "2",
        "y": "2",
        "rx": "5",
        "ry": "5"
      }
    ],
    [
      "path",
      { "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }
    ],
    [
      "line",
      { "x1": "17.5", "x2": "17.51", "y1": "6.5", "y2": "6.5" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "instagram" },
    $$sanitized_props,
    {
      /**
       * @component @name Instagram
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIiIHk9IjIiIHJ4PSI1IiByeT0iNSIgLz4KICA8cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIgLz4KICA8bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/instagram
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=instagram instead. This icon will be removed in v1.0
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
function Linkedin($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    ["rect", { "width": "4", "height": "12", "x": "2", "y": "9" }],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "linkedin" },
    $$sanitized_props,
    {
      /**
       * @component @name Linkedin
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiIC8+CiAgPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjkiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/linkedin
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=linkedin instead. This icon will be removed in v1.0
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
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="footer bg-neutral svelte-jz8lnl"><div class="container footer-grid svelte-jz8lnl"><div class="footer-brand svelte-jz8lnl"><img src="/images/logo-full.png" alt="Strata Forge Technologies" class="footer-logo svelte-jz8lnl"/> <p class="footer-tagline svelte-jz8lnl">Systems | Design | Marketing</p> <div class="footer-socials svelte-jz8lnl"><a href="https://www.facebook.com/strataforgetechnologies/" target="_blank" aria-label="Facebook" class="svelte-jz8lnl">`);
    Facebook($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></a> <a href="https://www.instagram.com/strataforgetech/" target="_blank" aria-label="Instagram" class="svelte-jz8lnl">`);
    Instagram($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></a> <a href="https://www.linkedin.com/company/strataforgetechnologies/" target="_blank" aria-label="LinkedIn" class="svelte-jz8lnl">`);
    Linkedin($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></a></div></div> <div class="footer-links svelte-jz8lnl"><h4 class="svelte-jz8lnl">Quick Links</h4> <a href="/" class="svelte-jz8lnl">Home</a> <a href="/services" class="svelte-jz8lnl">Services</a> <a href="/portfolio" class="svelte-jz8lnl">Portfolio</a> <a href="/about" class="svelte-jz8lnl">About</a> <a href="/contact" class="svelte-jz8lnl">Contact</a></div> <div class="footer-services svelte-jz8lnl"><h4 class="svelte-jz8lnl">Services</h4> <a href="/services#systems-dev" class="svelte-jz8lnl">Websites &amp; Web Apps</a> <a href="/services#brand-design" class="svelte-jz8lnl">Brand &amp; UI/UX Design</a> <a href="/services#marketing-growth" class="svelte-jz8lnl">Digital Campaigns</a></div> <div class="footer-contact svelte-jz8lnl"><h4 class="svelte-jz8lnl">Get in Touch</h4> <p class="svelte-jz8lnl">Lusaka, Zambia</p> <p class="svelte-jz8lnl">+260979082676</p> <a href="mailto:strataforgetechnologies@gmail.com" class="svelte-jz8lnl">strataforgetechnologies@gmail.com</a></div></div> <div class="container footer-bottom svelte-jz8lnl"><p class="svelte-jz8lnl">© ${escape_html(currentYear)} Strata Forge Technologies Limited. All rights reserved.</p></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="app-wrapper"><div class="bg-orb orb-primary svelte-12qhfyh"></div> <div class="bg-orb orb-secondary svelte-12qhfyh"></div> `);
  Header($$renderer);
  $$renderer.push(`<!----> <main>`);
  children($$renderer);
  $$renderer.push(`<!----></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
