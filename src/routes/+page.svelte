<script>
    import {
        Globe,
        PenTool,
        MousePointerClick,
        Layers,
        Code2,
        Gauge,
        ArrowUpRight,
        ArrowRight,
        Check,
        Compass,
        MoveDown
    } from 'lucide-svelte';
    import { inView } from '$lib/actions/inView.js';
    import { countUp } from '$lib/actions/countUp.js';
    import Hero3D from '$lib/components/Hero3D.svelte';
    import ActivityGrid from '$lib/components/ActivityGrid.svelte';
    import FAQ from '$lib/components/FAQ.svelte';
    import { portfolio } from '$lib/data/portfolio.js';
    import { whatsappUrl } from '$lib/siteConfig.js';

    const stats = [
        { value: '4+', label: 'In business since 2021' },
        { value: '20+', label: 'Projects delivered' },
        { value: '30+', label: 'Clients served' },
        { value: '5+', label: 'Websites live' }
    ];

    const buildCards = [
        { n: '01', icon: Globe, title: 'Web Design', body: 'Modern sites with strong visual presence and clear guidance.' },
        { n: '02', icon: PenTool, title: 'Brand & Identity', body: 'Logos, visual systems, and recognisable brand worlds.' },
        { n: '03', icon: MousePointerClick, title: 'Landing Pages & Campaigns', body: 'Conversion-focused pages for products and campaigns.' }
    ];

    const craftCards = [
        { n: '04', icon: Layers, title: 'UI/UX Design', body: 'Structured interfaces and intuitive, human-centred experiences.' },
        { n: '05', icon: Code2, title: 'Web & App Development', body: 'Clean, fast, responsive builds on a modern, dependable stack.' },
        { n: '06', icon: Gauge, title: 'Performance & Growth', body: 'Speed, behaviour, and conversion, tuned after launch.' }
    ];

    const process = [
        { n: '1', title: 'Discovery', body: 'Understand the brand, the audience, the market, and the goals.' },
        { n: '2', title: 'Concept', body: 'Structure, design direction, and the user flow.' },
        { n: '3', title: 'Design & Development', body: 'Built to a high standard, responsive on every screen.' },
        { n: '4', title: 'Launch & Optimisation', body: 'Publish, test, then refine on real behaviour.' }
    ];

    const capability = [
        { label: 'Web design', value: 92 },
        { label: 'Development', value: 88 },
        { label: 'Brand & identity', value: 80 },
        { label: 'Growth & campaigns', value: 74 }
    ];

    const tools = ['Figma', 'SvelteKit', 'Node.js', 'Supabase', 'Cloudflare', 'GitHub'];

    // --- Inquiry form: composes a WhatsApp message and opens a personal chat ---
    let form = $state({ name: '', type: 'Business Website', detail: '' });
    let sending = $state(false);
    let sent = $state(false);

    function submitInquiry(e) {
        e.preventDefault();
        if (sending) return;
        sending = true;
        sent = false;

        const lines = [
            "Hi Strata Forge, I'd like to start a project.",
            form.name ? `Name: ${form.name}` : '',
            `Project: ${form.type}`,
            form.detail ? `Details: ${form.detail}` : ''
        ].filter(Boolean);

        const url = whatsappUrl(lines.join('\n'));

        // Brief, honest progress state before handing off to WhatsApp.
        setTimeout(() => {
            window.open(url, '_blank', 'noopener,noreferrer');
            sending = false;
            sent = true;
        }, 700);
    }
</script>

<svelte:head>
    <title>Strata Forge Technologies — Systems, Design & Growth</title>
    <meta
        name="description"
        content="Strata Forge Technologies is a Zambian studio building websites, apps, and brands that earn trust, guide people, and perform. Simple solutions for everyday business problems."
    />
</svelte:head>

