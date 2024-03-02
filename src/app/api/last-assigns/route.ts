//* Local Imports
import { spotifyClient } from "@/lib/spotify";
import type { Artist } from "@spotify/web-api-ts-sdk";

import { p } from "@/db";

export async function GET() {
 try{
    const artistsIds = await p.assign.findMany({
        take: 5,
        orderBy: {
          created_at: "desc",
        },
      });
    
      const artists: Artist[] = [];
    
      for (let index = 0; index < artistsIds.length; index++) {
        const artist = await spotifyClient.artists.get(artistsIds[index].artist_id);
        artists.push(artist);
      }
    
      return new Response(JSON.stringify(artists), { status: 200 });
 } catch (error) {
    console.error(error);
    return Response.json([]);
  }
}
