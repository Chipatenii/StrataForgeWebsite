<script>
    import { ChevronDown } from 'lucide-svelte';
    import { inView } from '$lib/actions/inView.js';

    const faqs = [
        {
            q: 'Do you work with small businesses and startups?',
            a: 'Absolutely. Most of our clients are Zambian SMEs. We offer phased delivery and flexible payment structures to make quality digital work accessible.'
        },
        {
            q: 'How long does a project typically take?',
            a: "A business website usually takes 2–4 weeks. Custom web apps and brand identities vary by scope — we'll give you a clear timeline after your discovery conversation."
        },
        {
            q: 'Can I pay in installments?',
            a: "Yes. We structure most projects with a deposit to begin, a midpoint payment, and a final payment on delivery. We'll agree the structure upfront."
        },
        {
            q: 'Do you work with clients outside Lusaka?',
            a: 'Yes — we work remotely with clients across Zambia and the region. All coordination happens via WhatsApp and video call.'
        },
        {
            q: 'What do I need to get started?',
            a: "Just a WhatsApp conversation. We'll ask a few questions, understand what you need, and send you a clear proposal within 48 hours."
        }
    ];

    let openIndex = $state(-1);

    function toggle(i) {
        openIndex = openIndex === i ? -1 : i;
    }
</script>

<section class="faq">
    <div class="container fade-up-element" use:inView>
        <div class="text-center mb-6">
            <h2 class="section-title">Frequently asked</h2>
            <p class="faq-subtitle">Everything you need to know before we start.</p>
        </div>

        <ul class="faq-list">
            {#each faqs as item, i}
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
        padding: 80px 24px;
    }

    .faq-subtitle {
        color: var(--color-text-muted);
        font-size: 1.05rem;
    }

    .faq-list {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        max-width: 760px;
    }

    .faq-item {
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    .faq-item:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
    }

    .faq-question {
        width: 100%;
        background: transparent;
        border: none;
        padding: 22px 4px;
        font: inherit;
        font-weight: 600;
        font-size: 1.05rem;
        color: var(--color-text-main);
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        text-align: left;
        transition: color 0.2s ease;
    }

    .faq-question:hover {
        color: var(--color-primary);
    }

    .chev {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--color-primary);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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
        color: var(--color-text-muted);
        line-height: 1.7;
        font-size: 0.98rem;
    }
</style>
