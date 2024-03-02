import { spotifyClient } from "@/lib/spotify";

export async function GET() {
  try {
    const items = await spotifyClient.search("Kanye West", ["artist"], "BR", 5);
    return Response.json({
      artists: items.artists,
    });
  } catch (error) {
    return Response.json({ artists: [] });
  }
}
