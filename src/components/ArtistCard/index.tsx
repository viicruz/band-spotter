"use client"

//Libraries Imports
import Image from "next/image";
import { useState, useEffect } from 'react';
import { type Artist } from '@spotify/web-api-ts-sdk';

async function GetArtists() {
  const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/8.6.1' } };

  return await fetch('/api/artists', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

}

export function ArtistCard() {
  const [artist, setArtist] = useState<Artist | null>(null);
  const artistFollowers = artist?.followers.total.toString();

  useEffect(() => {
    function handleCallArtist() {
      GetArtists().then(data => console.log(data))
    }
    handleCallArtist()
  }, [])

  return (
    <div className="bg-transparent rounded-lg transition-all hover:bg-gradient-to-br from-emerald-500 to-violet-500 p-[2px]">
      <button className="w-36  h-44 rounded-lg justify-center flex items-center flex-col shadow-lg bg-white">
        {artist && artist.images.length > 0 && (
          <Image
            className="rounded-full pt-1"
            alt="Artist card"
            src={artist.images[0].url}
            width={128}
            height={128}
          />
        )}

        <div className="w-full h-full flex pl-1 flex-col">
          <h1 className="font-bold text-black text-start text-base">{artist?.name}</h1>
          <h2 className="font-light text-xs text-neutral-500 text-start w-full">{artistFollowers} Seguidores</h2>
        </div>
      </button>
    </div>
  )
}