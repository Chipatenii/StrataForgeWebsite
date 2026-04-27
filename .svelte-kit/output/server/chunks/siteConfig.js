const WHATSAPP_NUMBER = "260979082676";
const WHATSAPP_PRETEXT = "Hi, I'd like to discuss a project with Strata Forge.";
const PACRA_NUMBER = "[PACRA_NUMBER]";
function whatsappUrl(pretext = WHATSAPP_PRETEXT, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(pretext)}`;
}
export {
  PACRA_NUMBER as P,
  whatsappUrl as w
};
