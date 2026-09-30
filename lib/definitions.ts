export type NavList = {
    navItems: NavItems,
    phone: string,
    text: string
}

type NavItems = {
    id: number,
    name: string
}[]

export type ItemName = {
    item: string
}

export type ActionItems = {
    phone: string,
    text: string
}

export type HamburgerData = {
    onMobileClick: () => void,
    mobileOpen: boolean
}