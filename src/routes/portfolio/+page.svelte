<script>
    import { ExternalLink, X } from "lucide-svelte";
    import { inView } from "$lib/actions/inView.js";
    import { portfolio, portfolioFilters, categoryLabels } from "$lib/data/portfolio.js";

    let activeFilter = $state('all');
    let activeItem = $state(null);

    const visible = $derived(
        activeFilter === 'all'
            ? portfolio
            : portfolio.filter((p) => p.category === activeFilter)
    );

    function setFilter(id) {
        activeFilter = id;
    }

    function openItem(item) {
        activeItem = item;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    }

    function closeItem() {
        activeItem = null;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
        }
    }

    function onKeydown(e) {
        if (e.key === 'Escape' && activeItem) closeItem();
    }
</script>

<svelte:window on:keydown={onKeydown} />

<div class="portfolio-page">
    <section class="page-intro" style="background: linear-gradient(rgba(32, 53, 144, 0.85), rgba(32, 53, 144, 0.95)), url('/images/services_banner.png'); background-size: cover; background-position: center;">
        <div class="container text-center fade-up-element" use:inView>
            <h1 style="color: white; margin-bottom: 24px;">Our Work & Portfolio</h1>
            <p class="large-text" style="color: rgba(255, 255, 255, 0.9);">
                A curated collection of websites, brand identities, and print work expertly built by Strata Forge.
            </p>
        </div>
    </section>

    <section class="portfolio-grid-section">
        <div class="container fade-up-element" use:inView>
            <div class="filter-bar" role="tablist" aria-label="Portfolio category filter">
                {#each portfolioFilters as f}
                    <button
                        type="button"
                        role="tab"
                        class="filter-pill"
                        class:active={activeFilter === f.id}
                        aria-selected={activeFilter === f.id}
                        onclick={() => setFilter(f.id)}
                    >
                        {f.label}
                    </button>
                {/each}
            </div>

            {#if visible.length === 0}
                <p class="empty">No projects in this category yet — check back soon.</p>
            {:else}
                <div class="grid">
                    {#each visible as item, i (item.title)}
                        <button
                            type="button"
                            class="portfolio-card glass-panel fade-up-element delay-{Math.min((i+1)*100, 400)}"
                            use:inView
                            onclick={() => openItem(item)}
                            aria-label={`Open ${item.title}`}
                        >
                            <div class="card-image-wrapper">
                                <img src={item.thumbnail} alt={item.title} loading="lazy" />
                            </div>
                            <div class="card-content">
                                <span class="card-cat">{categoryLabels[item.category]}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </button>
                    {/each}
                </div>
            {/if}
        </div>
    </section>

    {#if activeItem}
        <div
            class="lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lb-title"
            onclick={closeItem}
            onkeydown={onKeydown}
        >
            <div class="lightbox-card" onclick={(e) => e.stopPropagation()} role="document">
                <button class="lightbox-close" type="button" onclick={closeItem} aria-label="Close">
                    <X size={20} />
                </button>
                <div class="lightbox-image">
                    <img src={activeItem.thumbnail} alt={activeItem.title} />
                </div>
                <div class="lightbox-body">
                    <span class="card-cat">{categoryLabels[activeItem.category]}</span>
                    <h3 id="lb-title">{activeItem.title}</h3>
                    <p>{activeItem.description}</p>
                    {#if activeItem.tags?.length}
                        <div class="tag-row">
                            {#each activeItem.tags as t}
                                <span class="tag-pill">{t}</span>
                            {/each}
                        </div>
                    {/if}
                    {#if activeItem.link}
                        <a class="btn btn-primary mt-4" href={activeItem.link} target="_blank" rel="noopener noreferrer">
                            View Live <ExternalLink size={16} style="margin-left: 8px;" />
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .page-intro {
        padding-top: 100px;
        padding-bottom: 80px;
    }

    .large-text {
        font-size: 1.2rem;
        color: var(--color-text-muted);
        max-width: 800px;
        margin: 0 auto;
    }

    .portfolio-grid-section {
        padding: 80px 24px;
    }

    .filter-bar {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin-bottom: 48px;
    }

    .filter-pill {
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: var(--color-text-muted);
        font-family: inherit;
        font-weight: 600;
        font-size: 0.92rem;
        padding: 10px 20px;
        border-radius: 999px;
        cursor: pointer;
        transition: all 0.25s ease;
    }

    .filter-pill:hover {
        color: var(--color-primary);
        border-color: var(--color-primary);
    }

    .filter-pill.active {
        background: var(--color-primary);
        color: var(--color-white);
        border-color: var(--color-primary);
        box-shadow: 0 4px 14px rgba(32, 53, 144, 0.18);
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .portfolio-card {
        text-align: left;
        font: inherit;
        color: inherit;
        background: rgba(255, 255, 255, 0.65);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: var(--radius-lg);
        overflow: hidden;
        transition: var(--transition-smooth);
        cursor: pointer;
        padding: 0;
        animation: fade-in 0.45s ease both;
    }

    .portfolio-card:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
    }

    .card-image-wrapper {
        width: 100%;
        height: 240px;
        background: rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        overflow: hidden;
    }

    .card-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .portfolio-card:hover .card-image-wrapper img {
        transform: scale(1.04);
    }

    .card-content {
        padding: 24px;
    }

    .card-cat {
        display: inline-block;
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--color-primary);
        margin-bottom: 8px;
    }

    .card-content h3 {
        margin-bottom: 8px;
        font-size: 1.2rem;
    }

    .card-content p {
        color: var(--color-text-muted);
        font-size: 0.92rem;
        margin: 0;
    }

    .empty {
        text-align: center;
        color: var(--color-text-muted);
        font-size: 1rem;
        padding: 48px 16px;
    }

    /* Lightbox */
    .lightbox {
        position: fixed;
        inset: 0;
        z-index: 1300;
        background: rgba(15, 20, 40, 0.78);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        animation: fade-in 0.25s ease;
    }

    .lightbox-card {
        position: relative;
        background: var(--color-white);
        border-radius: var(--radius-lg);
        max-width: 920px;
        width: 100%;
        max-height: 90vh;
        overflow: auto;
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
        animation: pop-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        display: grid;
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
        .lightbox-card {
            grid-template-columns: 1.2fr 1fr;
        }
    }

    .lightbox-close {
        position: absolute;
        top: 14px;
        right: 14px;
        z-index: 2;
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--color-text-main);
        transition: all 0.2s ease;
    }

    .lightbox-close:hover {
        background: var(--color-primary);
        color: var(--color-white);
    }

    .lightbox-image {
        background: rgba(0, 0, 0, 0.06);
        min-height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .lightbox-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .lightbox-body {
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .lightbox-body h3 {
        font-size: 1.5rem;
        margin: 0;
    }

    .lightbox-body p {
        color: var(--color-text-muted);
        line-height: 1.6;
        margin: 0;
    }

    .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 4px;
    }

    .tag-pill {
        background: var(--color-secondary);
        color: var(--color-text-main);
        padding: 6px 12px;
        border-radius: 999px;
        font-size: 0.78rem;
        font-weight: 600;
    }

    @keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @keyframes pop-in {
        from { opacity: 0; transform: scale(0.96); }
        to   { opacity: 1; transform: scale(1); }
    }
</style>
