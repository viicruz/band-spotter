//Libraries imports


//Components imports
import { Album, Artist } from '@spotify/web-api-ts-sdk';
import { Avatar } from '../Avatar';
import { ContractButton } from '../ContractButton';
import { DicoCard } from '../DiscoCard';

type Props = {
  artist: Artist | null,
  albums: Album[]
}


export function ArtistDetailSection(props: Props) {

  return (
    <section className="flex flex-row gap-8 px-4 py-4 bg-white shadow-lg border border-neutral-200 rounded-lg">
      <div className="flex flex-col gap-3 min-w-64">
        <div className='min-w-64 max-w-64 min-h-64 max-h-64 rounded-full overflow-hidden'>
          <Avatar image={props.artist?.images[0]?.url || '/defaultImage.svg'} height={256} width={256} />

        </div>
        <h1 className='text-center capitalize font-bold text-3xl text-black'>
          {props.artist?.name || ''}
        </h1>

        <div className='flex flex-row flex-wrap gap-2'>
          {props.artist?.genres.map((genre, index) => (
            <div key={index} className='bg-gray-200 text-gray-700 px-2 py-1 rounded-md capitalize'>{genre}</div>
          ))}
        </div>

        <div className='flex  w-full justify-center items-center'>
          <ContractButton />
        </div>

      </div>
      <div className='flex flex-col'>
        <h2 className='font-bold text-black text-2xl'>
          Discografia
        </h2>
        <ul>
          <li className='flex flex-wrap gap-2 line-clamp-2'>
            {props.albums.map((album) => (
              <DicoCard name={album.name} key={album.id} image={album.images[0].url} type={album.album_type} year={album.release_date.substring(0, 4)}></DicoCard>
            ))}
          </li>
        </ul>

      </div>
    </section>
  );
}
