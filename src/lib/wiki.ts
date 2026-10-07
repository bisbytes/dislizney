/**
 * Pulls a short, live summary of an attraction from Wikipedia's public REST API,
 * so the app always shows the latest community-checked information alongside
 * our hand-written, sourced facts.
 */
export type WikiSummary = { extract: string; url: string; thumbnail?: string };

const cache = new Map<string, WikiSummary | null>();

export async function fetchWikiSummary(title: string): Promise<WikiSummary | null> {
  if (cache.has(title)) return cache.get(title) ?? null;
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`, {
      headers: { accept: 'application/json' },
    });
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    const summary: WikiSummary = {
      extract: json.extract ?? '',
      url: json.content_urls?.mobile?.page ?? `https://en.wikipedia.org/wiki/${title}`,
      thumbnail: json.thumbnail?.source,
    };
    cache.set(title, summary);
    return summary;
  } catch {
    cache.set(title, null);
    return null;
  }
}
