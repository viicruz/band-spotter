import { spotifyClient } from "@/lib/spotify";

export async function GET() {
  const items = await spotifyClient.search("Kanye West", ["artist"], "BR", 5);
  return Response.json({
    artists: items.artists,
  });
}

