import { G as ensure_array_like, w as attr_class, x as stringify } from "../../../chunks/index.js";
import { j as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const portfolioItems = [
    {
      title: "Zambian Fintech App",
      category: "Web App",
      image: "/images/portfolio_1.jpg"
    },
    {
      title: "Lusaka Estate Branding",
      category: "Brand Identity",
      image: "/images/portfolio_2.jpg"
    },
    {
      title: "AgriCorp Dashboard",
      category: "Internal Tool",
      image: "/images/portfolio_3.jpg"
    },
    {
      title: "Retail E-commerce",
      category: "Business Website",
      image: "/images/portfolio_4.jpg"
    },
    {
      title: "Mining Logistics Portal",
      category: "System Design",
      image: "/images/portfolio_5.jpg"
    },
    {
      title: "Healthcare Kiosk UI",
      category: "UI/UX Design",
      image: "/images/portfolio_6.jpg"
    }
  ];
  $$renderer.push(`<div class="portfolio-page"><section class="page-intro svelte-1uo84gz" style="background: linear-gradient(rgba(32, 53, 144, 0.85), rgba(32, 53, 144, 0.95)), url('/images/services_banner.png'); background-size: cover; background-position: center;"><div class="container text-center fade-up-element"><h1 style="color: white; margin-bottom: 24px;">Our Work &amp; Portfolio</h1> <p class="large-text svelte-1uo84gz" style="color: rgba(255, 255, 255, 0.9);">A curated collection of logos, posters, web apps, and digital platforms expertly built by Strata Forge.</p></div></section> <section class="portfolio-grid-section svelte-1uo84gz"><div class="container fade-up-element"><div class="grid svelte-1uo84gz"><!--[-->`);
  const each_array = ensure_array_like(portfolioItems);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$renderer.push(`<div${attr_class(`portfolio-card glass-panel fade-up-element delay-${stringify(Math.min((i + 1) * 100, 400))}`, "svelte-1uo84gz")}><div class="card-image-wrapper svelte-1uo84gz"><div class="placeholder-image svelte-1uo84gz"><span>${escape_html(item.category)} Visual</span></div></div> <div class="card-content svelte-1uo84gz"><h3 class="svelte-1uo84gz">${escape_html(item.title)}</h3> <p class="svelte-1uo84gz">${escape_html(item.category)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section></div>`);
}
export {
  _page as default
};
