"use client";

//Libraries Imports
import { UsersThree } from "@phosphor-icons/react";

//Components Imports
import { MusicalGenreTag } from "../MusicalGenreTag";
import { Avatar } from "../Avatar";

type Props = {
  name: string,
  image: string,
  followers?: number,
  genres: string[],
}

export function ModalArtistCard(props: Props) {
  const followers = props.followers || 0;

  return (
    <div className="rounded-lg bg-gradient-to-br from-emerald-500 via-yellow-500 to-violet-500 p-[2px] w-full">
      <div className="flex flex-row w-full gap-1 p-1 bg-white rounded-lg line-clamp-2">
        <div className="overflow-hidden rounded-full min-h-16 max-h-16 min-w-16 max-w-16">
          <Avatar
            image={props.image}
            width={64}
            height={64}
          />
        </div>

        <div className="flex flex-col items-center w-full h-16 gap-2 pl-2 border-l border-neutral-300">
          <div className="flex flex-row items-center justify-start w-full gap-3">
            <p className="text-base font-bold text-neutral-800 text-start line-clamp-1">
              {props.name}
            </p>
            <div className="flex flex-row items-center gap-1">
              <UsersThree className="text-xs text-neutral-500" />
              <p className="font-normal text-[0.65rem] text-neutral-500">{followers.toLocaleString('Pt-Br')}</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start w-full gap-1">
            {/*  {
              props.genres.map((data, index) => (
                <MusicalGenreTag key={index} title={data} />
              ))
            }*/}
          </div>
        </div>

      </div>
    </div>
  )
}