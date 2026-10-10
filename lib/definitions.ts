import { JSX } from "react/jsx-runtime"

export type NavList = {
    navItems: NavItems,
    phone: string,
    text: string
}

type NavItems = {
    id: number,
    name: string,
    url: string
}[]

export type ItemName = {
    item: string,
    url: string
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
    heroLongCard: HeroLongCard,
    heroStatistics: HeroStats
}

type HeroLongCard = {
    status: string,
    service: string,
    serviceInfo: string
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
    heroLongCard: HeroLongCard
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

export type ServiceHeroData = {
    heroData: HeroData
}

type HeroData = {
    navLinks: NavLinks,
    navText: NavText,
    text: HeroText,
    btnPrimary: HeroBtnData,
    btnSecondary: HeroBtnData
}

type NavText = {
    home: string,
    service: string,
    serviceType: string
}

type NavLinks = {
    homeUrl: string,
    serviceUrl: string,
    serviceTypeUrl: string
}

type HeroText = {
    badge: string,
    heading: string,
    description: string
}
type HeroBtnData = {
    url: string,
    text: string
}

export type HeroMiniNavData = {
    navLinks: NavLinks,
    navText: NavText
}

export type HeroServiceHeading = {
    serviceBadge: string,
    serviceHeading: string,
    serviceDescription: string
}

export type ServiceHeroCta = {
    btnPrimary: HeroBtnData,
    btnSecondary: HeroBtnData
}


export type ServiceDescData = {
    heroServiceDesc: HeroServiceDesc
}

type HeroServiceDesc = {
    heading: ServiceDescHeading,
    description: ServiceDescText
}

type ServiceDescHeading = {
    label: string,
    headingText: string
}

type ServiceDescText = {
    text: string
}

export type HeroServiceDescLeft = {
    heading: ServiceDescHeading
}

export type HeroServiceDescRight = {
    description: ServiceDescText
}

export type ServiceDetailsData = {
    serviceDetailsL: ServiceDetails,
    serviceDetailsR: ServiceDetails
}

type ServiceDetails = {
    heading: string,
    listItems: ServiceDetailsItems
}

type ServiceDetailsItems = {
    id: number,
    text:string
}[]

export type ServiceDetailsL = {
    serviceDetailsL: ServiceDetails
}

export type ServiceDetailsItem = {
    text: string
}

export type LaptopServiceDetailsR = {
    serviceDetailsR: ServiceDetails
}

export type ServiceFaqData = {
    label: string,
    heading: string,
    serviceFaqList: LaptopFaqList
}

export type FaqHeading = {
    label: string,
    heading: string
}

type LaptopFaqList = {
    id: number,
    question: string,
    answer: string
}[]

export type ServiceFaqItems = {
    question: string,
    answer: string
}

export type ContactsHeroData = {
    contactsIntroData: ContactsIntroData
}

type ContactsIntroData = {
    text: ContactsHeroText,
    btnPrimary: BtnData,
    btnSecondary: BtnData
}

type ContactsHeroText = {
    badge: string,
    heading: string,
    description: string
}

type BtnData = {
    url: string,
    text: string
}

export type AppFooterData = {
    footerData: FooterData
}

type FooterData = {
    aboutText: string,
    contactHeading: string,
    contactList: ContactList
}

type ContactList = {
    id: number,
    icon: React.FC,
    text: string
}[]

export type FooterListData = {
    text: string,
    Icon: JSX.Element
}