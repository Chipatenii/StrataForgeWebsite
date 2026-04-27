<script>
    import { inView } from '$lib/actions/inView.js';
    import { testimonials } from '$lib/data/testimonials.js';

    function initials(name) {
        if (!name) return '·';
        const parts = name.trim().split(/\s+/);
        const a = parts[0]?.[0] ?? '';
        const b = parts[1]?.[0] ?? '';
        return (a + b).toUpperCase() || '·';
    }
</script>

<!-- TODO: Replace [TESTIMONIAL_*] placeholders in src/lib/data/testimonials.js -->
<section class="testimonials">
    <div class="container fade-up-element" use:inView>
        <div class="text-center mb-6">
            <h2 class="section-title">What our clients say</h2>
            <p class="section-subtitle">Real results for real Zambian businesses.</p>
        </div>
        <div class="testimonials-grid">
            {#each testimonials as t, i}
                <article class="testimonial-card glass-panel fade-up-element delay-{Math.min((i+1)*100, 400)}" use:inView>
                    <span class="quote-mark" aria-hidden="true">“</span>
                    <p class="quote">{t.quote}</p>
                    <div class="who">
                        {#if t.photo}
                            <img class="avatar" src={t.photo} alt={t.name} />
                        {:else}
                            <div class="avatar avatar-monogram" aria-hidden="true">{initials(t.name)}</div>
                        {/if}
                        <div class="meta">
                            <p class="name">{t.name}</p>
                            <p class="title">{t.title}</p>
                        </div>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .testimonials {
        padding: 80px 24px;
    }

    .section-subtitle {
        color: var(--color-text-muted);
        font-size: 1.05rem;
    }

    .testimonials-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
    }

    @media (min-width: 768px) {
        .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .testimonial-card {
        position: relative;
        padding: 40px 32px 32px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        transition: var(--transition-smooth);
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .testimonial-card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-md);
    }

    .quote-mark {
        position: absolute;
        top: 8px;
        left: 20px;
        font-family: 'Outfit', serif;
        font-size: 4.5rem;
        line-height: 1;
        color: var(--color-primary);
        opacity: 0.18;
        font-weight: 700;
        pointer-events: none;
    }

    .quote {
        color: var(--color-text-main);
        font-size: 1rem;
        line-height: 1.65;
        margin: 0;
        flex: 1;
    }

    .who {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-top: auto;
    }

    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
        background: var(--color-secondary);
    }

    .avatar-monogram {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--color-primary);
        color: var(--color-white);
        font-weight: 700;
        font-size: 0.95rem;
        letter-spacing: 0.02em;
    }

    .meta {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .name {
        font-weight: 700;
        color: var(--color-text-main);
        margin: 0;
        font-size: 0.95rem;
    }

    .title {
        color: var(--color-text-muted);
        font-size: 0.85rem;
        margin: 0;
    }
</style>
