"use client"
//Libraries Imports
import Image from "next/image"
import { UsersThree } from "@phosphor-icons/react"

export function SearchCard() {
  return (
    <div className="bg-transparent rounded-lg transition-all hover:bg-gradient-to-br from-emerald-500 via-yellow-500 to-violet-500 p-[2px]">
      <button className="w-full border border-neutral-200 rounded-lg p-1 flex flex-row justify-between bg-white">

        <div className="flex flex-row items-center gap-1">
          <div className="rounded-full overflow-hidden border min-h-8 max-h-8 min-w-8 max-w-8">
            <Image
              alt="ArtistImage"
              src={'/kanyeWest.jpg'}
              className="object-cover w-full h-full"
              width={32}
              height={32}
            />
          </div>

          <div className="border-l-2 border-neutral-200 pl-1 ">
            <p className="font-bold text-base">Kayne West</p>
            <div className="flex flex-row gap-1 items-center">
              <UsersThree className="text-xs text-neutral-500" />
              <p className="font-normal text-[0.65rem] text-neutral-500">999.999.999</p>
            </div>

          </div>
        </div>
      </button>
    </div>

  )
}