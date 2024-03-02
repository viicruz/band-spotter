//Libraries imports


//Components imports
import { Album, Artist } from '@spotify/web-api-ts-sdk';
import { Avatar } from '../Avatar';
import { ContractButton } from '../ContractButton';

type Props = {
  artist: Artist | null,
  albums: Album[]
}



export function ArtistDetailSection(props: Props) {
  return (
    <section className="flex flex-row gap-8 px-4 py-4 bg-white shadow-lg border-2 border-black rounded-lg">
      <div className="flex flex-col gap-3 ">
        <div className='gap-2'>
          <Avatar image={props.artist?.images[0]?.url || '/defaultImage.svg'} height={256} width={256} />

        </div>
        <h1 className='text-center capitalize font-bold text-3xl text-black'>
          {props.artist?.name || ''}
        </h1>
        <div className='flex flex-wrap gap-1'>
          <ContractButton />
        </div>

      </div>
      <div className='flex flex-col'>
        <h2 className='font-bold text-black text-2xl'>
          Discografia
        </h2>
        <div className='flex flex-wrap gap-2 border-2 border-black'>
          {props.albums.map((album)=>(
            <p className='text-black' key={album.id}>{album.name}</p>
          ))}

        </div>

      </div>
    </section>
  );
}
