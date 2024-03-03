"use client"
//Libraries imports
import { Album, type Artist } from '@spotify/web-api-ts-sdk';
import { useState, useEffect } from 'react';

//Components imports
import { NavBar } from '@/components/NavBar';
import { ArtistDetailSection, ArtistDetailSectionSkeleton } from '@/components/ArtistDetailSection';

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
  const [loading, setLoading] = useState(true);

  const [artist, setArtist] = useState<Artist | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    getArtistbyId(params.artistId).then(data => {
      setArtist(data.artist);
      setAlbums(data.albums);
      setLoading(false);
    })
  }, [params.artistId])

  return (
    <div className="relative flex flex-col items-center w-full bg-white min-h-svh">
      <div className='absolute top-0 left-0 w-full h-full'>
        <NavBar />
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-yellow-400 via-emerald-500 to-violet-500" />
      <div className='absolute left-0 top-0 flex justify-center items-center flex-col h-64 bg-white/20 z-[1] backdrop-blur-3xl w-full' />

      <main className="w-full pb-12 max-w-7xl z-[2] pt-32" >
        {
          loading
            ? <ArtistDetailSectionSkeleton />
            : <ArtistDetailSection artist={artist} albums={albums} />
        }
      </main>
    </div>
  );
}