import Link from "next/link"
import {ContactCardItemData} from '@/lib/definitions'

export default function ContactCardItem({
    label,
    text,
    Icon
}: ContactCardItemData) {

    return(
        <div className="flex min-w-0 items-start gap-3 py-2">
            <span className="mt-1 shrink-0 text-green-700">
                {Icon}
            </span>
            <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {label}
                </div>
                <Link href='/' className="mt-1 block break-words text-sm font-semibold text-slate-900">
                    {text}
                </Link>
            </div>
        </div>
    )
}