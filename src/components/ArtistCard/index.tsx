"use client"

//Libraries Imports
import Image from "next/image";
import { useState, useEffect } from 'react';
import { SpotifyApi, type Artist } from '@spotify/web-api-ts-sdk';

import {env} from '@/env/index'


const sdk = SpotifyApi.withClientCredentials(env.SPOTIFY_CLIENT_ID, env.SPOTIFY_SECRET_ID);

export function ArtistCard() {
  const [artist, setArtist] = useState<Artist | null>(null);
  const artistFollowers = artist?.followers.total.toString();


  useEffect(() => {
    const fetchData = async () => {

      try {
        const items = await sdk.search("Kanye West", ["artist"]);
        if (items.artists.items.length > 0)
          setArtist(items.artists.items[0])


          console.log(artist?.followers)
      } catch {

      }
    };

    fetchData();
  }, []);

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