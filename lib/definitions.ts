import { JSX } from "react/jsx-runtime"
import { Dispatch, SetStateAction } from "react"

export type NavList = {
    navItems: NavItems,
    btnPrimary: HeaderBtnData
    btnSecondary: HeaderBtnData,
    Icon: JSX.Element
}

type HeaderBtnData = {
    text: string,
    url: string
}

type NavItems = {
    id: number,
    name: string,
    url: string
}[]

export type ItemName = {
    item: string,
    url: string,
    onMobileClose?: () => void
}

export type ActionItems = {
    btnPrimary:HeaderBtnData,
    btnSecondary:HeaderBtnData,
    Icon?: JSX.Element,
    onMobileClose?: () => void
}

export type HamburgerData = {
    onMobileClick: () => void,
    mobileOpen: boolean
}

export type AppHeroData = {
    badgeText: string,
    heroHeading: HeroHeading,
    heroDescription: string,
    heroCta: HeroCtaButtons
    heroLogoCard: HeroLogoCard
    heroServiceCards: HeroCardInfo
    heroLongCard: HeroLongCard,
    heroStatistics: HeroStats
}

type HeroCtaButtons = {
    btnPrimary: BtnPrimary
    btnSecondary: BtnSecondary
}

type BtnPrimary = {
    heroBtn1: string,
    url: string,
    icon:React.FC
}

type BtnSecondary = {
    heroBtn2: string,
    url: string,
    icon:React.FC
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
    heroBtnPrimary: BtnPrimary,
    heroBtnSecondary: BtnSecondary
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

export type ContactCardProps = {
    contactCards: ContactCards
    contactForm: ContactForm
    quickContact: QuickContact,
    formInputs: FormInputs
}

type FormInputs = {
    nameInput: FormInputData,
    emailInput: FormInputData,
    phoneInput: FormInputData,
    serviceInput: FormInputData,
    messageInput: FormInputData
}

type FormInputData = {
    label: string,
    placeholder: string,
    name: string,
    type: string,
    value?: OptionValues 
    rows?: number
}

// ContactCardsType

type ContactCards = {
    contactCardsData: ContactCardsData
}

type ContactCardsData = {
    id: number,
    label: string,
    text: string,
    icon: React.FC
}[]

// ContactFormTypes

 type ContactForm = {
    contactFormData: ContactFormData
}

type ContactFormData = {
    heading:string,
    paragraph: string,
    btnPrimary: string
}

type ContactInputs = {
    id: number,
    label: string,
    placeholder: string,
    name: string,
    type?: string,
    value?: OptionValues,
    rows?: number
}[]

type OptionValues = {
    id: number,
    option: string
}[]

// QuickContactTypes

type QuickContact = {
    headingPrimary: string,
    paragraph: string,
    headingSecondary: string,
    listItems: ContactListItems
}

type ContactListItems = {
    id: number,
    icon: React.FC,
    text: string
}[]

export type ContactCardItemData = {
    label: string,
    text: string,
    Icon: JSX.Element
}

export type ContactsFormData = {
    heading: string,
    paragraph: string,
    nameInput:FormInputData,
    emailInput:FormInputData,
    phoneInput:FormInputData,
    serviceInput:FormInputData,
    messageInput:FormInputData
    btnPrimary: string
}

export type ContactInputData = {
    label: string,
    placeholder: string,
    name: string,
    type?: string,
    value?: OptionValues,
    rows?: number,
    formState: FormState
}

type FormState = {
    success?: string,
    errors?: {
        name: string | string[],
        email: string | string[],
        phone: string | string[],
        service: string | string[],
        message: string | string[]
    }
};

export type ContactQuickCardData = {
    headingPrimary: string,
    paragraph: string,
    headingSecondary: string,
    listItems: ContactQuickList
}

type ContactQuickList = {
    id: number,
    icon: React.FC,
    text: string
}[]

export type ContactQuickItemData = {
    text: string,
    Icon: JSX.Element
}