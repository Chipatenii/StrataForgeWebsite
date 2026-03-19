<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<div class="app-wrapper">
    <div class="bg-orb orb-primary"></div>
    <div class="bg-orb orb-secondary"></div>
    <Header />
    <main>
        {@render children()}
    </main>
    <Footer />
</div>

<style>
    .bg-orb {
        position: fixed;
        border-radius: 50%;
        filter: blur(120px);
        z-index: -1;
        opacity: 0.15;
        pointer-events: none;
    }
    .orb-primary {
        background: var(--color-primary);
        width: 600px;
        height: 600px;
        top: -100px;
        right: -100px;
    }
    .orb-secondary {
        background: #ff7e5f; /* Deep orange complement */
        width: 500px;
        height: 500px;
        bottom: 20%;
        left: -100px;
    }
</style>
