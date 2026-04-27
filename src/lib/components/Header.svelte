<script>
    import { whatsappUrl } from '$lib/siteConfig.js';

    let isMenuOpen = $state(false);

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const closeMenu = () => {
        isMenuOpen = false;
    };
</script>

<header class="sticky-header">
    <nav class="container nav-bar">
        <a href="/" class="logo-container">
            <img src="/images/logo-full.png" alt="Strata Forge Technologies" class="logo-desktop" />
            <img src="/images/logo-full.png" alt="Strata Forge" class="logo-mobile" />
        </a>

        <!-- Desktop Menu -->
        <div class="menu-desktop">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/how-we-work">Process</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/about">About</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" class="btn btn-primary">WhatsApp Us</a>
        </div>

        <!-- Mobile Toggle -->
        <button 
            class="menu-toggle" 
            onclick={toggleMenu}
            aria-label="Toggle menu"
        >
            <div class="hamburger {isMenuOpen ? 'open' : ''}">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>

        <!-- Mobile Menu Overlay -->
        <div class="menu-mobile-overlay {isMenuOpen ? 'active' : ''}">
            <div class="menu-mobile-content">
                <a href="/" onclick={closeMenu}>Home</a>
                <a href="/services" onclick={closeMenu}>Services</a>
                <a href="/how-we-work" onclick={closeMenu}>Process</a>
                <a href="/portfolio" onclick={closeMenu}>Portfolio</a>
                <a href="/about" onclick={closeMenu}>About</a>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" class="btn btn-primary" onclick={closeMenu}>WhatsApp Us</a>
            </div>
        </div>
    </nav>
</header>

<style>
    .sticky-header {
        position: sticky;
        top: 0;
        background: rgba(255, 255, 255, 0.85); /* Transparent to showcase blur */
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04); /* Deeper, softer floating shadow */
        z-index: 1000;
        height: var(--header-height);
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
    }

    /* Scrolled state could be added later for shrinking effect */

    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .logo-container {
        display: flex;
        align-items: center;
        padding: 12px 0; /* Touch target increased for better mobile experience */
    }

    .logo-desktop {
        height: 56px; /* Increased from 48px for better visibility */
        width: auto;
        display: none;
        transition: transform 0.3s ease;
    }

    .logo-container:hover .logo-desktop {
        transform: scale(1.02); /* Subtle premium interaction */
    }

    .logo-mobile {
        height: 48px; /* Increased from 40px */
        width: auto;
    }

    @media (min-width: 768px) {
        .logo-desktop {
            display: block;
        }

        .logo-mobile {
            display: none;
        }
    }

    .menu-desktop {
        display: none;
        gap: 40px; /* Increased spacing for cleaner look */
        align-items: center;
    }

    @media (min-width: 992px) { /* Moved to 992px to prevent crowding */
        .menu-desktop {
            display: flex;
        }
    }

    .menu-desktop a:not(.btn) {
        text-decoration: none;
        color: var(--color-text-main);
        font-weight: 600; /* Bolder weight for premium typography */
        font-size: 0.95rem;
        transition: color 0.2s ease;
        position: relative;
    }

    .menu-desktop a:not(.btn):hover {
        color: var(--color-primary);
    }

    /* Subtle underline effect for links */
    .menu-desktop a:not(.btn)::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: var(--color-primary);
        transition: width 0.3s ease;
    }

    .menu-desktop a:not(.btn):hover::after {
        width: 100%;
    }

    .menu-toggle {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
        padding: 16px; /* Increased for better touch target */
        z-index: 1100;
        margin-right: -8px; /* Offset to keep alignment */
    }

    @media (min-width: 992px) {
        .menu-toggle {
            display: none;
        }
    }

    .hamburger span {
        display: block;
        width: 26px;
        height: 2px;
        background: var(--color-text-main); /* Darker for premium contrast */
        margin: 6px 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 2px;
    }

    .hamburger.open span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }

    .hamburger.open span:nth-child(2) {
        opacity: 0;
        transform: translateX(10px);
    }

    .hamburger.open span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }

    .menu-mobile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.98);
        z-index: 1050;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(8px);
    }

    .menu-mobile-overlay.active {
        transform: translateX(0);
    }

    .menu-mobile-content {
        display: flex;
        flex-direction: column;
        gap: 40px;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s ease 0.2s;
    }

    .menu-mobile-overlay.active .menu-mobile-content {
        opacity: 1;
        transform: translateY(0);
    }

    .menu-mobile-content a:not(.btn) {
        font-family: 'Outfit', sans-serif;
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--color-text-main);
        text-decoration: none;
        transition: color 0.3s;
        padding: 12px 24px;
        display: block;
    }

    .menu-mobile-content a:not(.btn):hover {
        color: var(--color-primary);
    }
</style>
