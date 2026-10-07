import DesktopIcon from '@/components/ui/DesktopIcon'
import LaptopIcon from '@/components/ui/LaptopIcon'
import TvIcon from '@/components/ui/TvIcon'
import ArrowIcon from '@/components/ui/ArrowIcon'
import AudioIcon from '@/components/ui/AudioIcon'
import VideoIcon from '@/components/ui/VideoIcon'


export const navItems = [
    {
        id:1,
        name: 'Начало'
    },
    {
        id:2,
        name: 'Услуги'
    },
    {
        id:3,
        name: 'Сервиз'
    },
    {
        id:4,
        name: 'Контакти'
    }
]

export const navActionData = {
    phone: '0897818149',
    text: 'Заяви оглед'
}

export const heroSectionData = {
    badgeText: "Памтекс 94 ООД София",
    heroHeading: {
        txt1:"Ремонт и Диагностика на извънгаранционна",
        txt2:"Аудио и Видео техника."
    },
    heroDescription: "Сервиз Памтекс 94 ООД извършва ремонт и диагностика на Телевизионна, Аудио и Видео техника в София.",
    heroBtn1:"Заяви посещение",
    heroBtn2:"Обади се: 0897818149",
    heroLogoCard:{
        heading:"Памтекс 94 ООД",
        text: "Ремонт на Хардуерна техника"
    },
    heroServiceCards: [
        {   
            id: 1,
            status: "Активна",
            service: "Аудио и Видео Техника",
            serviceInfo: "Диагностика и Ремонт"
        },
        {
            id:2,
            status: "Активна",
            service: "Телевизионна Техника",
            serviceInfo: "Диагностика и Ремонт"
        }

    ]
     ,
    heroLongCard: {
        status:"Активна",
        service: "Компютри и компютърни периферии",
        serviceInfo: "Диагностика и ремонт"
    }
}

export const heroStatistics = [
    {
        id:1,
        text: 'Години опит',
        stat:'30+'
    },
    {
        id:2,
        text: 'Обслужени клиенти',
        stat: '5 000+'
    },
    {
        id: 3,
        text: 'Извършени сервизни услуги',
        stat:'10 000+'
    },
    {
        id:4,
        text:'Доволни клиенти',
        stat: '98%'
    }
]

export const sectionHeadings = {
    serviceSection: {
        label: 'Услуги',
        heading: 'Основни услуги които предлагаме',
        description: 'Разгледайте услугите който извършваме'
    }
}

export const serviceCardData = [
    {
        id:1,
        badgeIcon: LaptopIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на лаптопи',
        text: 'Хардуерни проблеми, прегряване, дисплеи, профилактика',
        detailsText: 'Научете повече'
    },
    {
        id:2,
        badgeIcon: DesktopIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на монитори',
        text: 'Хардуерни проблеми, прегряване, дисплеи, профилактика',
        detailsText: 'Научете повече'
    },
    {
        id:3,
        badgeIcon: TvIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на телевизори',
        text: 'Ремонт на LED / LCD телевизори',
        detailsText: 'Научете повече'
    },
    {
        id:4,
        badgeIcon: AudioIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на Аудио Техника',
        text: 'CD плеъри, класически усилватели, тонколони, Автомобилни говорители и субуфери',
        detailsText: 'Научете повече'
    },
    {
        id:5,
        badgeIcon: VideoIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на Видео Техника',
        text: 'DVD плейъри',
        detailsText: 'Научете повече'
    }
]