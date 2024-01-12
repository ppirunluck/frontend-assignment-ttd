import * as React from "react"
import Button from "@/components/Button"
import Link from 'next/link'
import { useDataStore } from "@/zustand/auth"
import { useRouter } from "next/router"

const pages = ["Home"]

export default function PageHeader() {
    // const router = useRouter()
    const { email, image } = useDataStore()

    const [ anchorElNav, setAnchorElNav ] = React.useState<null | HTMLElement>(null)

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="h-[70px] w-auto flex-shrink-0 flex justify-around items-center shadow drop-shadow-3xl">
            <Link href="/"><img src={`Logo.png`} alt="logo" className="w-[50px] gap-0 object-contain" /></Link>
            <Link href="/"><p className="font-semibold">HOME</p></Link>
            <Link href="/signin"><Button>Sign in</Button></Link>

            {/* signinDetail dropdown */}
            <div className="flex">
                <div className="w-12 h-12 border border-primary-button rounded-full mr-2">
                    {/*img*/}
                </div>

                <button onClick={() => setIsOpen((prev) => !prev)}>
                    <img src={`polygon.png`} className="object-contain" />
                </button>

                {isOpen &&
                    <div className='w-40 bg-white shadow z-30 rounded-md absolute top-[80px] right-[80px] p-3'>
                        <div className='text-center flex flex-col justify-center items-center'>
                            <div className="w-8 h-8 border border-primary-button rounded-full mr-2">
                                {/*img*/}
                            </div>
                            <span className='text-sm pt-1 pb-3'>fdgdgdgdgdg</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-md font-bold'>Profile</span>
                            <span className='text-md font-bold'>Logout</span>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}