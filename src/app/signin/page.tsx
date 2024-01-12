'use client'

import * as React from 'react';
import { useRouter } from 'next/router'
import { Mail, LockKeyhole, } from 'lucide-react';
import { Box, Avatar, Paper, Stack } from '@mui/material';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDataStore } from "../zustand/auth"
import ImageDialog from '@/components/image_dialog';

type Props = {}

export default function Signin({ }: Props) {
    // const router = useRouter()
    const { setData } = useDataStore()
    const refInputFile = React.useRef<HTMLInputElement | null>(null)

    const [isHovered, setIsHovered] = React.useState<boolean>(false)
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [selectedImage, setSelectedImage] = React.useState<HTMLInputElement | null>(null)
    const [openImage, setOpenImage] = React.useState<boolean>(false)
    const [values, setValues] = React.useState({
        email: ""
    })

    const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleClickOpenImage = () => {
        setOpenImage(true)
    }

    const handleCloseImage = () => {
        setOpenImage(false)
    }

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleFileUpload = () => {
        if (refInputFile.current) {
            refInputFile.current.click()
        }
    }

    const handleSubmit = () => {
        const body = {
            email: values.email,
            image: selectedImage
        }
        setData(body)
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="my-[30px] py-[30px] rounded-[20px] bg-white shadow drop-shadow-md box-border lg:w-8/12 w-12/12">

                    <div className="flex justify-center items-center">
                        <Box
                            className='w-[122px] h-[122px] p-1 flex items-center justify-center 
                            border-solid border-[1px] rounded-full border-primary-button cursor-pointer'
                            onClick={handleFileUpload}
                        >
                            {selectedImage ? (
                                <div>
                                    <Avatar
                                        sx={{ width: 122, height: 122 }}
                                        src={selectedImage}
                                        onMouseEnter={() => setIsHovered(true)}
                                    />
                                </div>
                            ) : (
                                <Avatar
                                    sx={{ width: 40, height: 40 }}
                                    src={"icon-image-plus.png"}
                                />
                            )}
                            <input
                                type='file'
                                ref={refInputFile}
                                onChange={handleFileChange}
                                accept='image/jpeg, image/png'
                                style={{ display: "none" }}
                            />
                        </Box>

                        {isHovered && (
                            <Paper
                                sx={{
                                    p: 3,
                                    border: "1px solid red",
                                    height: 250,
                                    width: 180,
                                    pl: 4
                                }}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Stack
                                    flexDirection={"column"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    minHeight={"20vh"}
                                >
                                    <div className='w-[122px] h-[122px] p-1 flex items-center justify-center border-solid
                                    boder-[1px] rounded-full border-primary-button cursor-pointer'>
                                        <Avatar
                                            src={selectedImage ? selectedImage : ""}
                                            sx={{
                                                width: 120,
                                                height: 120,
                                                position: "relative",
                                                opacity: 0.7
                                            }}
                                        />
                                    </div>

                                    <Stack
                                        flexDirection={"row"}
                                        position={"absolute"}
                                        gap={1}
                                    >
                                        <RemoveRedEyeIcon
                                            sx={{ cursor: "pointer" }}
                                            onClick={handleClickOpenImage}
                                        />
                                        <DeleteIcon
                                            sx={{ cursor: "pointer" }}
                                            onClick={() => {
                                                setIsHovered(false)
                                                setSelectedImage(null)
                                            }}
                                        />
                                    </Stack>
                                </Stack>
                            </Paper>
                        )}
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
            <ImageDialog
                selectedImage={selectedImage}
                openImage={openImage}
                handleCloseImage={handleCloseImage}
            />
        </>
    )
}