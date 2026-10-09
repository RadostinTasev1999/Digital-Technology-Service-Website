import {HeroServiceDescLeft} from '@/lib/definitions'

export default function ServiceDescLeft({
    heading
}: HeroServiceDescLeft){

    return(
        <div className="max-w-3xl mb-10">
            {/* Category Heading */}
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                {heading.label}
            </div>
            <h2 className="text-balance text-3xl font-black md:text-4xl">
                {heading.headingText}
            </h2>

        </div>
    )
}