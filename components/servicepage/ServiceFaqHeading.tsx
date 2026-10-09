import { FaqHeading } from '@/lib/definitions'

export default function ServiceFaqHeading({
    label,
    heading
}: FaqHeading) {

    return(
        <div className="max-w-3xl mb-10">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                {label}
            </div>

            <h2 className="text-balance text-3xl font-black md:text-4xl">
                {heading}
            </h2>
        </div>
    )
}