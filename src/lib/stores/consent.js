// Cookie-consent state for Strata Forge Technologies.
//
// Defaults to the stricter opt-in model worldwide: nothing beyond
// strictly-necessary cookies fires until the visitor actively accepts.
// The choice is persisted so the banner is not shown again, and can be
// changed at any time via the "Cookie Settings" link in the footer.

import { writable } from 'svelte/store';

const STORAGE_KEY = 'sf-cookie-consent';
const POLICY_VERSION = 1; // bump when the cookie policy materially changes

const DEFAULT = {
    version: POLICY_VERSION,
    decided: false,
    necessary: true, // always on, cannot be switched off
    analytics: false,
    marketing: false,
    updatedAt: null
};

function read() {
    if (typeof localStorage === 'undefined') return { ...DEFAULT };
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { ...DEFAULT };
        const parsed = JSON.parse(raw);
        // Re-prompt if the policy version changed since the visitor decided.
        if (parsed.version !== POLICY_VERSION) return { ...DEFAULT };
        return { ...DEFAULT, ...parsed, necessary: true };
    } catch {
        return { ...DEFAULT };
    }
}

function write(value) {
    if (typeof localStorage === 'undefined') return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
        /* storage unavailable — banner will simply show again next visit */
    }
}

function createConsent() {
    const { subscribe, set } = writable(read());

    function commit(next) {
        const value = {
            ...next,
            version: POLICY_VERSION,
            decided: true,
            necessary: true,
            updatedAt: new Date().toISOString()
        };
        write(value);
        set(value);
    }

    return {
        subscribe,
        acceptAll() {
            commit({ analytics: true, marketing: true });
        },
        rejectAll() {
            commit({ analytics: false, marketing: false });
        },
        save({ analytics = false, marketing = false } = {}) {
            commit({ analytics, marketing });
        },
        // Re-open the banner without wiping the stored choice.
        reopen() {
            set({ ...read(), decided: false });
        }
    };
}

export const consent = createConsent();
