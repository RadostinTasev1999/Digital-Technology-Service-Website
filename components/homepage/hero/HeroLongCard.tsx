import {HeroLongCardData} from '@/lib/definitions'

export default function HeroLongCard({
    heroLongCard
}: HeroLongCardData) {
    return(
        <div className="min-w-64 w-full rounded-2xl border border-slate-300 p-5 backdrop-blur-md bg-white/30 shadow-md">
            <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>

                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
                        {heroLongCard.status}
                </span>
            </div>

            <div className="mt-4 text-sm font-bold">
                {heroLongCard.service}
            </div>

            <div className="mt-1 text-xs font-medium text-slate-500">
                {heroLongCard.serviceInfo}
            </div>
        </div>
    )
}