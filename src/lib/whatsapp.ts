import { PRIMARY_WHATSAPP } from "./branches";

export function waLink(message = "Hi Web Mok, I'm interested in your courses.", number = PRIMARY_WHATSAPP) {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function telLink(number: string) {
  return `tel:${number.replace(/\s/g, "")}`;
}