//Libraries Imports

//Components Imports
import { SearchBar } from '@/components/SearchBar';

//Hooks Imports

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col  items-center justify-between p-4 bg-white ">
      <div className="flex items-center flex-col">
        <SearchBar/>
        <p className="text-black text-6xl pt-5">BandSpotter</p>
        <p className="text-black text-base">Its Show Time!</p>
      </div>
    </main>
  );
}
