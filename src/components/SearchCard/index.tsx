"use client"
//Libraries Imports
import { UsersThree } from "@phosphor-icons/react";

//Components Imports
import { MusicalGenreTag } from "../MusicalGenreTag";
import { Avatar } from "../Avatar";

type Props = {
  name: string,
  image: string,
  followers: number,
  genres: string[],
}

export function SearchCard(props: Props) {
  return (
    <div className="bg-transparent rounded-lg transition-all hover:bg-gradient-to-br from-emerald-500 via-yellow-500 to-violet-500 p-[2px]">
      <button className="w-full border border-neutral-200 rounded-lg p-1 flex flex-row  bg-white gap-1 line-clamp-2 ">

        <div className="flex flex-row items-center gap-1">

          <div className="rounded-full overflow-hidden border min-h-8 max-h-8 min-w-8 max-w-8">
            <Avatar
              image={props.image}
              width={32}
              height={32}
            />
          </div>

          <div className="border-l-2 border-neutral-200 border-r-2 px-1 min-w-40  max-w-40">
            <p className="font-bold text-base  text-start w-full line-clamp-1">{props.name}</p>
            <div className="flex flex-row gap-1 items-center">
              <UsersThree className="text-xs text-neutral-500" />
              <p className="font-normal text-[0.65rem] text-neutral-500">{props.followers.toLocaleString('Pt-Br')}</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-1 justify-start items-start w-full h-10">
            {
              props.genres.map((data, index) => (
                <MusicalGenreTag key={index} title={data} />
              ))
            }
          </div>

        </div>

      </button>
    </div>

  )
}