import {IconProp} from '@/lib/definitions'

export default function SlashIcon({
    className='size-4 text-slate-600'
}: IconProp) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 20.247 6-16.5" />
        </svg>
    )
}