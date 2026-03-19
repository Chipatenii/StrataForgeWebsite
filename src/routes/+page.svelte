<script>
    import {
        Cpu,
        Palette,
        TrendingUp,
        Globe,
        Layout,
        PencilRuler,
        Megaphone,
    } from "lucide-svelte";
    import { inView } from "$lib/actions/inView.js";
</script>

<div class="home-page">
    <!-- Hero Section -->
    <section id="hero" class="hero">
        <div class="container hero-content fade-up-element" use:inView>
            <div class="hero-text">
                <h1>We build your systems and brand, then help them grow.</h1>
                <p class="subtext">
                    Scalable websites, custom apps, and premium brand identities
                    forged for Zambian SMEs and growing regional brands—then
                    amplified with data-driven marketing.
                </p>
                <div class="hero-ctas">
                    <a href="/contact" class="btn btn-primary"
                        >Book a Discovery Call</a
                    >
                    <a href="/services" class="btn btn-outline">View Services</a
                    >
                </div>
            </div>
            <div class="hero-visual">
                <div class="visual-mockup">
                    <img
                        src="/images/hero_visual.png"
                        alt="Modern Dashboard"
                        class="hero-image"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- Who We Help Stripe -->
    <section class="who-we-help bg-neutral">
        <div class="container fade-up-element" use:inView>
            <h2 class="section-title text-center mb-4">
                Empowering the engines of Zambia's economy.
            </h2>
            <div class="help-grid">
                <div class="help-item">
                    <span>SMEs & Growing Businesses</span>
                </div>
                <div class="help-item">
                    <span>Colleges & Institutions</span>
                </div>
                <div class="help-item">
                    <span>Finance & Fintech</span>
                </div>
                <div class="help-item">
                    <span>Service Brands</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Pillars Section -->
    <section id="pillars" class="pillars">
        <div class="container fade-up-element" use:inView>
            <div class="text-center mb-6">
                <h2 class="section-title">
                    Built in layers. Forged for growth.
                </h2>
                <p class="section-subtitle">
                    A holistic approach to digital excellence.
                </p>
            </div>
            <div class="pillars-grid">
                <div class="pillar-card">
                    <div class="icon-wrapper">
                        <Cpu size={32} />
                    </div>
                    <h3>Systems & Development</h3>
                    <p>
                        Custom-coded tools and websites built on secure,
                        scalable architecture.
                    </p>
                    <a href="/services#systems-dev">Learn more →</a>
                </div>
                <div class="pillar-card">
                    <div class="icon-wrapper">
                        <Palette size={32} />
                    </div>
                    <h3>Brand & Design</h3>
                    <p>
                        Strategic visual identities that turn first impressions
                        into lasting trust.
                    </p>
                    <a href="/services#brand-design">Learn more →</a>
                </div>
                <div class="pillar-card">
                    <div class="icon-wrapper">
                        <TrendingUp size={32} />
                    </div>
                    <h3>Digital Growth</h3>
                    <p>
                        Targeted campaigns designed to turn traffic into
                        measurable leads and sales.
                    </p>
                    <a href="/services#marketing-growth">Learn more →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Services -->
    <section id="featured-services" class="featured-services bg-neutral">
        <div class="container fade-up-element" use:inView>
            <div class="grid-2">
                <div class="service-card">
                    <div class="icon-wrapper mb-3">
                        <Globe size={24} />
                    </div>
                    <h4>Business Websites</h4>
                    <p>
                        High-performance, mobile-first windows to your business.
                    </p>
                </div>
                <div class="service-card">
                    <div class="icon-wrapper mb-3">
                        <Layout size={24} />
                    </div>
                    <h4>Web Apps & Tools</h4>
                    <p>
                        Custom software built to solve unique operational
                        bottlenecks.
                    </p>
                </div>
                <div class="service-card">
                    <div class="icon-wrapper mb-3">
                        <PencilRuler size={24} />
                    </div>
                    <h4>UI/UX Design</h4>
                    <p>Human-centered design that prioritizes your users.</p>
                </div>
                <div class="service-card">
                    <div class="icon-wrapper mb-3">
                        <Megaphone size={24} />
                    </div>
                    <h4>Paid Campaigns</h4>
                    <p>
                        Strategic growth through Meta, Google, and TikTok ads.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section id="final-cta" class="final-cta text-center">
        <div class="container fade-up-element" use:inView>
            <h2>Let’s build something that actually scales.</h2>
            <p class="mb-4">
                Ready to move from manual chaos to digital clarity? Let's map
                your project together.
            </p>
            <div class="hero-ctas">
                <a href="/contact" class="btn btn-primary"
                    >Book a Discovery Call</a
                >
                <a href="https://wa.me/260..." class="btn btn-outline"
                    >Send us a WhatsApp</a
                >
            </div>
        </div>
    </section>
</div>

<style>
    .hero {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        gap: 48px;
        align-items: center;
    }

    @media (min-width: 992px) {
        .hero-content {
            flex-direction: row;
            text-align: left;
        }

        .hero-text {
            flex: 1;
        }

        .hero-visual {
            flex: 1;
        }
    }

    .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 24px;
    }

    @media (min-width: 768px) {
        .hero h1 {
            font-size: 3.5rem;
        }
    }

    .subtext {
        font-size: 1.1rem;
        color: var(--color-text-muted);
        margin-bottom: 40px;
        max-width: 600px;
    }

    .hero-ctas {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    @media (min-width: 576px) {
        .hero-ctas {
            flex-direction: row;
            justify-content: center;
        }
    }

    @media (min-width: 992px) {
        .hero-ctas {
            justify-content: flex-start;
        }
    }

    .hero-visual {
        width: 100%;
    }

    .visual-mockup {
        border-radius: 24px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .hero-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 24px;
    }

    .icon-wrapper {
        color: var(--color-primary);
        margin-bottom: 24px;
        display: flex;
        align-items: center;
    }

    .mb-3 {
        margin-bottom: 12px;
    }

    /* Who We Help */
    .help-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    @media (min-width: 768px) {
        .help-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .help-item {
        background: white;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--color-primary);
    }

    /* Pillars */
    .pillars-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
    }

    @media (min-width: 768px) {
        .pillars-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .pillar-card {
        padding: 40px;
        background: white;
        border-radius: var(--radius-lg);
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: var(--shadow-sm);
        transition: var(--transition-smooth);
    }

    .pillar-card:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
        border-color: transparent;
    }

    .pillar-card h3 {
        font-size: 1.25rem;
        margin-bottom: 16px;
    }

    .pillar-card p {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        margin-bottom: 24px;
    }

    .pillar-card a {
        text-decoration: none;
        color: var(--color-primary);
        font-weight: 700;
        font-size: 0.9rem;
    }

    /* Featured Services */
    .grid-2 {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
    }

    @media (min-width: 768px) {
        .grid-2 {
            grid-template-columns: 1fr 1fr;
        }
    }

    .service-card {
        background: white;
        padding: 40px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        transition: var(--transition-smooth);
        border: 1px solid rgba(0, 0, 0, 0.03);
    }

    .service-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: transparent;
    }

    .service-card h4 {
        margin-bottom: 12px;
    }

    .service-card p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
    }

    /* Final CTA */
    .final-cta {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .final-cta h2 {
        font-size: 2.2rem;
        margin-bottom: 24px;
    }
</style>
