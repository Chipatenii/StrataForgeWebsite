<script>
    import { Linkedin, Facebook, Instagram } from 'lucide-svelte';
    import { PACRA_NUMBER } from '$lib/siteConfig.js';
    import { consent } from '$lib/stores/consent.js';

    const currentYear = new Date().getFullYear();
    const hasPacra = PACRA_NUMBER && !PACRA_NUMBER.includes('[');
</script>

<footer class="footer">
    <div class="container footer-grid">
        <div class="footer-brand">
            <img src="/images/logo-white.svg" alt="Strata Forge Technologies" class="footer-logo" />
            <p class="footer-tagline">Simple solutions for everyday business problems. Systems, design, and growth under one roof.</p>
            <div class="footer-socials">
                <a href="https://www.facebook.com/strataforgetechnologies/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="https://www.instagram.com/strataforgetech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="https://www.linkedin.com/company/strataforgetechnologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
        </div>

        <div class="footer-col">
            <h4>Studio</h4>
            <a href="/#work">Work</a>
            <a href="/#studio">Studio</a>
            <a href="/#process">Process</a>
            <a href="/academy">Academy</a>
        </div>

        <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:strataforgetechnologies@gmail.com">strataforgetechnologies@gmail.com</a>
            <a href="https://wa.me/260979082676" target="_blank" rel="noopener noreferrer">+260 979 082 676</a>
            <span class="footer-note">Remote, Zambia and worldwide</span>
            <span class="footer-note">Lusaka, Zambia</span>
        </div>

        <div class="footer-col">
            <h4>Legal</h4>
            <a href="/terms">Terms &amp; Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/refund-policy">Refund Policy</a>
            <a href="/cookies">Cookie Policy</a>
            <button type="button" class="footer-linkbtn" onclick={() => consent.reopen()}>Cookie Settings</button>
        </div>
    </div>

    <div class="container footer-bottom">
        <p>&copy; {currentYear} Strata Forge Technologies Limited. All rights reserved.</p>
        <p class="footer-registration">
            {#if hasPacra}Registered in Zambia &middot; PACRA No. {PACRA_NUMBER} &middot; {/if}Rendered in real time &middot; WebGL
        </p>
    </div>
</footer>

<style>
    .footer {
        padding: 80px 24px 36px;
        background: var(--surface);
        border-top: 1px solid var(--border);
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 44px;
        margin-bottom: 64px;
    }

    @media (min-width: 768px) {
        .footer-grid {
            grid-template-columns: 2fr 1fr 1.4fr 1.2fr;
            gap: 48px;
        }
    }

    .footer-brand { display: flex; flex-direction: column; align-items: flex-start; }

    .footer-logo { height: 40px; width: auto; margin-bottom: 18px; }

    .footer-tagline {
        font-size: 0.95rem;
        color: var(--text-muted);
        margin-bottom: 24px;
        max-width: 320px;
        line-height: 1.6;
    }

    .footer-socials { display: flex; gap: 10px; }

    .footer-socials a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border-radius: var(--radius-full);
        background: var(--surface-2);
        color: var(--text-muted);
        border: 1px solid var(--border);
        text-decoration: none;
        transition: color 0.25s var(--ease-out), border-color 0.25s var(--ease-out), transform 0.25s var(--ease-out);
    }

    .footer-socials a:hover {
        color: var(--orange);
        border-color: var(--border-orange);
        transform: translateY(-3px);
    }

    .footer-col { display: flex; flex-direction: column; gap: 14px; }

    .footer-col h4 {
        font-size: 0.78rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--text-muted);
        margin-bottom: 6px;
    }

    .footer-col a,
    .footer-linkbtn {
        text-decoration: none;
        color: var(--text);
        font-size: 0.95rem;
        transition: color 0.2s var(--ease-out);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        font-family: inherit;
    }

    .footer-col a:hover,
    .footer-linkbtn:hover {
        color: var(--orange);
    }

    .footer-note {
        font-size: 0.9rem;
        color: var(--text-muted);
    }

    .footer-bottom {
        border-top: 1px solid var(--border);
        padding-top: 28px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        text-align: center;
    }

    .footer-bottom p {
        font-size: 0.82rem;
        color: var(--text-muted);
    }

    .footer-registration {
        font-family: var(--font-mono);
        letter-spacing: 0.04em;
        opacity: 0.8;
    }
</style>
