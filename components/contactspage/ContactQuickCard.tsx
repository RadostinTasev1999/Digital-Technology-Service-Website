import { ContactQuickCardData } from "@/lib/definitions"
import ContactQuickItem from './ContactQuickItem'

export default function ContactQuickCard({
        headingPrimary,
        paragraph,
        headingSecondary,
        listItems
}: ContactQuickCardData){

    return(
        <div className='p-6 rounded-2xl border border-slate-400 shadow-sm md:p-8 backdrop-blur-md bg-white/30'>
            <h3 className='text-xl font-black'>
                {headingPrimary}
            </h3>
            <p className='mt-2 text-slate-600 text-sm'>
               {paragraph}
            </p>

            <h3 className='mt-6 text-xl font-black'>{headingSecondary}</h3>

            <div className='mt-3'>
                
                <ul className="space-y-3 text-sm">
                    {/* Address */}

                    {
                        listItems.map((el) => (
                            <ContactQuickItem
                                    key={el.id}
                                    text={el.text}
                                    Icon={<el.icon />}
                                    />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}