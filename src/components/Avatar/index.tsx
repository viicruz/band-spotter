import Image from "next/image";
type Props = {
    image: string
}
export function Avatar(props: Props) {
    return (
        <Image
            className="object-cover w-full h-full"
            alt="Artist card"
            src={props.image}
            width={128}
            height={128}
        />
    );
}