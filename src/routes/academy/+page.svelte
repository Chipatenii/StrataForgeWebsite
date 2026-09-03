<script>
    import { GraduationCap, ArrowRight } from 'lucide-svelte';
    import { inView } from '$lib/actions/inView.js';
    import { whatsappUrl } from '$lib/siteConfig.js';

    const academyUrl = whatsappUrl('Hi Strata Forge, please let me know when the Academy opens.');
</script>

<svelte:head>
    <title>Strata Forge Academy — Coming Soon</title>
    <meta name="description" content="The Strata Forge Academy will teach web design, graphic design, and business for the digital age. Join the waitlist." />
</svelte:head>

<section class="academy">
    <div class="container academy-inner fade-up-element" use:inView>
        <span class="academy-icon"><GraduationCap size={30} /></span>
        <p class="section-label"><span class="num">Soon</span> · Strata Forge Academy</p>
        <h1 class="display">Learn with <br />Strata Forge.</h1>
        <p class="lede academy-lede">
            The Academy will teach web design, graphic design, and business for the digital age.
            Practical skills, taught the way we work: start with the problem, then build.
        </p>
        <div class="academy-cta">
            <a href={academyUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Join the waitlist <ArrowRight size={18} />
            </a>
            <a href="/" class="btn btn-outline">Back to home</a>
        </div>
        <p class="academy-note">Not live yet. Leave your details and we will tell you the moment it opens.</p>
    </div>
</section>

<style>
    .academy {
        min-height: calc(100vh - var(--header-height));
        display: flex;
        align-items: center;
        text-align: center;
    }

    .academy-inner {
        max-width: 680px;
        margin: 0 auto;
    }

    .academy-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: var(--radius-lg);
        background: rgba(255, 126, 95, 0.12);
        color: var(--orange);
        margin-bottom: 26px;
    }

    .academy h1 {
        margin-top: 18px;
    }

    .academy-lede {
        margin: 22px auto 0;
    }

    .academy-cta {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        justify-content: center;
        margin-top: 34px;
    }

    .academy-note {
        margin-top: 24px;
        font-size: 0.86rem;
        color: var(--text-muted);
        font-family: var(--font-mono);
    }
</style>
