import { shareCard, shareContentType, shareSize } from "@/lib/share-card";
import { sectorBySlug, vacancyBySlug } from "@/lib/site";

export const alt = "Vacature bij TMS Solutions";
export const size = shareSize;
export const contentType = shareContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vacancy = vacancyBySlug(slug);
  const sector = vacancy ? sectorBySlug(vacancy.sector) : undefined;

  return shareCard({
    eyebrow: "Vacature",
    title: vacancy?.title ?? "Vacature",
    detail: vacancy ? `${vacancy.location} · ${sector?.name ?? "TMS Solutions"}` : "TMS Solutions",
  });
}
