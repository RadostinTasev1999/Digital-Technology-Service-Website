import {ContactHeadingProps} from '@/lib/definitions'

export default function ContactCardHeading({
    heading,
    text
}: ContactHeadingProps) {

    return(
        <div className='max-w-2xl'>
            <h2 className='font-bold text-green-700 text-md uppercase tracking-[0.10em]'>
                {heading}
            </h2>
            <p className='mt-4 text-base leading-relaxed text-slate-600 sm:text-lg'>
                {text}
            </p>
        </div>
    )
}