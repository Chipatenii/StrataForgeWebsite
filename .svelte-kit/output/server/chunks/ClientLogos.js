import { J as ensure_array_like, w as attr } from "./index.js";
const clients = [
  { name: "AASPA — Beauty, Wellness, Aesthetics", img: "/images/clients/aaspa.png" },
  { name: "Flamingo Consultancy", img: "/images/clients/flamingo-consultancy.png" },
  { name: "Geonsi Engineering Ltd", img: "/images/clients/geonsi-engineering.png" },
  { name: "Sekoma", img: "/images/clients/sekoma.png" },
  { name: "Unstolic Resources", img: "/images/clients/unstolic-resources.png" }
];
function ClientLogos($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const useMarquee = clients.length > 6;
    const marqueeList = useMarquee ? [...clients, ...clients] : clients;
    $$renderer2.push(`<section class="client-logos svelte-kivu6h"><div class="container fade-up-element"><p class="strip-label svelte-kivu6h">Trusted by businesses across Zambia</p> `);
    if (useMarquee) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="marquee svelte-kivu6h" aria-hidden="false"><div class="marquee-track svelte-kivu6h"><!--[-->`);
      const each_array = ensure_array_like(marqueeList);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let c = each_array[i];
        $$renderer2.push(`<div class="logo-item svelte-kivu6h"${attr("aria-label", c.name)}><img${attr("src", c.img)}${attr("alt", c.name)} loading="lazy" class="svelte-kivu6h"/></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="logos-row svelte-kivu6h"><!--[-->`);
      const each_array_1 = ensure_array_like(clients);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let c = each_array_1[$$index_1];
        $$renderer2.push(`<div class="logo-item svelte-kivu6h"${attr("aria-label", c.name)}><img${attr("src", c.img)}${attr("alt", c.name)} loading="lazy" class="svelte-kivu6h"/></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
export {
  ClientLogos as C
};
