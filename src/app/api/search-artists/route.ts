import { spotifyClient } from "@/lib/spotify";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("search");

  if (query === "") {
    return Response.json({
      artists: [],
    });
  }

  const items = await spotifyClient.search(query || "", ["artist"], "BR", 5);
  return Response.json({
    artists: items.artists.items,
  });
}
