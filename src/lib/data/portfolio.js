// Strata Forge — real client work shown in the Work section.
//
// Schema:
//   title:       string  — project / client name
//   category:    string  — short category tag shown on the card
//   result:      string  — one-line outcome
//   description: string  — 1–2 sentence description of the work
//   tags:        string[]
//   link:        string | null — live URL
//   logo:        string | null — client logo used as the card visual
//   thumbnail:   string | null — optional screenshot (drop into static/images/portfolio/)
//
// To add a screenshot preview later, drop a 1200×800 image into
// static/images/portfolio/ and set `thumbnail` to its path.

export const portfolio = [
    {
        title: 'Sekoma Energy',
        category: 'Website',
        result: 'A credibility-first site for investors and partners.',
        description:
            'Corporate site for a Zambian energy and resources company, built to communicate scale, sector expertise, and credibility.',
        tags: ['Energy', 'Corporate', 'Lusaka'],
        link: 'https://sekomaenergy.com',
        logo: '/images/clients/sekoma.png',
        thumbnail: null
    },
    {
        title: 'African Aesthetics Spa',
        category: 'Website',
        result: 'A refined booking destination for a wellness brand.',
        description:
            'Beauty, wellness, and aesthetics site with an editorial feel, designed to drive bookings and showcase the spa experience.',
        tags: ['Wellness', 'Hospitality', 'Bookings'],
        link: 'https://africanaestheticsspa.com',
        logo: '/images/clients/aaspa.png',
        thumbnail: null
    },
    {
        title: 'Flamingo Consultancy',
        category: 'Website',
        result: 'Turns first-time visitors into qualified leads.',
        description:
            'Bold, branded consulting site anchored around the Flamingo Consultancy identity and built for lead generation.',
        tags: ['Consulting', 'Lead Generation'],
        link: 'https://www.consultingflamingo.com/',
        logo: '/images/clients/flamingo-consultancy.png',
        thumbnail: null
    },
    {
        title: 'Mwezi Tech',
        category: 'Website',
        result: 'Positions the brand as a forward-thinking partner.',
        description:
            'Modern tech-services site positioning the brand as a forward-thinking digital partner across the African market.',
        tags: ['Technology', 'Services'],
        link: 'https://mwezitech.com/',
        logo: null,
        thumbnail: null
    },
    {
        title: 'Annchota Legal Practitioners',
        category: 'Website',
        result: 'Signals authority and converts enquiries.',
        description:
            'Professional, trust-first site for a Zambian legal practice, built to convert enquiries across practice areas.',
        tags: ['Legal', 'Professional Services'],
        link: 'https://annchotalegalpractitioners.com/',
        logo: null,
        thumbnail: null
    }
];
