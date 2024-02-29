"use client"
//Libraries Imports
import Image from 'next/image';

//Components Imports
import { ArtistSection } from '@/components/ArtistSection';
import { NavBar } from '@/components/NavBar';
import { TrendingArtists } from '@/components/ArtistSection/TrendingArtists'

const sectionData = [
  { id: 1, title: 'Últimos Artistas Contratados' },
  { id: 2, title: 'Artistas em Destaque' },
  { id: 3, title: 'Novas Tendências' }
];

export default function Home() {
  return (
    <div className='w-full relative bg-white'>
      <div className='h-32 bg-gradient-to-r from-yellow-300 via-teal-500 to-violet-500 w-full' />
      <NavBar />
      <div className='w-full flex flex-col justify-center items-center'>
        <Image src={'/logo.svg'} width={300} height={300} alt='Apliccation Logo' />
        <p className='text-black font-bold'>Não perca o próximo sucesso!</p>
      </div>

      <main className="w-full min-h-screen bg-white">
          <TrendingArtists />
      </main>
    </div>

  );
}
