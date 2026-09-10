import sun from "@/assets/icon-1.webp.asset.json";
import boot from "@/assets/icon-2.webp.asset.json";
import couple from "@/assets/icon-3.webp.asset.json";
import banner from "@/assets/icon-4.webp.asset.json";
import music from "@/assets/icon-5.webp.asset.json";
import arch from "@/assets/icon-6.webp.asset.json";
import hat from "@/assets/icon-7.webp.asset.json";
import shoes from "@/assets/icon-8.webp.asset.json";
import conjunto from "@/assets/icon-9.webp.asset.json";

export const ICONS = {
  sun: sun.url,
  boot: boot.url,
  couple: couple.url,
  banner: banner.url,
  music: music.url,
  arch: arch.url,
  hat: hat.url,
  shoes: shoes.url,
  conjunto: conjunto.url,
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