<!-- 00 — HERO -->
<section id="hero" class="hero">
    <div class="container hero-grid">
        <div class="hero-text fade-up-element" use:inView>
            <p class="section-label"><span class="num">00</span> · Systems · Design · Growth</p>
            <h1 class="display hero-title">Strata Forge<br />Technologies</h1>
            <p class="hero-tagline">Simple solutions for everyday business problems.</p>
            <p class="lede hero-lede">
                Design, development, and brand experience under one roof, built to earn trust,
                guide people, and perform.
            </p>
            <div class="hero-ctas">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    Start a project <ArrowRight size={18} />
                </a>
                <a href="/academy" class="btn btn-outline">Visit the Academy</a>
            </div>
            <a href="#numbers" class="scroll-cue" aria-label="Scroll to explore">
                <MoveDown size={16} /><span>Scroll to explore</span>
            </a>
        </div>
        <div class="hero-visual fade-up-element delay-200" use:inView>
            <Hero3D />
        </div>
    </div>
</section>

<!-- 01 — IN NUMBERS -->
<section id="numbers" class="numbers">
    <div class="container">
        <div class="stat-grid">
            {#each stats as s, i (s.label)}
                <div class="stat-block fade-up-element delay-{Math.min((i + 1) * 100, 400)}" use:inView>
                    <span class="stat-value" use:countUp={s.value}>{s.value}</span>
                    <span class="stat-label">{s.label}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- 02 — WHAT WE BUILD -->
<section id="build" class="build">
    <div class="container">
        <div class="section-head fade-up-element" use:inView>
            <p class="section-label"><span class="num">02</span> · What We Build</p>
            <h2 class="section-headline">Creative that gives <span class="wrap">your brand presence.</span></h2>
        </div>
        <div class="card-grid">
            {#each buildCards as c, i (c.n)}
                <article class="build-card fade-up-element delay-{Math.min((i + 1) * 100, 300)}" use:inView>
                    <span class="card-num">{c.n}</span>
                    <span class="card-icon"><c.icon size={22} /></span>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- 03 — HOW WE BUILD -->
<section id="craft" class="build">
    <div class="container">
        <div class="section-head fade-up-element" use:inView>
            <p class="section-label"><span class="num">03</span> · How We Build</p>
            <h2 class="section-headline">Engineering that makes <span class="wrap">it fast and reliable.</span></h2>
        </div>
        <div class="card-grid">
            {#each craftCards as c, i (c.n)}
                <article class="build-card fade-up-element delay-{Math.min((i + 1) * 100, 300)}" use:inView>
                    <span class="card-num">{c.n}</span>
                    <span class="card-icon"><c.icon size={22} /></span>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- 04 — WORK -->
<section id="work" class="work">
    <div class="container">
        <div class="section-head fade-up-element" use:inView>
            <p class="section-label"><span class="num">04</span> · Work</p>
            <h2 class="section-headline">Real clients. <span class="wrap">Real results.</span></h2>
            <p class="lede mt-2">Live sites we designed and built for businesses across Zambia and the region.</p>
        </div>
        <div class="work-grid">
            {#each portfolio as p, i (p.title)}
                <a
                    class="work-card fade-up-element delay-{Math.min((i % 3 + 1) * 100, 300)}"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    use:inView
                >
                    <div class="work-visual">
                        {#if p.thumbnail}
                            <img src={p.thumbnail} alt={p.title} loading="lazy" />
                        {:else if p.logo}
                            <img class="work-logo" src={p.logo} alt={p.title} loading="lazy" />
                        {:else}
                            <span class="work-monogram" aria-hidden="true">{p.title.charAt(0)}</span>
                        {/if}
                    </div>
                    <div class="work-body">
                        <span class="work-cat">{p.category}</span>
                        <h3>{p.title}</h3>
                        <p class="work-result">{p.result}</p>
                        <span class="work-link">Visit live site <ArrowUpRight size={16} /></span>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- 05 — STUDIO -->
<section id="studio" class="studio">
    <div class="container studio-grid">
        <div class="fade-up-element" use:inView>
            <p class="section-label"><span class="num">05</span> · Studio</p>
            <h2 class="section-headline">Everything under <span class="wrap">one roof.</span></h2>
            <p class="lede mt-4">
                Strategy, design, and technical build all happen in-house, from the first sketch to
                launch. We start with your problem, not a template, and we stay honest about what a
                project needs and what it does not.
            </p>
            <div class="studio-pair">Strata Forge <span>+</span> You</div>
        </div>
        <div class="studio-aside fade-up-element delay-200" use:inView>
            <div class="founder">
                <div class="founder-head">
                    <img class="founder-photo" src="/images/innocent_manda.jpeg" alt="Innocent Manda" loading="lazy" />
                    <div class="founder-meta">
                        <p class="founder-name">Innocent Manda</p>
                        <p class="founder-role">Founder &amp; Backend Architect</p>
                    </div>
                </div>
                <p class="founder-bio">
                    I have spent the last several years building software systems, digital
                    infrastructure, and growth-driven solutions for ambitious businesses in Zambia
                    and beyond. My journey started with a passion for design and technology, but
                    evolved into a deeper mission: helping companies transform ideas into scalable
                    engines of success. As the founder of Strata Forge Technologies, I focus on
                    backend architecture, automation, and modern digital solutions that strengthen
                    how businesses operate and grow. I believe strong companies are forged through
                    bold vision, reliable systems, and relentless execution.
                </p>
                <a class="founder-link" href="https://www.linkedin.com/in/innocent-manda-80b48b187/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn <ArrowUpRight size={14} />
                </a>
            </div>
            <div class="tools">
                <p class="tools-label">Tools we build with</p>
                <div class="tools-row">
                    {#each tools as t (t)}
                        <span class="tool">{t}</span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 06 — PROCESS -->
<section id="process" class="process">
    <div class="container">
        <div class="section-head fade-up-element" use:inView>
            <p class="section-label"><span class="num">06</span> · Process</p>
            <h2 class="section-headline">Four steps, <span class="wrap">no surprises.</span></h2>
        </div>
        <div class="process-grid">
            {#each process as step, i (step.n)}
                <div class="process-step fade-up-element delay-{Math.min((i + 1) * 100, 400)}" use:inView>
                    <span class="process-num">{step.n}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- 07 — FAQ -->
<FAQ />

<!-- 08 — THE SYSTEM -->
<section id="system" class="system">
    <div class="container">
        <div class="section-head fade-up-element" use:inView>
            <p class="section-label"><span class="num">08</span> · The System</p>
            <h2 class="section-headline">The machinery <span class="wrap">behind a launch.</span></h2>
        </div>
        <div class="system-grid">
            <div class="sys-panel fade-up-element" use:inView>
                <h4>Reach</h4>
                <p>Delivered remotely to clients in Zambia and worldwide.</p>
            </div>

            <div class="sys-panel span-2 fade-up-element delay-100" use:inView>
                <h4>Capability profile</h4>
                <div class="bars">
                    {#each capability as c (c.label)}
                        <div class="bar-row">
                            <span class="bar-label">{c.label}</span>
                            <span class="bar-track"><span class="bar-fill" style="--w: {c.value}%"></span></span>
                        </div>
                    {/each}
                </div>
                <p class="sys-note">A weighting profile, not measured data.</p>
            </div>

            <div class="sys-panel fade-up-element delay-100" use:inView>
                <h4>Flow</h4>
                <p class="flow">Discovery → Concept → Build → Launch</p>
            </div>

            <div class="sys-panel fade-up-element delay-200" use:inView>
                <h4>Pipeline</h4>
                <ul class="checks">
                    <li><Check size={15} /> Responsive verified</li>
                    <li><Check size={15} /> Performance checked</li>
                    <li><Check size={15} /> Accessibility reviewed</li>
                </ul>
            </div>

            <div class="sys-panel fade-up-element delay-200" use:inView>
                <h4>Stance</h4>
                <p>Client-first. One team. Measured. Honest.</p>
            </div>
        </div>
    </div>
</section>

<!-- 09 — ACTIVITY -->
<section id="activity" class="activity-section">
    <div class="container">
        <div class="section-head fade-up-element" use:inView>
            <p class="section-label"><span class="num">09</span> · Activity</p>
            <h2 class="section-headline">Always <span class="wrap">in motion.</span></h2>
            <p class="lede mt-2">Busy weeks are build sprints. Quiet weeks are review and testing.</p>
        </div>
        <div class="fade-up-element delay-100" use:inView>
            <ActivityGrid />
        </div>
    </div>
</section>

<!-- 10 — PROJECT INQUIRY -->
<section id="inquiry" class="inquiry">
    <div class="container inquiry-grid">
        <div class="fade-up-element" use:inView>
            <p class="section-label"><span class="num">10</span> · Project Inquiry</p>
            <h2 class="section-headline">Ready to <span class="wrap">solve it?</span></h2>
            <p class="lede mt-4">
                Tell us about your project in a few lines. We reply personally with an honest
                assessment, not a boilerplate quote.
            </p>
            <p class="inquiry-meta"><Compass size={16} /> Takes about 60 seconds</p>
        </div>

        <form class="inquiry-form panel fade-up-element delay-200" use:inView onsubmit={submitInquiry}>
            <div class="field">
                <label for="iq-name">Your name</label>
                <input id="iq-name" type="text" bind:value={form.name} placeholder="e.g. Chanda M." autocomplete="name" />
            </div>
            <div class="field">
                <label for="iq-type">Project type</label>
                <select id="iq-type" bind:value={form.type}>
                    <option>Business Website</option>
                    <option>Web App / Internal Tool</option>
                    <option>Brand & Identity</option>
                    <option>Landing Page / Campaign</option>
                    <option>Something else</option>
                </select>
            </div>
            <div class="field">
                <label for="iq-detail">What are you trying to solve?</label>
                <textarea id="iq-detail" rows="3" bind:value={form.detail} placeholder="A sentence or two is plenty."></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-full" aria-busy={sending} disabled={sending}>
                {#if sending}
                    <span class="spinner" aria-hidden="true"></span> Preparing your chat...
                {:else}
                    Start a project <ArrowRight size={18} />
                {/if}
            </button>
            {#if sent}
                <p class="inquiry-ok" role="status">WhatsApp is opening in a new tab. If it did not, message us at +260 979 082 676.</p>
            {/if}
        </form>
    </div>
</section>

<style>
    /* --- 00 Hero --- */
    .hero {
        padding-top: 48px;
        padding-bottom: 64px;
        min-height: calc(100vh - var(--header-height));
        display: flex;
        align-items: center;
    }

    .hero-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        align-items: center;
    }

    @media (min-width: 992px) {
        .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 56px;
        }
    }

    .hero-title {
        margin-top: 22px;
        color: var(--text);
    }

    .hero-tagline {
        margin-top: 20px;
        font-size: clamp(1.1rem, 2vw, 1.35rem);
        color: var(--orange);
        font-weight: 500;
    }

    .hero-lede {
        margin-top: 16px;
    }

    .hero-ctas {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 32px;
    }

    .scroll-cue {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-top: 40px;
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 0.8rem;
        letter-spacing: 0.08em;
        text-decoration: none;
        transition: color 0.2s var(--ease-out);
    }

    .scroll-cue:hover { color: var(--text); }

    .scroll-cue :global(svg) {
        animation: nudge 1.8s var(--ease-in-out) infinite;
    }

    @keyframes nudge {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(4px); }
    }

    /* --- 01 Numbers --- */
    .numbers {
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
    }

    .stat-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px 24px;
    }

    @media (min-width: 768px) {
        .stat-grid { grid-template-columns: repeat(4, 1fr); }
    }

    .stat-block {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .stat-value {
        font-size: clamp(2.6rem, 5vw, 3.6rem);
        font-weight: 700;
        color: var(--orange);
        line-height: 1;
        letter-spacing: -0.02em;
        font-variant-numeric: tabular-nums;
    }

    .stat-label {
        font-size: 0.9rem;
        color: var(--text-muted);
    }

    /* --- Section heads --- */
    .section-head {
        max-width: 640px;
        margin-bottom: 48px;
    }

    /* --- 02 / 03 Build cards --- */
    .card-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media (min-width: 768px) {
        .card-grid { grid-template-columns: repeat(3, 1fr); }
    }

    .build-card {
        position: relative;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 32px;
        transition: transform 0.4s var(--ease-out), border-color 0.4s var(--ease-out), background-color 0.4s var(--ease-out);
    }

    .build-card:hover {
        transform: translateY(-4px);
        border-color: var(--border-orange);
        background: var(--surface-2);
    }

    .card-num {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--text-muted);
        letter-spacing: 0.1em;
    }

    .card-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 46px;
        height: 46px;
        margin: 18px 0 20px;
        border-radius: var(--radius-md);
        background: rgba(255, 126, 95, 0.12);
        color: var(--orange);
    }

    .build-card h3 {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    .build-card p {
        color: var(--text-muted);
        font-size: 0.96rem;
    }

    /* --- 04 Work --- */
    .work-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 22px;
    }

    @media (min-width: 640px) {
        .work-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 992px) {
        .work-grid { grid-template-columns: repeat(3, 1fr); }
    }

    .work-card {
        display: flex;
        flex-direction: column;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        transition: transform 0.4s var(--ease-out), border-color 0.4s var(--ease-out);
    }

    .work-card:hover {
        transform: translateY(-4px);
        border-color: var(--border-orange);
    }

    .work-visual {
        aspect-ratio: 16 / 10;
        display: flex;
        align-items: center;
        justify-content: center;
        background:
            radial-gradient(circle at 30% 20%, rgba(255, 126, 95, 0.12), transparent 60%),
            var(--surface-2);
        border-bottom: 1px solid var(--border);
        overflow: hidden;
    }

    .work-visual img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .work-visual .work-logo {
        width: auto;
        height: auto;
        max-width: 62%;
        max-height: 56%;
        object-fit: contain;
    }

    .work-monogram {
        font-size: 3rem;
        font-weight: 700;
        color: var(--orange);
        opacity: 0.6;
    }

    .work-body {
        padding: 22px 24px 26px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .work-cat {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--text-muted);
    }

    .work-body h3 { font-size: 1.15rem; }

    .work-result {
        color: var(--text-muted);
        font-size: 0.94rem;
        flex: 1;
    }

    .work-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--orange);
        font-weight: 600;
        font-size: 0.9rem;
        margin-top: 6px;
    }

    /* --- 05 Studio --- */
    .studio-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        align-items: center;
    }

    @media (min-width: 992px) {
        .studio-grid { grid-template-columns: 1.4fr 1fr; gap: 64px; }
    }

    .studio-pair {
        margin-top: 32px;
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--text);
    }

    .studio-pair span { color: var(--orange); margin: 0 6px; }

    .tools {
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
        padding: 28px;
    }

    .tools-label {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--text-muted);
        margin-bottom: 18px;
    }

    .tools-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .tool {
        padding: 8px 16px;
        border-radius: var(--radius-full);
        border: 1px solid var(--border);
        background: var(--surface-2);
        font-size: 0.9rem;
        color: var(--text);
    }

    .studio-aside {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .founder {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface);
    }

    .founder-head {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .founder-photo {
        width: 64px;
        height: 64px;
        border-radius: var(--radius-md);
        object-fit: cover;
        flex-shrink: 0;
    }

    .founder-name { font-weight: 700; color: var(--text); }

    .founder-role {
        color: var(--text-muted);
        font-size: 0.9rem;
    }

    .founder-bio {
        color: var(--text-muted);
        font-size: 0.94rem;
        line-height: 1.7;
    }

    .founder-link {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        color: var(--orange);
        font-weight: 600;
        font-size: 0.86rem;
        text-decoration: none;
    }

    .founder-link:hover { text-decoration: underline; text-underline-offset: 3px; }

    /* --- 06 Process --- */
    .process-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media (min-width: 640px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 992px) { .process-grid { grid-template-columns: repeat(4, 1fr); } }

    .process-step {
        padding: 28px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        background: var(--surface);
    }

    .process-num {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: var(--radius-full);
        border: 1px solid var(--border-orange);
        color: var(--orange);
        font-family: var(--font-mono);
        font-weight: 600;
        margin-bottom: 18px;
    }

    .process-step h3 { font-size: 1.1rem; margin-bottom: 8px; }
    .process-step p { color: var(--text-muted); font-size: 0.94rem; }

    /* --- 08 System --- */
    .system-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 18px;
    }

    @media (min-width: 768px) {
        .system-grid { grid-template-columns: repeat(3, 1fr); }
        .span-2 { grid-column: span 2; }
    }

    .sys-panel {
        padding: 26px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        background: var(--surface);
    }

    .sys-panel h4 {
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--orange);
        margin-bottom: 14px;
        font-family: var(--font-mono);
    }

    .sys-panel p { color: var(--text-muted); font-size: 0.96rem; }

    .flow {
        font-family: var(--font-mono);
        color: var(--text) !important;
        font-size: 0.92rem;
    }

    .sys-note {
        margin-top: 14px;
        font-size: 0.82rem !important;
        opacity: 0.8;
    }

    .bars { display: flex; flex-direction: column; gap: 14px; }

    .bar-row { display: flex; align-items: center; gap: 16px; }

    .bar-label {
        flex: 0 0 42%;
        font-size: 0.9rem;
        color: var(--text);
    }

    .bar-track {
        flex: 1;
        height: 8px;
        border-radius: var(--radius-full);
        background: var(--surface-2);
        overflow: hidden;
    }

    .bar-fill {
        display: block;
        height: 100%;
        width: 0;
        border-radius: var(--radius-full);
        background: linear-gradient(90deg, var(--orange-soft), var(--orange));
        transition: width 1.1s var(--ease-out);
    }

    :global(.fade-up-element.in-view) .bar-fill { width: var(--w); }

    .checks { list-style: none; display: flex; flex-direction: column; gap: 10px; }

    .checks li {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text);
        font-size: 0.94rem;
    }

    .checks :global(svg) { color: var(--orange); flex-shrink: 0; }

    /* --- 10 Inquiry --- */
    .inquiry-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        align-items: start;
    }

    @media (min-width: 992px) {
        .inquiry-grid { grid-template-columns: 1fr 1fr; gap: 64px; }
    }

    .inquiry-meta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-top: 24px;
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 0.85rem;
    }

    .inquiry-form { padding: 30px; }

    .field { margin-bottom: 18px; }

    .field label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text);
    }

    .field input,
    .field select,
    .field textarea {
        width: 100%;
        padding: 14px 16px;
        border-radius: var(--radius-md);
        border: 1px solid var(--border-strong);
        background: var(--bg);
        color: var(--text);
        font-family: inherit;
        font-size: 1rem;
        transition: border-color 0.25s var(--ease-out);
    }

    .field input::placeholder,
    .field textarea::placeholder { color: rgba(147, 160, 194, 0.7); }

    .field input:focus,
    .field select:focus,
    .field textarea:focus {
        outline: none;
        border-color: var(--orange);
    }

    .field textarea { resize: vertical; }

    .inquiry-ok {
        margin-top: 16px;
        font-size: 0.9rem;
        color: var(--orange);
    }

    .spinner {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid rgba(26, 11, 6, 0.35);
        border-top-color: #1a0b06;
        animation: spin 0.7s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
</style>
