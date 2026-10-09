import CheckCircle from "@/components/ui/CheckCircle"
import {ServiceDetailsItem} from '@/lib/definitions'

export default function ServiceDetailsRItem({
    text
}: ServiceDetailsItem) {

    return(
        <li className="flex items-start gap-[0.75rem] border border-slate-300 bg-blue-50 rounded-[0.75rem] p-[0.875rem] shadow-sm">
            <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                {/* svg */}
                <CheckCircle
                    size="size-6"
                />
            </span>

            <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                {text}
            </span>
        </li>
    )
}