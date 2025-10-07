"use client";

import React, { useMemo, useState } from "react";
import FilterBar from "@/components/gallery/FilterBar";
import MediaGrid from "@/components/gallery/MediaGrid";
import { MEDIA, type MediaTag } from "@/data/media";

export default function GalleryPage() {
  const [tag, setTag] = useState<MediaTag>("all");

  const filtered = useMemo(
    () => (tag === "all" ? MEDIA : MEDIA.filter((m) => m.tags.includes(tag))),
    [tag]
  );

  return (
    <main className="px-5 md:px-8 py-12 md:py-16 space-y-10">
      <FilterBar value={tag} onChange={setTag} />
      <div className="container-xl">
        <MediaGrid items={filtered} />
      </div>
    </main>
  );
}
