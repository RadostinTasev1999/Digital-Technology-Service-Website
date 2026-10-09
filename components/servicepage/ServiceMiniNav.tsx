import Link from "next/link"
import ChevronRight from "@/components/ui/ChevronRight"

import {HeroMiniNavData} from '@/lib/definitions'

export default function ServiceMiniNav({
    navLinks,
    navText
}: HeroMiniNavData) {
    return(
        <nav
            className="mb-5 flex items-center gap-1.5 text-xs"
        >
            <Link href={navLinks.homeUrl} className="hover:text-green-700">{navText.home}</Link>
            <ChevronRight
                size="size-3"
            />
            <Link href={navLinks.serviceUrl} className="hover:text-green-700">{navText.service}</Link>
            <ChevronRight
                size="size-3"
            />
            <Link href={navLinks.serviceTypeUrl} className="hover:text-green-700">{navText.serviceType}</Link>
        </nav>
    )
}