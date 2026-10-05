import Image from "next/image"
import {HeroLogoCardData} from '@/lib/definitions'

export default function HeroLogoCard({
    heroLogoCard
}: HeroLogoCardData) {

    return(
        <div
            className="w-full flex items-center gap-4 rounded-2xl border border-slate-300 p-5 backdrop-blur shadow-md"
        >
            {/* Logo Image */}
            <div className="rounded-xl p-3">
                <Image
                    alt="Pamteks94"
                    className="h-10 w-auto"
                    width={200}
                    height={200}
                    src="/hardware-detect-svgrepo-com.svg"
                >

                </Image>
            </div>
            {/*  */}
            <div>
                <div className="text-xs uppercase tracking-wider text-green-600">
                    {heroLogoCard.heading}
                </div>
                <div className="text-lg font-bold">
                    {heroLogoCard.text}
                </div>
            </div>
        </div>
    )
}