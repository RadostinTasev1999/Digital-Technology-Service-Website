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

export type AppHeroData = {
    badgeText: string,
    heroHeading: HeroHeading,
    heroDescription: string,
    heroBtn1: string
    heroBtn2: string
    heroLogoCard: HeroLogoCard
    heroServiceCard: HeroCardInfo
    heroLongCard: HeroCardInfo
}

type HeroHeading = {
    txt1: string,
    txt2: string
}

type HeroLogoCard = {
    heading: string,
    text: string
}

type HeroCardInfo = {
    status: string,
    service: string,
    serviceInfo: string
}

export type HeroBadgeData = {
    badgeText: string
}

export type HeroHeadingData = {
    heroHeading: HeroHeading
}

export type HeroDescriptionText = {
    heroDescription:string
}

export type HeroCtaText = {
    heroBtn1: string,
    heroBtn2: string
}

export type HeroLogoCardData = {
    heroLogoCard: HeroLogoCard
}

export type HeroServiceCardData = {
    heroServiceCard: HeroCardInfo
}

export type HeroLongCardData = {
    heroLongCard: HeroCardInfo
}