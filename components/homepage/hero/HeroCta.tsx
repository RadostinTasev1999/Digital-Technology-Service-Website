import Link from "next/link"
import {HeroCtaText} from '@/lib/definitions'

export default function HeroCtaButtons({
    heroBtnPrimary,
    heroBtnSecondary
}: HeroCtaText) {
    return(
        <div
            className="mt-8 flex flex-wrap gap-3"
        >
            <Link href={heroBtnPrimary.url} className="inline-flex gap-1 items-center rounded-xl px-4 py-3 bg-linear-to-r from-green-600 to-green-700 text-white/90 text-base font-semibold ">
                {heroBtnPrimary.heroBtn1}
                {/* svg */}
                {<heroBtnPrimary.icon />}

            </Link>
            <Link href={heroBtnSecondary.url} className="inline-flex gap-1 rounded-xl items-center px-4 py-3 text-green-700 text-base font-semibold backdrop-blur-md border border-green-700 bg-white/10 hover:bg-green-700/90 hover:text-white/90">
                {<heroBtnSecondary.icon />}
                {/* svg */}
                {heroBtnSecondary.heroBtn2}

                
            </Link>
        </div>
    )
}