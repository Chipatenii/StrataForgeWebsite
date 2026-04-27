import { z as sanitize_props, F as spread_props, G as slot, J as ensure_array_like, x as attr_class, w as attr } from "./index.js";
import { I as Icon } from "./Icon.js";
import { j as escape_html } from "./context.js";
function Chevron_down($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-down" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
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
function FAQ($$renderer) {
  const faqs = [
    {
      q: "Do you work with small businesses and startups?",
      a: "Absolutely. Most of our clients are Zambian SMEs. We offer phased delivery and flexible payment structures to make quality digital work accessible."
    },
    {
      q: "How long does a project typically take?",
      a: "A business website usually takes 2–4 weeks. Custom web apps and brand identities vary by scope — we'll give you a clear timeline after your discovery conversation."
    },
    {
      q: "Can I pay in installments?",
      a: "Yes. We structure most projects with a deposit to begin, a midpoint payment, and a final payment on delivery. We'll agree the structure upfront."
    },
    {
      q: "Do you work with clients outside Lusaka?",
      a: "Yes — we work remotely with clients across Zambia and the region. All coordination happens via WhatsApp and video call."
    },
    {
      q: "What do I need to get started?",
      a: "Just a WhatsApp conversation. We'll ask a few questions, understand what you need, and send you a clear proposal within 48 hours."
    }
  ];
  let openIndex = -1;
  $$renderer.push(`<section class="faq svelte-1t8i6y4"><div class="container fade-up-element"><div class="text-center mb-6"><h2 class="section-title">Frequently asked</h2> <p class="faq-subtitle svelte-1t8i6y4">Everything you need to know before we start.</p></div> <ul class="faq-list svelte-1t8i6y4"><!--[-->`);
  const each_array = ensure_array_like(faqs);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$renderer.push(`<li${attr_class("faq-item svelte-1t8i6y4", void 0, { "open": openIndex === i })}><button class="faq-question svelte-1t8i6y4" type="button"${attr("aria-expanded", openIndex === i)}${attr("aria-controls", `faq-panel-${i}`)}${attr("id", `faq-toggle-${i}`)}><span>${escape_html(item.q)}</span> <span class="chev svelte-1t8i6y4" aria-hidden="true">`);
    Chevron_down($$renderer, { size: 20 });
    $$renderer.push(`<!----></span></button> <div${attr("id", `faq-panel-${i}`)} class="faq-answer svelte-1t8i6y4" role="region"${attr("aria-labelledby", `faq-toggle-${i}`)}><div class="faq-answer-inner svelte-1t8i6y4"><p class="svelte-1t8i6y4">${escape_html(item.a)}</p></div></div></li>`);
  }
  $$renderer.push(`<!--]--></ul></div></section>`);
}
export {
  FAQ as F
};
