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
        detailsText: 'Научете повече',
        url: '/service/laptops'
    },
    {
        id:2,
        badgeIcon: DesktopIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на монитори',
        text: 'Хардуерни проблеми, прегряване, дисплеи, профилактика',
        detailsText: 'Научете повече',
        url: '/service/monitors'
    },
    {
        id:3,
        badgeIcon: TvIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на телевизори',
        text: 'Ремонт на LED / LCD телевизори',
        detailsText: 'Научете повече',
        url: '/service/television'
    },
    {
        id:4,
        badgeIcon: AudioIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на Аудио Техника',
        text: 'CD плеъри, класически усилватели, тонколони, Автомобилни говорители и субуфери',
        detailsText: 'Научете повече',
        url: '/service/audio'
    },
    {
        id:5,
        badgeIcon: VideoIcon,
        arrowIcon: ArrowIcon,
        heading: 'Ремонт на Видео Техника',
        text: 'DVD плейъри',
        detailsText: 'Научете повече',
        url: '/service/video'
    }
]

export const laptopIntroData = {
    navLinks: {
        homeUrl: '/',
        serviceUrl: '/service',
        serviceTypeUrl: '/service/laptops'

    },
    navText: {
        home: 'Начало',
        service: 'Услуги',
        serviceType: 'Ремонт на лаптоп'
    },
    text: {
        badge: 'Услуга',
        heading: 'Ремонт на лаптопи',
        description: 'Памтекс 94 ООД извършва ремонт и диагностика на лаптопи за частни клиенти и малки бизнеси в София. Работим върху хардуерни проблеми - батерия, охлаждане, дисплей, клавиатура. Преди извършване на ремонт, правим диагностика и информираме в детайли вариантите за ремонт.'
    },
    btnPrimary: {
        url: "/",
        text: 'Направи запитване'
    },
    btnSecondary: {
        url: "/",
        text: '0897818149'
    }
}

export const laptopServiceDesc = {
    heading: {
        label: 'Какво представлява услугата',
        headingText: 'Кога да изберете тази услуга'
    },
    description: {
        text: 'Бавен или прегряващ лаптоп, проблеми с батерията, повреден екран или клавиатура спират работата и забавят ежедневните задачи. Качествената диагностика спестява разходи и често връща устройството в нормално състояние.'
    }
}

export const laptopServiceDetailsL = {
    heading: "Какво включва услугата",
    listItems: [
        {
            id:1,
            text: 'Диагностика на хардуерни проблеми'
        },
        {
            id:2,
            text: 'Решаване на бавна работа и забивания'
        },
        {
            id:3,
            text: 'Почистване от прах и подмяна на термопаста'
        },
        {
            id:4,
            text: 'Подмяна на батерия и зарядно'
        },
        {
            id:5,
            text: 'Проверка на твърд диск и SSD'
        },
    ]
}

export const laptopServiceDetailsR = {
    heading: "За кого е подходящо",
    listItems: [
        {
            id:1,
            text: 'Частни клиенти с домашен или работен лаптоп'
        },
        {
            id:2,
            text: 'Офиси с фирмени лаптопи'
        },
        {
            id:3,
            text: 'Фрийлансъри и хора, работещи от вкъщи'
        },
        {
            id:4,
            text: 'Клиенти с по-стари лаптопи, нуждаещи се от ускорение'
        }
    ]
}

export const laptopServiceFaqHeading = {
    label: "Въпроси",
    heading: "Често задавани въпроси"
}

