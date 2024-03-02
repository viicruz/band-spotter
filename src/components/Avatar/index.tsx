import Image from "next/image";
type Props = {
    image: string,
    width:number,
    height:number
}
export function Avatar(props: Props) {
    return (
        <Image
            className="object-cover w-full h-full"
            alt="Artist card"
            src={props.image}
            width={ props.width}
            height={props.height}
        />
    );
}