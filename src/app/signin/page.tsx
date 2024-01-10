'use client'

import { useState, useEffect } from 'react';
import { Mail, LockKeyhole, ImagePlus, Eye } from 'lucide-react';
import { useRouter } from 'next/router'

type Props = {
    files: File
    previews: File
}

type FormValues = {
    file: StaticImageData
    email: string
}

export default function Signin() {

    /* image */
    <img src='../../public/icon-image-plus.png'></img>

    const [files, setFiles] = useState("");
    const [previews, setPreviews] = useState("");

    useEffect(() => {
        if (!files) return

        let tmp = []
        for (let i = 0; i < files.length; i++) {
            tmp.push(URL.createObjectURL(files[i]))
        }
        const objectUrls = tmp
        setPreviews(objectUrls)

        for (let i = 0; i < objectUrls.length; i++) {
            return () => {
                URL.revokeObjectURL(objectUrls[i])
            }
        }
    }, [files])

    return (
        <>
            <form>
                <div className="flex justify-center items-center">
                    <div className="my-[30px] py-[30px] rounded-[20px] bg-white shadow drop-shadow-md box-border lg:w-8/12 w-12/12">

                        <div className="flex justify-center items-center">
                            <div className="w-36 h-36 border border-primary-button rounded-full flex justify-center items-center">
                                <label>
                                    {previews && previews.map((pic) => {
                                        return <img src={pic}
                                            className="absolute w-36 h-36 border border-primary-button rounded-full 
                                        flex justify-center items-center top-[130px] left-[687px]"
                                        />
                                    })}
                                    <img src={`icon-image-plus.png`} className="w-[30px]" />
                                    <input type='file'
                                        accept='image/jpg, image/png image/jpeg'
                                        style={{ display: "none" }}
                                        key={previews}
                                        multiple
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                setFiles(e.target.files)
                                            }
                                        }}
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Row1 */}
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 px-12 pt-10">
                            {/* Item */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="string"
                                        name="email"
                                        id="email"
                                        className="block rounded-md border-0 py-1.5 pl-12 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter your Email"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <div className="absolute pointer-events-none inset-y-0 left-0 flex justify-between items-center pl-3">
                                        <LockKeyhole size={18} className='z-0' />
                                        {/* <Eye size={18} /> */}
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="block rounded-md border-0 py-1.5 pl-12 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="re-password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockKeyhole size={18} />
                                    </div>
                                    <input
                                        type="password"
                                        name="re-password"
                                        id="re-password"
                                        className="block rounded-md border-0 py-1.5 pl-12 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}
                        </div>
                        {/*Row1 Close */}

                        <div className="flex justify-center py-7">
                            <div className="relative border-t w-11/12"></div>
                        </div>

                        <div className='px-12 pb-3'>Information</div>

                        {/* Row2 */}
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 px-12'>
                            {/* Item */}
                            <div>
                                <label htmlFor="company-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Company Name
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <input
                                        type="text"
                                        name="company-name"
                                        id="company-name"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter Company Name"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="tax-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Tax ID
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <input
                                        type="text"
                                        name="tax-id"
                                        id="tax-id"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter Tax ID"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Full Name
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <input
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter Full Name"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}
                        </div>
                        {/*Row2 Close */}

                        {/* Row3 */}
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 px-12 pt-7'>
                            {/* Item */}
                            <div>
                                <label htmlFor="company-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <select
                                        name="country"
                                        id="country"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                    >
                                        <option>Thailand</option>
                                    </select>
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone Number
                                </label>
                                <div className="flex gap-2 mt-2 rounded-md">
                                    <select
                                        name="country-code"
                                        id="country-code"
                                        className="block rounded-md border-0 py-1.5 pl-2 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-4/12"
                                    >
                                        <option>+66</option>
                                    </select>
                                    <input
                                        type="number"
                                        name="phone-number"
                                        id="phone-number"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter Phone number"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                                    Website
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <input
                                        type="text"
                                        name="website"
                                        id="website"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter website"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}
                        </div>
                        {/*Row3 Close */}

                        {/* Row4 */}
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 px-12 pt-7 grid-flow-row-dense'>
                            {/* Item */}
                            <div className='row-span-2'>
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Address
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <textarea
                                        name="address"
                                        id="address"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full resize-none min-h-[125px]"
                                        placeholder="Enter address"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                                    State/Province
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <select
                                        name="state"
                                        id="state"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                    >
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                                    Sub-District
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <select
                                        name="sub-district"
                                        id="sub-district"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                    >
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                                    City/District
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <select
                                        name="city"
                                        id="city"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                    >
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            {/* Item Close */}

                            {/* Item */}
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                                    Zip Code
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <input
                                        type="text"
                                        name="zip-code"
                                        id="zip-code"
                                        className="block rounded-md border-0 py-1.5 pl-4 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 box-border w-full"
                                        placeholder="Enter Zip Code"
                                    />
                                </div>
                            </div>
                            {/* Item Close */}

                        </div>
                        {/*Row4 Close */}

                        <div className='flex justify-between pl-20 pr-20 mt-10'>
                            <button className="rounded-full bg-cencel-button text-white font-semibold px-8 py-2 drop-shadow-3xl w-auto">
                                Cencel
                            </button>
                            <button type='submit' className="rounded-full bg-submit-button text-white font-semibold px-8 py-2 drop-shadow-3xl w-auto">
                                Submit
                            </button>
                        </div>

                    </div>
                </div >
            </form>
        </>
    )
}