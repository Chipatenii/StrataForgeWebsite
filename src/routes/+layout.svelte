<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<div class="app-wrapper">
    <Header />
    <main>
        {@render children()}
    </main>
    <Footer />
</div>
