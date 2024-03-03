import { spotifyClient } from "@/lib/spotify";
import type { Artist } from "@spotify/web-api-ts-sdk";

export async function GET(
  request: Request,
  { params }: { params: { playlist_id: string } }
) {
  const items = await spotifyClient.playlists.getPlaylist(params.playlist_id);

  const traks = items.tracks.items.slice(0, 5).map((item) => {
    return {
      name: item.track.name,
      artist: item.track.artists[0].id,
      album: item.track.album.name,
    };
  });

  //grab their artistsIds
  const artistsIds = traks.map((track) => track.artist);

  // console.log(artistsIds);

  //grab artist details
  const artists: Artist[] = [];

  for (const artistId of artistsIds) {
    const artist = await spotifyClient.artists.get(artistId);
    artists.push(artist);
  }

  console.log(artists);
  return Response.json({
    artists
  })
}
