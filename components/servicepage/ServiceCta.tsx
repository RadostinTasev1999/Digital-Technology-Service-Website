import Link from "next/link"
import ArrowIcon from "@/components/ui/ArrowIcon"
import PhoneIcon from "@/components/ui/PhoneIcon"
import {ServiceHeroCta} from '@/lib/definitions'

export default function ServiceCta({
    btnPrimary,
    btnSecondary
}: ServiceHeroCta) {

    return(
        <div id="cta-buttons" className="mt-8 flex flex-wrap gap-3">
            <Link href={btnPrimary.url} className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm text-white/90 font-bold shadow-md bg-green-600">
                {btnPrimary.text}
                <ArrowIcon
                    size="size-5"
                />
            </Link>
            <Link href={btnSecondary.url} className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white/90 shadow-md bg-green-800">

                <PhoneIcon
                    size="size-4"
                />
                {btnSecondary.text}
            </Link>
        </div>
    )
}