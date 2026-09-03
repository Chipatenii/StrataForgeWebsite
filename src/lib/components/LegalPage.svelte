<script>
    import { inView } from '$lib/actions/inView.js';
    let { title, intro, updated = 'September 2026', children } = $props();
</script>

<div class="legal">
    <header class="legal-head fade-up-element" use:inView>
        <div class="container">
            <p class="section-label"><span class="num">§</span> · Legal</p>
            <h1>{title}</h1>
            {#if intro}<p class="lede mt-2">{intro}</p>{/if}
            <p class="updated">Last updated: {updated}</p>
        </div>
    </header>

    <div class="container legal-body fade-up-element delay-100" use:inView>
        {@render children?.()}
        <div class="legal-note">
            This page is a plain-English summary and not legal advice. For binding terms, or if you
            have a question about your data or a project, contact us at
            <a href="mailto:strataforgetechnologies@gmail.com">strataforgetechnologies@gmail.com</a>.
        </div>
    </div>
</div>

<style>
    .legal-head {
        padding: 72px 24px 32px;
        border-bottom: 1px solid var(--border);
    }

    .legal-head h1 {
        font-size: clamp(2.2rem, 5vw, 3rem);
        margin-top: 16px;
    }

    .updated {
        margin-top: 18px;
        font-family: var(--font-mono);
        font-size: 0.82rem;
        color: var(--text-muted);
        letter-spacing: 0.04em;
    }

    .legal-body {
        max-width: 780px;
        padding: 48px 24px 96px;
    }

    .legal-body :global(h2) {
        font-size: 1.35rem;
        margin: 40px 0 14px;
    }

    .legal-body :global(h2:first-child) { margin-top: 0; }

    .legal-body :global(h3) {
        font-size: 1.05rem;
        margin: 26px 0 10px;
        color: var(--text);
    }

    .legal-body :global(p),
    .legal-body :global(li) {
        color: var(--text-muted);
        line-height: 1.75;
        font-size: 1rem;
    }

    .legal-body :global(p) { margin-bottom: 14px; }

    .legal-body :global(ul) {
        margin: 0 0 16px;
        padding-left: 22px;
    }

    .legal-body :global(li) { margin-bottom: 8px; }

    .legal-body :global(a) {
        color: var(--orange);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .legal-note {
        margin-top: 48px;
        padding: 22px 24px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--surface);
        font-size: 0.92rem;
        color: var(--text-muted);
        line-height: 1.7;
    }
</style>
