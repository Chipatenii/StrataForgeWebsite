import { J as ensure_array_like, w as attr } from "./index.js";
const clients = [
  { name: "[CLIENT_LOGO_1_NAME]", img: "/images/clients/client-1.png" },
  { name: "[CLIENT_LOGO_2_NAME]", img: "/images/clients/client-2.png" },
  { name: "[CLIENT_LOGO_3_NAME]", img: "/images/clients/client-3.png" },
  { name: "[CLIENT_LOGO_4_NAME]", img: "/images/clients/client-4.png" },
  { name: "[CLIENT_LOGO_5_NAME]", img: "/images/clients/client-5.png" }
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
