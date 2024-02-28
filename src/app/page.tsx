"use client"

//Libraries Imports
import Image from 'next/image';

//Components Imports
import { SearchBar } from '@/components/SearchBar';
import { ArtistSection } from '@/components/ArtistSection';

const sectionData = [
  { id: 1, title: 'Últimos Artistas Contratados' },
  { id: 2, title: 'Artistas em Destaque' },
  { id: 3, title: 'Novas Tendências' }
];

export default function Home() {
  return (
    <div className='w-full h'>
      <div></div>
      <main className="w-full min-h-screen bg-white">
        <nav className="flex items-center flex-col bg-gradient-to-r from-yellow-300 via-teal-500 to-violet-500 w-full pt-2">
          <SearchBar />
          <Image src={'/logo.svg'} width={300} height={300} alt='Apliccation Logo' />
          <p className='text-black font-bold'>Não perca o próximo sucesso!</p>
        </nav>
        {
          sectionData.map((section, index) => (
            <ArtistSection key={section.id} title={section.title} />
          ))
        }
      </main>
    </div>

  );
}
