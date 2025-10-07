export type MediaKind = "image" | "video";
export type MediaTag = "all" | "event" | "wedding" | "installation";

export type MediaItem = {
  id: string;
  kind: MediaKind;
  src: string;          // image path or video url
  width: number;
  height: number;
  tags: MediaTag[];
  title?: string;
  caption?: string;
  poster?: string;      // for videos (thumbnail)
};

export const MEDIA: MediaItem[] = [
  { id: "1", kind: "image", src: "/gallery/1.jpg", width: 1600, height: 2000, tags: ["event"] },
  { id: "2", kind: "image", src: "/gallery/2.jpg", width: 1600, height: 2000, tags: ["wedding"] },
  { id: "3", kind: "video", src: "/videos/event.mp4", poster: "/gallery/event-thumb.jpg", width: 1920, height: 1080, tags: ["event"], title: "Event Clip" },
  { id: "4", kind: "image", src: "/gallery/3.jpg", width: 2000, height: 1500, tags: ["installation"] },
];
