<script>
    const currentYear = new Date().getFullYear();
</script>

<footer class="footer bg-neutral">
    <div class="container footer-grid">
        <div class="footer-brand">
            <img src="/images/logo-full.png" alt="Strata Forge Technologies" class="footer-logo" />
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
        padding: 80px 24px 32px; /* Increased top padding for breathing room */
        background-color: #f8f9fa; /* Slightly lighter neutral for cleanliness */
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 48px;
        margin-bottom: 80px;
    }

    @media (min-width: 992px) {
        .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.2fr; /* Adjusted proportions */
            gap: 64px;
        }
    }

    .footer-brand {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-logo {
        height: 48px; /* Standardized with header */
        width: auto;
        margin-bottom: 20px;
    }

    .footer-tagline {
        font-size: 1rem;
        color: var(--color-text-muted);
        margin-bottom: 32px;
        max-width: 300px;
        line-height: 1.6;
    }

    .footer-socials {
        display: flex;
        gap: 12px;
    }

    .footer-socials a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px; /* Touch target increased for mobile */
        height: 48px;
        border-radius: 50%;
        background: white;
        color: var(--color-primary);
        border: 1px solid rgba(0,0,0,0.05);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }

    .footer-socials a:hover {
        transform: translateY(-3px);
        background: var(--color-primary);
        color: white;
        box-shadow: 0 4px 12px rgba(32, 53, 144, 0.2);
    }

    .footer-grid h4 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 24px;
        color: var(--color-text-main); /* Darker heading for contrast */
        letter-spacing: -0.01em;
    }

    .footer-links,
    .footer-services,
    .footer-contact {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Increased for better touch target spacing */
    }

    .footer-grid a {
        text-decoration: none;
        color: var(--color-text-muted);
        font-size: 0.95rem;
        transition: all 0.2s ease;
    }

    .footer-grid a:hover {
        color: var(--color-primary);
        padding-left: 6px; /* Subtle movement interaction */
    }

    .footer-contact p {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        margin: 0;
    }

    .footer-contact a {
        font-weight: 500;
        color: var(--color-primary);
    }

    .footer-bottom {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        padding-top: 32px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    
    @media (min-width: 768px) {
        .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
        }
    }

    .footer-bottom p {
        font-size: 0.85rem;
        color: var(--color-text-muted);
    }
</style>
