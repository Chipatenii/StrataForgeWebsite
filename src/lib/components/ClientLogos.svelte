<script>
    import { inView } from '$lib/actions/inView.js';
    import { clients } from '$lib/data/clients.js';

    const useMarquee = clients.length > 6;
    const marqueeList = useMarquee ? [...clients, ...clients] : clients;
</script>

<!-- TODO: Replace [CLIENT_LOGO_*] placeholders in src/lib/data/clients.js -->
<section class="client-logos">
    <div class="container fade-up-element" use:inView>
        <p class="strip-label">Trusted by businesses across Zambia</p>

        {#if useMarquee}
            <div class="marquee" aria-hidden="false">
                <div class="marquee-track">
                    {#each marqueeList as c, i}
                        <div class="logo-item" aria-label={c.name}>
                            <img src={c.img} alt={c.name} loading="lazy" />
                        </div>
                    {/each}
                </div>
            </div>
        {:else}
            <div class="logos-row">
                {#each clients as c}
                    <div class="logo-item" aria-label={c.name}>
                        <img src={c.img} alt={c.name} loading="lazy" />
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</section>

<style>
    .client-logos {
        padding: 56px 24px;
    }

    .strip-label {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font-size: 0.78rem;
        color: var(--color-text-muted);
        margin-bottom: 32px;
        font-weight: 600;
    }

    .logos-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px 32px;
        align-items: center;
        justify-items: center;
    }

    @media (min-width: 768px) {
        .logos-row {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    .logo-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 56px;
        padding: 0 8px;
    }

    .logo-item img {
        max-height: 100%;
        max-width: 140px;
        width: auto;
        height: auto;
        object-fit: contain;
        transition: transform 0.3s ease;
    }

    .logo-item:hover img {
        transform: scale(1.05);
    }

    .marquee {
        overflow: hidden;
        position: relative;
        width: 100%;
        mask-image: linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%);
        -webkit-mask-image: linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%);
    }

    .marquee-track {
        display: flex;
        gap: 56px;
        align-items: center;
        animation: marquee-scroll 30s linear infinite;
        width: max-content;
    }

    .marquee-track .logo-item {
        flex-shrink: 0;
    }

    @keyframes marquee-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
    }

    @media (prefers-reduced-motion: reduce) {
        .marquee-track {
            animation: none;
        }
    }
</style>
