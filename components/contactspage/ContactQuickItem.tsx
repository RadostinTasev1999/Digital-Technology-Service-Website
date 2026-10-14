import {ContactQuickItemData} from '@/lib/definitions'

export default function ContactQuickItem({
    text,
    Icon
}: ContactQuickItemData){

    return(
        <li className="flex gap-2">
            {Icon}

            <span className="text-slate-800">
               {text}
            </span>
        </li>
    )
}