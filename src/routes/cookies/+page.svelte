<script>
    import LegalPage from '$lib/components/LegalPage.svelte';
    import { consent } from '$lib/stores/consent.js';
</script>

<svelte:head>
    <title>Cookie Policy — Strata Forge Technologies</title>
    <meta name="description" content="What cookies Strata Forge Technologies uses, by category, and how to change your consent at any time." />
</svelte:head>

<LegalPage
    title="Cookie Policy"
    intro="What cookies and similar technologies we use, by category, and how to change your choice at any time."
>
    <h2>What cookies are</h2>
    <p>
        Cookies are small files stored on your device that help a website work and remember your
        choices. We also use similar technologies, such as local storage, for the same purposes.
    </p>

    <h2>The categories we use</h2>
    <h3>Strictly necessary</h3>
    <p>
        These are required for the site to function and to remember your cookie choice. They are
        always on and do not need consent.
    </p>
    <h3>Analytics</h3>
    <p>
        With your consent, these help us understand how the site is used so we can improve it. They
        collect anonymous, aggregated information and do not identify you personally.
    </p>
    <h3>Marketing</h3>
    <p>
        With your consent, these help us measure the effectiveness of campaigns. They are off by
        default and load only if you turn them on.
    </p>

    <h2>Consent, worldwide</h2>
    <p>
        Nothing beyond strictly necessary cookies loads until you actively accept. When you first
        visit, you see a banner with equally weighted "Accept all" and "Reject all" options, plus
        "Manage preferences" with a toggle for each category. There are no pre-ticked boxes. We apply
        this stricter, opt-in model to every visitor for a single, consistent experience.
    </p>

    <h2>Changing your choice</h2>
    <p>
        You can change your consent at any time. Use the button below, or the "Cookie Settings" link
        in the footer on any page. If our cookie use materially changes, we will ask you again.
    </p>
    <p>
        <button type="button" class="btn btn-outline" onclick={() => consent.reopen()}>Open cookie settings</button>
    </p>
</LegalPage>
