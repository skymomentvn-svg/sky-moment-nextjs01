export type MediaSource =
  | { kind: "local"; src: string }
  | { kind: "youtube"; url: string };

// Hero background video (homepage, full-viewport, autoplay/muted/loop).
// Using "FPV Paramotor Flight Over Nha Trang" — cinematic and not tied
// to a dated event, so it holds up as an evergreen hero loop.
export const heroMedia: MediaSource = {
  kind: "youtube",
  url: "https://youtu.be/EoPnQxhHdA4",
};
// export const heroMedia: MediaSource = {
//   kind: "local",
//   src: "/videos/hero/sky-moment-hero.mp4",
// };

// Showreel (the big "Play Showreel" section + fullscreen lightbox).
// Using the channel's own recap reel — it's built to be a highlight/showreel.
export const showreelMedia: MediaSource = {
  kind: "youtube",
  url: "https://youtu.be/nS6hCxPJtbQ",
};
// export const showreelMedia: MediaSource = {
//   kind: "local",
//   src: "/videos/showreel/showreel.mp4",
// };
