import {HeroStatItemData} from '@/lib/definitions'

export default function HeroStatItem({
    id,
    stat,
    text

}: HeroStatItemData){

    return(
        <div className={`text-center md:px-8 ${id > 1 ? 'md:border-l md:border-slate-400' : ''}`}>
            <div className='text-4xl font-extrabold text-green-700 mb-3'>
                {/* font-(family-name:"Rubik", "Segoe UI", system-ui, sans-serif") */}
                {stat}
            </div>
            <p className='text-slate-500 leading-relaxed max-w-xs mx-auto text-[16px]'>
                {text}
            </p>
        </div>
    )
}