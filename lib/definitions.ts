import { JSX } from "react/jsx-runtime"

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
    heroServiceCards: HeroCardInfo
    heroLongCard: HeroCardInfo,
    heroStatistics: HeroStats
}

type HeroStats = {
    id: number,
    text: string,
    stat: string
} []

type HeroHeading = {
    txt1: string,
    txt2: string
}

type HeroLogoCard = {
    heading: string,
    text: string
}

type HeroCardInfo = {
    id: number
    status: string,
    service: string,
    serviceInfo: string
}[]

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

type HeroServiceInfo = {
    id: number
    status: string,
    service: string,
    serviceInfo: string
}

export type HeroServiceCardData = {
    heroServiceCard: HeroServiceInfo
}

export type HeroLongCardData = {
    heroLongCard: HeroCardInfo
}

export type AppServiceData = {
    label: string,
    heading: string,
    description: string,
    serviceCardData: ServiceCardData
}

type ServiceCardData = {
    id: number,
    badgeIcon: React.FC,
    arrowIcon: React.FC,
    heading: string,
    text: string,
    detailsText: string
}[]

export type AppServiceCardData = {
    BadgeIcon: JSX.Element,
    ArrowIcon: JSX.Element,
    heading: string,
    text: string,
    detailsText:string
}

export type SectionHeaderData = {
    label?: string,
    heading?: string,
    description?: string
}


export type ArrowIconData = {
    size?: string
}

export type ChevronData = {
    size?: string
}

export type SvgData = {
    size?: string
}