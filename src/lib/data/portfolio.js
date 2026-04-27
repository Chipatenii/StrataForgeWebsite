// Strata Forge — portfolio entries
// TODO: Replace placeholder entries with real project data and images before deploy.
//
// Schema:
//   title:       string  — project / client name
//   category:    'website' | 'branding' | 'flyer'
//   thumbnail:   string  — image path (e.g. /images/portfolio/web-1.jpg)
//   description: string  — 1–2 sentence description of the work
//   tags:        string[] — short tags
//   link:        string | null — live URL (websites only)

export const portfolio = [
    // WEBSITES
    {
        title: 'Project Name 1',
        category: 'website',
        thumbnail: '/images/portfolio/web-1.jpg',
        description: '[Description of what was built and for whom]',
        tags: ['[Tag1]', '[Tag2]'],
        link: 'https://live-url.com'
    },
    {
        title: 'Project Name 2',
        category: 'website',
        thumbnail: '/images/portfolio/web-2.jpg',
        description: '[Description]',
        tags: ['[Tag1]'],
        link: null
    },

    // LOGOS & BRANDING
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
