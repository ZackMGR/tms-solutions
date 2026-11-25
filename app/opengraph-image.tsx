import { shareCard, shareContentType, shareSize } from "@/lib/share-card";

export const alt = "TMS Solutions — detachering en vakmensen in Nederland";
export const size = shareSize;
export const contentType = shareContentType;

export default function Image() {
  return shareCard({
    eyebrow: "Detachering vanuit Utrecht",
    title: "Vakmensen voor werk dat niet kan wachten.",
    detail: "Bouw, logistiek, techniek, zorg en meer.",
  });
}
