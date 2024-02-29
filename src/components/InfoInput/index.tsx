import { User, Money, Calendar, MapPin } from "@phosphor-icons/react"

type Props={
  
}

export function InfoInput(props:Props) {
  return (
    <div className=" rounded-lg gap-3 p-3 border-2 border-black text-blackbg-red-800 flex flex-row">
      <User className="text-xl text-neutral-600 " />
      <input className=" outline-none w-full h-full text-black px-2" type="text" placeholder="Nome do contratante" />
    </div>
  );

}