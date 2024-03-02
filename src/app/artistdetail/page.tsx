"use client"
//Libraries imports


//Components imports
import { NavBar } from '@/components/NavBar';
import { ArtistDetailSection } from '@/components/ArtistDetailSection';

export default function ArtistDetail() {

  return (
    <div className="flex relative min-h-svh flex-col items-center justify-between w-full bg-white">
      <div className="w-full h-32 bg-gradient-to-br from-yellow-400 via-emerald-500 to-violet-500 absolute left-0 top-0" />
      <div className='flex justify-center items-center flex-col h-64 bg-white/20 z-[1] backdrop-blur-3xl w-full '>
        <NavBar />
      </div>

      <main className="w-full min-h-svh" >

      <ArtistDetailSection/>


      </main>
    </div>



  );
}
