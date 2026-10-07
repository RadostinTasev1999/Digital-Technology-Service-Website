import Link from "next/link"
import {AppServiceCardData} from '@/lib/definitions'

export default function AppServiceCard({
    BadgeIcon,
    ArrowIcon,
    heading,
    text,
    detailsText
}: AppServiceCardData){

    

    return(
        <Link
            href="/"
            className="flex h-full flex-col rounded-2xl border border-slate-300 backdrop-blur-sm p-6 shadow-md transition duration-200 ease-in-out hover:-translate-y-2 hover:border-green-700"
        >
            <span
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-green-600 bg-slate-100 border border-slate-300"
            >
                {/* svg */}
                {BadgeIcon}
            </span>
            <h3 className="text-lg font-bold">
                {heading}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed">
                {text}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-green-600">
                {detailsText}
                {/* <Arrow /> */}
                {ArrowIcon}
            </span>
        </Link>
    )
}