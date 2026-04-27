<script>
    import { Phone, Mail, MapPin } from "lucide-svelte";
    import { inView } from "$lib/actions/inView.js";
    import FAQ from "$lib/components/FAQ.svelte";
</script>

<div class="contact-page">
    <section class="page-intro" style="background: linear-gradient(rgba(32, 53, 144, 0.85), rgba(32, 53, 144, 0.95)), url('/images/services_banner.png'); background-size: cover; background-position: center;">
        <div class="container text-center fade-up-element" use:inView>
            <h1 style="color: white; margin-bottom: 24px;">Let's Start Growing</h1>
            <p class="large-text" style="color: rgba(255, 255, 255, 0.9);">
                Have a system in mind or a brand that needs a fresh start? Let's
                talk about how we can forge it together.
            </p>
        </div>
    </section>

    <section class="contact-main">
        <div class="container contact-grid fade-up-element" use:inView>
            <div class="contact-form glass-panel">
                <h3 class="mb-4">Send a Message</h3>
                <form>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="e.g. John Doe"
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Business Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div class="form-group">
                        <label for="type">Project Type</label>
                        <select id="type">
                            <option>Select Option</option>
                            <option>Business Website</option>
                            <option>Web App / Internal Tool</option>
                            <option>Brand Identity</option>
                            <option>Digital Marketing</option>
                            <option>Something Else</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Tell us about your project..."
                        ></textarea>
                    </div>
                    <button
                        type="button"
                        class="btn btn-primary w-full"
                        style="width: 100%">Send Inquiry</button
                    >
                </form>
            </div>

            <div class="contact-info">
                <div class="info-block mb-6">
                    <h3>Book a Call</h3>
                    <p class="mb-3">
                        Schedule a 30-minute discovery call to discuss your
                        project.
                    </p>
                    <!-- TODO: Replace with real calendar booking URL -->
                    <a
                        href="/contact"
                        class="btn btn-outline"
                        style="width: 100%">Open Calendar</a
                    >
                </div>

                <div class="info-block">
                    <h3>Direct Contact</h3>
                    <div class="info-item">
                        <Mail size={18} />
                        <p>
                            Email: <a href="mailto:strataforgetechnologies@gmail.com"
                                >strataforgetechnologies@gmail.com</a
                            >
                        </p>
                    </div>
                    <div class="info-item">
                        <Phone size={18} />
                        <p>Phone: +260979082676</p>
                    </div>
                    <div class="info-item">
                        <MapPin size={18} />
                        <p>Location: Lusaka, Zambia (Remote-first)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <FAQ />
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

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 48px;
    }

    @media (min-width: 992px) {
        .contact-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    .contact-form {
        padding: 40px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        border: 1px solid rgba(0,0,0,0.03);
        transition: var(--transition-smooth);
    }

    .contact-form:hover {
        box-shadow: var(--shadow-md);
    }

    .form-group {
        margin-bottom: 16px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 0.9rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 16px 16px; /* Increased for better touch targets */
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: var(--radius-md);
        background: var(--color-secondary);
        font-family: inherit;
        font-size: 1.05rem; /* Larger text for mobile inputs */
    }

    .form-group textarea {
        height: 120px;
    }

    .info-item {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 12px;
        color: var(--color-text-muted);
    }

    .info-item p {
        margin-bottom: 0 !important;
    }
</style>
