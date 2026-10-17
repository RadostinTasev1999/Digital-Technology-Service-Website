import {ContactQuickItemData} from '@/lib/definitions'

export default function ContactQuickItem({
    text,
    Icon
}: ContactQuickItemData){

    return(
        <li className="flex gap-3 text-slate-700">
            <span className="mt-0.5 shrink-0 text-green-700">{Icon}</span>

            <span>
               {text}
            </span>
        </li>
    )
}