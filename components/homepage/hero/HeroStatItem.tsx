import {HeroStatItemData} from '@/lib/definitions'

export default function HeroStatItem({
    id,
    stat,
    text

}: HeroStatItemData){

    return(
        <div className={`text-center md:px-8 ${id > 1 ? 'md:border-l md:border-slate-400' : ''}`}>
            <div className='text-4xl font-bold tabular-nums text-green-700 mb-3'>
                {stat}
            </div>
            <p className='text-slate-500 leading-relaxed max-w-xs mx-auto'>
                {text}
            </p>
        </div>
    )
}