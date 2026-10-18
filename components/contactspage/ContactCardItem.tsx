import Link from "next/link"

import { ContactCardItemProps } from '@/lib/definitions'

import CardItem from './CardItem'

export default function ContactCardItem({
    label,
    Icon,
    heading,
    text,
    url,
    urlText,
    UrlIcon,
    listItems
}: ContactCardItemProps){

    return(
        <div className='p-6 border rounded-2xl border-slate-300 backdrop-blur-md bg-white/30'>
                            {/* svg */}
                            {Icon}
                            {/* heading */}
                            <h3 className='mt-4 text-sm font-semibold'>
                                {heading}
                            </h3>
                            {/* ul for working hours */}
                            {
                                label === 'work_hours' && (
                                    <ul className='mt-1.5 space-y-0.5 text-sm'>
                                        {
                                           listItems && listItems.map((el) => (
                                                <CardItem
                                                    key={el.id}
                                                    text={el.text}
                                                    />
                                            ))
                                        }

                                    </ul>
                                )
                            }
                            {/* paragraph */}
                            {/* only for address and working hours card */}
                            {
                                label === 'address' || label === 'work_hours'
                                                ?
                                    <p className='mt-1.5 text-sm text-slate-500'>
                                        {text}
                                    </p>   
                                                :
                                                ""
                            }
                            

                            {/* Not needed for working hours card */}
                            {
                                label === 'address' && (
                                    <Link href={url || ""} className='mt-1.5 inline-flex gap-2 text-blue-700'>
                                        {urlText}
                                        {/* svg */}
                                        {UrlIcon}
                                    </Link>
                                )
                            
                            }
                            {
                                label !== 'address' && label !== 'work_hours' 
                                                ?
                                            <Link href={url || ""} className="mt-1.5 inline-flex gap-2 text-blue-700">
                                                {urlText}
                                            </Link>
                                                :
                                                ""

                            }

                        </div>
    )
}