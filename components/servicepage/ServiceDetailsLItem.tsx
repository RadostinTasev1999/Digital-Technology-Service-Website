import CheckCircle from "@/components/ui/CheckCircle"
import {ServiceDetailsItem} from '@/lib/definitions'

export default function ServiceDetailsLItem({
    text
}: ServiceDetailsItem) {
    return (
        <li className="flex items-start gap-[0.75rem] border border-slate-300 rounded-[0.75rem] p-[0.875rem] shadow-sm bg-blue-50">
            <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                {/* Checkmark svg */}
                <CheckCircle
                    size="size-6"
                />
            </span>

            {/* Text */}
            <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                {text}
            </span>
        </li>
    )
}