import Button from "@/components/Button"

type Props = {
    image: StaticImageData
    name: string
    description: string
}

export default function Package({ image, name, description }: Props) {
    return (
        <div className="bg-white shadow drop-shadow-md box-border rounded-lg pb-5">
            <img className="w-full h-[250px] object-cover rounded-lg rounded-b-none" alt={`${image}`} src={image.src} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <Button>Buy Package</Button>
        </div>
    )
}
