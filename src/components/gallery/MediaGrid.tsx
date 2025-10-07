"use client";

import React, { useMemo, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import type { Slide } from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";

import type { MediaItem } from "@/data/media";

/**
 * MediaGrid
 * - Renders a clean rows-based grid via react-photo-album
 * - Opens a YARL lightbox on click
 * - Supports both images and videos (mp4) via the Video plugin
 */
type Props = {
  items: MediaItem[];
};

export default function MediaGrid({ items }: Props) {
  const [index, setIndex] = useState<number>(-1);

  /**
   * Photos for the grid (PhotoAlbum)
   * For videos, we show the `poster` image in the grid.
   * If you don't have a poster yet, consider adding one; otherwise a placeholder is used.
   */
  const photos = useMemo(
    () =>
      items.map((i) => ({
        src:
          i.kind === "image"
            ? i.src
            : i.poster ?? "/gallery/video-placeholder.jpg", // <-- optional fallback
        width: i.width,
        height: i.height,
        alt: i.title ?? "work",
      })),
    [items]
  );

  /**
   * Slides for the lightbox (YARL)
   * - Image slides: DO NOT set type (defaults to image)
   * - Video slides: type: "video", sources: [{ src, type }]
   */
  const slides: Slide[] = useMemo(
    () =>
      items.map((i) =>
        i.kind === "image"
          ? {
              src: i.src,
              alt: i.title,
              width: i.width,
              height: i.height,
              description: i.caption,
            }
          : {
              type: "video",
              sources: [{ src: i.src, type: "video/mp4" }],
              poster: i.poster,
              width: i.width,
              height: i.height,
              description: i.caption,
              // `controls` is allowed by the plugin typings
              controls: true,
            }
      ),
    [items]
  );

  return (
    <>
      <PhotoAlbum
        layout="rows"
        targetRowHeight={380}
        spacing={16}
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Video, Captions]}
        carousel={{ finite: false }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
