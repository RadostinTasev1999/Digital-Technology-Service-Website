import Link from "next/link"
import { ItemName } from "@/lib/definitions"

export default function MobileListItems({
    item,
    url,
    onMobileClose
}: ItemName){

    return(
        <li onClick={onMobileClose} className="block  px-3 py-2.5 text-sm font-semibold text-slate-800 border-b border-slate-400 cursor:pointer hover:text-green-600">
            <Link href={url} >{item}</Link>
        </li>
    )
}