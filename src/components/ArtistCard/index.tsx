//Libraries Imports
import { UsersThree } from "@phosphor-icons/react";
import { Avatar } from "../Avatar";
import Link from "next/link";

type Props = {
  image: string,
  name: string,
  followers: number,
  id: string
}
export function ArtistCard(props: Props) {

  return (
    <div className="bg-transparent rounded-lg transition-all hover:bg-gradient-to-br from-emerald-500 to-violet-500 p-[2px]">
      <Link href={'/artist/' + props.id} className="w-36 h-44 rounded-lg justify-center flex items-center flex-col shadow-lg bg-white p-1 border border-neutral-300">
        <div className="max-w-32 min-w-32 max-h-32 min-h-32 rounded-full overflow-hidden">
          <Avatar image={props.image} width={128} height={128} />
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <h3 className="font-bold text-neutral-800  text-base line-clamp-1">{props.name}</h3>
          <div className="flex flex-row items-center gap-1">
            <UsersThree className="text-neutral-500 text-base" />
            <span className="font-light text-[10px] text-neutral-500 w-full">{props.followers.toLocaleString('pt-BR')} </span>
          </div>
        </div>
      </Link>
    </div>
  )
}