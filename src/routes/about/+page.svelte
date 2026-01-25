<div class="about-page">
    <section class="page-intro bg-neutral">
        <div class="container text-center">
            <h1>About Strata Forge</h1>
            <p class="large-text">
                A dev-and-design-first company based in Lusaka, Zambia. We build
                the digital backbone for modern businesses.
            </p>
        </div>
    </section>

    <section class="story">
        <div class="container story-grid">
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
        <div class="container text-center">
            <h2 class="mb-6">The Minds Behind the Forge</h2>
            <div class="founder-card">
                <div class="avatar"></div>
                <h3>Innocent Manda</h3>
                <p
                    class="text-primary"
                    style="color: var(--color-primary); font-weight: 600"
                >
                    Founder & Backend Architect
                </p>
                <p class="small mt-2" style="font-size: 0.85rem">
                    Development, Design, and Strategy lead for Zambian and
                    regional projects.
                </p>
            </div>
        </div>
    </section>
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

    .founder-card {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        max-width: 400px;
        margin: 0 auto;
    }

    .avatar {
        width: 80px;
        height: 80px;
        background: var(--color-secondary);
        border-radius: 50%;
        margin-bottom: 24px;
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
