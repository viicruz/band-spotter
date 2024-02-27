//Libraries Imports
import Image from 'next/image';
//Components Imports
import { SearchBar } from '@/components/SearchBar';
import { ArtistCard } from '@/components/ArtistCard';

//Hooks Imports

export default function Home() {
  const artistData = [1, 2, 3, 4, 5];

  return (
    <div className='w-full h'>
      <div></div>
      <main className="w-full min-h-screen bg-white">
        <nav className="flex items-center flex-col bg-gradient-to-r from-yellow-300 via-teal-500 to-violet-500 w-full pt-2">
          <SearchBar />
          <Image src={'/logo.svg'} width={300} height={300} alt='Apliccation Logo' />
          <p className='text-black font-bold'>Não perca o próximo sucesso!</p>
        </nav>

        <section className='justify-center flex bg-gradient-to-b from-white to-white/70'>
          <div className='flex flex-col gap-8'>
          <div className=' bg-white shadow-lg p-4 flex-col'>
            <div className='flex justify-center border-b-2 border-emerald-500'>
              <p className='text-emerald-500 text-bold text-3xl'>
                Últimos Artistas Contratados
              </p>
            </div>

            <div className=' flex flex-row gap-3'>
              {artistData.map((artist, index) => (
                <ArtistCard key={index} />
              ))}

            </div>

            
          </div>

          <div className=' bg-white shadow-lg p-4'>
            <div className='flex justify-center border-b-2 border-emerald-500'>
              <p className='text-emerald-500 text-bold text-3xl'>
                Top artistas do momento!
              </p>
            </div>

            <div className=' flex flex-row gap-3'>
              {artistData.map((artist, index) => (
                <ArtistCard key={index} />
              ))}

            </div>

            
          </div>

          <div className=' bg-white shadow-lg p-4'>
            <div className='flex justify-center border-b-2 border-emerald-500'>
              <p className='text-emerald-500 text-bold text-3xl'>
                Novas tendências!
              </p>
            </div>

            <div className=' flex flex-row gap-3'>
              {artistData.map((artist, index) => (
                <ArtistCard key={index} />
              ))}

            </div>

            
          </div>
          </div>

          

        </section>

      </main>
    </div>

  );
}
