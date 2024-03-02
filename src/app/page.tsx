"use client"
//Libraries Imports
import Image from 'next/image';

//Components Imports
import { NavBar } from '@/components/NavBar';
import { TrendingArtists } from '@/components/ArtistSection/TrendingArtists'
import { LastHires } from '@/components/ArtistSection/LatestHires';
import { NewTrends } from '@/components/ArtistSection/NewTrends';

export default function Home() {
  return (

    <div className="flex relative min-h-svh flex-col items-center justify-between w-full bg-white">
      <div className="w-full h-32 bg-gradient-to-br from-yellow-400 via-emerald-500 to-violet-500 absolute left-0 top-0" />
      <div className='flex justify-center items-center flex-col h-64 bg-white/20 z-[1] backdrop-blur-3xl w-full '>
        <NavBar />
        <Image src={'/logo.svg'} width={300} height={300} alt='Apliccation Logo' />
        <h2 className='text-black font-bold'>Não perca o próximo sucesso!</h2>
      </div>

      <main className="w-full min-h-svh" >
        <section>
          <LastHires />
          <TrendingArtists />
          <NewTrends />
        </section>

      </main>
    </div>

  );
}
