<script>
    const currentYear = new Date().getFullYear();
</script>

<footer class="footer bg-neutral">
    <div class="container footer-grid">
        <div class="footer-brand">
            <img src="/assets/primary-logo.png" alt="Strata Forge Technologies" class="footer-logo" />
            <p class="footer-tagline">Systems | Design | Marketing</p>
            <div class="footer-socials">
                <!-- Social placeholders -->
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="LinkedIn">LI</a>
            </div>
        </div>

        <div class="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>

        <div class="footer-services">
            <h4>Services</h4>
            <a href="/services#systems-dev">Websites & Web Apps</a>
            <a href="/services#brand-design">Brand & UI/UX Design</a>
            <a href="/services#marketing-growth">Digital Campaigns</a>
        </div>

        <div class="footer-contact">
            <h4>Get in Touch</h4>
            <p>Lusaka, Zambia</p>
            <p>Remote-first Culture</p>
            <a href="mailto:hello@strataforge.com">hello@strataforge.com</a>
        </div>
    </div>

    <div class="container footer-bottom">
        <p>&copy; {currentYear} Strata Forge Technologies Limited. All rights reserved.</p>
    </div>
</footer>

<style>
    .footer {
        padding: 64px 24px 24px;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 48px;
        margin-bottom: 64px;
    }

    @media (min-width: 768px) {
        .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
        }
    }

    .footer-logo {
        height: 40px;
        margin-bottom: 16px;
    }

    .footer-tagline {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        margin-bottom: 24px;
    }

    .footer-socials {
        display: flex;
        gap: 16px;
    }

    .footer-socials a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--color-primary);
        color: var(--color-white);
        text-decoration: none;
        font-size: 0.7rem;
        font-weight: 700;
        transition: var(--transition-smooth);
    }

    .footer-socials a:hover {
        transform: translateY(-3px);
        filter: brightness(1.2);
    }

    .footer-grid h4 {
        font-size: 1rem;
        margin-bottom: 24px;
        color: var(--color-primary);
    }

    .footer-links,
    .footer-services,
    .footer-contact {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .footer-grid a {
        text-decoration: none;
        color: var(--color-text-muted);
        font-size: 0.9rem;
        transition: var(--transition-smooth);
    }

    .footer-grid a:hover {
        color: var(--color-primary);
        padding-left: 4px;
    }

    .footer-contact p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
    }

    .footer-bottom {
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        padding-top: 24px;
        text-align: center;
    }

    .footer-bottom p {
        font-size: 0.8rem;
        color: var(--color-text-muted);
    }
</style>
