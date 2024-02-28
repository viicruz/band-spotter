import { ArtistCard } from '@/components/ArtistCard';
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { type Artist } from '@spotify/web-api-ts-sdk';

type Props = {
  title: string,
}

async function GetArtists() {
  const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/8.6.1' } };

  return await fetch('/api/artists', options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export function ArtistSection(props: Props) {

  const [artists, setArtists] = useState<Artist[] | null>(null)

  useEffect(() => {
    GetArtists().then(data => setArtists(data.artists.items))
  }, [])
  return (
    <section className='justify-center flex bg-gradient-to-b from-white to-white/70 p-8'>
      <div className='flex flex-col'>
        <div className=' bg-white shadow-lg p-4 flex-col'>
          <div className='flex justify-center border-b-2 border-emerald-500'>
            <p className='text-emerald-500 text-bold text-3xl'>
              {props.title}
            </p>
          </div>
          <ul>
            <li className=' flex flex-row gap-3 p-2'>
              {artists?.map((artist, index) => {
                console.log(artist)
                return (
                  <ArtistCard name={artist.name} followers={artist.followers.total} image={artist.images[0]?.url || ''} key={index} />
                )
              })}
            </li>
          </ul>
        </div>
      </div>



    </section>
  )
}