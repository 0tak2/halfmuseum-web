export type CurationItemPropsType = {
    title: string,
    description: string,
    imgSrc: string,
    imgAlt: string,
}

export default function CurationItem(props: CurationItemPropsType) {
    return (
        <div className="flex bg-neutral-200 my-8">
            <div className="flex-none w-36 mr-4">
                <img src={props.imgSrc} alt={props.imgAlt}></img>
            </div>
            <div className="flex-initial py-2">
                <div className="text-xl">{props.title}</div>
                <div className="text-base">{props.description}</div>
            </div>
        </div>
    )
}