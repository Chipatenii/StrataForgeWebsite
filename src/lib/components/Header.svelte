<script>
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
            <img src="/assets/primary-logo.png" alt="Strata Forge Technologies" class="logo-desktop" />
            <img src="/assets/logo-mark.png" alt="Strata Forge" class="logo-mobile" />
        </a>

        <!-- Desktop Menu -->
        <div class="menu-desktop">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/how-we-work">Process</a>
            <a href="/about">About</a>
            <a href="/contact" class="btn btn-primary">Book a Call</a>
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
                <a href="/about" onclick={closeMenu}>About</a>
                <a href="/contact" class="btn btn-primary" onclick={closeMenu}>Book a Call</a>
            </div>
        </div>
    </nav>
</header>

<style>
    .sticky-header {
        position: sticky;
        top: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        z-index: 1000;
        height: var(--header-height);
        display: flex;
        align-items: center;
    }

    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .logo-container {
        display: flex;
        align-items: center;
    }

    .logo-desktop {
        height: 48px;
        display: none;
    }

    .logo-mobile {
        height: 40px;
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
        gap: 32px;
        align-items: center;
    }

    @media (min-width: 768px) {
        .menu-desktop {
            display: flex;
        }
    }

    .menu-desktop a {
        text-decoration: none;
        color: var(--color-text-main);
        font-weight: 500;
        font-size: 0.9rem;
        transition: var(--transition-smooth);
    }

    .menu-desktop a:hover {
        color: var(--color-primary);
    }

    .menu-toggle {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        z-index: 1100;
    }

    @media (min-width: 768px) {
        .menu-toggle {
            display: none;
        }
    }

    .hamburger span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--color-primary);
        margin: 5px 0;
        transition: var(--transition-smooth);
    }

    .hamburger.open span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.open span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }

    .menu-mobile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: var(--color-white);
        z-index: 1050;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(100%);
        transition: var(--transition-smooth);
    }

    .menu-mobile-overlay.active {
        transform: translateX(0);
    }

    .menu-mobile-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
        text-align: center;
    }

    .menu-mobile-content a {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-primary);
        text-decoration: none;
    }
</style>
