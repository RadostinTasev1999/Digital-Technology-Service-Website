import { ContactQuickCardData } from "@/lib/definitions"
import ContactQuickItem from './ContactQuickItem'

export default function ContactQuickCard({
        headingPrimary,
        paragraph,
        headingSecondary,
        listItems
}: ContactQuickCardData){

    return(
        <div className="border-t border-slate-200 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <h3 className="text-xl font-bold text-slate-900">
                {headingPrimary}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
               {paragraph}
            </p>

            <h3 className="mt-8 text-xl font-bold text-slate-900">{headingSecondary}</h3>

            <div className="mt-4">
                <ul className="space-y-3 text-sm">
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