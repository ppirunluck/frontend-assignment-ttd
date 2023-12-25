type Props = {
    image: string
    name: string
    description: string
}

export default function Package({ image, name, description }: Props) {
    return (
        <div>
            {image}
            {name}
            {description}
        </div>
    )
}
