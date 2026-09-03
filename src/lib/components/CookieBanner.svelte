<script>
    import { consent } from '$lib/stores/consent.js';
    import { Cookie, X } from 'lucide-svelte';

    let managing = $state(false);
    let analytics = $state(false);
    let marketing = $state(false);

    // Show the banner until a choice has been made (or when re-opened).
    let visible = $derived(!$consent.decided);

    function openPreferences() {
        analytics = $consent.analytics;
        marketing = $consent.marketing;
        managing = true;
    }

    function acceptAll() {
        consent.acceptAll();
        managing = false;
    }

    function rejectAll() {
        consent.rejectAll();
        managing = false;
    }

    function savePreferences() {
        consent.save({ analytics, marketing });
        managing = false;
    }
</script>

{#if visible}
    <div class="cookie" role="dialog" aria-label="Cookie consent" aria-modal="false">
        {#if !managing}
            <div class="cookie-bar">
                <div class="cookie-copy">
                    <span class="cookie-icon" aria-hidden="true"><Cookie size={20} /></span>
                    <p>
                        We use strictly necessary cookies to run this site. With your consent we
                        also use analytics to understand what works. Nothing optional loads until
                        you choose. Read our <a href="/cookies">Cookie Policy</a>.
                    </p>
                </div>
                <div class="cookie-actions">
                    <button type="button" class="btn btn-outline" onclick={openPreferences}>Manage preferences</button>
                    <button type="button" class="btn btn-ghost" onclick={rejectAll}>Reject all</button>
                    <button type="button" class="btn btn-primary" onclick={acceptAll}>Accept all</button>
                </div>
            </div>
        {:else}
            <div class="cookie-prefs">
                <div class="prefs-head">
                    <h3>Cookie preferences</h3>
                    <button type="button" class="prefs-close" aria-label="Close preferences" onclick={() => (managing = false)}>
                        <X size={18} />
                    </button>
                </div>

                <div class="pref-row">
                    <div class="pref-text">
                        <p class="pref-name">Strictly necessary</p>
                        <p class="pref-desc">Required for the site to function. Always on.</p>
                    </div>
                    <span class="pref-locked">Always on</span>
                </div>

                <div class="pref-row">
                    <div class="pref-text">
                        <p class="pref-name">Analytics</p>
                        <p class="pref-desc">Anonymous usage data that helps us improve the site.</p>
                    </div>
                    <label class="toggle">
                        <input type="checkbox" bind:checked={analytics} />
                        <span class="track" aria-hidden="true"></span>
                        <span class="sr-only">Enable analytics cookies</span>
                    </label>
                </div>

                <div class="pref-row">
                    <div class="pref-text">
                        <p class="pref-name">Marketing</p>
                        <p class="pref-desc">Used to measure campaigns. Off unless you turn it on.</p>
                    </div>
                    <label class="toggle">
                        <input type="checkbox" bind:checked={marketing} />
                        <span class="track" aria-hidden="true"></span>
                        <span class="sr-only">Enable marketing cookies</span>
                    </label>
                </div>

                <div class="prefs-actions">
                    <button type="button" class="btn btn-ghost" onclick={rejectAll}>Reject all</button>
                    <button type="button" class="btn btn-primary" onclick={savePreferences}>Save choices</button>
                </div>
            </div>
        {/if}
    </div>
{/if}

<style>
    .cookie {
        position: fixed;
        left: 16px;
        right: 16px;
        bottom: 16px;
        z-index: 1300;
        max-width: 940px;
        margin: 0 auto;
        background: var(--surface-2);
        border: 1px solid var(--border-strong);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        animation: cookie-in 0.5s var(--ease-out) both;
    }

    @keyframes cookie-in {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .cookie-bar {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 22px 24px;
    }

    .cookie-copy {
        display: flex;
        gap: 14px;
        align-items: flex-start;
    }

    .cookie-icon {
        color: var(--orange);
        flex-shrink: 0;
        margin-top: 2px;
    }

    .cookie-copy p {
        font-size: 0.92rem;
        color: var(--text-muted);
        line-height: 1.6;
    }

    .cookie-copy a {
        color: var(--orange);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .cookie-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .cookie-actions .btn {
        flex: 1 1 auto;
        padding: 12px 18px;
        font-size: 0.92rem;
    }

    .btn-ghost {
        background: transparent;
        color: var(--text-muted);
        border: 1px solid var(--border);
    }

    .btn-ghost:hover {
        color: var(--text);
        border-color: var(--border-strong);
        transform: translateY(-2px);
    }

    @media (min-width: 768px) {
        .cookie-bar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 28px;
        }
        .cookie-actions {
            flex-wrap: nowrap;
            flex-shrink: 0;
        }
        .cookie-actions .btn { flex: 0 0 auto; }
    }

    /* Preferences panel */
    .cookie-prefs {
        padding: 24px;
    }

    .prefs-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .prefs-head h3 {
        font-size: 1.15rem;
    }

    .prefs-close {
        background: transparent;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        padding: 6px;
        border-radius: var(--radius-sm);
        display: inline-flex;
        transition: color 0.2s var(--ease-out);
    }

    .prefs-close:hover { color: var(--text); }

    .pref-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 16px 0;
        border-top: 1px solid var(--border);
    }

    .pref-name {
        font-weight: 600;
        color: var(--text);
        font-size: 0.98rem;
    }

    .pref-desc {
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-top: 2px;
    }

    .pref-locked {
        font-size: 0.78rem;
        color: var(--text-muted);
        font-family: var(--font-mono);
        letter-spacing: 0.06em;
        flex-shrink: 0;
    }

    .prefs-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        margin-top: 20px;
    }

    /* Toggle */
    .toggle {
        position: relative;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        flex-shrink: 0;
    }

    .toggle input {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        cursor: pointer;
    }

    .track {
        width: 46px;
        height: 26px;
        border-radius: var(--radius-full);
        background: var(--surface);
        border: 1px solid var(--border-strong);
        position: relative;
        transition: background-color 0.25s var(--ease-out), border-color 0.25s var(--ease-out);
    }

    .track::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--text-muted);
        transition: transform 0.25s var(--ease-out), background-color 0.25s var(--ease-out);
    }

    .toggle input:checked + .track {
        background: rgba(255, 126, 95, 0.25);
        border-color: var(--orange);
    }

    .toggle input:checked + .track::after {
        transform: translateX(20px);
        background: var(--orange);
    }

    .toggle input:focus-visible + .track {
        outline: 2px solid var(--orange);
        outline-offset: 3px;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
</style>
