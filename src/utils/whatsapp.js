import { site } from "../data/content";

export function getWhatsappLink(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
