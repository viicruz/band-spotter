import Image from "next/image";
import { Album, Artist, Track } from '@spotify/web-api-ts-sdk';

type Props = {
  name: string,
  image: string,
  type: string,
  year:string,
}

export function DicoCard(props:Props) {
  return (
    <div className="flex flex-col p-1 gap-1 justify-center items-center max-w-[136px]">
      <Image className="rounded-lg" alt="Disco image" src={props.image} width={128} height={128} />
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-black font-bold text-center overflow-hidden line-clamp-1 w-full ">{props.name}</h3>
        <h3 className="text-neutral-600 font-light text-xs capitalize">{props.year} - {props.type}</h3>
      </div>
    </div>
  );
}