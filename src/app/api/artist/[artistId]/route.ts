import { spotifyClient } from "@/lib/spotify";

export async function GET(
  request: Request,
  { params }: { params: { artistId: string } }
) {
  const albums = await spotifyClient.artists.albums(params.artistId);
  const artist = await spotifyClient.artists.get(params.artistId);
  return Response.json({
    artist,
    albums: albums.items,
  });
}
