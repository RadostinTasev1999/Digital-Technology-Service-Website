import { HeroHeadingData } from "@/lib/definitions"

export default function HeroHeading({
    heroHeading
}: HeroHeadingData) {
    return(
        <h1
            className="tracking-[-1.27872px] text-[51.1488px] font-extrabold leading-[1.02]"
            // text-balance text-4xl font-black leading-[1.05] md:text-5xl
        >
            {heroHeading.txt1}&nbsp;
            <br />
            <span className="bg-linear-to-t from-lime-500 to-green-600 bg-clip-text text-transparent">
            {heroHeading.txt2}
            </span>
        </h1>
    )
}