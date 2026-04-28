import { z as sanitize_props, F as spread_props, G as slot, w as attr, J as ensure_array_like } from "../../../chunks/index.js";
import { C as ClientLogos } from "../../../chunks/ClientLogos.js";
import { P as PACRA_NUMBER } from "../../../chunks/siteConfig.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { L as Linkedin } from "../../../chunks/linkedin.js";
import { j as escape_html } from "../../../chunks/context.js";
function Badge_check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "badge-check" },
    $$sanitized_props,
    {
      /**
       * @component @name BadgeCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMy44NSA4LjYyYTQgNCAwIDAgMSA0Ljc4LTQuNzcgNCA0IDAgMCAxIDYuNzQgMCA0IDQgMCAwIDEgNC43OCA0Ljc4IDQgNCAwIDAgMSAwIDYuNzQgNCA0IDAgMCAxLTQuNzcgNC43OCA0IDQgMCAwIDEtNi43NSAwIDQgNCAwIDAgMS00Ljc4LTQuNzcgNCA0IDAgMCAxIDAtNi43NloiIC8+CiAgPHBhdGggZD0ibTkgMTIgMiAyIDQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/badge-check
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
function _page($$renderer) {
  const founder = {
    name: "Innocent Manda",
    role: "Founder & Backend Architect",
    photo: "/images/innocent_manda.jpeg",
    bio: "I've spent the last several years building software systems, digital infrastructure, and growth-driven solutions for ambitious businesses in Zambia and beyond. My journey started with a passion for design and technology, but evolved into a deeper mission: helping companies transform ideas into scalable engines of success. As the founder of Strata Forge Technologies, I focus on backend architecture, automation, and modern digital solutions that strengthen how businesses operate and grow. I believe strong companies are forged through bold vision, reliable systems, and relentless execution.",
    linkedin: "https://www.linkedin.com/in/innocent-manda-80b48b187/"
  };
  const stats = [
    { number: "20+", label: "Projects Delivered" },
    { number: "30+", label: "Clients Served" },
    { number: "4+", label: "Years Building" }
  ];
  $$renderer.push(`<div class="about-page"><section class="page-intro svelte-cwls5q" style="background: linear-gradient(rgba(32, 53, 144, 0.85), rgba(32, 53, 144, 0.95)), url('/images/services_banner.png'); background-size: cover; background-position: center;"><div class="container text-center fade-up-element"><h1 style="color: white; margin-bottom: 24px;" class="svelte-cwls5q">About Strata Forge</h1> <p class="large-text svelte-cwls5q" style="color: rgba(255, 255, 255, 0.9);">A dev-and-design-first company based in Lusaka, Zambia. We build
                the digital backbone for modern businesses.</p></div></section> <section class="story"><div class="container story-grid fade-up-element svelte-cwls5q"><div><h2 class="mb-3">Where we started</h2> <p>Born from the intersection of technology and creativity,
                    Strata Forge was created to bridge the gap between complex
                    software engineering and high-end brand design.</p> <p class="mt-2">We believe systems should be human, and design should be
                    functional. Our remote-first approach allows us to serve
                    clients across the region with agility and precision.</p> <div class="legit-badge svelte-cwls5q">`);
  Badge_check($$renderer, { size: 18 });
  $$renderer.push(`<!----> <span>Registered Zambian Company · PACRA No. ${escape_html(PACRA_NUMBER)}</span></div></div> <div class="story-visual svelte-cwls5q"><img src="/images/about_visual.png" alt="Strata Forge Workspace" class="story-image svelte-cwls5q"/></div></div></section> <section class="team bg-neutral"><div class="container text-center fade-up-element"><h2 class="mb-6">The Minds Behind the Forge</h2> <div class="founder-card glass-panel fade-up-element delay-100 svelte-cwls5q"><div class="founder-photo svelte-cwls5q"><img${attr("src", founder.photo)}${attr("alt", founder.name)} class="svelte-cwls5q"/></div> <h3>${escape_html(founder.name)}</h3> <p class="founder-role svelte-cwls5q">${escape_html(founder.role)}</p> <p class="founder-bio svelte-cwls5q">${escape_html(founder.bio)}</p> <a class="linkedin-link svelte-cwls5q"${attr("href", founder.linkedin)} target="_blank" rel="noopener noreferrer">`);
  Linkedin($$renderer, { size: 16 });
  $$renderer.push(`<!----> <span>Connect on LinkedIn →</span></a> <div class="stats-row svelte-cwls5q"><!--[-->`);
  const each_array = ensure_array_like(stats);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let s = each_array[$$index];
    $$renderer.push(`<div class="stat svelte-cwls5q"><span class="stat-number svelte-cwls5q">${escape_html(s.number)}</span> <span class="stat-label svelte-cwls5q">${escape_html(s.label)}</span></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section> `);
  ClientLogos($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
