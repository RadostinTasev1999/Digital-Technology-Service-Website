import Link from "next/link"
import { ItemName } from "@/lib/definitions"

export default function NavItem({
    item,
    url
}:ItemName) {

    return (
        <li>
            <Link href={url} className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-green-600">{item}</Link>
        </li>
    )
}