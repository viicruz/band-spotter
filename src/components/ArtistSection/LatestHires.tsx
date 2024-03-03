"use client"
import { ArtistSection, ArtistSectionSkeleton } from ".";
import { useState, useEffect } from "react";
import type { Artist } from "@spotify/web-api-ts-sdk";

async function getArtists() {
  const response = await fetch('/api/last-assigns');
  const artists = (await response.json());
  return artists as Artist[];
}

export function LastHires() {
  const [artists, setArtist] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtists().then((data) => setArtist(data));
    setLoading(false);
  }, [])
  return (
    <>
      {
        loading
          ? <ArtistSectionSkeleton />
          : <ArtistSection title="Últimos contratados" artists={artists} />
      }
    </>
  );
} 