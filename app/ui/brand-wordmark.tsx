"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type BrandWordmarkProps = {
  compact?: boolean;
  href?: string;
  className?: string;
};

/** Uses the approved local asset when available, with a text-only fallback for setup. */
export function BrandWordmark({ compact = false, href = "/", className = "" }: BrandWordmarkProps) {
  const [assetUnavailable, setAssetUnavailable] = useState(false);

  return <Link className={`brand ${compact ? "brand--compact" : ""} ${className}`} href={href} aria-label="Mosaica ana sayfa">
    {assetUnavailable ? <span className="brand-word">MOSAICA</span> : <Image
  className="brand-image"
  src="/brand/mosaica-wordmark.png"
  alt=""
  width={1675}
  height={569}
  priority
  onError={() => setAssetUnavailable(true)}
/>}
  </Link>;
}
