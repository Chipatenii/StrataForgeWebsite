import { G as ensure_array_like } from "../../../chunks/index.js";
import { j as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We deep dive into your business goals to align on a technical roadmap."
    },
    {
      num: "02",
      title: "Experience Design",
      desc: "Mapping the user journey and visual identity for maximum engagement."
    },
    {
      num: "03",
      title: "Build & Integrate",
      desc: "Clean, secure development using modern frameworks and standard practices."
    },
    {
      num: "04",
      title: "Launch & Grow",
      desc: "Deploying your solution and fueling it with targeted growth campaigns."
    },
    {
      num: "05",
      title: "Support & Scale",
      desc: "Ongoing maintenance and optimization to ensure long-term success."
    }
  ];
  $$renderer.push(`<div class="how-we-work-page"><section class="page-intro bg-neutral svelte-64k27m"><div class="container text-center"><h1 class="svelte-64k27m">How We Work</h1> <p class="large-text svelte-64k27m">Our process keeps everything connected. We follow a layered approach to ensure your brand and systems grow together.</p></div></section> <section class="steps"><div class="container" style="max-width: 800px"><!--[-->`);
  const each_array = ensure_array_like(steps);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let step = each_array[$$index];
    $$renderer.push(`<div class="step-item" style="display: flex; gap: 32px; margin-bottom: 64px"><div class="step-num" style="font-size: 2rem; font-weight: 800; color: var(--color-primary); opacity: 0.2">${escape_html(step.num)}</div> <div><h3 class="mb-2">${escape_html(step.title)}</h3> <p style="color: var(--color-text-muted)">${escape_html(step.desc)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="bg-neutral text-center" style="padding: 100px 24px"><div class="container"><h2>Ready to experience the process?</h2> <p class="mb-4">Let's schedule a 30-minute discovery call.</p> <a href="/contact" class="btn btn-primary">Schedule Discovery Call</a></div></section></div>`);
}
export {
  _page as default
};
