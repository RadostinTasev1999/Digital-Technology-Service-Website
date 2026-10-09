import ChevronRight from '@/components/ui/ChevronRight'

import {ServiceFaqItems} from '@/lib/definitions'

export default function ServiceFaqItem({
    question,
    answer
}: ServiceFaqItems) {

    return(
        <details className="group rounded-xl border p-5 shadow-md border border-slate-300 bg-blue-50">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-slate-900">
                <span>
                    {question}
                </span>
                <ChevronRight
                    size="mt-1 size-4 shrink-0 transition-transform group-open:rotate-90"
                />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {answer}
            </p>
        </details>
    )
}