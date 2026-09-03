<script>
    import { onMount } from 'svelte';
    import { whatsappUrl } from '$lib/siteConfig.js';

    let isMenuOpen = $state(false);
    let scrolled = $state(false);

    const links = [
        { href: '/#work', label: 'Work' },
        { href: '/#studio', label: 'Studio' },
        { href: '/#process', label: 'Process' },
        { href: '/#inquiry', label: 'Contact' }
    ];

    const toggleMenu = () => (isMenuOpen = !isMenuOpen);
    const closeMenu = () => (isMenuOpen = false);

    onMount(() => {
        const onScroll = () => (scrolled = window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });
</script>

<header class="sticky-header" class:scrolled>
    <nav class="container nav-bar">
        <a href="/" class="logo-container" onclick={closeMenu}>
            <img src="/images/logo-full.png" alt="Strata Forge Technologies" class="logo" />
        </a>

        <div class="menu-desktop">
            {#each links as link}
                <a href={link.href}>{link.label}</a>
            {/each}
            <a href="/academy" class="nav-academy">Academy</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Start a project</a>
        </div>

        <button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            <div class="hamburger {isMenuOpen ? 'open' : ''}">
                <span></span><span></span><span></span>
            </div>
        </button>

        <div class="menu-mobile-overlay {isMenuOpen ? 'active' : ''}">
            <div class="menu-mobile-content">
                {#each links as link}
                    <a href={link.href} onclick={closeMenu}>{link.label}</a>
                {/each}
                <a href="/academy" onclick={closeMenu}>Academy</a>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" class="btn btn-primary" onclick={closeMenu}>Start a project</a>
            </div>
        </div>
    </nav>
</header>

<style>
    .sticky-header {
        position: sticky;
        top: 0;
        z-index: 1000;
        height: var(--header-height);
        display: flex;
        align-items: center;
        background: transparent;
        border-bottom: 1px solid transparent;
        transition: background-color 0.3s var(--ease-out), border-color 0.3s var(--ease-out),
            backdrop-filter 0.3s var(--ease-out);
    }

    .sticky-header.scrolled {
        background: rgba(10, 17, 48, 0.72);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border-bottom-color: var(--border);
    }

    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 24px;
    }

    .logo-container {
        display: flex;
        align-items: center;
        padding: 10px 0;
    }

    .logo {
        height: 42px;
        width: auto;
        display: block;
        transition: transform 0.3s var(--ease-out);
    }

    .logo-container:hover .logo {
        transform: translateY(-1px);
    }

    .menu-desktop {
        display: none;
        gap: 34px;
        align-items: center;
    }

    @media (min-width: 992px) {
        .menu-desktop { display: flex; }
    }

    .menu-desktop a:not(.btn) {
        text-decoration: none;
        color: var(--text-muted);
        font-weight: 500;
        font-size: 0.95rem;
        transition: color 0.2s var(--ease-out);
        position: relative;
    }

    .menu-desktop a:not(.btn):hover {
        color: var(--text);
    }

    .menu-desktop a:not(.btn)::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -6px;
        left: 0;
        background-color: var(--orange);
        transition: width 0.3s var(--ease-out);
    }

    .menu-desktop a:not(.btn):hover::after {
        width: 100%;
    }

    .nav-academy {
        color: var(--orange) !important;
        font-weight: 600 !important;
    }

    .menu-toggle {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
        padding: 14px;
        z-index: 1100;
        margin-right: -8px;
    }

    @media (min-width: 992px) {
        .menu-toggle { display: none; }
    }

    .hamburger span {
        display: block;
        width: 26px;
        height: 2px;
        background: var(--text);
        margin: 6px 0;
        transition: all 0.3s var(--ease-in-out);
        border-radius: 2px;
    }

    .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
    .hamburger.open span:nth-child(2) { opacity: 0; transform: translateX(10px); }
    .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }

    .menu-mobile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(10, 17, 48, 0.98);
        backdrop-filter: blur(10px);
        z-index: 1050;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(100%);
        transition: transform 0.4s var(--ease-in-out);
    }

    .menu-mobile-overlay.active { transform: translateX(0); }

    .menu-mobile-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s var(--ease-out) 0.15s;
    }

    .menu-mobile-overlay.active .menu-mobile-content {
        opacity: 1;
        transform: translateY(0);
    }

    .menu-mobile-content a:not(.btn) {
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--text);
        text-decoration: none;
        transition: color 0.2s var(--ease-out);
    }

    .menu-mobile-content a:not(.btn):hover {
        color: var(--orange);
    }
</style>
