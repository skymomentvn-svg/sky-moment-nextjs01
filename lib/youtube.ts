// Accepts full YouTube URLs (watch, youtu.be, embed, shorts) or a bare
// 11-character video ID, and returns just the ID. Returns null if the
// string doesn't look like a YouTube URL/ID at all.
export function getYouTubeId(url: string): string | null {
  if (!url) return null;

  const patterns = [
    /youtube\.com\/watch\?v=([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
    /youtu\.be\/([\w-]{11})/,
  ];

  for (const re of patterns) {
    const match = url.match(re);
    if (match) return match[1];
  }

  if (/^[\w-]{11}$/.test(url)) return url;

  return null;
}

// hqdefault always exists; maxresdefault is higher-res but not guaranteed
// for every video, so it's opt-in.
export function youtubeThumbnail(
  url: string,
  quality: "hqdefault" | "maxresdefault" = "hqdefault"
): string | undefined {
  const id = getYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/${quality}.jpg` : undefined;
}

export function youtubeEmbedUrl(
  url: string,
  opts: { autoplay?: boolean; mute?: boolean; loop?: boolean; controls?: boolean } = {}
): string | undefined {
  const id = getYouTubeId(url);
  if (!id) return undefined;

  const params = new URLSearchParams({
    autoplay: opts.autoplay ? "1" : "0",
    mute: opts.mute ? "1" : "0",
    controls: opts.controls === false ? "0" : "1",
    playsinline: "1",
    modestbranding: "1",
    rel: "0",
    iv_load_policy: "3",
  });

  if (opts.loop) {
    params.set("loop", "1");
    // YouTube only loops a single video if a "playlist" of just that
    // video is also supplied.
    params.set("playlist", id);
  }

  // youtube-nocookie.com defers cookies until playback starts.
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}
