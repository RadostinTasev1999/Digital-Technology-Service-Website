import Link from "next/link"
import { ActionItems } from "@/lib/definitions"

export default function MobileActionButtons({
    btnPrimary,
    btnSecondary,
    Icon,
    onMobileClose
}: ActionItems) {
    return (
        <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
            {/* Phone number */}
            <Link href={btnPrimary.url} onClick={onMobileClose} className="flex items-center justify-center gap-2 rounded-lg border border-slate-400 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-green-600">
                {Icon}
                {btnPrimary.text}
            </Link>
            {/* Action Button */}
            <Link
                href={btnSecondary.url}
                onClick={onMobileClose}
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2.5 text-sm font-bold text-white"
            >
                {btnSecondary.text}
            </Link>
        </div>
    )
}