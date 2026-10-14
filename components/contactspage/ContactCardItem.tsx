import Link from "next/link"
import {ContactCardItemData} from '@/lib/definitions'

export default function ContactCardItem({
    label,
    text,
    Icon
}: ContactCardItemData) {

    return(
        <div className="rounded-2xl border border-slate-300 p-6 shadow-md backdrop-blur-md bg-white/30">
            {/* Icon Container */}
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-green-800 text-green-800 bg-slate-100">
                {/* SVG icon */}
                {Icon}
            </span>
            {/* Card Label */}
            <div className='mt-4 text-xs font-bold uppercase tracking-wide'>
                {label}
            </div>
            {/* Contact information */}
            <Link href='/' className='mt-1 block text-md font-bold text-green-900'>
                {text}
            </Link>
        </div>
    )
}