import { ArtistCard } from '@/components/ArtistCard';
import { type Artist } from '@spotify/web-api-ts-sdk';

type Props = {
  title: string,
  artists: Artist[]
}

export function ArtistSection(props: Props) {

  return (
    <section className='justify-center flex  p-8 '>
      <div className='  bg-white shadow-lg p-4 flex-col border border-neutral-300 rounded-lg'>
        <div className='flex justify-center border-b-2 border-emerald-500'>
          <h2 className='text-emerald-500 text-bold text-3xl'>
            {props.title}
          </h2>
        </div>
        <ul>
          <li className=' flex flex-row gap-3 p-2'>
            {props.artists?.map((artist, index) => {
              return (
                <ArtistCard name={artist.name} followers={artist.followers.total} image={artist.images[0]?.url || '/defaultImage.svg'} key={index} />
              )
            })}
          </li>
        </ul>
      </div>

    </section>
  )
}