export type MediaSource =
  | { kind: "local"; src: string }
  | { kind: "youtube"; url: string };

// Hero background video (homepage, full-viewport, autoplay/muted/loop).
// To use a YouTube link instead of a local file, change kind to
// "youtube" and paste the link into `url`.
export const heroMedia: MediaSource = {
  kind: "local",
  src: "/videos/hero/sky-moment-hero.mp4",
};
// export const heroMedia: MediaSource = {
//   kind: "youtube",
//   url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
// };

// Showreel (the big "Play Showreel" section + fullscreen lightbox).
export const showreelMedia: MediaSource = {
  kind: "local",
  src: "/videos/showreel/showreel.mp4",
};
// export const showreelMedia: MediaSource = {
//   kind: "youtube",
//   url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
// };
