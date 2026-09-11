import sun from "@/assets/icon-1.webp.asset.json";
import boot from "@/assets/icon-2.webp.asset.json";
import couple from "@/assets/icon-3.webp.asset.json";
import banner from "@/assets/icon-4.webp.asset.json";
import music from "@/assets/icon-5.webp.asset.json";
import arch from "@/assets/icon-6.webp.asset.json";
import hat from "@/assets/icon-7.webp.asset.json";
import shoes from "@/assets/icon-8.webp.asset.json";
import conjunto from "@/assets/icon-9.webp.asset.json";
import { assetUrl } from "@/lib/asset-url";

export const ICONS = {
  sun: assetUrl(sun.url),
  boot: assetUrl(boot.url),
  couple: assetUrl(couple.url),
  banner: assetUrl(banner.url),
  music: assetUrl(music.url),
  arch: assetUrl(arch.url),
  hat: assetUrl(hat.url),
  shoes: assetUrl(shoes.url),
  conjunto: assetUrl(conjunto.url),
};

/** Decorative-only illustration. Hidden from assistive tech. */
export function Deco({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      draggable={false}
      className={`pointer-events-none select-none ${className}`}
    />
  );
}
