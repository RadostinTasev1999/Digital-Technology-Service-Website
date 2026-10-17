import Link from "next/link"
import { ActionItems } from "@/lib/definitions"

export default function HeaderActions({
    btnPrimary,
    btnSecondary,
    Icon
}: ActionItems){
    return(
        <div id="cta-buttons" className="hidden gap-8 items-center md:flex">
            <Link href={btnPrimary.url} className="inline-flex items-center justify-center gap-1 text-slate-800 font-bold text-sm hover:text-green-600">
                
                {Icon}
                {/* svg */}

                {btnPrimary.text}
            </Link>
            <Link href={btnSecondary.url} className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold text-slate-200 bg-green-700 hover:bg-green-600">
                {btnSecondary.text}
            </Link>
        </div>
    )
}