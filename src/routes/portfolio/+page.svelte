<script>
    import { inView } from "$lib/actions/inView.js";
    // Placeholder portfolio items for Strata Forge 
    const portfolioItems = [
        { title: 'Zambian Fintech App', category: 'Web App', image: '/images/portfolio_1.jpg' },
        { title: 'Lusaka Estate Branding', category: 'Brand Identity', image: '/images/portfolio_2.jpg' },
        { title: 'AgriCorp Dashboard', category: 'Internal Tool', image: '/images/portfolio_3.jpg' },
        { title: 'Retail E-commerce', category: 'Business Website', image: '/images/portfolio_4.jpg' },
        { title: 'Mining Logistics Portal', category: 'System Design', image: '/images/portfolio_5.jpg' },
        { title: 'Healthcare Kiosk UI', category: 'UI/UX Design', image: '/images/portfolio_6.jpg' }
    ];
</script>

<div class="portfolio-page">
    <section class="page-intro" style="background: linear-gradient(rgba(32, 53, 144, 0.85), rgba(32, 53, 144, 0.95)), url('/images/services_banner.png'); background-size: cover; background-position: center;">
        <div class="container text-center fade-up-element" use:inView>
            <h1 style="color: white; margin-bottom: 24px;">Our Work & Portfolio</h1>
            <p class="large-text" style="color: rgba(255, 255, 255, 0.9);">
                A curated collection of logos, posters, web apps, and digital platforms expertly built by Strata Forge.
            </p>
        </div>
    </section>

    <section class="portfolio-grid-section">
        <div class="container fade-up-element" use:inView>
            <div class="grid">
                {#each portfolioItems as item, i}
                    <div class="portfolio-card glass-panel fade-up-element delay-{Math.min((i+1)*100, 400)}" use:inView>
                        <div class="card-image-wrapper">
                            <div class="placeholder-image">
                                <span>{item.category} Visual</span>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>{item.title}</h3>
                            <p>{item.category}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
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
        border-radius: var(--radius-lg);
        overflow: hidden;
        transition: var(--transition-smooth);
    }

    .portfolio-card:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
    }

    .card-image-wrapper {
        width: 100%;
        height: 240px;
        background: rgba(0,0,0,0.05);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .placeholder-image {
        color: var(--color-text-muted);
        font-weight: 500;
        font-size: 0.9rem;
    }

    .card-content {
        padding: 24px;
    }

    .card-content h3 {
        margin-bottom: 8px;
        font-size: 1.25rem;
    }

    .card-content p {
        color: var(--color-primary);
        font-weight: 600;
        font-size: 0.9rem;
        margin: 0;
    }
</style>
