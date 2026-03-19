<script>
    const steps = [
        { num: '01', title: 'Discovery & Strategy', desc: 'We deep dive into your business goals to align on a technical roadmap.' },
        { num: '02', title: 'Experience Design', desc: 'Mapping the user journey and visual identity for maximum engagement.' },
        { num: '03', title: 'Build & Integrate', desc: 'Clean, secure development using modern frameworks and standard practices.' },
        { num: '04', title: 'Launch & Grow', desc: 'Deploying your solution and fueling it with targeted growth campaigns.' },
        { num: '05', title: 'Support & Scale', desc: 'Ongoing maintenance and optimization to ensure long-term success.' }
    ];
    import { inView } from "$lib/actions/inView.js";
</script>

<div class="how-we-work-page">
    <section class="page-intro" style="background: linear-gradient(rgba(32, 53, 144, 0.85), rgba(32, 53, 144, 0.95)), url('/images/services_banner.png'); background-size: cover; background-position: center;">
        <div class="container text-center fade-up-element" use:inView>
            <h1 style="color: white; margin-bottom: 24px;">How We Work</h1>
            <p class="large-text" style="color: rgba(255, 255, 255, 0.9);">Our process keeps everything connected. We follow a layered approach to ensure your brand and systems grow together.</p>
        </div>
    </section>

    <section class="steps">
        <div class="container" style="max-width: 800px">
            {#each steps as step, i (step.num)}
                <div class="step-item fade-up-element delay-{Math.min((i+1)*100, 400)}" use:inView style="display: flex; gap: 32px; margin-bottom: 64px">
                    <div class="step-num" style="font-size: 2rem; font-weight: 800; color: var(--color-primary); opacity: 0.2">{step.num}</div>
                    <div>
                        <h3 class="mb-2">{step.title}</h3>
                        <p style="color: var(--color-text-muted)">{step.desc}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <section class="bg-neutral text-center" style="padding: 100px 24px">
        <div class="container fade-up-element" use:inView>
            <h2>Ready to experience the process?</h2>
            <p class="mb-4">Let's schedule a 30-minute discovery call.</p>
            <a href="/contact" class="btn btn-primary">Schedule Discovery Call</a>
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
</style>
