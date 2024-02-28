//Libraries Imports
import Image from "next/image";
import { UsersThree } from "@phosphor-icons/react";

type Props = {
  image: string,
  name: string,
  followers: number
}
export function ArtistCard(props: Props) {

  return (
    <div className="bg-transparent rounded-lg transition-all hover:bg-gradient-to-br from-emerald-500 to-violet-500 p-[2px]">
      <button className="w-36 h-44 rounded-lg justify-center flex items-center flex-col shadow-lg bg-white p-1">
        <div className="rounded-full overflow-hidden min-h-32 max-h-32 h-32 min-w-32 max-w-32 w-32 bg-slate-700 ">
          <Image
            className="object-cover w-full h-full"
            alt="Artist card"
            src={props.image}
            width={128}
            height={128}
          />
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="font-bold text-neutral-800  text-base line-clamp-1">{props.name}</h1>
          <div className="flex flex-row items-center gap-1">
            <UsersThree className="text-neutral-500 text-base" />
            <h2 className="font-light text-[10px] text-neutral-500 w-full">{props.followers.toLocaleString('pt-BR')} </h2>
          </div>
        </div>
      </button>
    </div>
  )
}