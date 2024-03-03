"use client"
import { ArtistSection, ArtistSectionSkeleton } from ".";
import { useState, useEffect } from "react";
import type { Artist } from "@spotify/web-api-ts-sdk";

async function getArtists() {
    const response = await fetch('/api/get-artists-from-playlist/37i9dQZEVXbMDoHDwVN2tF');
    const artists = (await response.json()).artists;
    return artists as Artist[];
}

export function TrendingArtists() {
    const [loading, setLoading] = useState(true);

    const [artists, setArtist] = useState<Artist[]>([]);

    useEffect(() => {
        getArtists().then((data) => {
            setArtist(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {
                loading
                    ? <ArtistSectionSkeleton />
                    : <ArtistSection title="Artistas em alta" artists={artists} />
            }
        </>
    );
} 