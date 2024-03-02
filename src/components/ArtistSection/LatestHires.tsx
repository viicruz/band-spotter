"use client"
import { ArtistSection } from ".";
import { useState, useEffect } from "react";
import type { Artist } from "@spotify/web-api-ts-sdk";

async function getArtists() {
    const response = await fetch('/api/last-assigns');
    const artists = (await response.json());
    return artists as Artist[];
}

export function LastHires() {
    const [artists, setArtist] = useState<Artist[]>([]);
    useEffect(() => {
        getArtists().then((data) => setArtist(data) );
    }, [])
    return (
        <ArtistSection title="Últimos contradados" artists={artists} />
    );
} 