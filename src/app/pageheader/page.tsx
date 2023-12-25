import Button from "@/components/Button"

export default function PageHeader() {
    return (
        <div className="h-[70px] w-auto flex-shrink-0 flex justify-around items-center">
            <img src={`Logo.png`} alt="logo" className="w-[50px] gap-0 object-contain" />
            <p className="font-semibold">HOME</p>
            <Button>Sign in</Button>
        </div>
    )
}