<script>
    import { ChevronDown } from 'lucide-svelte';
    import { inView } from '$lib/actions/inView.js';

    const faqs = [
        {
            q: 'How does a project come together?',
            a: 'We start with your problem, not a template. Once we understand the goal, we shape the design and the build around it, and keep you in the loop at every step.'
        },
        {
            q: 'Do you work with small businesses and startups?',
            a: 'Yes. Most of our clients are Zambian SMEs. We offer phased delivery and flexible payment structures so quality digital work stays within reach.'
        },
        {
            q: 'Does it work on every device?',
            a: 'Every build is responsive and tested across phones, tablets, and desktops. We also respect reduced-motion settings so the site stays comfortable for everyone.'
        },
        {
            q: 'What does working with Strata Forge cost?',
            a: 'Every project is quoted to the brief, with no boilerplate packages. Tell us what you need and we reply with an honest assessment, not a one-size-fits-all price.'
        },
        {
            q: 'How do we get started?',
            a: 'Just a WhatsApp conversation. We ask a few questions, understand what you need, and send a clear proposal within 48 hours.'
        }
    ];

    let openIndex = $state(-1);

    function toggle(i) {
        openIndex = openIndex === i ? -1 : i;
    }
</script>

<section id="faq" class="faq">
    <div class="container fade-up-element" use:inView>
        <div class="section-head mb-6">
            <p class="section-label"><span class="num">07</span> · FAQ</p>
            <h2 class="section-headline">Clarity, <span class="wrap">up front.</span></h2>
        </div>

        <ul class="faq-list">
            {#each faqs as item, i (item.q)}
                <li class="faq-item" class:open={openIndex === i}>
                    <button
                        class="faq-question"
                        type="button"
                        aria-expanded={openIndex === i}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-toggle-${i}`}
                        onclick={() => toggle(i)}
                    >
                        <span>{item.q}</span>
                        <span class="chev" aria-hidden="true">
                            <ChevronDown size={20} />
                        </span>
                    </button>
                    <div
                        id={`faq-panel-${i}`}
                        class="faq-answer"
                        role="region"
                        aria-labelledby={`faq-toggle-${i}`}
                    >
                        <div class="faq-answer-inner">
                            <p>{item.a}</p>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</section>

<style>
    .faq {
        padding: 72px 20px;
    }

    .section-head {
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
    }

    .faq-list {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        max-width: 760px;
    }

    .faq-item {
        border-bottom: 1px solid var(--border);
    }

    .faq-item:first-child {
        border-top: 1px solid var(--border);
    }

    .faq-question {
        width: 100%;
        background: transparent;
        border: none;
        padding: 22px 4px;
        font: inherit;
        font-weight: 600;
        font-size: 1.05rem;
        color: var(--text);
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        text-align: left;
        transition: color 0.2s var(--ease-out);
    }

    .faq-question:hover {
        color: var(--orange);
    }

    .chev {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--orange);
        transition: transform 0.3s var(--ease-out);
        flex-shrink: 0;
    }

    .faq-item.open .chev {
        transform: rotate(180deg);
    }

    .faq-answer {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .faq-item.open .faq-answer {
        grid-template-rows: 1fr;
    }

    .faq-answer-inner {
        overflow: hidden;
    }

    .faq-answer p {
        padding: 0 4px 22px;
        margin: 0;
        color: var(--text-muted);
        line-height: 1.7;
        font-size: 0.98rem;
    }
</style>
