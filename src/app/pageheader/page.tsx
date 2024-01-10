import Link from 'next/link'
import SigninDetail from './signinDetail'

export default function PageHeader() {
    return (
        <div className="h-[70px] w-auto flex-shrink-0 flex justify-around items-center shadow drop-shadow-3xl">
            <Link href="/"><img src={`Logo.png`} alt="logo" className="w-[50px] gap-0 object-contain" /></Link>
            <Link href="/"><p className="font-semibold">HOME</p></Link>
            <SigninDetail />
        </div>
    )
}