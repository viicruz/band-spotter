import { spotifyClient } from "@/lib/spotify";

export async function GET() {
  const items = await spotifyClient.search("Kanye West", ["artist"]);
  console.log("AAAAAA")
  return Response.json({
    items
  });
}
