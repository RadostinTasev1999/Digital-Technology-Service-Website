import {HamburgerData} from "@/lib/definitions"

export default function MobileHamburger({
    onMobileClick,
    mobileOpen
}: HamburgerData) {

    return (
        <button
            aria-label="Меню"
            onClick={onMobileClick}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/5 md:hidden"
        >
            {
                mobileOpen === true
                    ?
                    // X sign
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    :
                    // Three lines
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
            }
        </button> 
    )
}