import {HeroServiceDescRight} from '@/lib/definitions'

export default function ServiceDescRight({
    description
}: HeroServiceDescRight) {

    return(
        <div className="max-w-3xl ">
            <p className="text-base leading-relaxed md:text-lg">
                {description.text}
            </p>
        </div>
    )
}