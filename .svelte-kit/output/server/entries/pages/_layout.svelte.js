import "clsx";
import { w as attr_class, x as stringify } from "../../chunks/index.js";
import { j as escape_html } from "../../chunks/context.js";
function Header($$renderer) {
  $$renderer.push(`<header class="sticky-header svelte-1elxaub"><nav class="container nav-bar svelte-1elxaub"><a href="/" class="logo-container svelte-1elxaub"><img src="/images/logo-full.png" alt="Strata Forge Technologies" class="logo-desktop svelte-1elxaub"/> <img src="/images/logo-full.png" alt="Strata Forge" class="logo-mobile svelte-1elxaub"/></a> <div class="menu-desktop svelte-1elxaub"><a href="/" class="svelte-1elxaub">Home</a> <a href="/services" class="svelte-1elxaub">Services</a> <a href="/how-we-work" class="svelte-1elxaub">Process</a> <a href="/about" class="svelte-1elxaub">About</a> <a href="/contact" class="btn btn-primary svelte-1elxaub">Book a Call</a></div> <button class="menu-toggle svelte-1elxaub" aria-label="Toggle menu"><div${attr_class(`hamburger ${stringify("")}`, "svelte-1elxaub")}><span class="svelte-1elxaub"></span> <span class="svelte-1elxaub"></span> <span class="svelte-1elxaub"></span></div></button> <div${attr_class(`menu-mobile-overlay ${stringify("")}`, "svelte-1elxaub")}><div class="menu-mobile-content svelte-1elxaub"><a href="/" class="svelte-1elxaub">Home</a> <a href="/services" class="svelte-1elxaub">Services</a> <a href="/how-we-work" class="svelte-1elxaub">Process</a> <a href="/about" class="svelte-1elxaub">About</a> <a href="/contact" class="btn btn-primary svelte-1elxaub">Book a Call</a></div></div></nav></header>`);
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="footer bg-neutral svelte-jz8lnl"><div class="container footer-grid svelte-jz8lnl"><div class="footer-brand svelte-jz8lnl"><img src="/images/logo-full.png" alt="Strata Forge Technologies" class="footer-logo svelte-jz8lnl"/> <p class="footer-tagline svelte-jz8lnl">Systems | Design | Marketing</p> <div class="footer-socials svelte-jz8lnl"><a href="#" aria-label="Facebook" class="svelte-jz8lnl">FB</a> <a href="#" aria-label="Instagram" class="svelte-jz8lnl">IG</a> <a href="#" aria-label="LinkedIn" class="svelte-jz8lnl">LI</a></div></div> <div class="footer-links svelte-jz8lnl"><h4 class="svelte-jz8lnl">Quick Links</h4> <a href="/" class="svelte-jz8lnl">Home</a> <a href="/services" class="svelte-jz8lnl">Services</a> <a href="/about" class="svelte-jz8lnl">About</a> <a href="/contact" class="svelte-jz8lnl">Contact</a></div> <div class="footer-services svelte-jz8lnl"><h4 class="svelte-jz8lnl">Services</h4> <a href="/services#systems-dev" class="svelte-jz8lnl">Websites &amp; Web Apps</a> <a href="/services#brand-design" class="svelte-jz8lnl">Brand &amp; UI/UX Design</a> <a href="/services#marketing-growth" class="svelte-jz8lnl">Digital Campaigns</a></div> <div class="footer-contact svelte-jz8lnl"><h4 class="svelte-jz8lnl">Get in Touch</h4> <p class="svelte-jz8lnl">Lusaka, Zambia</p> <p class="svelte-jz8lnl">Remote-first Culture</p> <a href="mailto:hello@strataforge.com" class="svelte-jz8lnl">hello@strataforge.com</a></div></div> <div class="container footer-bottom svelte-jz8lnl"><p class="svelte-jz8lnl">© ${escape_html(currentYear)} Strata Forge Technologies Limited. All rights reserved.</p></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="app-wrapper">`);
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
