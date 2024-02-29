type Props = {
    title:string
}

export function MusicalGenreTag(props: Props) {
    return (
        <div className="bg-neutral-200 px-1 py-[1px] rounded">
            <p className="text-neutral-500 font-normal text-[0.65rem] text-center capitalize">{props.title}</p>
        </div>
    )
}