import {HeroDescriptionText} from '@/lib/definitions'

export default function HeroDescription({
    heroDescription
}: HeroDescriptionText){
    return(
        <p className="text-[16px] mt-6 max-w-[489.44px] text-slate-500 font-semibold">
            {/* mt-6 max-w-xl text-base text-slate-600 font-semibold leading-relaxed md:text-lg */}
            {heroDescription}
        </p>
    )
}