// Strata Forge — portfolio entries
//
// Schema:
//   title:       string  — project / client name
//   category:    'website' | 'branding' | 'flyer'
//   thumbnail:   string  — image path (e.g. /images/portfolio/web-1.jpg)
//   description: string  — 1–2 sentence description of the work
//   tags:        string[] — short tags
//   link:        string | null — live URL (websites only)
//
// TODO: Drop screenshot images into static/images/portfolio/ matching the
// thumbnail filenames below. Recommended: 1200×800 JPG, ~150KB each.

export const portfolio = [
    // WEBSITES
    {
        title: 'Sekoma Energy',
        category: 'website',
        thumbnail: '/images/portfolio/sekoma-energy.jpg',
        description: 'Corporate site for a Zambian energy and resources company — built to communicate scale, sector expertise, and credibility to investors and partners.',
        tags: ['Energy', 'Corporate', 'Lusaka'],
        link: 'https://sekomaenergy.com'
    },
    {
        title: 'African Aesthetics Spa (AASPA)',
        category: 'website',
        thumbnail: '/images/portfolio/aaspa.jpg',
        description: 'Beauty, wellness, and aesthetics destination site with a refined editorial feel — designed to drive bookings and showcase the spa experience.',
        tags: ['Wellness', 'Hospitality', 'Bookings'],
        link: 'https://africanaestheticsspa.com'
    },
    {
        title: 'Mwezi Tech',
        category: 'website',
        thumbnail: '/images/portfolio/mwezi-tech.jpg',
        description: 'Modern tech-services site positioning the brand as a forward-thinking digital partner across the African market.',
        tags: ['Technology', 'Services'],
        link: 'https://mwezitech.com/'
    },
    {
        title: 'Annchota Legal Practitioners',
        category: 'website',
        thumbnail: '/images/portfolio/annchota-legal.jpg',
        description: 'Professional, trust-first website for a Zambian legal practice — built to convert enquiries and signal authority across practice areas.',
        tags: ['Legal', 'Professional Services'],
        link: 'https://annchotalegalpractitioners.com/'
    },
    {
        title: 'Flamingo Consultancy',
        category: 'website',
        thumbnail: '/images/portfolio/flamingo-consultancy.jpg',
        description: 'Bold, branded consulting site that turns first-time visitors into leads — anchored around the Flamingo Consultancy identity.',
        tags: ['Consulting', 'Lead Generation'],
        link: 'https://www.consultingflamingo.com/'
    },

    // LOGOS & BRANDING
    // TODO: Replace placeholder branding entries with real work
    {
        title: 'Brand Name 1',
        category: 'branding',
        thumbnail: '/images/portfolio/brand-1.jpg',
        description: '[Description of the branding work done]',
        tags: ['[Tag1]', '[Tag2]'],
        link: null
    },
    {
        title: 'Brand Name 2',
        category: 'branding',
        thumbnail: '/images/portfolio/brand-2.jpg',
        description: '[Description]',
        tags: ['[Tag1]'],
        link: null
    },

    // FLYERS & PRINT
    // TODO: Replace placeholder flyer entries with real work
    {
        title: 'Flyer Project 1',
        category: 'flyer',
        thumbnail: '/images/portfolio/flyer-1.jpg',
        description: '[Description]',
        tags: ['[Tag1]'],
        link: null
    },
    {
        title: 'Flyer Project 2',
        category: 'flyer',
        thumbnail: '/images/portfolio/flyer-2.jpg',
        description: '[Description]',
        tags: ['[Tag1]'],
        link: null
    }
];

export const portfolioFilters = [
    { id: 'all',      label: 'All' },
    { id: 'website',  label: 'Websites' },
    { id: 'branding', label: 'Logos & Branding' },
    { id: 'flyer',    label: 'Flyers & Print' }
];

export const categoryLabels = {
    website:  'Website',
    branding: 'Logos & Branding',
    flyer:    'Flyers & Print'
};
