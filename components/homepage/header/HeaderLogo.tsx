import Link from "next/link"
import Image from "next/image"

export default function HeaderLogo() {

    return (
        <Link href="/">
            <Image 
                src="/hardware-detect-svgrepo-com.svg"
                width={40}
                height={40}
                alt="Header logo"
            />
        </Link>
    )
}