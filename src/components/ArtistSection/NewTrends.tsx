"use client"
import { ArtistSection } from ".";
import { useState, useEffect } from "react";
import type { Artist } from "@spotify/web-api-ts-sdk";

async function getArtists() {
    const response = await fetch('/api/artists');
    const artists = (await response.json()).artists.items;
    return artists as Artist[];
}

export function NewTrends() {
    const [artists, setArtist] = useState<Artist[]>([]);
    useEffect(() => {
        getArtists().then((data) => setArtist(data) );
    }, [])
    return (
        <ArtistSection title="Últimas tendências" artists={artists} />
    );
} 