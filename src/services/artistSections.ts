import { spotifyClient } from "@/lib/spotify";
import type { Artist } from "@spotify/web-api-ts-sdk";

export async function banana(): Promise<Artist[]> {
  const items = await spotifyClient.search("Kanye West", ["artist"], "BR", 5);
  return items.artists.items;
}