export const laptopFaqList = [
    {
        id:1,
        question: 'Колко струва диагностиката?',
        answer: 'Цената на диагностиката се уточнява предварително. Преди ремонт винаги ще получите ясна оферта.'
    },
    {
        id:2,
        question: 'Колко време отнема ремонтът?',
        answer: 'Зависи от проблема. Простите задачи се решават в рамките на деня, по-сложните могат да отнемат няколко дни заради резервни части.'
    },
    {
        id:3,
        question: 'Запазват ли се данните при преинсталация?',
        answer: 'Преди да започнем правим резервно копие на важните файлове, ако състоянието на устройството позволява.'
    },
    {
        id:4,
        question: 'Може ли да ускорите стар лаптоп?',
        answer: 'Често е възможно — със смяна на твърд диск със SSD, добавяне на памет и оптимизация на системата.'
    },
    {
        id:5,
        question: 'Имате ли гаранция на извършения ремонт?',
        answer: 'Да, на извършената работа и подменените части се дава гаранция, която уточняваме при предаването.'
    }
]

export const tvIntroData = {
    navLinks: {
        homeUrl: '/',
        serviceUrl: '/service',
        serviceTypeUrl: '/service/television'

    },
    navText: {
        home: 'Начало',
        service: 'Услуги',
        serviceType: 'Ремонт на телевизори'
    },
    text: {
        badge: 'Услуга',
        heading: 'Ремонт на телевизори',
        description: 'Памтекс 94 ООД извършва диагностика и ремонт на телевизори за частни клиенти и малки бизнеси в София. Работим върху проблеми с картина, звук, връзка с интернет, инсталиране на приложения и свързване с външни устройства като декодери, плейъри и звукови системи.'
    },
    btnPrimary: {
        url: "/",
        text: 'Направи запитване'
    },
    btnSecondary: {
        url: "/",
        text: '0897818149'
    }
}

export const tvServiceDesc = {
    heading: {
        label: 'Какво представлява услугата',
        headingText: 'Кога да изберете тази услуга'
    },
    description: {
        text: 'Телевизор без картина, без звук или с проблемен Smart TV прави устройството почти безполезно. В много случаи проблемът може да се реши с настройка, актуализация или подмяна на конкретен елемент.'
    }
}

export const tvServiceDetailsL = {
    heading: "Какво включва услугата",
    listItems: [
        {
            id:1,
            text: 'Диагностика на хардуерни и софтуерни проблеми'
        },
        {
            id:2,
            text: 'Проблеми с картина и звук'
        },
        {
            id:3,
            text: 'Помощ с интернет връзка и приложения на Smart TV'
        },
        {
            id:4,
            text: 'Настройка на канали и източници'
        },
        {
            id:5,
            text: 'Свързване с декодери, плейъри и звукови системи'
        },
    ]
}

export const tvServiceDetailsR = {
    heading: "За кого е подходящо",
    listItems: [
        {
            id:1,
            text: 'Частни клиенти у дома'
        },
        {
            id:2,
            text: 'Заведения с публични телевизори'
        },
        {
            id:3,
            text: 'Магазини и офиси с дисплеи и информационни екрани'
        },
        {
            id:4,
            text: 'Хора, които искат помощ при настройка на нов телевизор'
        }
    ]
}

export const tvServiceFaqHeading = {
    label: "Въпроси",
    heading: "Често задавани въпроси"
}

export const tvFaqList = [
    {
        id:1,
        question: 'Може ли да дойдете на адрес за телевизор?',
        answer: 'За определени случаи — да, особено когато телевизорът е стенен. Уточняваме предварително какво е възможно.'
    },
    {
        id:2,
        question: 'Какво правите, когато ремонтът е твърде скъп?',
        answer: 'Казваме ви ясно и съветваме подходящ нов модел според бюджета и нуждите.'
    },
    {
        id:3,
        question: 'Помагате ли при настройка на Smart TV?',
        answer: 'Да, настройваме интернет, приложения, акаунти и канали.'
    },
    {
        id:4,
        question: 'Свързвате ли външни устройства към телевизора?',
        answer: 'Да, свързваме декодери, плейъри, конзоли и звукови системи.'
    },
    {
        id:5,
        question: 'Колко време отнема диагностиката?',
        answer: 'Обикновено между час и два, в зависимост от проблема.'
    }
]