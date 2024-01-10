"use client"

import Link from 'next/link'
import Button from "@/components/Button"
import { useState } from 'react'

export default function signinDetail() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
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
        </>
    )
}