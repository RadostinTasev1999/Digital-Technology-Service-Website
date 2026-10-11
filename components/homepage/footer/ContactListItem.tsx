import { FooterListData } from "@/lib/definitions"

export default function ContactListItem({
    text,
    Icon
}: FooterListData) {

    return(
        <li className="flex gap-2">
            <span className="text-green-600">
                {Icon}
            </span>
            <span className="text-slate-800">
                {text}
            </span>
        </li>
    )
}