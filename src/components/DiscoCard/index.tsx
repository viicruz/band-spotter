import Image from "next/image";

type Props = {
  name: string,
  image: string,
  type: string,
  year: string,
}

export function DicoCard(props: Props) {
  return (
    <div className="flex flex-col p-1 gap-1 justify-center items-center max-w-[204px]">
      <Image className="rounded-lg shadow-lg" alt="Disco image" src={props.image} width={196} height={196} />
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="w-full overflow-hidden font-bold text-center text-black line-clamp-1 ">{props.name}</h3>
        <span className="text-xs font-light capitalize text-neutral-600">{props.year} - {props.type}</span>
      </div>
    </div>
  );
}