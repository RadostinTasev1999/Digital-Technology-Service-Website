import {SectionHeaderData} from '@/lib/definitions'

export default function SectionHeader({
    label,
    heading,
    description
}: SectionHeaderData){

    return(
        <div
            id="section-header"
            className="max-w-3xl mb-10"
        >
            {/* Label */}
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">{label}</div>
            {/* Heading */}
            <h2 className="text-balance text-3xl font-black md:text-4xl">{heading}</h2>
            {/* Description */}
            <p className="mt-3 text-base leading-relaxed">{description}</p>
        </div>
    )
}