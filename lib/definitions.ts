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
    detailsText: string,
    url?: string
}[]

export type AppServiceCardData = {
    BadgeIcon: JSX.Element,
    ArrowIcon: JSX.Element,
    heading: string,
    text: string,
    detailsText:string,
    url?:string
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

export type HeroStatisticsData = {
    heroStatistics: HeroStatistics
}


type HeroStatistics = {
        id: number,
        text: string,
        stat: string
}[]

export type HeroStatItemData = {
        id: number,
        text: string,
        stat: string
}

export type LaptopServiceHero = {
    laptopIntroData: LaptopIntroData
}

type LaptopIntroData = {
    navLinks: NavLinks,
    navText: NavText,
    text: LaptopHeroText,
    btnPrimary: LaptopHeroBtnData,
    btnSecondary: LaptopHeroBtnData
}

type NavText = {
    home: string,
    service: string,
    serviceLaptop: string
}

type NavLinks = {
    homeUrl: string,
    serviceUrl: string,
    serviceLaptopUrl: string
}

type LaptopHeroText = {
    badge: string,
    heading: string,
    description: string
}
type LaptopHeroBtnData = {
    url: string,
    text: string
}

export type LaptopMiniNavData = {
    navLinks: NavLinks,
    navText: NavText
}

export type LaptopHeadingData = {
    badge: string,
    heading: string,
    description: string
}

export type LaptopCta = {
    btnPrimary: LaptopHeroBtnData,
    btnSecondary: LaptopHeroBtnData
}


export type LaptopServiceDescData = {
    laptopServiceDesc: LaptopServiceDesc
}

type LaptopServiceDesc = {
    heading: LaptopServiceDescHeading,
    description: LaptopServiceDescText
}

type LaptopServiceDescHeading = {
    label: string,
    headingText: string
}

type LaptopServiceDescText = {
    text: string
}

export type LaptopServiceDescLeft = {
    heading: LaptopServiceDescHeading
}

export type LaptopServiceDescRight = {
    description: LaptopServiceDescText
}

export type ServiceDetailsData = {
    laptopServiceDetailsL: LaptopServiceDetails,
    laptopServiceDetailsR: LaptopServiceDetails
}

type LaptopServiceDetails = {
    heading: string,
    listItems: LaptopServiceDetailsItems
}

type LaptopServiceDetailsItems = {
    id: number,
    text:string
}[]

export type LaptopServiceDetailsL = {
    laptopServiceDetailsL: LaptopServiceDetails
}

export type LaptopServiceDetailsItem = {
    text: string
}

export type LaptopServiceDetailsR = {
    laptopServiceDetailsR: LaptopServiceDetails
}