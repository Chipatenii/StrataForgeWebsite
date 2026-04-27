<script>
    import { MessageCircle } from 'lucide-svelte';
    import { whatsappUrl } from '$lib/siteConfig.js';
</script>

<a
    class="wa-fab"
    href={whatsappUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
>
    <span class="wa-icon" aria-hidden="true">
        <MessageCircle size={24} strokeWidth={2.25} />
    </span>
    <span class="wa-label">Chat with us</span>
</a>

<style>
    .wa-fab {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 1200;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 14px 18px;
        border-radius: 999px;
        background: #25d366;
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        box-shadow: 0 10px 28px rgba(37, 211, 102, 0.35), 0 4px 12px rgba(0,0,0,0.1);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        animation: wa-pulse 1.6s ease-out 1.2s 2;
    }

    .wa-fab:hover {
        transform: translateY(-3px);
        box-shadow: 0 14px 32px rgba(37, 211, 102, 0.45), 0 6px 14px rgba(0,0,0,0.12);
    }

    .wa-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .wa-label {
        white-space: nowrap;
    }

    @media (max-width: 640px) {
        .wa-fab {
            padding: 14px;
            right: 16px;
            bottom: 16px;
        }
        .wa-label {
            display: none;
        }
    }

    @keyframes wa-pulse {
        0%   { box-shadow: 0 10px 28px rgba(37, 211, 102, 0.35), 0 0 0 0 rgba(37, 211, 102, 0.55); }
        70%  { box-shadow: 0 10px 28px rgba(37, 211, 102, 0.35), 0 0 0 18px rgba(37, 211, 102, 0); }
        100% { box-shadow: 0 10px 28px rgba(37, 211, 102, 0.35), 0 0 0 0 rgba(37, 211, 102, 0); }
    }

    @media (prefers-reduced-motion: reduce) {
        .wa-fab {
            animation: none;
            transition: none;
        }
    }
</style>
