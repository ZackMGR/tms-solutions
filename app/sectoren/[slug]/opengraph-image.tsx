import { shareCard, shareContentType, shareSize } from "@/lib/share-card";
import { sectorBySlug } from "@/lib/site";

export const alt = "Sector bij TMS Solutions";
export const size = shareSize;
export const contentType = shareContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = sectorBySlug(slug);

  return shareCard({
    eyebrow: "Sector",
    title: sector?.name ?? "Sector",
    detail: sector?.tagline ?? "Vakmensen via TMS Solutions",
  });
}
