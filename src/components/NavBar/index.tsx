//Compnent Imports
import { SearchBar } from '@/components/SearchBar';

export function NavBar(){
    return(
        <nav className="flex items-center flex-col pt-2 absolute w-full left-0 top-0">
        <SearchBar />
      </nav>
    );
}