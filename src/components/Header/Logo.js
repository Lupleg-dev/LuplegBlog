import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray  mr-2 md:mr-4">
            <Image src={profileImg} alt="Otofast Gaming" className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl"></span>
    </Link>
  )
}

export default Logo