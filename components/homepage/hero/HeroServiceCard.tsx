import {HeroServiceCardData} from '@/lib/definitions'

export default function HeroServiceCard({
    heroServiceCard
}:HeroServiceCardData ) {

    return(
        <div
            className="min-w-0 flex-1 rounded-2xl border border-slate-300 p-5 backdrop-blur shadow-sm"
        >
            <div className="flex items-center justify-between">
                <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>


                </span>

                <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                >
                    {/* Dot */}
                    <span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
                    {heroServiceCard.status}
                </span>
            </div>
            <div className="mt-4 text-sm font-bold">
                {heroServiceCard.service}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">
                {heroServiceCard.serviceInfo}
            </div>

        </div>
    )
}