// Strata Forge Technologies — site-wide config
// TODO: Replace placeholders below with real values before deploy.

export const WHATSAPP_NUMBER = '260979082676'; // TODO: confirm real WhatsApp number
export const WHATSAPP_PRETEXT = "Hi, I'd like to discuss a project with Strata Forge.";
export const PACRA_NUMBER = '[PACRA_NUMBER]'; // TODO: replace with PACRA registration number

export function whatsappUrl(pretext = WHATSAPP_PRETEXT, number = WHATSAPP_NUMBER) {
    return `https://wa.me/${number}?text=${encodeURIComponent(pretext)}`;
}
