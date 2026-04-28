<script>
    import { Linkedin, BadgeCheck } from "lucide-svelte";
    import { inView } from "$lib/actions/inView.js";
    import { countUp } from "$lib/actions/countUp.js";
    import ClientLogos from "$lib/components/ClientLogos.svelte";
    import { PACRA_NUMBER } from "$lib/siteConfig.js";

    const founder = {
        name: 'Innocent Manda',
        role: 'Founder & Backend Architect',
        photo: '/images/innocent_manda.jpeg',
        bio: "I've spent the last several years building software systems, digital infrastructure, and growth-driven solutions for ambitious businesses in Zambia and beyond. My journey started with a passion for design and technology, but evolved into a deeper mission: helping companies transform ideas into scalable engines of success. As the founder of Strata Forge Technologies, I focus on backend architecture, automation, and modern digital solutions that strengthen how businesses operate and grow. I believe strong companies are forged through bold vision, reliable systems, and relentless execution.",
        linkedin: 'https://www.linkedin.com/in/innocent-manda-80b48b187/'
    };

    const stats = [
        { number: '20+', label: 'Projects Delivered' },
        { number: '30+', label: 'Clients Served' },
        { number: '4+',  label: 'Years Building' }
    ];
</script>

<div class="about-page">
    <section class="page-intro" style="background: linear-gradient(rgba(32, 53, 144, 0.85), rgba(32, 53, 144, 0.95)), url('/images/services_banner.png'); background-size: cover; background-position: center;">
        <div class="container text-center fade-up-element" use:inView>
            <h1 style="color: white; margin-bottom: 24px;">About Strata Forge</h1>
            <p class="large-text" style="color: rgba(255, 255, 255, 0.9);">
                A dev-and-design-first company based in Lusaka, Zambia. We build
                the digital backbone for modern businesses.
            </p>
        </div>
    </section>

    <section class="story">
        <div class="container story-grid fade-up-element" use:inView>
            <div>
                <h2 class="mb-3">Where we started</h2>
                <p>
                    Born from the intersection of technology and creativity,
                    Strata Forge was created to bridge the gap between complex
                    software engineering and high-end brand design.
                </p>
                <p class="mt-2">
                    We believe systems should be human, and design should be
                    functional. Our remote-first approach allows us to serve
                    clients across the region with agility and precision.
                </p>
                <!-- TODO: Replace [PACRA_NUMBER] in src/lib/siteConfig.js -->
                <div class="legit-badge">
                    <BadgeCheck size={18} />
                    <span>Registered Zambian Company &middot; PACRA No. {PACRA_NUMBER}</span>
                </div>
            </div>
            <div class="story-visual">
                <img
                    src="/images/about_visual.png"
                    alt="Strata Forge Workspace"
                    class="story-image"
                />
            </div>
        </div>
    </section>

    <section class="team bg-neutral">
        <div class="container text-center fade-up-element" use:inView>
            <h2 class="mb-6">The Minds Behind the Forge</h2>
            <div class="founder-card glass-panel fade-up-element delay-100" use:inView>
                <!-- TODO: Replace [FOUNDER_PHOTO] in script -->
                <div class="founder-photo">
                    <img src={founder.photo} alt={founder.name} />
                </div>
                <h3>{founder.name}</h3>
                <p class="founder-role">{founder.role}</p>
                <!-- TODO: Replace [FOUNDER_BIO] in script -->
                <p class="founder-bio">{founder.bio}</p>

                <a
                    class="linkedin-link"
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin size={16} />
                    <span>Connect on LinkedIn →</span>
                </a>

                <div class="stats-row">
                    {#each stats as s}
                        <div class="stat">
                            <span class="stat-number" use:countUp={s.number}>{s.number}</span>
                            <span class="stat-label">{s.label}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <ClientLogos />
</div>

<style>
    .page-intro {
        padding-top: 100px;
        padding-bottom: 80px;
    }

    .page-intro h1 {
        font-size: 2.5rem;
        margin-bottom: 24px;
    }

    .large-text {
        font-size: 1.2rem;
        color: var(--color-text-muted);
        max-width: 800px;
        margin: 0 auto;
    }

    .story-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 48px;
        align-items: center;
    }

    @media (min-width: 768px) {
        .story-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    .legit-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-top: 24px;
        padding: 10px 16px;
        background: rgba(32, 53, 144, 0.06);
        border: 1px solid rgba(32, 53, 144, 0.16);
        border-radius: 999px;
        color: var(--color-primary);
        font-size: 0.85rem;
        font-weight: 600;
    }

    .founder-card {
        padding: 40px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        max-width: 560px;
        margin: 0 auto;
        transition: var(--transition-smooth);
        border: 1px solid rgba(0, 0, 0, 0.03);
        text-align: center;
    }

    .founder-card:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-md);
    }

    .founder-photo {
        width: 140px;
        height: 140px;
        border-radius: 28px;
        overflow: hidden;
        margin: 0 auto 24px;
        background: var(--color-secondary);
        box-shadow: 0 12px 32px rgba(32, 53, 144, 0.18);
        transform: rotate(-2deg);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .founder-card:hover .founder-photo {
        transform: rotate(0);
    }

    .founder-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .founder-role {
        color: var(--color-primary);
        font-weight: 600;
        margin-bottom: 16px;
    }

    .founder-bio {
        color: var(--color-text-muted);
        font-size: 0.95rem;
        line-height: 1.65;
        margin-bottom: 24px;
        max-width: 460px;
        margin-left: auto;
        margin-right: auto;
    }

    .linkedin-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        border: 1px solid rgba(32, 53, 144, 0.25);
        border-radius: 999px;
        color: var(--color-primary);
        font-weight: 600;
        font-size: 0.9rem;
        text-decoration: none;
        transition: all 0.25s ease;
    }

    .linkedin-link:hover {
        background: var(--color-primary);
        color: var(--color-white);
        border-color: var(--color-primary);
        transform: translateY(-2px);
    }

    .stats-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 32px;
        padding-top: 24px;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
    }

    .stat {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .stat-number {
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
        font-size: 1.6rem;
        color: var(--color-primary);
        line-height: 1.1;
    }

    .stat-label {
        font-size: 0.78rem;
        color: var(--color-text-muted);
        font-weight: 500;
        line-height: 1.3;
    }

    .story-visual {
        border-radius: 24px;
        overflow: hidden;
        height: 300px;
    }

    .story-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
