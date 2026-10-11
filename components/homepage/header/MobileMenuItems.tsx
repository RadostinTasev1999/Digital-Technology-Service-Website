import Link from "next/link"
import { ItemName } from "@/lib/definitions"

export default function MobileListItems({
    item,
    url
}: ItemName){

    return(
        <li className="block  px-3 py-2.5 text-sm font-semibold text-slate-800 border-b border-slate-400 hover:text-green-600">
            <Link href={url}>{item}</Link>
        </li>
    )
}