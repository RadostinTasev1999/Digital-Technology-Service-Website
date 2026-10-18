import { CardItemData } from '@/lib/definitions'

export default function CardItem({
    text
}: CardItemData) {

    return(
        <li>
            {text}
        </li>
    )
}