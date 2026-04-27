import { J as ensure_array_like, x as attr_class, w as attr, y as stringify } from "../../../chunks/index.js";
import { j as escape_html } from "../../../chunks/context.js";
const portfolio = [
  // WEBSITES
  {
    title: "Project Name 1",
    category: "website",
    thumbnail: "/images/portfolio/web-1.jpg",
    description: "[Description of what was built and for whom]",
    tags: ["[Tag1]", "[Tag2]"],
    link: "https://live-url.com"
  },
  {
    title: "Project Name 2",
    category: "website",
    thumbnail: "/images/portfolio/web-2.jpg",
    description: "[Description]",
    tags: ["[Tag1]"],
    link: null
  },
  // LOGOS & BRANDING
  {
    title: "Brand Name 1",
    category: "branding",
    thumbnail: "/images/portfolio/brand-1.jpg",
    description: "[Description of the branding work done]",
    tags: ["[Tag1]", "[Tag2]"],
    link: null
  },
  {
    title: "Brand Name 2",
    category: "branding",
    thumbnail: "/images/portfolio/brand-2.jpg",
    description: "[Description]",
    tags: ["[Tag1]"],
    link: null
  },
  // FLYERS & PRINT
  {
    title: "Flyer Project 1",
    category: "flyer",
    thumbnail: "/images/portfolio/flyer-1.jpg",
    description: "[Description]",
    tags: ["[Tag1]"],
    link: null
  },
  {
    title: "Flyer Project 2",
    category: "flyer",
    thumbnail: "/images/portfolio/flyer-2.jpg",
    description: "[Description]",
    tags: ["[Tag1]"],
    link: null
  }
];
const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "website", label: "Websites" },
  { id: "branding", label: "Logos & Branding" },
  { id: "flyer", label: "Flyers & Print" }
];
const categoryLabels = {
  website: "Website",
  branding: "Logos & Branding",
  flyer: "Flyers & Print"
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let activeFilter = "all";
    const visible = portfolio;
    $$renderer2.push(`<div class="portfolio-page"><section class="page-intro svelte-1uo84gz" style="background: linear-gradient(rgba(32, 53, 144, 0.85), rgba(32, 53, 144, 0.95)), url('/images/services_banner.png'); background-size: cover; background-position: center;"><div class="container text-center fade-up-element"><h1 style="color: white; margin-bottom: 24px;">Our Work &amp; Portfolio</h1> <p class="large-text svelte-1uo84gz" style="color: rgba(255, 255, 255, 0.9);">A curated collection of websites, brand identities, and print work expertly built by Strata Forge.</p></div></section> <section class="portfolio-grid-section svelte-1uo84gz"><div class="container fade-up-element"><div class="filter-bar svelte-1uo84gz" role="tablist" aria-label="Portfolio category filter"><!--[-->`);
    const each_array = ensure_array_like(portfolioFilters);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let f = each_array[$$index];
      $$renderer2.push(`<button type="button" role="tab"${attr_class("filter-pill svelte-1uo84gz", void 0, { "active": activeFilter === f.id })}${attr("aria-selected", activeFilter === f.id)}>${escape_html(f.label)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (visible.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="empty svelte-1uo84gz">No projects in this category yet — check back soon.</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="grid svelte-1uo84gz"><!--[-->`);
      const each_array_1 = ensure_array_like(visible);
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        let item = each_array_1[i];
        $$renderer2.push(`<button type="button"${attr_class(`portfolio-card glass-panel fade-up-element delay-${stringify(Math.min((i + 1) * 100, 400))}`, "svelte-1uo84gz")}${attr("aria-label", `Open ${item.title}`)}><div class="card-image-wrapper svelte-1uo84gz"><img${attr("src", item.thumbnail)}${attr("alt", item.title)} loading="lazy" class="svelte-1uo84gz"/></div> <div class="card-content svelte-1uo84gz"><span class="card-cat svelte-1uo84gz">${escape_html(categoryLabels[item.category])}</span> <h3 class="svelte-1uo84gz">${escape_html(item.title)}</h3> <p class="svelte-1uo84gz">${escape_html(item.description)}</p></div></button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
