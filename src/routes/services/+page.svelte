<script>
    import {
        Globe,
        Database,
        Webhook,
        Award,
        PencilRuler,
        Megaphone,
        Target,
        BarChart3,
    } from "lucide-svelte";
    import { inView } from "$lib/actions/inView.js";
    import { whatsappUrl } from "$lib/siteConfig.js";

    // TODO: Replace [PRICING_ANCHOR_*] with real prices
    const pricing = {
        systems:  'Business Websites from K8,500',
        brand:    'Brand Identity Packages from K4,500',
        growth:   'Custom Web Apps from K18,000'
    };
</script>

<div class="services-page">
    <section
        class="page-intro bg-none"
        style="background-image: linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url('/images/services_banner.png'); background-size: cover; background-position: center; color: white;"
    >
        <div class="container text-center fade-up-element" use:inView>
            <h1 style="color: white;">Core Systems. Premium Design.</h1>
            <p class="large-text" style="color: rgba(255, 255, 255, 0.9);">
                Digital systems and design are the core of what we do. Growth
                marketing is the engine that drives it all forward.
            </p>
        </div>
    </section>

    <section id="systems-dev" class="service-detail">
        <div class="container fade-up-element" use:inView>
            <h2 class="section-title">Systems & Development</h2>
            <div class="service-items-grid">
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <Globe size={28} />
                    </div>
                    <h4>Business Websites</h4>
                    <p>
                        Fast, mobile-optimized, and built for SEO. Every pixel
                        is designed to convert visitors into clients.
                    </p>
                </div>
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <Database size={28} />
                    </div>
                    <h4>Web Apps & Internal Tools</h4>
                    <p>
                        From client portals to lightweight ERPs, we build the
                        software that runs your business.
                    </p>
                </div>
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <Webhook size={28} />
                    </div>
                    <h4>APIs & Automations</h4>
                    <p>
                        Connect payment gateways (DPO, Airtel, MTN) and automate
                        repetitive tasks.
                    </p>
                </div>
            </div>

            <!-- TODO: Replace [PRICING_ANCHOR_1] in script -->
            <div class="price-anchor">
                <span class="price-icon" aria-hidden="true">💡</span>
                <span class="price-text">{pricing.systems}</span>
                <span class="price-sep">·</span>
                <span class="price-cta">
                    Custom quotes available —
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">chat with us on WhatsApp</a>
                </span>
            </div>
        </div>
    </section>

    <section id="brand-design" class="service-detail bg-neutral">
        <div class="container fade-up-element" use:inView>
            <h2 class="section-title">Brand & Design</h2>
            <div class="service-items-grid">
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <Award size={28} />
                    </div>
                    <h4>Brand Identity</h4>
                    <p>
                        Logos, color systems, and brand guides that define how
                        the world sees you.
                    </p>
                </div>
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <PencilRuler size={28} />
                    </div>
                    <h4>Marketing Collateral</h4>
                    <p>
                        Company profiles and social templates that maintain your
                        premium edge.
                    </p>
                </div>
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <PencilRuler size={28} />
                    </div>
                    <h4>UI/UX Design</h4>
                    <p>
                        Human-centered wireframes and hi-fi prototypes built for
                        clarity.
                    </p>
                </div>
            </div>

            <!-- TODO: Replace [PRICING_ANCHOR_2] in script -->
            <div class="price-anchor">
                <span class="price-icon" aria-hidden="true">💡</span>
                <span class="price-text">{pricing.brand}</span>
                <span class="price-sep">·</span>
                <span class="price-cta">
                    Custom quotes available —
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">chat with us on WhatsApp</a>
                </span>
            </div>
        </div>
    </section>

    <section id="marketing-growth" class="service-detail">
        <div class="container fade-up-element" use:inView>
            <h2 class="section-title">Digital Growth</h2>
            <div class="service-items-grid">
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <Megaphone size={28} />
                    </div>
                    <h4>Paid Campaigns</h4>
                    <p>
                        Strategic Meta, Google, and TikTok ads tuned to convert
                        Zambian and regional audiences.
                    </p>
                </div>
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <Target size={28} />
                    </div>
                    <h4>SEO & Content</h4>
                    <p>
                        Search-friendly content and on-page SEO that lifts you
                        above local competitors.
                    </p>
                </div>
                <div class="item glass-panel">
                    <div class="icon-wrapper">
                        <BarChart3 size={28} />
                    </div>
                    <h4>Analytics & Reporting</h4>
                    <p>
                        Clear monthly reports tied to revenue, leads, and the
                        decisions that grow your business.
                    </p>
                </div>
            </div>

            <!-- TODO: Replace [PRICING_ANCHOR_3] in script -->
            <div class="price-anchor">
                <span class="price-icon" aria-hidden="true">💡</span>
                <span class="price-text">{pricing.growth}</span>
                <span class="price-sep">·</span>
                <span class="price-cta">
                    Custom quotes available —
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">chat with us on WhatsApp</a>
                </span>
            </div>
        </div>
    </section>

    <section class="service-cta">
        <div class="container text-center fade-up-element" use:inView>
            <h3>Not sure where to start?</h3>
            <p class="mb-4">Send us a message and we’ll map it with you.</p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" class="btn btn-primary"
                >Chat on WhatsApp</a
            >
        </div>
    </section>
</div>

<style>
    .page-intro {
        padding-top: 100px;
        padding-bottom: 80px;
    }

    .page-intro h1 {
        font-size: 2.5rem;
        margin-bottom: 24px;
    }

    .large-text {
        font-size: 1.2rem;
        color: var(--color-text-muted);
        max-width: 800px;
        margin: 0 auto;
    }

    .service-detail {
        padding: 80px 24px;
    }

    .service-items-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
        margin-top: 48px;
    }

    @media (min-width: 768px) {
        .service-items-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .item h4 {
        margin-bottom: 12px;
    }

    .icon-wrapper {
        color: var(--color-primary);
        margin-bottom: 16px;
    }

    .item {
        padding: 32px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        transition: var(--transition-smooth);
    }

    .item:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
        border-color: transparent;
    }

    .service-detail.bg-neutral .item {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
    }

    .item p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
    }

    .price-anchor {
        margin-top: 40px;
        padding: 18px 24px;
        background: rgba(32, 53, 144, 0.06);
        border: 1px solid rgba(32, 53, 144, 0.14);
        border-radius: var(--radius-md);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        font-size: 0.95rem;
        color: var(--color-text-main);
    }

    .price-icon {
        font-size: 1.1rem;
    }

    .price-text {
        font-weight: 700;
        color: var(--color-primary);
    }

    .price-sep {
        color: var(--color-text-muted);
        opacity: 0.6;
    }

    .price-cta {
        color: var(--color-text-muted);
    }

    .price-cta a {
        color: var(--color-primary);
        font-weight: 600;
        text-decoration: none;
        border-bottom: 1px solid rgba(32, 53, 144, 0.4);
        transition: border-color 0.2s ease;
    }

    .price-cta a:hover {
        border-bottom-color: var(--color-primary);
    }

    .service-cta {
        padding: 100px 24px;
    }
</style>
