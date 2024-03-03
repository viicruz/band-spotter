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

    <div className="relative flex flex-col items-center justify-between w-full bg-white min-h-svh">
      <div className='absolute top-0 left-0 w-full h-full'>
        <NavBar />
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-yellow-400 via-emerald-500 to-violet-500" />
      <div className='absolute left-0 top-0 flex justify-center items-center flex-col h-64 bg-white/20 z-[1] backdrop-blur-3xl w-full' />

      <div className='w-full z-[2] flex flex-col justify-center items-center pt-24'>
        <Image src={'/logo.svg'} width={300} height={300} alt='Apliccation Logo' />
        <h2 className='font-bold text-black'>Não perca o próximo sucesso!</h2>
      </div>

      <main className="w-full pb-12 max-w-7xl z-[2] pt-16">
        <section>
          <LastHires />
          <TrendingArtists />
          <NewTrends />
        </section>

      </main>
    </div>

  );
}