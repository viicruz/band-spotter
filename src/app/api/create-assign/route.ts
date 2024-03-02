//* Local Imports
import { contractArtistSchema, type FormData } from "@/schemas/contractArtist";

import { p } from "@/db";


export async function POST(request: Request) {
  const data = await request.json();
  const parsedData = contractArtistSchema.parse(data);
  const assign = await p.assign.create({
    data:{
      artist_id: parsedData.artistId
    }
  })

  return new Response(JSON.stringify(assign), { status: 200 });
}
