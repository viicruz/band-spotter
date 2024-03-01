//* Local Imports
import { contractArtistSchema, type FormData } from "@/schemas/contractArtist";

export async function POST(request: Request) {
  const data = await request.json();
  const parsedData = contractArtistSchema.parse(data);
  console.log(parsedData);

  return new Response(JSON.stringify(parsedData), { status: 200 });
}
