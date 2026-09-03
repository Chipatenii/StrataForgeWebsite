<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import WhatsAppFab from '$lib/components/WhatsAppFab.svelte';
    import CookieBanner from '$lib/components/CookieBanner.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<div class="app-wrapper">
    <div class="bg-grain" aria-hidden="true"></div>
    <div class="bg-orb orb-navy" aria-hidden="true"></div>
    <div class="bg-orb orb-orange" aria-hidden="true"></div>
    <Header />
    <main>
        {@render children()}
    </main>
    <Footer />
    <WhatsAppFab />
    <CookieBanner />
</div>

<style>
    .app-wrapper {
        position: relative;
        min-height: 100vh;
        isolation: isolate;
    }

    .bg-orb {
        position: fixed;
        border-radius: 50%;
        filter: blur(140px);
        z-index: -2;
        pointer-events: none;
    }

    .orb-navy {
        background: #2a3fa8;
        width: 620px;
        height: 620px;
        top: -160px;
        right: -140px;
        opacity: 0.28;
    }

    .orb-orange {
        background: var(--orange);
        width: 480px;
        height: 480px;
        bottom: 8%;
        left: -160px;
        opacity: 0.12;
    }

    /* Subtle film grain keeps the flat dark surfaces from banding. */
    .bg-grain {
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        opacity: 0.4;
        background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 3px 3px;
    }
</style>
