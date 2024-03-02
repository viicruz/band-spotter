"use client"
//Libraries imports
import { Album, type Artist } from '@spotify/web-api-ts-sdk';
import { useState, useEffect } from 'react';

//Components imports
import { NavBar } from '@/components/NavBar';
import { ArtistDetailSection } from '@/components/ArtistDetailSection';

async function getArtistbyId(id: string) {
  const response = await fetch('/api/artist/' + id);
  const data = await response.json();
  console.log(data)
  return data as {
    artist: Artist,
    albums: Album[]
  }
}

export default function ArtistDetail({ params }: { params: { artistId: string } }) {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    getArtistbyId(params.artistId).then(data => {
      setArtist(data.artist)
      setAlbums(data.albums)
    })
  }, [params.artistId])

  return (
    <div className="flex relative min-h-svh flex-col items-center  w-full bg-white">
      <div className="w-full h-32 bg-gradient-to-br from-yellow-400 via-emerald-500 to-violet-500 absolute left-0 top-0" />
      <div className='flex justify-center items-center flex-col h-64 bg-white/20 z-[1] backdrop-blur-3xl w-full '>
        <NavBar />
      </div>

      <main className="w-full max-w-7xl" >
        <ArtistDetailSection albums={albums} artist={artist} />
      </main>
    </div>



  );
}
