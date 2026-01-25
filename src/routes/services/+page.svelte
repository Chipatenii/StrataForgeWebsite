<script>
    import {
        Globe,
        Database,
        Webhook,
        Award,
        PencilRuler,
    } from "lucide-svelte";
</script>

<div class="services-page">
    <section
        class="page-intro bg-none"
        style="background-image: linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url('/images/services_banner.png'); background-size: cover; background-position: center; color: white;"
    >
        <div class="container text-center">
            <h1 style="color: white;">Core Systems. Premium Design.</h1>
            <p class="large-text" style="color: rgba(255, 255, 255, 0.9);">
                Digital systems and design are the core of what we do. Growth
                marketing is the engine that drives it all forward.
            </p>
        </div>
    </section>

    <section id="systems-dev" class="service-detail">
        <div class="container">
            <h2 class="section-title">Systems & Development</h2>
            <div class="service-items-grid">
                <div class="item">
                    <div class="icon-wrapper">
                        <Globe size={28} />
                    </div>
                    <h4>Business Websites</h4>
                    <p>
                        Fast, mobile-optimized, and built for SEO. Every pixel
                        is designed to convert visitors into clients.
                    </p>
                </div>
                <div class="item">
                    <div class="icon-wrapper">
                        <Database size={28} />
                    </div>
                    <h4>Web Apps & Internal Tools</h4>
                    <p>
                        From client portals to lightweight ERPs, we build the
                        software that runs your business.
                    </p>
                </div>
                <div class="item">
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
        </div>
    </section>

    <section id="brand-design" class="service-detail bg-neutral">
        <div class="container">
            <h2 class="section-title">Brand & Design</h2>
            <div class="service-items-grid">
                <div class="item">
                    <div class="icon-wrapper">
                        <Award size={28} />
                    </div>
                    <h4>Brand Identity</h4>
                    <p>
                        Logos, color systems, and brand guides that define how
                        the world sees you.
                    </p>
                </div>
                <div class="item">
                    <div class="icon-wrapper">
                        <PencilRuler size={28} />
                    </div>
                    <h4>Marketing Collateral</h4>
                    <p>
                        Company profiles and social templates that maintain your
                        premium edge.
                    </p>
                </div>
                <div class="item">
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
        </div>
    </section>

    <section class="service-cta">
        <div class="container text-center">
            <h3>Not sure where to start?</h3>
            <p class="mb-4">Book a quick call and we’ll map it with you.</p>
            <a href="/contact" class="btn btn-primary"
                >Schedule Discovery Call</a
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

    .item p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
    }

    .service-cta {
        padding: 100px 24px;
    }
</style>
