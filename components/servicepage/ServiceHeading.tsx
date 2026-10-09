import {HeroServiceHeading} from '@/lib/definitions'

export default function ServiceHeading({
    serviceBadge,
    serviceHeading,
    serviceDescription
}:HeroServiceHeading) {

    return(
        <>  
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-green-700 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                {serviceBadge}
            </div>

            <h1 className="max-w-4xl text-balance text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                {serviceHeading}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
                {serviceDescription}
            </p>
        </>
    )
}